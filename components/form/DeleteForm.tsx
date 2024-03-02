"use client";

import { useState, useTransition } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

import { isMono, isCategory } from "@/app/_lib/type/type-check";
import Modal from "../modals/Modal";
import { useRouter } from "next/navigation";

export default function DeleteForm<T extends { name: string }>({
  model,
  pk,
}: {
  model: T;
  pk: string;
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);

  const submitHandler = async () => {
    // API
    const endpoint = isMono(model)
      ? `/api/monos/${pk}`
      : isCategory(model)
      ? `/api/categories/${pk}`
      : undefined;

    if (!endpoint) return false;

    const res = await fetch(endpoint, { method: "DELETE" });

    const resData = await res.json();

    startTransition(() => {
      setIsOpen((prevState) => !prevState);
      router.back();
      router.refresh();
    });

    return true;
  };

  // コンテンツ定義
  const title = isMono(model)
    ? `モノ削除`
    : isCategory(model)
    ? "カテゴリー削除"
    : "";

  const btnLabel = "DELETE";
  const recordName = model.name;

  const bodyContent = (
    <>
      <p>{recordName}を削除してもよろしいですか?</p>
      {isCategory(model) && <p>※カテゴリーが{recordName}であるモノはすべて削除されます</p>}
    </>
  );

  return (
    <>
      {isOpen ? (
        <Modal
          isOpen={isOpen}
          title={title}
          label={btnLabel}
          onClose={() => {
            setIsOpen((prevState) => !prevState);
          }}
          onSubmit={submitHandler}
          body={bodyContent}
        />
      ) : (
        <button
          className="p-1 m-1 bg-cyan-500 text-black rounded-lg"
          onClick={() => setIsOpen((prevState) => !prevState)}
        >
          <RiDeleteBin6Line />
        </button>
      )}
    </>
  );
}
