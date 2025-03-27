// components/LanguageFilter.js
"use client";
import { useState } from 'react';
import { CiSearch } from "react-icons/ci";

const LanguageFilter = ({ languages, setLanguages }) => {
  const handleLanguageChange = (index) => {
    const updatedLanguages = [...languages];
    updatedLanguages[index].isChecked = !updatedLanguages[index].isChecked;
    setLanguages(updatedLanguages);
  };

  return (
    <div className="mb-4 gap-10">
      <h3 className="text-base text-black-700 font-semibold mb-2 mt-4">Languages</h3>
      <div className="relative mb-2">
          <CiSearch className="absolute right-3 mt-2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder=""
            className="pl-5 pr-5 py-1 bg-gray-200 w-full border rounded-full"
          />
        </div>
      <ul className="flex flex-col space-y-2 mt-4">
        {languages.map((language, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={language.isChecked}
              onChange={() => handleLanguageChange(index)}
              className="mr-2"
            />
            <span>{language.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguageFilter;