import { CardSkeleton } from "@/components/cards/CardSkeleton";
import React from "react";

export default function CategoryListFallback() {
  return (
    <li className="list-none grid grid-cols-1 lg:grid-cols-2 lg:gap-4 animate-pulse">
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
  );
}
