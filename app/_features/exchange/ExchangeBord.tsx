"use client";

import { Category, Mono } from "@/app/type";
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
  useTransition,
} from "react";
import { LuRefreshCw, LuRefreshCwOff } from "react-icons/lu";
import { motion } from "framer-motion";
import { LuSave } from "react-icons/lu";
import Loading from "@/app/loading";
import { useRouter } from "next/navigation";
import { FiTrash } from "react-icons/fi";
import { FaFire } from "react-icons/fa6";

export default function ExchangeBord({
  allMonoList,
  allCategoryList,
}: {
  allMonoList: Mono[];
  allCategoryList: Category[];
}) {
  const [cards, setCards] = useState(allMonoList);
  const [monoIdsInTrash, setMonoIdsInTrash] = useState<string[]>([]);
  const [initCards, setInitCards] = useState(allMonoList);
  const [isCardsChanged, setIsCardChanged] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isDragging, setIsDragging] = useState(false);

  const wishlist = allCategoryList.filter((ctg) => ctg._id === 1);
  const inventory = allCategoryList.filter((ctg) => ctg._id !== 1);

  const handleSaveBtnClick = async () => {
    const cardsDifference = cards.reduce((result: Mono[], curItem: Mono) => {
      const changeFound = initCards.find(
        (initMono) =>
          initMono._id === curItem._id &&
          initMono.category_id !== curItem.category_id
      );
      if (changeFound) result.push(curItem);
      return result;
    }, []);

    setLoading(true);
    // 差分を更新・削除
    if (cardsDifference.length !== 0 || monoIdsInTrash.length !== 0) {
      await fetch("/api/monos", {
        method: "PATCH",
        body: JSON.stringify({
          updateMonos: cardsDifference,
          deleteIds: monoIdsInTrash,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
    startTransition(() => {
      router.refresh();
      setInitCards(cards);
      setIsCardChanged(false);
      setMonoIdsInTrash([]);
      setLoading(false);
    });
  };

  useEffect(() => {
    // 変更を検知
    if (cards !== undefined) {
      const isChanged = JSON.stringify(cards) === JSON.stringify(initCards);
      setIsCardChanged(!isChanged);
    }
  }, [cards, allMonoList]);

  return (
    <>
      <div className="w-full h-1/2 mb-4">
        {Array.isArray(wishlist) && wishlist[0] && (
          <CategoryColumn
            key={wishlist[0]._id}
            categoryId={wishlist[0]._id}
            title={wishlist[0].name}
            upperLimit={wishlist[0].upper_limit}
            cards={cards}
            setCards={setCards}
            setIsDragging={setIsDragging}
            isWishList={true}
          />
        )}
      </div>
      <div className="w-full h-1/2 flex gap-3 overflow-scroll">
        {inventory.map((category) => (
          <CategoryColumn
            key={category._id}
            categoryId={category._id}
            title={category.name}
            upperLimit={category.upper_limit}
            cards={cards}
            setCards={setCards}
            setIsDragging={setIsDragging}
          />
        ))}
      </div>
      {isCardsChanged ? (
        <div className="fixed right-2 bottom-2 sm:right-6 sm:bottom-6 shadow-md">
          <button onClick={handleSaveBtnClick}>
            {!loading ? (
              <div className="flex sm:w-48 h-14 p-4 m-2 bg-cyan-500 text-black rounded-full sm:rounded-lg">
                <>
                  <LuSave size={24} />
                  <p className="flex-auto text text-center hidden sm:block">
                    Save Changes
                  </p>
                </>
              </div>
            ) : (
              <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-neutral-800/50 cursor-wait">
                <Loading size={12} />
              </div>
            )}
          </button>
        </div>
      ) : undefined}

      {isDragging && (
        <div className="fixed left-2 bottom-4 sm:left-6 sm:bottom-8 shadow-md">
          <Trashcan
            setCards={setCards}
            setIsDragging={setIsDragging}
            setMonoIdsInTrash={setMonoIdsInTrash}
          />
        </div>
      )}
    </>
  );
}

const Trashcan = ({
  setCards,
  setIsDragging,
  setMonoIdsInTrash,
}: {
  setCards: Dispatch<SetStateAction<Mono[]>>;
  setIsDragging: Dispatch<SetStateAction<boolean>>;
  setMonoIdsInTrash: Dispatch<SetStateAction<string[]>>;
}) => {
  const [active, setActive] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setActive(true);
  };

  const handleDragLeave = () => {
    setActive(false);
  };

  const handleDragEnd = (e: React.DragEvent) => {
    const cardId = e.dataTransfer.getData("monoId");

    setCards((prev) => prev.filter((mono) => mono._id !== cardId));
    setMonoIdsInTrash((prev) => [...prev, cardId]);
    setActive(false);
    setIsDragging(false);
  };

  return (
    <div
      onDrop={handleDragEnd}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      className={`grid h-14 w-14 md:h-32 md:w-32 shrink-0 place-content-center rounded border text-3xl ${
        active
          ? "border-red-800 bg-red-800/20 text-red-500"
          : "border-neutral-500 bg-neutral-500/20 text-neutral-500"
      }`}
    >
      {active ? <FaFire className="animate-bounce" /> : <FiTrash />}
    </div>
  );
};

function CategoryColumn({
  title = "Nameless",
  headingColor,
  categoryId,
  upperLimit,
  cards,
  setCards,
  setIsDragging,
  isWishList = false,
}: {
  title?: string;
  headingColor?: string;
  categoryId: number;
  upperLimit: number;
  cards: Mono[];
  setCards: Dispatch<SetStateAction<Mono[]>>;
  setIsDragging: Dispatch<SetStateAction<boolean>>;
  isWishList?: boolean;
}) {
  /** Data */
  const filteredCards = cards.filter((card) => card.category_id === categoryId);
  /** States */
  const isFull = filteredCards.length / upperLimit >= 1;
  const [active, setActive] = useState(false);

  /** Handlers */
  const handleDragStart = (e: React.DragEvent, card: Mono) => {
    e.dataTransfer.setData("monoId", card._id);
    setIsDragging(true);
  };
  const handleDragEnd = (e: React.DragEvent) => {
    setIsDragging(false);
  };
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    if (isFull) {
      e.dataTransfer.dropEffect = "none";
      e.dataTransfer.effectAllowed = "none";
      return;
    }

    highlightIndicator(e);
    setActive(true);
  };

  const highlightIndicator = (e: React.DragEvent) => {
    const indicators = getIndicators();
    clearHighlights(indicators);
    const el = getNearestIndicator(e, indicators);
    el.element.style.opacity = "1";
  };

  const getIndicators = () => {
    return Array.from(
      document.querySelectorAll(
        `[data-category="${categoryId}"]`
      ) as NodeListOf<HTMLElement>
    );
  };

  const clearHighlights = (els?: HTMLElement[]) => {
    const indicators = els || getIndicators();
    indicators.forEach((i) => (i.style.opacity = "0"));
  };

  const getNearestIndicator = (
    e: React.DragEvent,
    indicators: HTMLElement[]
  ) => {
    const DISTANCE_OFFSET = 50;
    const el = indicators.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = e.clientY - (box.top + DISTANCE_OFFSET);
        if (closest.offset < offset && offset < 0) {
          return { offset: offset, element: child };
        } else {
          return closest;
        }
      },
      {
        offset: Number.NEGATIVE_INFINITY,
        element: indicators[indicators.length - 1],
      }
    );
    return el;
  };

  const handleDragLeave = () => {
    setActive(false);
    clearHighlights();
  };
  const handleDrop = (e: React.DragEvent) => {
    setActive(false);
    clearHighlights();
    setIsDragging(false);

    const cardId = e.dataTransfer.getData("monoId");
    const indicators = getIndicators();
    const { element } = getNearestIndicator(e, indicators);
    const before = element.dataset.before || "-1";

    if (before !== cardId) {
      let copy = [...cards];

      let cardToTransfer = copy.find((c) => c._id === cardId);
      if (!cardToTransfer) return;
      // カテゴリ変更
      cardToTransfer = { ...cardToTransfer, category_id: categoryId };
      // 移動対象を削除
      copy = copy.filter((c) => c._id !== cardId);

      const moveToBack = before === "-1";
      if (moveToBack) {
        copy.push(cardToTransfer);
      } else {
        const insertAtIndex = copy.findIndex((el) => el._id === before);
        if (insertAtIndex === undefined) return;

        copy.splice(insertAtIndex, 0, cardToTransfer);
      }
      setCards(copy);
    }
  };

  return (
    <div
      className={`${
        isWishList
          ? "w-full rounded-lg shrink-0 bg-neutral-900 overflow-scroll flex flex-col h-full sm:items-center sm:justify-between"
          : "w-56 rounded-lg shrink-0 bg-neutral-900 overflow-scroll flex flex-col h-full"
      } `}
    >
      <div
        className={`flex items-center justify-between w-full p-2 ${
          isWishList && "sm:w-4/5 md:w-2/3 lg:w-1/2 xl:w-2/5 2xl:w-1/3"
        }`}
      >
        <div className="min-w-0">
          <h2 className="truncate">{title}</h2>
        </div>
        <span className="rounded">{`${filteredCards.length}/${upperLimit}`}</span>
      </div>
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onDragEnd={handleDragEnd}
        className={`m-0 transition-colors flex-1 w-full ${
          isWishList && "sm:w-4/5 md:w-2/3 lg:w-1/2 xl:w-2/5 2xl:w-1/3"
        } ${active ? "bg-neutral-800/50" : "bg-neutral-800/0"}`}
      >
        <AddCard category={categoryId} setCards={setCards} isFull={isFull} />
        {filteredCards.map((card) => (
          <DragableCard
            key={card._id}
            {...card}
            handleDragStart={handleDragStart}
          />
        ))}
        <DropIndicator beforeId={"-1"} category={categoryId} />
      </div>
    </div>
  );
}

