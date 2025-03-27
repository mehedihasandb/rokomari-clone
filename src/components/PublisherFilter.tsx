"use client";
import { useState } from 'react';
import { CiSearch } from "react-icons/ci";

const PublisherFilter = ({ publishers, setPublishers }) => {
  const handlePublisherChange = (index) => {
    const updatedPublishers = [...publishers];
    updatedPublishers[index].isChecked = !updatedPublishers[index].isChecked;
    setPublishers(updatedPublishers);
  };

  return (
    <div className="mb-4 mt-4">
      <h3 className="text-md text-black-700 font-semibold mb-2 mt-4">By Publishers</h3>
      <div className="relative mb-2">
          <CiSearch className="absolute right-3 mt-2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder=""
            className="pl-5 pr-5 py-1 bg-gray-200 w-full border rounded-full"
          />
        </div>
      <ul className="flex flex-col space-y-2 overflow-y-scroll h-40 mt-4">
        {publishers.map((publisher, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={publisher.isChecked}
              onChange={() => handlePublisherChange(index)}
              className="mr-2"
            />
            <span>{publisher.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PublisherFilter;
