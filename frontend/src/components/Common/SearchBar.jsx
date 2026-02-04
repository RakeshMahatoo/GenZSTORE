import React from "react";
import { useState } from "react";
import { HiMagnifyingGlass, HiMiniXMark } from "react-icons/hi2";
function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSearchToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = (e) =>{
      e.preventDefault();
      console.log("search Term:", searchTerm);
      setSearchTerm("");
      setIsOpen(false);
  }

  return (
    <div className={`flex items-center justify-center w-full transition-all duration-300 ${isOpen? "absolute top-24 left-0 w-full bg-white h-24 z-50" : "auto"}  `}>
      {isOpen ? (
        <form onSubmit={handleSearch} className="relative flex items-center justify-center w-full">
          <div className="relative w-1/2 pr-12">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e)=> setSearchTerm(e.target.value)}
              className="bg-gray-100  rounded-lg pl-5 w-full  py-2  focus:outline-none placeholder:text-gray-700 "
            />
            {/* search icon */}
            <button type="submit" className="absolute right-14 top-1/4 ">
                <HiMagnifyingGlass className="h-5 w-5"/>
            </button>
          </div>

          {/* close button */}
          <button type="button" onClick={handleSearchToggle} className="transition hover:rotate-180 ease-in-out delay-100 hover:text-gray-800 text-gray-600" >
            <HiMiniXMark className="h-6 w-6"></HiMiniXMark>
          </button>
        </form>
      ) : (
        <button onClick={handleSearchToggle}>
          <HiMagnifyingGlass className="h-6 w-6 cursor-pointer" />
        </button>
      )}
    </div>
  );
}

export default SearchBar;
