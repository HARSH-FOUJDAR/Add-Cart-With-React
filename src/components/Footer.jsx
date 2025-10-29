import React from "react";
import Download from "./Download";
const Footer = () => {
  return (
    <footer className="bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Section 1 */}
          <div>
            <h5 className="text-lg font-semibold mb-4">Section</h5>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Home</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Features</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Pricing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">FAQs</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">About</a></li>
            </ul>
          </div>

          {/* Section 2 */}
          <div>
            <h5 className="text-lg font-semibold mb-4">Section</h5>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Home</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Features</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Pricing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">FAQs</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">About</a></li>
            </ul>
          </div>

          {/* Section 3 */}
          <div>
            <h5 className="text-lg font-semibold mb-4">Section</h5>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Home</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Features</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Pricing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">FAQs</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">About</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-2">
            <h5 className="text-lg font-semibold mb-4">Subscribe to our newsletter</h5>
            <p className="text-gray-600 mb-4">Monthly digest of what's new and exciting from us.</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <label htmlFor="newsletter" className="sr-only">Email address</label>
              <input
                id="newsletter"
                type="email"
                placeholder="Email address"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-10 border-t pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-500">© 2025 Company, Inc. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            {/* Instagram */}
            <a href="#" className="text-gray-500 hover:text-gray-900" aria-label="Instagram">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465 1.054-.048 1.37-.058 4.041-.058h.08zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27z" />
              </svg>
            </a>
            {/* Facebook */}
            <a href="#" className="text-gray-500 hover:text-gray-900" aria-label="Facebook">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
          </div>
        </div>
           
      </div>
      
    </footer>

  );
};

export default Footer;
