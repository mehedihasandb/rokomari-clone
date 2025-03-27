"use client"; 
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import { useParams } from 'next/navigation';
import productsData from '@/data/data.json';
import { IoCartOutline } from "react-icons/io5";
import { LuUsers2 } from "react-icons/lu";
import Link from 'next/link';

const BookCard = ({ id, title, author, price, discountedPrice, rating, reviews, imgSrc }) => {
    return (
        <div className="relative flex p-4 justify-center bg-container rounded-lg shadow-md">
            <div className="w-full max-w-7xl bg-white p-4 rounded-lg shadow-xl border-solid border-4 border-sky-500">
                <div className="w-1/3">
                    <Image src={imgSrc} alt={title} width={100} height={150} className="object-cover rounded-md" />
                </div>
                <div className="w-2/3 pl-4">
                    <h3 className="text-md font-bold mb-1">{title}</h3>
                    <p className="text-gray-600 text-sm mb-1">by {author}</p>
                    <div className="flex items-center mb-1">
                        <span className="text-gray-500 text-sm line-through">{price}</span>
                        <span className="ml-2 text-green-500 text-md font-bold">{discountedPrice}</span>
                    </div>
                    <div className="flex items-center mb-1">
                        <div className="flex items-center">
                            {Array.from({ length: Math.round(rating) }).map((_, i) => (
                                <FaStar key={i} className="text-yellow-500" />
                            ))}
                        </div>
                        <span className="ml-2 text-gray-600 text-sm">({rating} Ratings | {reviews} Reviews)</span>
                    </div>
                    <Link href={`/product/${id}`} legacyBehavior>
                        <a className="block bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 text-center rounded text-sm">
                            Learn More
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
};

const RelatedProducts = ({ products }) => {
    return (
        <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Related Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {products.map((product) => (
                    <BookCard
                        key={product.itemId}
                        id={product.itemId}
                        title={product.itemName}
                        author={product.author}
                        price={`TK ${product.originalPrice}`}
                        discountedPrice={`TK ${product.itemPrice}`}
                        rating={product.rating}
                        reviews={product.reviews || 0}
                        imgSrc={product.itemImageUrl}
                    />
                ))}
            </div>
        </div>
    );
};

const FrequentlyBoughtTogether = ({ products }) => {
    return (
        <div className="mt-8 bg-gray-100 p-4 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Frequently Bought Together</h2>
            <div className="flex space-x-4">
                {products.map((product, index) => (
                    <div key={product.itemId} className="flex items-center space-x-2">
                        <BookCard
                            id={product.itemId}
                            title={product.itemName}
                            author={product.author}
                            price={`TK ${product.originalPrice}`}
                            discountedPrice={`TK ${product.itemPrice}`}
                            rating={product.rating}
                            reviews={product.reviews || 0}
                            imgSrc={product.itemImageUrl}
                        />
                        {index < products.length - 1 && <span className="text-2xl">+</span>}
                    </div>
                ))}
            </div>
            <div className="mt-4 flex items-center justify-between">
                <span className="text-xl font-bold">Total Amount: TK 888</span>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Add All to Cart
                </button>
            </div>
        </div>
    );
};

const BookDetails = ({ product, onAddToCart }) => {
    return (
        <div className="container mx-auto mt-6 bg-white p-8 rounded-lg shadow-lg">
            <div className="container mx-auto overflow-hidden">
                <div className="md:flex">
                    <div className="md:flex-shrink-0 mt-1">
                        <Image
                            src={product.itemImageUrl}
                            alt="Book Cover"
                            className="p-8 h-fit w-full object-cover md:h-fit md:w-[350px] border border-gray-400 rounded"
                            width={800}
                            height={200}
                        />
                    </div>
                    <div className="pl-8 pb-8">
                        <a href="#" className="block text-lg leading-tight font-medium text-black hover:underline">
                            অপ্রকাশ (হার্ডকভার)
                        </a>
                        <p className="mt-2 text-gray-500">by হুমায়ূন আহমেদ</p>
                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                            Category: #2 Best Seller
                        </div>
                        <div className="mt-2">
                            <span className="text-yellow-500">★★★★☆</span> 126 Ratings | 71 Reviews
                        </div>
                        <div className="mt-2 flex items-center text-gray-500">
                            <LuUsers2 className="mr-1 h-5 w-5" />
                            1.25K users want this
                        </div>
                        <div className="mt-2">
                            <span className="line-through text-gray-500 font-bold text-3xl">{product.originalPrice}</span>
                            <span className="ml-2 text-black font-bold text-3xl">{product.itemPrice}</span>
                            <span className="ml-2 text-green-500">(You Save TK. 56)</span>
                        </div>
                        <div className="mt-2 flex items-center text-green-500">
                            <img src="https://www.rokomari.com/static/200/images/svg/in-stock(mini).svg" alt="" className="h-4 w-4 mr-1" />
                            In Stock (50+ copies available)
                        </div>
                        <div className="mt-5">
                            <span className="inline-flex items-center border border-green-500 text-green-500 font-semibold p-2 rounded-lg">
                                <img src="https://www.rokomari.com/static/200/images/icons/rok-icon-discount-green.svg" alt="" className="mr-2 h-6 w-6" />
                                InApp extra 3% off, use promocode: APPUSER
                            </span>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-500  gap-5">
                            <div className="flex items-center">

                                <div className="flex flex-col items-center text-center ml-5">
                                    <p className="mb-1">Book Length</p>
                                    <div className="circle mb-2 mt-2">
                                        <img src="https://www.rokomari.com/static/200/images/icons/svg/rok-icon-book-length.svg" alt="Book Length Icon" className="h-4 w-4 mr-2" />
                                    </div>
                                    <p className="mt-1">202 pages</p>
                                </div>

                            </div>

                                <div className="flex flex-col items-center text-center ml-5">
                                    <p className="mb-1">Edition</p>
                                    <div className="circle mb-2 mt-2">
                                        <img src="https://www.rokomari.com/static/200/images/icons/svg/rok-icon-edition.svg" alt="Book Length Icon" className="h-4 w-4 mr-2" />
                                    </div>
                                    <p className="mt-1">32th Edition</p>
                                </div>

                                <div className="flex flex-col items-center text-center ml-5">
                                    <p className="mb-1">Publication</p>
                                    <div className="circle mb-2 mt-2">
                                        <img src="https://www.rokomari.com/static/200/images/icons/svg/rok-icon-publication.svg" alt="Book Length Icon" className="h-4 w-4 mr-2" />
                                    </div>
                                    <p className="mt-1">আপসারা প্রকাশনী</p>
                                </div>

                                <div className="flex flex-col items-center text-center ml-5">
                                    <p className="mb-1">ISBN</p>
                                    <div className="circle mb-2 mt-2">
                                        <img src="https://www.rokomari.com/static/200/images/icons/svg/rok-icon-qrcode.svg" alt="Book Length Icon" className="h-4 w-4 mr-2" />
                                    </div>
                                    <p className="mt-1">9847016600173</p>
                                </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mt-4">
                            <div className="flex items-center">
                                <img src="https://www.rokomari.com/static/200/images/money-hand.png" alt="book icon" className="h-8 w-8 mr-2" />
                                <span className="text-sm text-gray-700 font-semi">বই হাতে পেয়ে মূল্য পরিশোধের সুযোগ</span>
                            </div>
                            <div className="flex items-center">
                                <img src="https://www.rokomari.com/static/200/images/happy-return-new.png" alt="money icon" className="h-8 w-8 mr-2" />
                                <span className="text-sm text-gray-700 font-semi">৭ দিনের মধ্যে পরিবর্তনের সুযোগ</span>
                            </div>
                        </div>
                        <div className="mt-4 flex gap-4">
                            <button className="h-[50px] w-[220px] text-green-500 border-solid border-[1px] border-green-500 px-2 py-1 hover:text-white hover:bg-green-500">
                                এক্ষুনি পড়ে দেখুন
                            </button>
                            <button 
                                className="flex items-center justify-center h-12 w-56 bg-blue-500 text-white border border-sky-500 px-2 py-1 hover:text-white hover:bg-btnback"
                                onClick={() => onAddToCart(product)}
                            >
                                <IoCartOutline className="text-3xl md:text-4xl lg:text-3xl mr-2" />
                                <span className="text-lg md:text-xl lg:text-1xl font-semibold">Add To Cart</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <RelatedProducts products={productsData.bestSellsItems.slice(0, 4)} />
            <FrequentlyBoughtTogether products={productsData.bestSellsItems.slice(4, 7)} />
        </div>
    );
};

const ShoppingCart = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 overflow-hidden">
            <div className="absolute inset-0 bg-gray-800 opacity-50"></div>
            <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
                <div className="w-screen max-w-md">
                    <div className="h-full divide-y divide-gray-200 flex flex-col bg-white shadow-xl">
                        <div className="flex-1 h-0 overflow-y-auto">
                            <div className="py-6 px-4 bg-indigo-700 sm:px-6">
                                <div className="flex items-center justify-between">
                                    <h2 className="text-lg font-medium text-white">Shopping Cart</h2>
                                    <div className="ml-3 flex h-7 items-center">
                                        <button 
                                            className="rounded-md bg-indigo-700 text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                                            onClick={onClose}
                                        >
                                            <span className="sr-only">Close panel</span>
                                            <svg 
                                                className="h-6 w-6" 
                                                xmlns="http://www.w3.org/2000/svg" 
                                                fill="none" 
                                                viewBox="0 0 24 24" 
                                                stroke="currentColor"
                                            >
                                                <path 
                                                    strokeLinecap="round" 
                                                    strokeLinejoin="round" 
                                                    strokeWidth="2" 
                                                    d="M6 18L18 6M6 6l12 12" 
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="mt-1">
                                    <p className="text-sm text-indigo-300">Review your cart items before checkout.</p>
                                </div>
                            </div>
                            <div className="flex-1 flex flex-col justify-between">
                                <div className="px-4 sm:px-6">
                                    <ul className="mt-6 space-y-4">
                                        <li className="flex py-6 space-x-6">
                                            <div className="h-24 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                <Image 
                                                    src="/path/to/image.jpg" 
                                                    alt="Product Image" 
                                                    className="h-full w-full object-cover object-center" 
                                                    width={80} 
                                                    height={100}
                                                />
                                            </div>
                                            <div className="flex flex-1 flex-col justify-between">
                                                <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                                                    <div>
                                                        <div className="flex justify-between">
                                                            <h3 className="text-sm">
                                                                <a href="#" className="font-medium text-gray-700 hover:text-gray-800">Book Title</a>
                                                            </h3>
                                                        </div>
                                                        <div className="mt-1 flex text-sm">
                                                            <p className="text-gray-500">Author Name</p>
                                                        </div>
                                                        <p className="mt-1 text-sm font-medium text-gray-900">TK 420</p>
                                                    </div>
                                                    <div className="mt-4 sm:mt-0 sm:pr-9">
                                                        <label htmlFor="quantity" className="sr-only">Quantity</label>
                                                        <select 
                                                            id="quantity" 
                                                            name="quantity" 
                                                            className="max-w-full rounded-md border border-gray-300 py-1.5 text-left text-base leading-5 text-gray-700 shadow-sm sm:text-sm"
                                                        >
                                                            <option value="1">1</option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                        </select>
                                                        <div className="absolute top-0 right-0">
                                                            <button 
                                                                type="button" 
                                                                className="-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500"
                                                            >
                                                                <span className="sr-only">Remove</span>
                                                                <svg 
                                                                    className="h-5 w-5" 
                                                                    xmlns="http://www.w3.org/2000/svg" 
                                                                    fill="none" 
                                                                    viewBox="0 0 24 24" 
                                                                    stroke="currentColor"
                                                                >
                                                                    <path 
                                                                        strokeLinecap="round" 
                                                                        strokeLinejoin="round" 
                                                                        strokeWidth="2" 
                                                                        d="M6 18L18 6M6 6l12 12" 
                                                                    />
                                                                </svg>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                        <p>Subtotal</p>
                                        <p>TK 420</p>
                                    </div>
                                    <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                                    <div className="mt-6">
                                        <a 
                                            href="#" 
                                            className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                                        >
                                            Checkout
                                        </a>
                                    </div>
                                    <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                        <p>
                                            or 
                                            <button 
                                                type="button" 
                                                className="font-medium text-indigo-600 hover:text-indigo-500"
                                                onClick={onClose}
                                            >
                                                Continue Shopping
                                                <span aria-hidden="true"> &rarr;</span>
                                            </button>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ProductDetailsPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const handleAddToCart = (product) => {
        console.log('Product added to cart:', product);
        setIsCartOpen(true);
    };

    useEffect(() => {
        if (id) {
            const foundProduct = productsData.bestSellsItems.find((item) => item.itemId == id);
            setProduct(foundProduct);
        }
    }, [id]);

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <>
            <BookDetails product={product} onAddToCart={handleAddToCart} />
            <ShoppingCart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        </>
    );
};

export default ProductDetailsPage;
