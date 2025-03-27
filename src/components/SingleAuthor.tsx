"use client";
import Image from 'next/image';
import data from '@/data/data.json';
import Link from 'next/link';
import { FaStar } from 'react-icons/fa';
import SortOptions from '@/components/SortOptions';
import CategoryFilter from '@/components/CategoryFilter';
import RecentView from '@/components/RecentView';
import MoneySlider from '@/components/PriceFilter';
import { useState } from 'react';

const AuthorPage = () => {
  const authorBooks = data.author;
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 12;

  // Calculate the indexes for the current page
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = authorBooks.slice(indexOfFirstBook, indexOfLastBook);

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < Math.ceil(authorBooks.length / booksPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="mt-6">
      <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
        {/* Left Side: Filter */}
        <div className="w-full md:w-1/3 lg:w-1/4">
          <div className="rounded">
            {/* Product Sort Options */}
            <div className="mb-5 shadow-md">
              <SortOptions />
              <CategoryFilter />
            </div>

            {/* <div className="flex flex-col space-y-6">
              <div className="flex flex-col space-y-2">
                <label className="text-gray-700">Filter</label>
                <div className="flex space-x-4">
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="ml-2 text-gray-700">eBook</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="ml-2 text-gray-700">In Stock</span>
                  </label>
                </div>
              </div>
            </div> */}
          </div>
        </div>

        {/* Right Side: Writer Details */}
        <div className="flex md:w-2/3 lg:w-3/4 flex-col">
          <div className="bg-writerh shadow-md p-4 rounded mb-6">
            <div className="ml-6">
              <div className="flex items-center mb-2">
                {/* Replace with actual author image */}
                <Image
                  src="https://ds.rokomari.store/rokomari110/people/2222ed505a94_1.jpg"
                  alt="Author Image"
                  width={50}
                  height={50}
                  className="rounded-full w-20 h-20"
                />
                <div className="ml-8">
                  <h1 className="text-normal pb-2 font-normal">হুমায়ূন আহমেদ</h1>
                  <p className="text-gray-600">
                    বাংলা সাহিত্যের এক কিংবদন্তী হুমায়ূন আহমেদ। বিশ্ব সাহিত্যিক বাঙালি লেখকদের মধ্যে তিনি অন্যতম স্থান দখল করে আছেন...
                  </p>
                </div>
              </div>
              <div className="justify-between items-center">
                <p className="text-black-600 text-md font-semibold">7.4K <span className="text-gray-600">followers</span></p>
                <button className="bg-blue-500 text-white h-8 w-24 mt-2 md:w-[90px] font-semibold rounded-sm hover:bg-blue-700 transition-colors duration-300 ease-in-out">
                  Follow
                </button>
              </div>
            </div>
          </div>

          <div className='bg-white shadow-md rounded pt-4'>
            <div className="ml-4">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb flex gap-2">
                  <li className="breadcrumb-item">
                    <Link href="/book">Books /</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link href="/book/authors">Authors /</Link>
                  </li>
                  <li className="breadcrumb-item text-gray-500 active" aria-current="page">
                    Humayun Ahmed - হুমায়ূন আহমেদ
                  </li>
                </ol>
              </nav>

              <div className="row mt-4 mb-4">
                <div className="col-lg-12">
                  <h1 className="text-xl font-medium">হুমায়ূন আহমেদ এর বই সমূহ</h1>
                  <p className="text-sm font-normal"> (Showing {indexOfFirstBook + 1} to {Math.min(indexOfLastBook, authorBooks.length)} of {authorBooks.length} items) </p>
                </div>
              </div>
            </div>

            {/* Books Grid */}
            <div className="bg-white grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {currentBooks.map((book) => (
                <div key={book.id} className="relative group w-full h-[400px] text-center transition-all duration-300 ease-in-out">
                  <div className="relative px-9 py-6 bg-white border overflow-hidden h-full">
                    <div className="relative">
                      <Image
                        src={book.image}
                        alt={`Book Cover ${book.title}`}
                        width={150}
                        height={200}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 ease-in-out pointer-events-none">
                        <button className="hidden group-hover:flex items-center justify-center bg-cartbtn text-white py-3 px-7 rounded-sm pointer-events-auto z-20 text-md font-semibold">
                          Add to Cart
                        </button>
                      </div>
                      {book.discount && (
                        <div className="absolute top-2 left-2 bg-yellow-500 text-white px-2 py-1 text-xs rounded-full pointer-events-none z-20">
                          <p>{book.discount}%</p>
                        </div>
                      )}
                    </div>
                    <div className="p-2 bg-gray-50 relative z-10">
                      <h4 className="text-sm mt-2 text-gray-800 font-normal">{book.title}</h4>
                      <p className="text-sm text-gray-500 font-normal">{book.author}</p>
                      <div className="flex justify-center items-center">
                        {Array.from({ length: Math.round(book.rating) }).map((_, i) => (
                          <FaStar key={i} className="text-yellow-500" />
                        ))}
                        <span className="text-secondary">({book.rating})</span>
                      </div>
                      <p className="book-status text-[13px]" style={{ color: book.status === 'Product in stock' ? 'green' : 'inherit' }}>
                        {book.status}
                      </p>
                      <div className="flex justify-center items-center space-x-2">
                        <p className="text-black-600 font-semibold">TK {book.price}</p>
                        {book.originalPrice && (
                          <p className="text-gray-500 line-through">TK {book.originalPrice}</p>
                        )}
                      </div>
                    </div>
                    <Link href={`/products/${book.id}`} className="hidden absolute bottom-0 inset-x-0 items-center justify-center text-lg font-semibold text-blue-500 group-hover:bg-gray-200 bg-opacity-0 hover:bg-opacity-20 transition-opacity duration-300 ease-in-out z-20 group-hover:flex pointer-events-auto">
                      View Details
                    </Link>
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-80 transition-opacity duration-300 ease-in-out z-10 pointer-events-none"></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center mt-10 mb-4">
              <nav className="block">
                <ul className="flex pl-0 rounded list-none flex-wrap">
                  <li>
                    <button
                      className={` text-gray-400 bg-white hover:bg-gray-200  font-noraml py-2 px-4 border border-gray-300 rounded-l-lg  ${currentPage === 1 ? 'bg-white pointer-events-none' : ''
                        }`}
                      onClick={goToPreviousPage}
                      disabled={currentPage === 1}
                    >
                      Previous
                    </button>
                  </li>
                  {Array.from({ length: Math.ceil(authorBooks.length / booksPerPage) }).map((_, index) => (
                    <li key={index}>
                      <button
                        className={`bg-white hover:bg-gray-200 hover:border-b-4 text-blue-500 font-medium py-2 px-4 border border-gray-300  ${currentPage === index + 1 ? 'bg-gray-200' : ''
                          }`}
                        onClick={() => paginate(index + 1)}
                      >
                        {index + 1}
                      </button>
                    </li>
                  ))}
                  <li>
                    <button
                      className={`bg-white hover:bg-gray-200 text-blue-500 font-noraml py-2 px-4 border border-gray-300 rounded-r-lg ${currentPage === Math.ceil(authorBooks.length / booksPerPage) ? 'bg-gray-200 pointer-events-none' : ''
                        }`}
                      onClick={goToNextPage}
                      disabled={currentPage === Math.ceil(authorBooks.length / booksPerPage)}
                    >
                      Next
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

        </div>

      </div>
      <RecentView />
    </div>
  );
};

export default AuthorPage;
