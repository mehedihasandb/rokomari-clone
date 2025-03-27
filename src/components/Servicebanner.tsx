import React from 'react';
import Image from 'next/image';
import imgone from '@/img/prize.webp';
import imgtwo from '@/img/point.webp';
import imgthree from '@/img/book-reading.webp';

function ServiceBanner() {
  return (
    <div className='pt-8 p-1 pb-3 flex justify-center bg-container'>
        <div className="flex items-center justify-center gap-4">
      <div className="relative flex-none h-auto w-auto">
        <Image src={imgone} alt="img 1" width={406} height={250} objectFit="cover" />
      </div>
      <div className="relative flex-none h-auto w-auto">
        <Image src={imgtwo} alt="img 2" width={406} height={250} objectFit="cover" />
      </div>
      <div className="relative flex-none h-auto w-auto">
        <Image src={imgthree} alt="img 3" width={406} height={250} objectFit="cover" />
      </div>
    </div>
    </div>
  );
}

export default ServiceBanner;