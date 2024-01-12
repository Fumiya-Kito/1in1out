"use client";

import { useRouter, usePathname } from "next/navigation";
import { useCallback, useState } from "react";
import MenuItem from "./MenuItem";
import Link from "next/link";

function Menu() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((prevValue) => !prevValue);
  }, []);

  return (
    <div>
      {isHome ? (
        <>
          <div className="cursor-pointer" onClick={toggleOpen}>
            Menu
          </div>

          {isOpen && (
            <div>
              <div className="cursor-pointer">
                <MenuItem
                  label="exchange"
                  onClick={() => {
                    setIsOpen(false);
                    router.push("/");
                  }}
                />
                <MenuItem
                  label="inventory"
                  onClick={() => {
                    setIsOpen(false);
                    router.push("/categorylist");
                  }}
                />
                <MenuItem
                  label="wishlist"
                  onClick={() => {
                    setIsOpen(false);
                    router.push("/monolist/0_wishlist");
                  }}
                />
              </div>
            </div>
          )}
        </>
      ) : (
        <div>
          <Link href="/">Back to Home</Link>
        </div>
      )}
    </div>
  );
}

export default Menu;
