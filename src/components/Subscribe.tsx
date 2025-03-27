import React from 'react';

const Subscribe = () => {
    return (
        <div className="flex flex-col items-center justify-center bg-white h-28 mb-5 shadow-md">
            <div className="text-center font-medium text-lg">
                Subscribe and be a part of Rokomari and get exciting offers!
            </div>
            <div className="flex items-center mt-3">
                <input
                    type="text"
                    placeholder="Enter Your Email"
                    className="border border-gray-300 w-[520px] px-3 py-2 focus:outline-none"
                />
                <button className="px-4 py-2 bg-white text-blue-500 rounded-lg border border-blue-500 shadow hover:bg-blue-600 hover:text-white transition-colors duration-300 ml-2">
                    Subscribe
                </button>
            </div>
        </div>

    );
}

export default Subscribe;