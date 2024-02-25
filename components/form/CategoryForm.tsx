"use client";

import { useEffect, useRef, useState } from "react";
import Select from "react-select";

import { iconFormOptions } from "../icons/icons";
import Loading from "@/app/loading";
import { Category, FormType } from "@/app/type";

type Options = {
  value?: number | string;
  label?: string | JSX.Element;
};

export default function CategoryForm(props: {
  type: FormType;
  data?: Category;
}) {
  const iconOptions = iconFormOptions;

  const [isMounted, setIsMounted] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState<Options>({
    value: undefined,
    label: undefined,
  });
  const nameInputRef = useRef<HTMLInputElement>(null);
  const upperLimitInputRef = useRef<HTMLInputElement>(null);

  const registrationHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    const enteredIcon = selectedIcon.value;
    const enteredName = nameInputRef.current!.value;
    const enteredUpperLimit = upperLimitInputRef.current!.value;

    /* validation */
    if (!enteredName || !enteredIcon || !enteredUpperLimit) {
      console.log("invalid Input");
      return;
    }

    const reqBody = {
      icon: enteredIcon,
      name: enteredName,
      upper_limit: +enteredUpperLimit, // :number
    };

    // API
    const endpoint = props.type === "CREATE" ? "/api/categories" : `/api/categories/${props.data?._id}`;
    const httpMethod = props.type === "CREATE" ? "POST" : "PATCH";
    const res = await fetch(endpoint, {
      method: httpMethod,
      body: JSON.stringify(reqBody),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const resData = res.json();
  };

  useEffect(() => setIsMounted(true), []);

  return (
    <form onSubmit={registrationHandler} className="text-black">
      {isMounted ? (
        <>
          <Select
            options={iconOptions}
            onChange={(value) => (value ? setSelectedIcon(value) : undefined)}
            defaultValue={{
              value: props.data?.icon,
              label: props.data?.iconJsx,
            }}
            className="w-64 my-2"
          />
          <div>
            <input
              type="text"
              id="name"
              placeholder="Category Name"
              aria-label="Category Name"
              defaultValue={props.data?.name}
              ref={nameInputRef}
            />
          </div>
          <div>
            <input
              type="number"
              id="upper_limit"
              placeholder="upper_limit"
              aria-label="upper_limit"
              defaultValue={props.data?.upper_limit}
              ref={upperLimitInputRef}
            />
          </div>
          <button className="p-2 m-2 bg-cyan-500 text-white rounded-lg">
            {props.type === "CREATE" ? "Register" : "Update"}
          </button>
        </>
      ) : (
        <Loading />
      )}
    </form>
  );
}
