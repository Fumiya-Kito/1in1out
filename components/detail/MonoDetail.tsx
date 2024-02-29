"use client";

import { Category, Mono } from "@/app/type";
import { useState, useRef, useEffect } from "react";
import { FiEdit } from "react-icons/fi";
import { iconFormOptions } from "../icons/icons";
import MonoForm from "../form/MonoForm";
import DeleteForm from "../form/DeleteForm";

type Options = {
  value?: number | string;
  label?: string | JSX.Element;
};

export function MonoDetail({
  item,
  categoryList,
}: {
  item: Mono;
  categoryList: Category[];
}) {

  return (
    <>
      <div>{item.iconJsx}</div>
      <div>
        <h2>{item.name}</h2>
        <p>{item.category_id}</p>
        <p>{item.reason}</p>
      </div>

      <MonoForm type="UPDATE" data={item} categoryList={categoryList} />
      <DeleteForm model={item} pk={item._id} />
    </>
  );
}
