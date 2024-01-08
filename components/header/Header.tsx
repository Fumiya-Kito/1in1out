"use client";

import Link from "next/link";
import Menu from "./Menu";
import { usePathname } from "next/navigation";
import { FiEdit } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";

function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isMonoList = pathname.includes("monolist");

  const match = pathname.match(/\/(\d+)_([^\/]+)$/);
  const categoryId = match?.[1] || "";
  const categoryName = match?.[2] || "";
  const isNotWishList = !!+categoryId;

  return (
    <header className="p-6 bg-gray-800">
      <div>
        {isHome ? (
          <Menu />
        ) : (
          <div>
            <Link href="/">Back to Home</Link>
          </div>
        )}
      </div>

      {isMonoList && categoryId && categoryName && (
        <>
          <h2>{categoryName}</h2>
          {isNotWishList && <Link href={`/categoryedit/${categoryId}`}><FiEdit /></Link>}
        </>
      )}

      <div>
        <Link href="/search"><CiSearch /></Link>
      </div>
    </header>
  );
}

export default Header;
