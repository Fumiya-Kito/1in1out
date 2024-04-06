import { CardSkeleton } from "@/components/cards/CardSkeleton";
import React from "react";

export default function ExchangeFallback() {
  const inventorySkelton = (
    <div className="w-56 rounded-lg shrink-0 bg-neutral-900 overflow-scroll flex flex-col h-full">
      {/* header */}
      <div className="flex items-center justify-between w-full p-1">
        <CardSkeleton width={"w-24"} height={"h-6"} />
        <CardSkeleton width={"w-6"} height={"h-6"} />
      </div>
      {/* cards */}
      <div className="m-0 transition-colors flex-1 w-full animate-pulse">
        <div className="py-0.5 mt-1 mb-1 pr-12">
          <CardSkeleton width={"w-full"} height={"h-4"} />
        </div>
        <CardSkeleton width={"w-full"} height={"h-[50px]"} />
        <CardSkeleton width={"w-full"} height={"h-[50px]"} />
      </div>
    </div>
  );

  return (
    <div className="w-full h-full mb-4">
      {/* wishlist */}
      <div className="w-full h-1/2 mb-4">
        <div className="w-full rounded-lg shrink-0 bg-neutral-900 overflow-scroll flex flex-col h-full sm:items-center sm:justify-between">
          {/* header */}
          <div className="flex items-center justify-between w-full p-2 sm:w-4/5 md:w-2/3 lg:w-1/2 xl:w-2/5 2xl:w-1/3">
            <div className="min-w-0">
              <h2 className="truncate">wishlist</h2>
            </div>
            <span className="rounded">
              <CardSkeleton width={"w-8"} height={"h-4"} />
            </span>
          </div>
          {/* cards */}
          <div className="m-0 transition-colors flex-1 w-full sm:w-4/5 md:w-2/3 lg:w-1/2 xl:w-2/5 2xl:w-1/3 animate-pulse">
            <div className="py-0.5 my-0.5 pr-60">
              <CardSkeleton width={"w-8"} height={"h-4"} />
            </div>
            {[...Array(5)].map((_, index) => <CardSkeleton key={index} width={"w-full"} height={"h-[50px]"} />)}
          </div>
        </div>
      </div>

      <div className="w-full h-1/2 flex gap-3 overflow-scroll">
        
        {[...Array(10)].map((_, index) => (
          <React.Fragment key={index}>
            {inventorySkelton}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
