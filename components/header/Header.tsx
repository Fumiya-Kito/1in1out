"use client";

import Link from "next/link";
import Menu from "./Menu";
import { usePathname } from "next/navigation";
import EditIcon from "../icons/EditIcon";

function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/" ? true : false;
  const isMonoList = pathname.includes("monolist") ? true : false;
  
  const underIdx = pathname.indexOf("_");
  const lastSlashIdx = pathname.lastIndexOf("/");

  const categoryId = underIdx === -1 ? "" : pathname.substring(lastSlashIdx + 1, underIdx);
  const categoryName = underIdx === -1 ? "" : pathname.substring(underIdx + 1);

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
          {isNotWishList && <Link href={`/categoryedit/${categoryId}`}><EditIcon /></Link>}
        </>
      )}

      <div>
        <Link href="/search">🔍</Link>
      </div>
    </header>
  );
}

export default Header;
