import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import 'ion-rangeslider/css/ion.rangeSlider.min.css';
import 'ion-rangeslider/js/ion.rangeSlider.min.js';
import '@/app/css/globals.css';  // Ensure this line imports the global stylesheet
import { CiHome } from 'react-icons/ci';

const PriceFilter = () => {
  const [priceRange, setPriceRange] = useState({ from: "Tk-212", to: "Tk-45100" });

  useEffect(() => {
    // Initialize Ion Range Slider
    $("#price-range").ionRangeSlider({
      type: "double",
      min: 0,
      max: 45100,
      from: priceRange.from,
      to: priceRange.to,
      postfix: 'Tk',
      grid: true,
      onFinish: (data) => {
        setPriceRange({ from: data.from + 'Tk', to: data.to + 'Tk'});
      }
    });

    // Cleanup ionRangeSlider instance on component unmount
    return () => {
      const slider = $("#price-range").data("ionRangeSlider");
      if (slider) slider.destroy();
    };
  }, [priceRange.from, priceRange.to]);

  return (
    <div className="range-wrapper w-full mt-4">
      <div className="flex items-center">
        <h3 className="text-base text-black-700 font-bold mb-2 mt-4">Price</h3>
      </div>
      <input id="price-range" name="priceRange" />
      <div className="price-range flex justify-between mt-2">
        {/* Display icons with price range */}
        {/* <span className="price-min flex items-center">
          <CiHome className="price-range-icon mr-1" /> ৳{priceRange.from}
        </span>
        <span className="price-max flex items-center">
          ৳{priceRange.to} <CiHome className="price-range-icon ml-1" />
        </span> */}
      </div>
    </div>
  );
};

export default PriceFilter;
