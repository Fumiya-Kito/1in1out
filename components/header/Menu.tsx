'use client';

import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import MenuItem from "./MenuItem";

function Menu() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen(prevValue => !prevValue);
  }, [])

  return (
    <div>
      <div className='cursor-pointer' onClick={toggleOpen}>
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
    </div>
  )
}


export default Menu;