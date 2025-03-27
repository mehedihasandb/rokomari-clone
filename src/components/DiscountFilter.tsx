import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import 'ion-rangeslider/css/ion.rangeSlider.min.css';
import 'ion-rangeslider/js/ion.rangeSlider.min.js';

const DiscountFilter = () => {
      const [discountRange, setDiscountRange] = useState([0, '%', 40, '%',]);

      useEffect(() => {
            $("#discount-range").ionRangeSlider({
                  type: "double",
                  min: 0,
                  max: 100,
                  from: discountRange[0],
                  to: discountRange[1],
                  postfix: '%',
                  grid: true,
                  onFinish: (data) => {
                        setDiscountRange([data.from + '%', data.to + '%']);
                  }
            });
      }, [discountRange]);

      return (
            <div className="range-wrapper w-full mt-4">
                  <h3 className="text-base text-black-700 font-semibold mb-2 mt-4">Discount</h3>
                  <input id="discount-range" name="discountRange" />
            </div>
      );
};

export default DiscountFilter;
