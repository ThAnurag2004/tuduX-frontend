import React from 'react';
import logo from '../../assets/logo.png';

function Footer() {
  return (
    <div className="w-full bg-gray-50 py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10 border-b pb-10">
        
        {/* Logo and Description */}
        <div className="flex-[2]">
          <img src={logo} alt="logo" className="h-12 mb-4" />
          <p className="text-gray-600 text-sm sm:text-base">
            The modern todo app that helps you organize your life with minimal design and maximum functionality. Get things done, beautifully.
          </p>
        </div>

        {/* Product Links */}
        <div className="flex-1">
          <h1 className="text-lg font-semibold mb-4">Product</h1>
          <ul className="text-gray-600 space-y-2">
            <li className="hover:text-gray-900 cursor-pointer">Features</li>
            <li className="hover:text-gray-900 cursor-pointer">Mobile App</li>
            <li className="hover:text-gray-900 cursor-pointer">Integrations</li>
            <li className="hover:text-gray-900 cursor-pointer">Updates</li>
          </ul>
        </div>

        {/* Company Links */}
        <div className="flex-1">
          <h1 className="text-lg font-semibold mb-4">Company</h1>
          <ul className="text-gray-600 space-y-2">
            <li className="hover:text-gray-900 cursor-pointer">About Us</li>
            <li className="hover:text-gray-900 cursor-pointer">Careers</li>
            <li className="hover:text-gray-900 cursor-pointer">Blog</li>
            <li className="hover:text-gray-900 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Support Links */}
        <div className="flex-1">
          <h1 className="text-lg font-semibold mb-4">Support</h1>
          <ul className="text-gray-600 space-y-2">
            <li className="hover:text-gray-900 cursor-pointer">Help Center</li>
            <li className="hover:text-gray-900 cursor-pointer">FAQ</li>
            <li className="hover:text-gray-900 cursor-pointer">Privacy Policy</li>
            <li className="hover:text-gray-900 cursor-pointer">Terms of Service</li>
          </ul>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="max-w-7xl mx-auto mt-6 flex flex-col sm:flex-row justify-between text-gray-500 text-sm gap-2">
        <p>© 2025 tuduX. All rights reserved.</p>
        <p className="text-right">Designed with ❤️ for productivity</p>
      </div>
    </div>
  );
}

export default Footer;
