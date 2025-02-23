import React from 'react';
import { FaInstagram, FaWhatsapp, FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#374151]  text-white py-8 px-4 md:px-8 lg:px-12"> {/* Darker background */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">

        <div className="mb-4 md:mb-0 text-center md:text-left"> {/* Align text left on medium screens and up */}
          <p className="text-sm">&copy; {currentYear} Mind Care. All rights reserved.</p>
        </div>

        <div className="flex space-x-6 mb-4 md:mb-0"> {/* Social media icons container */}
          <a href="#" className="hover:text-gray-300 hover:underline  "> {/* Add your social media links */}
          <FaInstagram/>
          </a>
          <a href="#" className="hover:text-gray-300 hover:underline ">
            <FaWhatsapp/>
          </a>
          <a href="#" className="hover:text-gray-300 hover:underline ">
             <FaTwitter/>
          </a>
          <a href="#" className="hover:text-gray-300 hover:underline ">
             <FaLinkedin/>
          </a>
          <a href="#" className="hover:text-gray-300 hover:underline ">
             <FaFacebook/>
          </a>
        </div>

        <div className="flex flex-col md:flex-row space-x-0 md:space-x-6 text-center md:text-left"> {/* Footer links */}
          <a href="#" className="hover:text-gray-300 hover:underline mb-2 md:mb-0 ">About Us</a>
          <a href="#" className="hover:text-gray-300 hover:underline mb-2 md:mb-0">Careers</a>
          <a href="#" className="hover:text-gray-300 hover:underline mb-2 md:mb-0">Privacy Policy</a>
          <a href="#" className="hover:text-gray-300 hover:underline">Media Center</a>
          <a href="#" className="hover:text-gray-300 hover:underline">Foundation</a>
          <a href="#" className="hover:text-gray-300 hover:underline">Investor Relations</a>
          <a href="#" className="hover:text-gray-300 hover:underline">Partnership Inquiries</a> {/* Corrected spelling */}
        </div>

      </div>
    </footer>
  );
};

export default Footer;