"use client";

import { useRouter, usePathname } from "next/navigation";
import { useCallback, useState } from "react";
import MenuItem from "./MenuItem";
import Link from "next/link";
import { LuMenu } from "react-icons/lu";

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
      <>
        <div className="cursor-pointer" onClick={toggleOpen}>
          <LuMenu size={20}/>
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
                  router.push("/monolist/1_wishlist");
                }}
              />
            </div>
          </div>
        )}
      </>
    </div>
  );
}

export default Menu;
