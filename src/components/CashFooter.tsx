import React from 'react';

const CashFooter = () => {
    return (
        <div className="flex flex-wrap justify-center items-center pt-6 pb-8">
            <div className="item flex items-center">
                <img src="https://www.rokomari.com/static/200/images/svg/cod-small.svg" alt="cash" className="w-8 h-8" />
                <div className="content ml-3">
                    <p className="uppercase font-normal">Cash on delivery</p>
                    <p className="text-sm font-thin">Pay cash at your doorstep</p>
                </div>
            </div>

            <div className="item flex items-center ml-5">
                <img src="https://www.rokomari.com/static/200/images/svg/delivery_icon.svg" alt="service" className="w-8 h-8" />
                <div className="content ml-3">
                    <p className="uppercase font-normal">Delivery</p>
                    <p className="text-sm font-thin">All over Bangladesh</p>
                </div>
            </div>

            <div className="item flex items-center ml-5">
                <img src="https://www.rokomari.com/static/200/images/svg/happy-return-big.svg" alt="return" className="w-8 h-8" />
                <div className="content ml-3">
                    <p className="uppercase font-normal">Happy return</p>
                    <p className="text-sm font-thin">7 days return facility</p>
                </div>
            </div>
        </div>
    );
};

export default CashFooter;