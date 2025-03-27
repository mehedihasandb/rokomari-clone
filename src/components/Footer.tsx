import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-8 bg-white border-t  pb-16">
      <div className="container mx-auto px-4 py-8">
        <div className="mr-[160px] ml-[130px] flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <img src="https://www.rokomari.com/static/200/images/svg/ows_logo.svg" alt="Logo" className="h-10 mb-4" />
            <div className="text-sm">
              <p>Contact us at <a href="mailto:care@rokomari.com" className="text-gray-700 hover:text-blue-500">care@rokomari.com</a></p>
              <p>Corporate Sales: <a href="mailto:sales@rokomari.com" className="text-gray-700 hover:text-blue-500">sales@rokomari.com</a></p>
              <p>Retailer Only: <a href="mailto:wholesale@rokomari.com" className="text-gray-700 hover:text-blue-500">wholesale@rokomari.com</a></p>
              <p>Phone: <a href="tel:01708166238" className="text-gray-700 hover:text-blue-500">01708-166238</a></p>
              <p>Email: <a href="mailto:admin@rokomari.com" className="text-gray-700 hover:text-blue-500">admin@rokomari.com</a></p>
            </div>
          </div>
          <div className="w-full md:w-3/4 flex flex-wrap justify-between">
            <div className="w-full md:w-1/6 mb-4 md:mb-0">
              <h4 className="font-bold mb-2">Home</h4>
              <ul className="text-sm">
                <li><a href="#" className="text-gray-700 hover:text-blue-500">Books</a></li>
                <li><a href="#" className="text-gray-700 hover:text-blue-500">Electronics</a></li>
                <li><a href="#" className="text-gray-700 hover:text-blue-500">Accessories</a></li>
                <li><a href="#" className="text-gray-700 hover:text-blue-500">Gift Voucher</a></li>
                <li><a href="#" className="text-gray-700 hover:text-blue-500">Stationery</a></li>
              </ul>
            </div>
            <div className="w-full md:w-1/6 mb-4 md:mb-0">
              <h4 className="font-bold mb-2">Shop by</h4>
              <ul className="text-sm">
                <li><a href="#" className="text-gray-700 hover:text-blue-500">Books</a></li>
                <li><a href="#" className="text-gray-700 hover:text-blue-500">Electronics</a></li>
                <li><a href="#" className="text-gray-700 hover:text-blue-500">Accessories</a></li>
                <li><a href="#" className="text-gray-700 hover:text-blue-500">Gift Voucher</a></li>
                <li><a href="#" className="text-gray-700 hover:text-blue-500">Stationery</a></li>
              </ul>
            </div>

            <div className="w-full md:w-1/6 mb-4 md:mb-0">
              <h4 className="font-bold mb-2">Products</h4>
              <ul className="text-sm">
                <li><a href="#" className="text-gray-700 hover:text-blue-500">Authors</a></li>
                <li><a href="#" className="text-gray-700 hover:text-blue-500">Publishers</a></li>
                <li><a href="#" className="text-gray-700 hover:text-blue-500">List</a></li>
                <li><a href="#" className="text-gray-700 hover:text-blue-500">Reviews</a></li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 mb-4 md:mb-0">
              <h4 className="font-bold mb-2">Get to know us</h4>
              <ul className="text-sm">
                <li><a href="#" className="text-gray-700 hover:text-blue-500">About Us</a></li>
                <li><a href="#" className="text-gray-700 hover:text-blue-500">Site Map</a></li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 mb-4 md:mb-0">
              <h4 className="font-bold mb-2">Stay Connected</h4>
              <div className="flex space-x-4">
                <a href="#"><img src="https://www.rokomari.com/static/200/images/facebook.png" alt="Facebook" className="h-6" /></a>
                <a href="#"><img src="https://www.rokomari.com/static/200/images/twitter.png" alt="Twitter" className="h-6" /></a>
                <a href="#"><img src="https://www.rokomari.com/static/200/images/linkedin.png" alt="LinkedIn" className="h-6" /></a>
                <a href="#"><img src="https://www.rokomari.com/static/200/images/instagram.png" alt="Instagram" className="h-6" /></a>
                <a href="#"><img src="https://www.rokomari.com/static/200/images/youtube.png" alt="YouTube" className="h-6" /></a>
              </div>

              <div className="pt-5 flex items-center">
                <img src="https://www.rokomari.com/static/200/images/icon-rok.png" alt="Rokomari Icon" className="w-10 h-10" />
                <span className="ml-5 text-[18px] font-bold pt-1">Download App</span>
              </div>


              <div className="flex space-x-4 mt-4">
                <a href="#">
                  <img
                    src="https://www.rokomari.com/static/200/images/icon-app-store.png"
                    alt="App Store"
                    className="h-10"
                  />
                </a>
                <a href="#">
                  <img
                    src="https://www.rokomari.com/static/200/images/icon-play-store.png"
                    alt="Play Store"
                    className="h-10"
                  />
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
