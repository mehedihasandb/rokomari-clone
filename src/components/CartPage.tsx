"use client";
import React, { useState, useEffect } from 'react';
import { CiHome } from 'react-icons/ci';
import $ from 'jquery';
import 'ion-rangeslider/css/ion.rangeSlider.min.css';
import 'ion-rangeslider/js/ion.rangeSlider.min.js';
import '@/app/css/globals.css';

function ProductItem({ product, onChangeQuantity, quantity }) {
      return (
            <div className="border rounded-md p-4 mb-4">
                  <div className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <img src={product.image} alt={product.name} className="w-16 h-16 mr-4" />
                        <div>
                              <h3 className="text-lg font-bold">{product.name}</h3>
                              <p className="text-gray-600">{product.description}</p>
                        </div>
                  </div>
                  <div className="flex justify-between mt-4">
                        <div className="flex items-center">
                              <button onClick={() => onChangeQuantity(product, Math.max(1, quantity - 1))} className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded-l-md">
                                    -
                              </button>
                              <input
                                    type="number"
                                    className="w-12 text-center justify-evenly border border-gray-300 rounded-none px-2 py-2"
                                    value={quantity}
                                    onChange={(e) => onChangeQuantity(product, parseInt(e.target.value, 10))}
                              />
                              <button onClick={() => onChangeQuantity(product, quantity + 1)} className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded-r-md">
                                    +
                              </button>
                        </div>
                        <div>
                              <span className="text-lg font-bold">{product.price} Tk.</span>
                              {product.discount && (
                                    <span className="text-red-500 line-through ml-2">{product.originalPrice} Tk.</span>
                              )}
                        </div>
                  </div>
            </div>
      );
}


function CheckoutSummary({ total, subtotal, shipping }) {
      return (
            <div className="border rounded-md p-4 mb-4">
                  <h2 className="text-lg font-bold mb-4">Checkout Summary</h2>
                  <ul>
                        <li className="flex justify-between mb-2">
                              <span>Subtotal</span>
                              <span>{subtotal} Tk.</span>
                        </li>
                        <li className="flex justify-between mb-2">
                              <span>Shipping</span>
                              <span>{shipping} Tk.</span>
                        </li>
                        <li className="flex justify-between mb-2 font-bold">
                              <span>Total</span>
                              <span>{total} Tk.</span>
                        </li>
                  </ul>
                  <div className="mt-4">
                        <span className="font-bold">Payable Total:</span>
                        <span className="ml-2">{total} Tk.</span>
                  </div>

            </div>
      );
}

function ShippingDetails() {
      return (
            <div className="border rounded-md p-4 mb-4">
                  <h2 className="text-lg font-bold mb-4">Shipping Details</h2>
                  <ul className="list-disc ml-4">
                        <li>ক্যাশ অন ডেলিভারি</li>
                        <li>৭ দিনের মধ্যে পণ্য ফেরত সুবিধা</li>
                        <li>১০০% টাকা ফেরত গ্যারান্টি</li>
                        <li>অর্ডার করে পয়েন্টস জিতুন</li>
                        <li>১০০% অরিজিনাল প্রোডাক্ট</li>
                  </ul>
            </div>
      );
}

function CartPage() {
      const products = [
            {
                  name: "ড্রিন'স মৌলিক GK",
                  description: "মোঃ আবু সাঈম",
                  image: "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Drills_Basic_GK-Md_Abu_Salek_-35c5b-346067.png",
                  price: "325",
                  discount: true,
                  originalPrice: "500",
            },
            {
                  name: "হায়াতের দিন ফুরোলে",
                  description: "আরিফ আজাদ",
                  image: "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Hayater_Din_Furole-Arif_Azad-71002-372019.jpg",
                  price: "248",
                  discount: true,
                  originalPrice: "330",
            },
      ];

      const [selectedProducts, setSelectedProducts] = useState([]);
      const [cartTotal, setCartTotal] = useState(0);
      const [quantities, setQuantities] = useState(products.reduce((acc, product) => ({ ...acc, [product.name]: 1 }), {}));

      useEffect(() => {
            calculateCartTotal();
      }, [selectedProducts, quantities]);

      const handleCheckboxChange = (e, product) => {
            if (e.target.checked) {
                  setSelectedProducts([...selectedProducts, product]);
            } else {
                  setSelectedProducts(selectedProducts.filter((p) => p !== product));
            }
      };

      const calculateCartTotal = () => {
            let total = 0;
            selectedProducts.forEach((product) => {
                  total += parseFloat(product.price) * quantities[product.name];
            });
            setCartTotal(total);
      };

      const handleQuantityChange = (product, quantity) => {
            setQuantities({ ...quantities, [product.name]: quantity });
      };

      const handleOrderAsGift = () => {
            // Implement order as gift functionality
            console.log("Order as Gift clicked");
      };

      const handleCheckout = () => {
            // Implement checkout functionality
            console.log("Checkout clicked");
      };

      return (
            <div className="container mx-auto px-4 py-8 space-y-6 md:space-y-0 md:flex md:space-x-6">
                  <div className="md:w-3/5">
                        <div className="relative flex shadow-md p-4 mb-4">
                              <div>
                                    <input type="checkbox" className="mr-2" />
                                    <span>Select All ({selectedProducts.length} Item)</span>
                              </div>
                              <div className="absolute end-0">
                                    <span className="text-lg font-bold">
                                          Your total: <span className="text-green-500">{cartTotal} Tk.</span>
                                    </span>
                              </div>
                        </div>

                        <div className="grid grid-cols-1 gap-4">
                              {products.map((product) => (
                                    <ProductItem
                                          key={product.name}
                                          product={product}
                                          onChangeQuantity={handleQuantityChange}
                                          quantity={quantities[product.name]}
                                    />
                              ))}
                        </div>
                        <div className="relative flex justify-end mt-8 space-x-4 end-0">
                              <span className="absolute text-sm end-0">Apply Promo Code or Voucher Code on the Shipping Page</span>
                              <button onClick={handleOrderAsGift} className="bg-white-500 hover:bg-purple-700 text-purple-700 hover:text-white font-semibold border border-purple-700 py-2 px-4 rounded-sm">
                                    Order as a Gift
                              </button>

                              <button onClick={handleCheckout} className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-sm">
                                    Check Out
                              </button>
                        </div>
                  </div>

                  <div className="md:w-2/5 space-y-4">
                        <CheckoutSummary
                              total={cartTotal}
                              subtotal={cartTotal}
                              shipping={48}
                        />
                        <ShippingDetails />
                  </div>


            </div>
      );
}

export default CartPage;
