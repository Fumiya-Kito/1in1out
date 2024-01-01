"use client";

import Link from "next/link";
import Menu from "./Menu";
import { usePathname } from "next/navigation";

function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/" ? true : false;

  return (
    <header>
      <div>
        {isHome ? (
          <Menu />
        ) : (
          <div>
            <Link href="/">Back to Home</Link>
          </div>
        )}

        <div><Link href="/search">🔍</Link></div>
      </div>
    </header>
  );
}

export default Header;
