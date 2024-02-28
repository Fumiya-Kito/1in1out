"use client";

import { useEffect, useRef, useState, useTransition } from "react";
import { FiEdit } from "react-icons/fi";

import Select from "react-select";
import { iconFormOptions } from "../icons/icons";

import { Category, FormType, Mono } from "@/app/type";
import Loading from "@/app/loading";
import Modal from "../modals/Modal";
import { useRouter } from "next/navigation";

type Options = {
  value?: number | string;
  label?: string | JSX.Element;
};

export default function MonoForm(props: {
  type: FormType;
  categoryList: Category[];
  data?: Mono;
  categoryIcon?: string;
}) {
  const categoryOptions: Options[] = props.categoryList.map((category) => {
    return { value: category._id, label: category.name };
  });

  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const defaultCategory = categoryOptions.find(
    (category) => category.value === props.data?.category_id
  );
  const [selectedCategory, setSelectedCategory] = useState<Options>({
    value: defaultCategory?.value,
    label: defaultCategory?.label,
  });
  const [selectedIcon, setSelectedIcon] = useState<Options>({
    value: props.data?.icon,
    label: props.data?.iconJsx,
  });
  const nameInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = async () => {
    // event.preventDefault();
    const enteredCategoryId = selectedCategory.value;
    const enteredIcon = selectedIcon.value;
    const enteredName = nameInputRef.current!.value;

    /* validation */
    if (
      !enteredName ||
      !enteredIcon ||
      (!enteredCategoryId && enteredCategoryId !== 0)
    ) {
      console.log("invalid Input", enteredName, enteredIcon, enteredCategoryId);
      return false;
    }

    const reqBody = {
      category_id: enteredCategoryId,
      icon: enteredIcon,
      name: enteredName,
    };

    /** TODO: libに持って行く、初期値設定reactselect, cache, 完了通知 */
    // API
    const endpoint =
      props.type === "CREATE" ? "/api/monos" : `/api/monos/${props.data?._id}`;
    const httpMethod = props.type === "CREATE" ? "POST" : "PATCH";
    const res = await fetch(endpoint, {
      method: httpMethod,
      body: JSON.stringify(reqBody),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const resData = await res.json();

    startTransition(() => {
      setIsOpen((prevState) => !prevState);
      router.refresh();
    });

    return true;
  };

  const bodyContent = (
    <>
      <label>Category</label>
      <Select
        options={categoryOptions}
        onChange={(value) => (value ? setSelectedCategory(value) : undefined)}
        defaultValue={defaultCategory}
        placeholder="Select Category..."
        className="w-64 my-1 text-black"
      />

      <label>Mono Icon</label>
      <Select
        options={iconFormOptions}
        onChange={(value) => (value ? setSelectedIcon(value) : undefined)}
        defaultValue={{
          value: props.data?.icon,
          label: props.data?.iconJsx,
        }}
        className="w-64 my-1 text-black"
      />

      <label>Mono Name</label>
      <div>
        <input
          type="text"
          id="name"
          placeholder="Mono Name"
          aria-label="Mono Name"
          ref={nameInputRef}
          defaultValue={props.data?.name}
          className="p-2 my-1 text-black border w-64 rounded-md"
        />
      </div>
    </>
  );

  // effect
  useEffect(() => setIsMounted(true), []);

  return (
    <>
      {isOpen ? (
        <>
          {isMounted ? (
            <Modal
            isOpen={isOpen}
            title={props.type === "CREATE" ? "モノ新規作成" : "モノ編集"}
              label={props.type === "CREATE" ? "REGISTER" : "UPDATE"}
              onClose={() => {
                setIsOpen((prevState) => !prevState);
              }}
              onSubmit={submitHandler}
              body={bodyContent}
            />
          ) : (
            <Loading />
          )}
        </>
      ) : (
        <button
          className="p-1 m-1 bg-cyan-500 text-black rounded-lg"
          onClick={() => setIsOpen((prevState) => !prevState)}
        >
          {props.type === "CREATE" ? "モノ新規作成" : <FiEdit />}
        </button>
      )}
    </>
  );
}
