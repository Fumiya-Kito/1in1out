"use client";

import Link from "next/link";
import { Mono } from "@/app/type";
import { useState } from "react";
import { FiEdit } from "react-icons/fi";



export function MonoDetail({ item }: { item: Mono }) {
  return (
    <div>
      <div>{item.iconJsx}</div>
      <div>
        <h2>
          {item.name}
        </h2>
        <p>{item.category_id}: TODO:カテゴリー名をLookUPで結合</p>
        <p>{item.reason}</p>
        <Link href={`/monoedit/${item._id}`}>
          <FiEdit />
        </Link>
      </div>
    </div>
  );
}
