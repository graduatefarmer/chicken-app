import { Search } from "lucide-react";
import React from "react";

const SearchBox = () => {
  return (
    <div className="w-full px-4 md:px-8 py-5 md:hidden mt-[80px] flex items-center">
      <div className="flex rounded-full border border-black py-3 px-3 space-x-2 w-full">
        <input
          type="text"
          className="w-full h-full outline-none bg-transparent text-black"
          placeholder="Search here"
          color="black"
        />
        <Search />
      </div>
    </div>
  );
};

export default SearchBox;
