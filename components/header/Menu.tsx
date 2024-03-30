"use client";

import { useRouter, usePathname } from "next/navigation";
import { useCallback, useState } from "react";
import MenuItem from "./MenuItem";
import { LuMenu } from "react-icons/lu";
import { LiaTimesSolid } from "react-icons/lia";

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
        {isOpen ? (
          <div className="fixed z-50 inset-0 bg-neutral-800/50">
            <div className="bg-neutral-900 p-3 border-b border-neutral-400">

              <div className="cursor-pointer" onClick={toggleOpen}>
                <LiaTimesSolid size={20}/>
              </div>
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
          </div>
        ) : (
          <div className="cursor-pointer" onClick={toggleOpen}>
            <LuMenu size={20}/>
          </div>
        )}
      </>
    </div>
  );
}

export default Menu;
