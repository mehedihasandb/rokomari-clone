"use client";
import { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import Link from 'next/link';
import PriceFilter from '@/components/PriceFilter';
import DiscountFilter from '@/components/DiscountFilter';
import RatingFilter from '@/components/RatingFilter';
import PublisherFilter from '@/components/PublisherFilter';
import LanguageFilter from '@/components/LanguageFilter';

function FilterSidebar() {
  const [categories, setCategories] = useState([
    { name: 'মুক্তিযুদ্ধভিত্তিক উপন্যাস', isChecked: false },
    { name: 'শিশু-কিশোর সাহিত্য রচনা', isChecked: false },
    { name: 'সমগ্র', isChecked: false },
    { name: 'উপন্যাস কালেকশন', isChecked: false },
    { name: 'শিশু-কিশোর গল্প', isChecked: false },
    { name: 'পশ্চিমবঙ্গের বই', isChecked: false },
    { name: 'ব্যাস যখন ৮১২: গল্প', isChecked: false },
    { name: 'নাটক', isChecked: false },
  ]);

  const [publishers, setPublishers] = useState([
    { name: 'অনাপ্রকাশ', isChecked: false },
    { name: 'প্রতীক প্রকাশনা সংস্থা', isChecked: false },
    { name: 'অনন্যা', isChecked: false },
    { name: 'কাকলী প্রকাশনী', isChecked: false },
    { name: 'রকমারি কালেকশন', isChecked: false },
    { name: 'সময় প্রকাশন', isChecked: false },
    { name: 'অন্বেষা প্রকাশন', isChecked: false },
  ]);

  const [priceRange, setPriceRange] = useState([212, 45300]);
  const [languages, setLanguages] = useState([
    { name: 'বাংলা', isChecked: false },
    { name: 'ইংরেজি', isChecked: false },
  ]);


  const [ratings, setRatings] = useState([
    { stars: 5, isChecked: false },
    { stars: 4, isChecked: false },
    { stars: 3, isChecked: false },
    { stars: 2, isChecked: false },
    { stars: 1, isChecked: false },
  ]);

  const handleCategoryChange = (index) => {
    const updatedCategories = [...categories];
    updatedCategories[index].isChecked = !updatedCategories[index].isChecked;
    setCategories(updatedCategories);
  };

  return (
    <div className="bg-white rounded-md shadow-md p-4 mt-4 divide-y-2">
      <div className="product-sort__header flex justify-between items-center mb-4 ">
        <p className="title text-lg text-black-700 font-semibold">Filter</p>
        <Link href="/book/author/1" className="link text-blue-500">Reset Sort</Link>
      </div>

      <div className="mb-4 ">
        <h3 className="text-base mt-4 text-black-700 font-semibold mb-2">Shop by Categories</h3>
        <div className="relative mb-2">
          <CiSearch className="absolute right-3 mt-2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder=""
            className="pl-5 pr-5 py-1 bg-gray-200 w-full border rounded-full"
          />
        </div>
        <ul className="flex flex-col space-y-2 mt-4 overflow-y-scroll h-40">
          {categories.map((category, index) => (
            <li key={index}>
              <input
                type="checkbox"
                checked={category.isChecked}
                onChange={() => handleCategoryChange(index)}
                className="mr-2"
              />
              <span>{category.name}</span>
            </li>
          ))}
        </ul>
      </div>

      <PublisherFilter publishers={publishers} setPublishers={setPublishers} />

      <div className="mb-4 ">
        <div className="flex items-center">
          <PriceFilter />
        </div>
      </div>

      <div className="mb-4 mt-4">
        <div className="items-center">
          <LanguageFilter languages={languages} setLanguages={setLanguages} />
        </div>
      </div>

      <div className="mb-4">
        <div className="flex items-center">
          <DiscountFilter />
        </div>
      </div>

      <RatingFilter ratings={ratings} setRatings={setRatings} />
    </div>
  );
}

export default FilterSidebar;
