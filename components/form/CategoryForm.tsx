"use client";

import { useEffect, useRef, useState, useTransition } from "react";
import Select from "react-select";
import { useRouter } from "next/navigation";
import { iconFormOptions } from "../icons/icons";
import Loading from "@/app/loading";
import { Category, FormType } from "@/app/type";
import Modal from "../modals/Modal";
import { FiEdit } from "react-icons/fi";
import { GoPlusCircle } from "react-icons/go";

type Options = {
  value?: number | string;
  label?: string | JSX.Element;
};

export default function CategoryForm(props: {
  type: FormType;
  data?: Category;
}) {
  const iconOptions = iconFormOptions;

  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState<Options>({
    value: props.data?.icon,
    label: props.data?.iconJsx,
  });
  const nameInputRef = useRef<HTMLInputElement>(null);
  const upperLimitInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = async () => {
    const enteredIcon = selectedIcon.value;
    const enteredName = nameInputRef.current?.value;
    const enteredUpperLimit = upperLimitInputRef.current?.value;

    /* validation */
    if (!enteredName || !enteredIcon || !enteredUpperLimit) {
      console.log("invalid Input");
      return false;
    }
    if (+enteredUpperLimit > 999) {
      upperLimitInputRef.current.value = "999";
      return false;
    }

    const reqBody = {
      icon: enteredIcon,
      name: enteredName,
      upper_limit: +enteredUpperLimit, // :number
    };

    // API
    const endpoint =
      props.type === "CREATE"
        ? "/api/categories"
        : `/api/categories/${props.data?._id}`;
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
      router.refresh();
      setIsOpen((prevState) => !prevState);
    });
    return true;
  };

  useEffect(() => setIsMounted(true), []);

  const bodyContent = (
    <>
      <label>Category Icon</label>
      <Select
        options={iconOptions}
        onChange={(value) => (value ? setSelectedIcon(value) : undefined)}
        defaultValue={{
          value: props.data?.icon,
          label: props.data?.iconJsx,
        }}
        className="w-64 my-2"
      />

      <label>Category Name</label>
      <div>
        <input
          type="text"
          id="name"
          placeholder="e.g. Cloth"
          aria-label="Category Name"
          defaultValue={props.data?.name}
          ref={nameInputRef}
          maxLength={25}
          className="p-2 my-1 text-black border w-64 rounded-md"
        />
      </div>

      <label>Upper Limit</label>
      <div>
        <input
          type="number"
          id="upper_limit"
          placeholder="12"
          aria-label="upper_limit"
          defaultValue={props.data?.upper_limit}
          ref={upperLimitInputRef}
          max={999}
          maxLength={3}
          className="p-2 my-1 text-black border w-64 rounded-md"
        />
      </div>
    </>
  );

  return (
    <>
      {isOpen ? (
        <>
          {isMounted ? (
            <Modal
              isOpen={isOpen}
              title={
                props.type === "CREATE" ? "カテゴリ新規作成" : "カテゴリ編集"
              }
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
        <button onClick={() => setIsOpen((prevState) => !prevState)}>
          {props.type === "CREATE" ? (
            <div className="flex sm:w-48 p-4 m-2 bg-cyan-500 text-black rounded-full sm:rounded-lg">
              <div className="flex-none sm:w-8">
                <GoPlusCircle size={24} />
              </div>
              <div className="flex-auto text-center hidden sm:block">
                New Category
              </div>
            </div>
          ) : (
            <div className="p-2 my-0.5 hover:bg-green-700 hover:opacity-90 rounded-lg">
              <FiEdit size={18} />
            </div>
          )}
        </button>
      )}
    </>
  );
}
