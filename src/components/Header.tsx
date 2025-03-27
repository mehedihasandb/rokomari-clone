import Container from "./Container";
import React from 'react';
import Logo from "./Logo";
import Link from "next/link";
// import {IoMdCart} "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { AiOutlineUser } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { FaWarehouse } from "react-icons/fa";

const Header = () => {
  return (
    <div className="bg-white h-20">
      <Container className={"h-full flex items-center md:gap-x-5 justify-between md:justify-start"}>
        <Logo />        
        <div className="w-full bg-white hidden md:flex items-center gap-x-1 border-[1px] border-lightText/50 rounded-full px-4 py-1.5 focus-within:border-orange-600 group">

          <CiSearch className="text-gray-500 group-focus-within:text-darkText duration-200" />
          <input type="text" placeholder="Search for products" className="placeholder:text-sm flex-1 outline-none" />
        </div>
   
        <div className="headerDiv">
          <AiOutlineUser className="text-3xl" />
          <p className="text-sm font-semibold px-1 truncate">Sign in</p>
        </div>

        <div className="flex gap-3 text-slate-700 cursor-pointer">
          <FaWarehouse className="text-2xl" />
          <p className="text-sm font-semibold hover:text-btnback truncate ">Become A Seller</p>
        </div>
        <div className="bg-gray-400 h-[20px] w-[1px]"></div>
        <div className="">
          
          <Link href="/carticon"><FiShoppingCart className="text-2xl" /></Link>
          {/* <p className="text-sm font-semibold">$0.00</p>
          <span>0</span> */}
        </div>
      </Container>
    </div>
  )
}

export default Header;

