import React from 'react';
import Link from 'next/link';

const CategoryList = () => {
  return (
    <div className="top-category-list">
      <div className="flex justify-between gap-4 items-center top-category-list__items">
        <Link href="/career?ref=h_cl12" className="relative bg-cate border border-blue-500 h-16 w-60 rounded-md flex items-center justify-center overflow-hidden group">
          <span className="relative z-10 group-hover:text-white transition-colors duration-300">ক্যারিয়ার সাকসেস</span>
          <span className="absolute inset-0 bg-blue-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
        </Link>

        <Link href="/book/category/410?ref=h_cl16" className="relative bg-cate border border-blue-500 h-16 w-60 rounded-md flex items-center justify-center overflow-hidden group">
          <span className="relative z-10 group-hover:text-white transition-colors duration-300">সায়েন্স ফিকশন</span>
          <span className="absolute inset-0 bg-blue-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
        </Link>

        <Link href="/book/category/31/mathematics-science-technology?ref=h_cl13" className="relative bg-cate border border-blue-500 h-16 w-60 rounded-md flex items-center justify-center overflow-hidden group">
          <span className="relative z-10 group-hover:text-white transition-colors duration-300">গণিত, বিজ্ঞান ও প্রযুক্তি</span>
          <span className="absolute inset-0 bg-blue-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
        </Link>

        <Link href="/book/category/9/biographies-memories-interviews?ref=h_cl14" className="relative bg-cate border border-blue-500 h-16 w-60 rounded-md flex items-center justify-center overflow-hidden group">
          <span className="relative z-10 group-hover:text-white transition-colors duration-300">জীবনী ও সাক্ষাৎকার</span>
          <span className="absolute inset-0 bg-blue-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
        </Link>

        <Link href="/book/category/19/history-and-tradition?ref=h_cl15" className="relative bg-cate border border-blue-500 h-16 w-60 rounded-md flex items-center justify-center overflow-hidden group">
          <span className="relative z-10 group-hover:text-white transition-colors duration-300">ইতিহাস ও ঐতিহ্য</span>
          <span className="absolute inset-0 bg-blue-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
        </Link>
      </div>

      <div className="flex justify-between items-center top-category-list__items mt-4 gap-4">
        <Link href="/book/category/404?ref=h_cl17" className="relative bg-cate border border-blue-500 h-16 w-60 rounded-md flex items-center justify-center overflow-hidden group">
          <span className="relative z-10 group-hover:text-white transition-colors duration-300">রাজনীতি</span>
          <span className="absolute inset-0 bg-blue-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
        </Link>

        <Link href="/book/category/24/liberation-war-1971?ref=h_cl19" className="relative bg-cate border border-blue-500 h-16 w-60 rounded-md flex items-center justify-center overflow-hidden group">
          <span className="relative z-10 group-hover:text-white transition-colors duration-300">মুক্তিযুদ্ধ</span>
          <span className="absolute inset-0 bg-blue-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
        </Link>

        <Link href="/book/category/620/family-and-parenting?ref=h_cl18" className="relative bg-cate border border-blue-500 h-16 w-60 rounded-md flex items-center justify-center overflow-hidden group">
          <span className="relative z-10 group-hover:text-white transition-colors duration-300">পরিবার ও প্যারেন্টিং</span>
          <span className="absolute inset-0 bg-blue-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
        </Link>

        <Link href="/book/category/1905/award-winning-books?ref=h_cl20" className="relative bg-cate border border-blue-500 h-16 w-60 rounded-md flex items-center justify-center overflow-hidden group">
          <span className="relative z-10 group-hover:text-white transition-colors duration-300">পুরস্কারপ্রাপ্ত বই</span>
          <span className="absolute inset-0 bg-blue-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
        </Link>

        <Link href="/book/category/407/rhymes-poems-and-recitation?ref=h_cl11" className="relative bg-cate border border-blue-500 h-16 w-60 rounded-md flex items-center justify-center overflow-hidden group">
          <span className="relative z-10 group-hover:text-white transition-colors duration-300">ছড়া, কবিতা ও আবৃত্তি</span>
          <span className="absolute inset-0 bg-blue-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
