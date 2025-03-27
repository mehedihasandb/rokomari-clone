'use client';
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import authorsData from '@/data/authors.json'; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="py-5 px-1 bg-slate-50 hover:text-orange-600 hover:bg-white cursor-pointer duration-200 rounded-sm text-4xl flex items-center justify-center z-20 absolute right-[-0.1rem] top-1/2 transform -translate-y-1/2"
      onClick={onClick}
    >
      <IoIosArrowForward />
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="py-5 px-1 bg-slate-50 hover:text-orange-600 hover:bg-white cursor-pointer duration-200 rounded-sm text-4xl flex items-center justify-center z-20 absolute left-0.1 top-1/2 transform -translate-y-1/2"
      onClick={onClick}
    >
      <IoIosArrowBack />
    </div>
  );
};

const Author = () => {
  const [slidesToShow, setSlidesToShow] = useState(4);

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setSlidesToShow(1);
    } else if (window.innerWidth < 1024) {
      setSlidesToShow(2);
    } else {
      setSlidesToShow(5);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="pt-6 flex justify-center bg-container">
      <div className="w-full max-w-7xl bg-white p-4">
        <div className="mb-2 flex justify-between items-center">
          <h2 className="text-xl font-bold">Weekly Popular Authors</h2>
        </div>

        <Slider {...settings}>
          {authorsData.authors.map((author) => (
            <div key={author.authorId}>
              <div className="px-2 relative group bg-white overflow-hidden w-[187px] text-center transition-all duration-300 ease-in-out">
                <div className="relative">
                  <img
                    src={author.authorImageUrl}
                    alt={author.authorName}
                    className="w-30 h-30 object-cover rounded-full shadow-md mx-auto my-2 transition-transform duration-300 ease-in-out"
                    style={{ maxWidth: '100%', display: 'block' }}
                  />
                </div>
                <div className="p-2 bg-gray-50">
                  <h3 className="text-sm mt-2 text-gray-800 font-semibold whitespace-nowrap overflow-hidden overflow-ellipsis">{author.authorName}</h3>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Author;
