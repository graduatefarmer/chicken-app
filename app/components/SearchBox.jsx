import { Search } from "lucide-react";
import React from "react";

const SearchBox = () => {
  return (
    <div className="w-full px-4 md:px-8 lg:px-[120px] py-5">
      <div className="flex rounded-full border border-black py-3 px-3 space-x-2">
        <input
          type="text"
          className="w-full h-full outline-none bg-transparent text-black"
          placeholder="Search here"
        />
        <Search />
      </div>
    </div>
  );
};

export default SearchBox;
