import { CardSkeleton } from "@/components/cards/CardSkeleton";
import React from "react";

export default function SearchFallback() {
  return (
    <div className="max-w-4xl m-auto animate-pulse">
      <div>
        <div
          className="w-full h-[42px] max-w-sm p-2 my-2 text-white bg-neutral-700 rounded-lg border border-neutral-400 focus:bg-neutral-900 outline-transparent outline-0"
        />
      </div>
      <li className="list-none">
        <CardSkeleton width={"w-full"} height={"h-[45px]"}/>
        <CardSkeleton width={"w-full"} height={"h-[45px]"}/>
        <CardSkeleton width={"w-full"} height={"h-[45px]"}/>
        <CardSkeleton width={"w-full"} height={"h-[45px]"}/>
        <CardSkeleton width={"w-full"} height={"h-[45px]"}/>
        <CardSkeleton width={"w-full"} height={"h-[45px]"}/>
        <CardSkeleton width={"w-full"} height={"h-[45px]"}/>
        <CardSkeleton width={"w-full"} height={"h-[45px]"}/>
        <CardSkeleton width={"w-full"} height={"h-[45px]"}/>
        <CardSkeleton width={"w-full"} height={"h-[45px]"}/>
        <CardSkeleton width={"w-full"} height={"h-[45px]"}/>
        <CardSkeleton width={"w-full"} height={"h-[45px]"}/>
        <CardSkeleton width={"w-full"} height={"h-[45px]"}/>
        <CardSkeleton width={"w-full"} height={"h-[45px]"}/>
        <CardSkeleton width={"w-full"} height={"h-[45px]"}/>
        <CardSkeleton width={"w-full"} height={"h-[45px]"}/>
        <CardSkeleton width={"w-full"} height={"h-[45px]"}/>
        <CardSkeleton width={"w-full"} height={"h-[45px]"}/>
      </li>
    </div>
  );
}
