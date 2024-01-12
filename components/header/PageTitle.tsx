"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { FiEdit } from "react-icons/fi";

export default function PageTitle() {
  const pathname = usePathname();
  const isMonoList = pathname.includes("monolist");

  const match = pathname.match(/\/(\d+)_([^\/]+)$/);
  const categoryId = match?.[1] || "";
  const categoryName = match?.[2] || "";
  const isNotWishList = !!+categoryId;

  return (
    <>
      {isMonoList && categoryId && categoryName && (
        <>
          <h2>{categoryName}</h2>
          {isNotWishList && (
            <Link href={`/categoryedit/${categoryId}`}>
              <FiEdit />
            </Link>
          )}
        </>
      )}
    </>
  );
}
