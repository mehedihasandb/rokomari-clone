import Link from 'next/link';
import React from 'react';
// import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";

function NavBar() {
  return (
    // <nav className="bg-white">
    //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //     <div className="flex items-center justify-between h-16">
    //       {/* <div className="flex items-center">
    //         <div className="flex-shrink-0">
    //           <a href="/" className="text-2xl font-bold">Brand</a>
    //         </div>
    //       </div> */}
    //       <div className="block">
    //         <div className="ml-4 flex items-center space-x-4">
    //           <a href="/" className="text-black hover:bg-gray-100 hover:text-btnback p-2">বই</a>
    //           <a href="/blog" className="text-black hover:bg-gray-100 hover:text-btnback p-2">ইলেক্ট্রনিক্স</a>
    //           <a href="/contact" className="text-black hover:bg-gray-100 hover:text-btnback p-2">সুপার স্টোর</a>
    //           <a href="/" className="text-black hover:bg-gray-100 hover:text-btnback p-2">কিডস জোন</a>
    //           <a href="/" className="text-black hover:bg-gray-100 hover:text-btnback p-2">গিফট ফাইন্ডার</a>
    //           <a href="/" className="text-black hover:bg-gray-100 hover:text-btnback p-2">ঘরে বসে আয় করুন</a>
    //           <a href="/" className="text-black hover:bg-gray-100 hover:text-btnback p-2">অফার সমূহ</a>
    //           <a href="/" className="text-black hover:bg-gray-100 hover:text-btnback p-2">প্রাতিষ্ঠানিক অর্ডার</a>
    //           <a href="/" className="text-black hover:bg-gray-100 hover:text-btnback p-2">Big Eid Deals</a>
    //           <a href="/" className="text-black hover:bg-gray-100 hover:text-btnback p-2">T20 কুইজ</a>
    //         </div>
    //       </div>
    //     </div>
    //     <hr className="bg-btnback h-[2px] w-full"/>
    //     <div className="flex items-center justify-between h-16">
    //       {/* <div className="flex items-center">
    //         <div className="flex-shrink-0">
    //           <a href="/" className="text-2xl font-bold">Brand</a>
    //         </div>
    //       </div> */}
    //       <div className="block">
    //         <div className="ml-4 flex items-center space-x-4">
    //           <a href="/" className="text-black hover:bg-gray-100 hover:text-btnback p-2">লেখক</a>
    //           <a href="/blog" className="text-black hover:bg-gray-100 hover:text-btnback p-2">বিষয়</a>
    //           <a href="/contact" className="text-black hover:bg-gray-100 hover:text-btnback p-2">প্রকাশনী</a>
    //           <a href="/" className="text-black hover:bg-gray-100 hover:text-btnback p-2">বইমেলা ২০২৪</a>
    //           <a href="/" className="text-black hover:bg-gray-100 hover:text-btnback p-2">ই-বুক</a>
    //           <a href="/" className="text-black hover:bg-gray-100 hover:text-btnback p-2">HSC ও ভর্তি প্রস্তুতি</a>
    //           <a href="/" className="text-black hover:bg-gray-100 hover:text-btnback p-2">ইসলামি বই</a>
    //           <a href="/" className="text-black hover:bg-gray-100 hover:text-btnback p-2">ইংরেজি ভাষার বই</a>
    //           <a href="/" className="text-black hover:bg-gray-100 hover:text-btnback p-2">পশ্চিমবঙ্গের বই</a>
    //           <a href="/" className="text-black hover:bg-gray-100 hover:text-btnback p-2">অতিরিক্ত ছাড়ের বই</a>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </nav>

    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-center items-center bg-white">
          <div className="block">
            <div className="ml-4 flex items-center space-x-4">
              <ul className="flex items-center gap-6">
                <li><Link href="/">বই</Link></li>
                <li><Link href="/">ইলেক্ট্রনিক্স</Link></li>
                <li><Link href="/">সুপার স্টোর</Link></li>
                <li><Link href="/">কিডস জোন</Link></li>
                <li><Link href="/">গিফট ফাইন্ডার</Link></li>
                <li><Link href="/">ঘরে বসে আয় করুন</Link></li>
                <li><Link href="/">অফার সমূহ</Link></li>
                <li><Link href="/">প্রাতিষ্ঠানিক অর্ডার</Link></li>
                <li><Link href="/">Big Eid Deals</Link></li>
                <li><Link href="/">T20 কুইজ</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="bg-btnback h-[2px] w-full" />
        <div className="flex h-16 justify-center items-center bg-white mb-5 border-t border-blue-500">
          <div className="block">
            <div className="ml-4 flex items-center space-x-4">
              <ul className="flex items-center gap-6">
                <li><Link href="/author">লেখক</Link></li>
                <li><Link href="/">বিষয়</Link></li>
                <li><Link href="/">প্রকাশনী</Link></li>
                <li><Link href="/">বইমেলা ২০২৪</Link></li>
                <li><Link href="/">গিফট ফাইন্ডার</Link></li>
                <li><Link href="/">ই-বুক</Link></li>
                <li><Link href="/">HSC ও ভর্তি প্রস্তুতি</Link></li>
                <li><Link href="/">ইসলামি বই</Link></li>
                <li><Link href="/">ইংরেজি ভাষার বই</Link></li>
                <li><Link href="/">পশ্চিমবঙ্গের বই</Link></li>
                <li><Link href="/">অতিরিক্ত ছাড়ের বই</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>


  );
}

export default NavBar;
