"use client";

import { useEffect, useRef, useState } from "react";
import Select from "react-select";
import { iconFormOptions } from "../icons/icons";

import { Category, FormType, Mono } from "@/app/type";
import Loading from "@/app/loading";

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
  const categoryOptions: Options[] = props.categoryList.map(category => {
    return { value: category._id, label: category.name}
  });

  const [isMounted, setIsMounted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Options>({
    value: undefined,
    label: undefined,
  });
  const [selectedIcon, setSelectedIcon] = useState<Options>({
    value: undefined,
    label: undefined,
  });
  const nameInputRef = useRef<HTMLInputElement>(null);

  const registrationHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    const enteredCategoryId = selectedCategory.value;
    const enteredIcon = selectedIcon.value;
    const enteredName = nameInputRef.current!.value;

    /* validation */
    if (
      !enteredName ||
      !enteredIcon ||
      (!enteredCategoryId && enteredCategoryId !== 0)
    ) {
      console.log("invalid Input");
      return;
    }

    const reqBody = {
      category_id: enteredCategoryId,
      icon: enteredIcon,
      name: enteredName,
    };

    // POST
    const res = await fetch("/api/monos", {
      method: props.type === "CREATE" ? "POST" : "PATCH",
      body: JSON.stringify(reqBody),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = res.json();
  };

  useEffect(() => setIsMounted(true), []);

  return (
    <form onSubmit={registrationHandler}>
      <div>
        {isMounted ? (
          <>
            <label>Category</label>
            <Select
              options={categoryOptions}
              onChange={(value) =>
                value ? setSelectedCategory(value) : undefined
              }
              // defaultValue={props.categoryIcon ? {
              //   value: props.categoryIcon!,
              //   label: getIconByString(props.categoryIcon)!,
              // } : undefined}
              placeholder="Select Category..."
              className="w-64 my-2 text-black"
              />

            <label>Mono Icon</label>
            <Select
              options={iconFormOptions}
              onChange={(value) => (value ? setSelectedIcon(value) : undefined)}
              defaultValue={{
                value: props.data?.icon,
                label: props.data?.iconJsx,
              }}
              className="w-64 my-2 text-black"
              />
            <input
              type="text"
              id="name"
              placeholder="Mono Name"
              aria-label="Mono Name"
              ref={nameInputRef}
              defaultValue={props.data?.name}
              className="text-black"
            />
            <button className="p-2 m-2 bg-cyan-500 text-white rounded-lg">
              {props.type === "CREATE" ? "Register" : "UPDATE"}
            </button>
          </>
        ) : (
          <Loading />
        )}
      </div>
    </form>
  );
}
