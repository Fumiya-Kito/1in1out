"use client";

import { useEffect, useRef, useState } from "react";
import Select from "react-select";

import {
  HiOutlineBattery0,
  HiOutlineComputerDesktop,
  HiOutlineCake,
} from "react-icons/hi2";
import { PiBowlFood } from "react-icons/pi";

type Options = {
  value?: number | string;
  label?: string | JSX.Element;
};

export default function NewMonoPage() {
  const categoryOptions = [
    { value: 0, label: "wishlist" },
    { value: 1, label: "Category1" },
    { value: 2, label: "Category2" },
  ];

  const iconOptions = [
    { value: "battery", label: <HiOutlineBattery0 color={"#000"} /> },
    { value: "desktop", label: <HiOutlineComputerDesktop color={"#000"} /> },
    { value: "cake", label: <HiOutlineCake color={"#000"} /> },
    { value: "pibow", label: <PiBowlFood color={"#000"} /> },
  ];

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
      method: "POST",
      body: JSON.stringify(reqBody),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = res.json();
    console.log("from client: ResData = ", data);
  };

  useEffect(() => setIsMounted(true), []);

  return (
    <section>
      <h2>New Mono Page</h2>
      <form onSubmit={registrationHandler}>
        <div className="text-black">
          {isMounted ? (
            <>
              <Select
                options={categoryOptions}
                onChange={(value) =>
                  value ? setSelectedCategory(value) : undefined
                }
                className="w-64 my-2"
              />
              <Select
                options={iconOptions}
                onChange={(value) =>
                  value ? setSelectedIcon(value) : undefined
                }
                className="w-64 my-2"
              />
            </>
          ) : null}

          <input
            type="text"
            id="name"
            placeholder="Mono Name"
            aria-label="Mono Name"
            ref={nameInputRef}
          />
          <button className="p-2 m-2 bg-cyan-500 text-white rounded-lg">
            Register
          </button>
        </div>
      </form>
    </section>
  );
}
