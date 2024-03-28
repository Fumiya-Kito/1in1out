"use client";

import { Mono, Category } from "@/app/type";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from "react";
import MonoForm from "@/components/form/MonoForm";
import DeleteForm from "@/components/form/DeleteForm";

export default function CategoryCard({
  model,
  formProps,
}: {
  model: Mono;
  formProps: { categoryList: Category[]; categoryId: string };
}) {
  const [isOpen, setIsOpen] = useState(false);
  const clickHandler = () => setIsOpen((prev) => !prev);

  return (
    <>
      <div
        onClick={clickHandler}
        className="flex items-center px-2 py-3 bg-neutral-900 hover:bg-neutral-600/50 cursor-pointer"
      >
        <div className="flex-none w-10">{model.iconJsx}</div>
        <div className="flex-auto text-base min-w-0">
          <p className="truncate">{model.name}</p>
        </div>
        <div className="flex-none w-8">
          {isOpen ? <IoIosArrowUp size={26} /> : <IoIosArrowDown size={26} />}
        </div>
      </div>
      {isOpen && (
        <div className="p-2  bg-neutral-950">
          <div>
            <p>CategoryId: {model.category_id}</p>
            <p>Reason: {model.reason}</p>
          </div>
          <MonoForm type="UPDATE" data={model} {...formProps} />
          <DeleteForm model={model} pk={model._id} isBack={false}/>
        </div>
      )}
    </>
  );
}
