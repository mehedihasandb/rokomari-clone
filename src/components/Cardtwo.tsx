'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Slider from 'react-slick';
import { FaStar } from 'react-icons/fa';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import productsData from '@/data/data.json';
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

const Cardtwo = () => {
    const [slidesToShow, setSlidesToShow] = useState(6);

    const handleResize = () => {
        if (window.innerWidth < 768) {
            setSlidesToShow(1);
        } else if (window.innerWidth < 1024) {
            setSlidesToShow(2);
        } else {
            setSlidesToShow(6);
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
        <div className="pt-10 pb-10 flex justify-center bg-container">
            <div className="w-full max-w-7xl bg-white p-4 rounded-lg shadow-xl">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">সেরা ডিস্কাউন্ট এ বেস্টসেলার বই</h2>
                    <a href="/all-products" className="text-blue-500 border-solid border-[1px] border-sky-500 px-2 py-1 hover:text-white hover:bg-btnback">View All</a>
                </div>

                <Slider {...settings}>
                    {productsData.bestSellsItems.map((product) => (
                        <div className="relative group w-full h-[400px] text-center transition-all duration-300 ease-in-out">
                            <div className="relative px-8 py-6 bg-white border overflow-hidden h-full">
                                <div className="relative">
                                    <img
                                        src={product.itemImageUrl}
                                        alt={product.itemName}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 ease-in-out pointer-events-none">
                                        <button className="hidden group-hover:flex items-center justify-center bg-orange-500 text-white py-2 px-[25px] rounded-sm pointer-events-auto z-20 text-md font-semibold">
                                            Add to Cart
                                        </button>
                                    </div>
                                    {product.discount && (
                                        <div className="absolute top-2 left-2 bg-yellow-500 text-white px-2 py-1 text-xs rounded-full pointer-events-none z-20">
                                            <p>{product.discount}%</p>
                                        </div>
                                    )}
                                </div>
                                <div className="p-2 bg-gray-50 relative z-10">
                                    <h3 className="text-md mt-2 text-gray-800 font-semibold">{product.itemName}</h3>
                                    <div className="flex justify-center items-center mt-2">
                                        {Array.from({ length: Math.round(product.rating) }).map((_, i) => (
                                            <FaStar key={i} className="text-yellow-500" />
                                        ))}
                                        <span className="text-secondary">({product.rating})</span>
                                    </div>
                                    <div className="flex justify-center items-center space-x-2">
                                        <p className="text-red-600 font-semibold">TK {product.itemPrice}</p>
                                        {product.originalPrice && (
                                            <p className="text-gray-500 line-through">TK {product.originalPrice}</p>
                                        )}
                                    </div>
                                </div>
                                <div className="text-gray-500">{product.author}</div>
                                <p className="book-status text-[13px] mt-1" style={{ color: product.status === 'Product in stock' ? 'green' : 'inherit' }}>
                                    {product.status}
                                </p>
                                <Link href={`/products/${product.itemId}`} className="hidden absolute bottom-0 inset-x-0 items-center justify-center text-lg font-semibold text-blue-500 group-hover:bg-gray-200 bg-opacity-0 hover:bg-opacity-20 transition-opacity duration-300 ease-in-out z-20 group-hover:flex pointer-events-auto">
                                    View Details
                                </Link>
                                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-80 transition-opacity duration-300 ease-in-out z-10 pointer-events-none"></div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Cardtwo;
