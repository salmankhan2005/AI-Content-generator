"use client";

import { Search } from "lucide-react";
import React, { useState, useEffect } from "react";

function SearchSection({ onSearchInput }: { onSearchInput: (value: string) => void }) {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    onSearchInput(searchTerm);
  }, [searchTerm, onSearchInput]);

  return (
    <div className="p-10 bg-gradient-to-bl from-red-500 via-red-700 to-black flex justify-center items-center text-white flex-col">
      {/* Title */}
      <h2 className="text-white font-bold">Browse All Templates</h2>
      <p>😉 Inaiku enna pudhusa content create panna poringa? 😉</p>

      {/* Search Bar */}
      <div className="w-full flex justify-center items-center">
        <div className="flex gap-2 items-center p-2 border rounded-md w-[60%] my-5 bg-black">
          <Search className="text-white" />
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm} // Ensure controlled component
            onChange={(event) => setSearchTerm(event.target.value)}
            className="bg-transparent w-full outline-none text-white placeholder-gray-400"
          />
        </div>
      </div>
    </div>
  );
}

export default SearchSection;
