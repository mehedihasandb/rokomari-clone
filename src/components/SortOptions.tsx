'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const SortOptions = () => {
      const [selectedSort, setSelectedSort] = useState('');
      const [hasEbook, setHasEbook] = useState(false);
      const [inStock, setInStock] = useState(false);

      const handleSortChange = (sortValue) => {
            setSelectedSort(sortValue);
            // Handle the sort change logic here
            console.log('Selected sort option:', sortValue);
            // Implement the sorting logic or trigger a re-render with the new sort order
      };

      const handleEbookChange = () => {
            setHasEbook(!hasEbook);
            // Handle eBook filter change logic here
            console.log('eBook filter:', !hasEbook);
            // Implement filtering logic or trigger a re-render with the new filter state
      };

      const handleInStockChange = () => {
            setInStock(!inStock);
            // Handle In Stock filter change logic here
            console.log('In Stock filter:', !inStock);
            // Implement filtering logic or trigger a re-render with the new filter state
      };

      const sortOptions = [
            { value: 'SOLD_COUNT_DESC', label: 'Best Seller' },
            { value: 'ID_DESC', label: 'New Released' },
            { value: 'PRICE_ASC', label: 'Price - Low to High' },
            { value: 'PRICE_DESC', label: 'Price - High to Low' },
            { value: 'DISCOUNT_ASC', label: 'Discount - Low to High' },
            { value: 'DISCOUNT_DESC', label: 'Discount - High to Low' },
      ];

      return (
            <div className="product-sort__content space-y-2">
                  <div className="bg-white border shadow-md p-4 divide-y-2">
                        <div className="product-sort__header flex justify-between items-center mb-4">
                              <p className="title text-lg text-black-700 font-semibold">Sort</p>
                              <Link href="/book/author/1" className="link text-blue-500">Reset Sort</Link>
                        </div>
                        {/* <hr /> */}
                        {/* Sorting Options */}
                        <div className="pt-3">
                              {sortOptions.map((option) => (
                                    <div key={option.value} className="rok-radio-custom flex items-center">
                                          <div className="custom-control custom-radio m-1">
                                                <input
                                                      type="radio"
                                                      className="custom-control-input js--filter-input"
                                                      value={option.value}
                                                      id={option.value}
                                                      name="sort"
                                                      onClick={() => handleSortChange(option.value)}
                                                      checked={selectedSort === option.value}
                                                />
                                                <label className="custom-control-label" htmlFor={option.value}></label>
                                          </div>
                                          <label className="ml-2 text-gray-700" htmlFor={option.value}>
                                                {option.label}
                                          </label>
                                    </div>
                              ))}
                        </div>
                  </div>
                  <div className="bg-white border shadow-md mt-5 p-4 divide-y-2">
                        {/* eBook Filter */}
                        <div className="filter-list filter-ebook pb-4">
                              <div className="rok-checkbox custom-control custom-checkbox">
                                    <input
                                          type="checkbox"
                                          id="ebook"
                                          className="custom-control-input"
                                          name="hasEbook"
                                          checked={hasEbook}
                                          onChange={handleEbookChange}
                                    />
                                    <label htmlFor="ebook" className="custom-control-label pl-2 text-base font-semibold">eBook</label>
                              </div>
                        </div>

                        {/* In Stock Filter */}
                        <div className="filter-list filter-instock pt-4">
                              <div className="rok-checkbox custom-control custom-checkbox">
                                    <input
                                          type="checkbox"
                                          id="instock"
                                          className="custom-control-input"
                                          name="inStock"
                                          checked={inStock}
                                          onChange={handleInStockChange}
                                    />
                                    <label htmlFor="instock" className="custom-control-label pl-2 text-base font-semibold">In Stock</label>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default SortOptions;
