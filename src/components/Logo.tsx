"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <Link href="/">
      {/* <a> */}
        {/* <h3 className="text-3xl font-semibold hover:text-orange-500 cursor-pointer duration-200">Kokomari</h3> */}
        <Image src="/rokomari_logo.png" alt="sitelogo" width={200} height={200} />
      {/* </a> */}
    </Link>
  );
}

export default Logo;