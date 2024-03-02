"use client";

import { Category, Mono } from "@/app/type";
import MonoForm from "@/components/form/MonoForm";
import DeleteForm from "@/components/form/DeleteForm";

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

      <MonoForm type="UPDATE" data={item} categoryList={categoryList} categoryId={item.category_id.toString()}/>
      <DeleteForm model={item} pk={item._id} />
    </>
  );
}
