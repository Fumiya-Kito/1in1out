import { CardSkeleton } from "@/components/cards/CardSkeleton";
import React from "react";

export default function MonoListFallback() {
  return (
    <>
      <div
        id="page-header"
        className="flex items-center lg:mb-4 box-border border-b border-white"
      >
        <div className="px-2 my-2">
          <CardSkeleton width={"w-[80px]"} height={"h-[23px]"}/>
        </div>
        <div className="flex-none ml-auto my-2">
          <CardSkeleton width={"w-[80px]"} height={"h-[23px]"}/>
        </div>
      </div>
      <li className="list-none grid grid-cols-1 lg:grid-cols-2 lg:gap-4 animate-pulse">
        <CardSkeleton width={"w-full"} height={"h-[45px]"}/>
        <CardSkeleton width={"w-full"} height={"h-[45px]"}/>
        <CardSkeleton width={"w-full"} height={"h-[45px]"}/>
        <CardSkeleton width={"w-full"} height={"h-[45px]"}/>
        <CardSkeleton width={"w-full"} height={"h-[45px]"}/>
      </li>
    </>
  );
}
