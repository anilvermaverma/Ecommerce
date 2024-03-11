import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 mt-14">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p>Add a brief description of your company or website.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="list-none">
              <li><a href="#" className="hover:text-gray-400">Home</a></li>
              <li><a href="#" className="hover:text-gray-400">About</a></li>
              <li><a href="#" className="hover:text-gray-400">Services</a></li>
              <li><a href="#" className="hover:text-gray-400">Contact</a></li>
              {/* Add more links as needed */}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p>Email: info@example.com</p>
            <p>Phone: +1234567890</p>
            <p>Address: 123 Street, City, Country</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4">
          <p className="text-center">&copy; 2024 Your Website. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
