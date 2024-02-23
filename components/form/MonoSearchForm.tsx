'use client'

import { KeyboardEvent, useState } from "react";
import { CiSearch } from "react-icons/ci";


export default function MonoSearchForm({ onSearch }: { onSearch: (inputValue: string) => void }) {
  const [enteredName, setEnteredName] = useState('');
  const handleSearch: () => void = () => {
    onSearch(enteredName);
  }

  const handleKeyDown: (e: KeyboardEvent) => void = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  }

  return <div>
    <input
      type="text"
      placeholder="Search by Mono Name..."
      value={enteredName}
      onChange={(e) => setEnteredName(e.target.value)}
      onKeyDown={handleKeyDown}
      className="text-black"
    />
    <button onClick={handleSearch}>
      <CiSearch />
    </button>
  </div>
}
