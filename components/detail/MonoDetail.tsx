"use client";

import { Mono } from "@/app/type";
import { useState, useRef, useEffect } from "react";
import { FiEdit } from "react-icons/fi";
import Select from "react-select";
import { iconFormOptions } from "../icons/icons";

type Options = {
  value?: number | string;
  label?: string | JSX.Element;
};

export function MonoDetail({ item }: { item: Mono }) {
  const [isEdit, setIsEdit] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState<Options>({
    value: undefined,
    label: undefined,
  });
  const defaultIcon = iconFormOptions.find(
    (iconObj) => iconObj.value === item.icon
  );
  // Refs
  const nameInputRef = useRef<HTMLInputElement>(null);
  const categoryIdInputRef = useRef<HTMLInputElement>(null);
  const reasonInputRef = useRef<HTMLInputElement>(null);

  const editHandler = () => {
    setIsEdit((prevBool) => !prevBool);
  };
  const saveHandler = () => {
    setIsEdit((prevBool) => !prevBool);
  };

  useEffect(() => setIsMounted(true));

  return (
    <div>
      {!isEdit ? (
        <>
          <div>{item.iconJsx}</div>
          <div>
            <h2>{item.name}</h2>
            <p>{item.category_id}: Detail</p>
            <p>{item.reason}</p>
            <div onClick={editHandler}>
              <FiEdit />
            </div>
          </div>
        </>
      ) : (
        <form onSubmit={saveHandler}>
          <>
            <Select
              options={iconFormOptions}
              defaultValue={defaultIcon}
              onChange={(value) => (value ? setSelectedIcon(value) : undefined)}
              className="w-64 my-2"
            />
          </>
          <div>
            <input
              type="text"
              id="name"
              ref={nameInputRef}
              defaultValue={item.name}
              className="text-black my-1"
            />
          </div>
          <div>
            <input
              type="text"
              id="category_id"
              inputMode="numeric"
              ref={categoryIdInputRef}
              defaultValue={item.category_id}
              className="text-black my-1"
            />
          </div>
          <div>
            <input
              type="text"
              id="reason"
              ref={reasonInputRef}
              defaultValue={item.reason}
              className="text-black my-1"
            />
          </div>
          <div>
            <button>Save Mono</button>
          </div>
        </form>
      )}
    </div>
  );
}
