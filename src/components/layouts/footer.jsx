import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black  text-white py-10 px-4 md:px-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-3">Exclusive</h3>
          <p className="mb-2">Subscribe</p>
          <p className="mb-4 text-sm">Get 10% off your first order</p>
          <form className="flex items-center border border-gray-500 rounded overflow-hidden">
            <input type="email" placeholder="Enter your email" className="w-full px-3 py-2 bg-black text-white focus:outline-none" />
            <button type="submit" className=" px-3 py-2">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
            <path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z"/>
            </svg>
            </button>
          </form>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Support</h3>
          <p className="text-sm mb-1">111 Bijoy sarani, Dhaka,</p>
          <p className="text-sm mb-1">DH 1515, Bangladesh.</p>
          <p className="text-sm mb-1">exclusive@gmail.com</p>
          <p className="text-sm">+88015-88888-9999</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Account</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">My Account</a></li>
            <li><a href="#" className="hover:underline">Login / Register</a></li>
            <li><a href="#" className="hover:underline">Cart</a></li>
            <li><a href="#" className="hover:underline">Wishlist</a></li>
            <li><a href="#" className="hover:underline">Shop</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Link</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms Of Use</a></li>
            <li><a href="#" className="hover:underline">FAQ</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Download App</h3>
          <p className="text-sm mb-2">Save $3 with App New User Only</p>
          <div className="flex gap-2 mb-3">
            <img src="/src/assets/Qr Code.png" alt="QR Code" className="w-20 h-20" />
            <div className="flex flex-col justify-between">
              <img src="/src/assets/png-transparent-google-play-store-logo-google-play-app-store-android-wallets-text-label-logo.png" alt="Google Play" className="w-24" />
              <img src="/src/assets/download-appstore.png" alt="App Store" className="w-24" />
            </div>
          </div>
          <div className="flex gap-4 text-xl">
           <img src="/src/assets/links.png" alt="" />
          </div>
        </div>
      </div>

      <div className="text-center mt-10 text-sm border-t text-gray-500 border-gray-700 pt-4">
        &copy; Copyright Rimel 2022. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
