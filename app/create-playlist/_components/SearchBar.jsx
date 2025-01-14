import Image from "next/image";
import React, { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

function SearchBar({ searchTerm, onSearch, onSearchHandler }) {
  return (
    <div className="text-white">
      <header className="flex items-center">
        <div className="flex items-center py-4 lg:px-10 ">
          <Image
            src={"/logo.png"}
            width={35}
            height={35}
            alt="spotiplay logo"
          />
          <h1 className="font-spro font-semibold text-xl mx-1">Spotiplay</h1>
        </div>

        <div className="bg-[#121212] py-2 pl-4 flex rounded-full">
          <input
            type="text"
            value={searchTerm}
            placeholder="search any song"
            onChange={(e) => onSearch(e.target.value)}
            className="bg-transparent outline-none"
          />

          <Button onClick={onSearchHandler} className="mx-4">
            {" "}
            <Search />{" "}
          </Button>
        </div>
      </header>
    </div>
  );
}

export default SearchBar;