function DragableCard({
  _id,
  name,
  iconJsx,
  category_id,
  category_name,
  handleDragStart,
}: Mono & { handleDragStart: Function }) {
  return (
    <div>
      <DropIndicator beforeId={_id} category={category_id} />
      <motion.div
        layout
        layoutId={_id}
        draggable
        onDragStart={(e) => handleDragStart(e, { _id, name, category_id })}
        className={`flex cursor-grab rounded border border-neutral-700 bg-neutral-800 p-3 active:cursor-grabbing select-none`}
      >
        <div className="flex-none w-10">{iconJsx}</div>
        <div className="flex-auto min-w-0">
          <p className="truncate">{name}</p>
        </div>
      </motion.div>
    </div>
  );
}

function DropIndicator({
  beforeId,
  category,
}: {
  beforeId?: string;
  category: number;
}) {
  return (
    <div
      data-before={beforeId || "-1"}
      data-category={category}
      className="h-0.5 w-full bg-violet-400 opacity-0"
    />
  );
}

function AddCard({
  category,
  setCards,
  isFull,
}: {
  category: number;
  setCards: Dispatch<SetStateAction<Mono[]>>;
  isFull: boolean;
}) {
  // const [available, setAvailable] = useState(isFull);

  return (
    <>
      {isFull ? (
        <motion.div className="flex w-full items-center gap-1.5 px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-50 select-none">
          <span>Not Available</span>
          <LuRefreshCwOff />
        </motion.div>
      ) : (
        <motion.div className="flex w-full items-center gap-1.5 px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-50 select-none">
          <span>Available</span>
          <LuRefreshCw />
        </motion.div>
      )}
    </>
  );
}
