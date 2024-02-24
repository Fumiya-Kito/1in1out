"use client";

import { Category, Mono } from "@/app/type";
import { useState, useRef, useEffect } from "react";
import { FiEdit } from "react-icons/fi";
import { iconFormOptions } from "../icons/icons";
import MonoForm from "../form/MonoForm";

type Options = {
  value?: number | string;
  label?: string | JSX.Element;
};

export function MonoDetail({ item, categoryList }: { item: Mono; categoryList: Category[] }) {
  const [isEdit, setIsEdit] = useState(false);

  const editHandler = () => {
    setIsEdit((prevBool) => !prevBool);
  };
  const saveHandler = () => {
    setIsEdit((prevBool) => !prevBool);
  };

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
        <MonoForm type="UPDATE" data={item} categoryList={categoryList}/>
      )}
    </div>
  );
}
