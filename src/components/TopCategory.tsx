import React from 'react';
import Link from 'next/link';

const CategoryList = () => {
  return (
    <div className="mt-8 top-category-list">
      <div className="flex justify-between gap-4 items-center top-category-list__items">
        
        <Link href="/book/category/13?ref=home_cat13" className="relative bg-cate border border-blue-500 h-16 w-60 rounded-md flex items-center justify-center overflow-hidden group">
          <span className="relative z-10 group-hover:text-white transition-colors duration-300">কমিকস ও ছবির গল্প</span>
          <span className="absolute inset-0 bg-blue-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
        </Link>
      
        <Link href="/book/category/1905?ref=home_cat1905" className="relative bg-cate border border-blue-500 h-16 w-60 rounded-md flex items-center justify-center overflow-hidden group">
          <span className="relative z-10 group-hover:text-white transition-colors duration-300">পুরস্কারপ্রাপ্ত বই</span>
          <span className="absolute inset-0 bg-blue-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
        </Link>

        <Link href="/book/category/42?ref=home_cat42" className="relative bg-cate border border-blue-500 h-16 w-60 rounded-md flex items-center justify-center overflow-hidden group">
          <span className="relative z-10 group-hover:text-white transition-colors duration-300">প্রবন্ধ</span>
          <span className="absolute inset-0 bg-blue-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
        </Link>

        <Link href="/book/category/363?ref=home_cat363" className="relative bg-cate border border-blue-500 h-16 w-60 rounded-md flex items-center justify-center overflow-hidden group">
          <span className="relative z-10 group-hover:text-white transition-colors duration-300">গল্প</span>
          <span className="absolute inset-0 bg-blue-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
        </Link>

        <Link href="/book/category/7?ref=home_cat7" className="relative bg-cate border border-blue-500 h-16 w-60 rounded-md flex items-center justify-center overflow-hidden group">
          <span className="relative z-10 group-hover:text-white transition-colors duration-300">ড্রয়িং ও ফটোগ্রাফি</span>
          <span className="absolute inset-0 bg-blue-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
