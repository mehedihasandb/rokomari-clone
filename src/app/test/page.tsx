import React from 'react';
import { IoSearch } from 'react-icons/io5';


const demo = () => {
  return (
    <div className="relative w-full max-w-[500px] mx-auto border rounded focus-within:border-bgcolor border-r-0 sm:w-full group">
                  <input type="search" placeholder="Search..." className="w-full py-2 px-4 rounded-sm bg-white outline-none border-b-2 border-bg-red-600 focus:border-transparent transition-all duration-300" />
                  <button className="absolute right-0 top-1/2 -translate-y-1/2 py-3 px-3 md:py-3 md:px-5 bg-red-600 text-white rounded rounded-l-none">
                        <IoSearch className="text-xl font-bold" />
                  </button>
            </div>
  )
}

export default demo;