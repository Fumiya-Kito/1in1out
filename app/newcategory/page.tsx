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

export default function SearchPage() {
  const iconOptions = [
    { value: "battery", label: <HiOutlineBattery0 color={"#000"} /> },
    { value: "desktop", label: <HiOutlineComputerDesktop color={"#000"} /> },
    { value: "cake", label: <HiOutlineCake color={"#000"} /> },
    { value: "pibow", label: <PiBowlFood color={"#000"} /> },
  ];

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
    if (
      !enteredName ||
      !enteredIcon ||
      !enteredUpperLimit
    ) {
      console.log("invalid Input");
      return;
    }

    const reqBody = {
      icon: enteredIcon,
      name: enteredName,
      upper_limit: +enteredUpperLimit, // :number
    };

    // POST
    const res = await fetch("/api/categories", {
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
            placeholder="Category Name"
            aria-label="Category Name"
            ref={nameInputRef}
          />
          <input
            type="number"
            id="upper_limit"
            placeholder="upper_limit"
            aria-label="upper_limit"
            ref={upperLimitInputRef}
          />
          <button className="p-2 m-2 bg-cyan-500 text-white rounded-lg">
            Register
          </button>
        </div>
      </form>
    </section>
  );
}
