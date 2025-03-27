"use client";
import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import productsData from '@/data/KidsProduct.json';

const KidsProduct = () => {
    const backgroundImageUrl = 'https://static.rokomari.io/static/200/dist/desktop/js/adec524758d5ff2377b1.png';

    return (
        <div className="mt-8 mb-8 p-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="pl-5 pt-3 flex justify-between items-center">
                    <h1 className=" text-2xl font-semibold">Explore Our Kids' Products</h1>
                </div>

                <div className="flex gap-10 p-4">
                    {productsData.bestSellsItems.map((product) => (
                        <div
                            key={product.itemId}
                            className="relative group h-40 w-[160px]   text-center  transition-all duration-300 ease-in-out"
                            style={{
                                backgroundImage: `url(${backgroundImageUrl})`,
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center'
                            }}
                        >
                            <div className="flex flex-col items-center p-4">
                                <img
                                    src={product.itemImageUrl}
                                    alt=""
                                    className="w-24 h-24 object-cover pt-2  transform transition-transform duration-300 ease-in-out group-hover:scale-110"
                                />
                                <div className="flex flex-col items-center mt-2 pt-10">
                                    <button className="flex items-center px-2 py-1 mt-1 font-medium text-blue-500 transition-colors duration-300 whitespace-nowrap">
                                        <span className="mr-1">{product.itemName}</span>
                                        <IoIosArrowForward className="text-lg font-bold" />
                                    </button>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default KidsProduct;