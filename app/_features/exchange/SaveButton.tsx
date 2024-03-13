'use client'

import { LuSave } from "react-icons/lu";

export function SaveButton() {
  const handleClick = () => {
    console.log('SAve button');
  }
  return (
    <button onClick={handleClick}>
      <div className="flex flex sm:w-48 p-4 m-2 bg-cyan-500 text-black rounded-full sm:rounded-lg">
        <LuSave size={24} />
        <p className="flex-auto text text-center hidden sm:block">
          Save Changes
        </p>
      </div>

    </button>
  )
}