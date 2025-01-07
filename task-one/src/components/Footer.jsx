import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="m-auto" >
      <footer className="bg-gray-900 text-white py-14 w-screen">
        <div className="container mx-auto flex flex-wrap justify-between px-4">
          <div className="w-full md:w-1/5 mb-6 md:mb-0"></div>
          <div className="w-full md:w-1/5 mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-4">Know about us</h2>
            <ul>
              <li>About us</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className="w-full md:w-1/5 mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-4">Other services</h2>
            <ul>
              <li>Wedding Bazaar</li>
              <li>Make my wedding</li>
            </ul>
          </div>
          <div className="w-full md:w-1/5 mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-4">You need to know</h2>
            <ul>
              <li>Sitemap</li>
              <li>Terms and conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="w-full md:w-1/5 mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-4">Follow us on</h2>
            <ul>
              <li className="inline-block mr-4">
                <FaInstagram size={24} />
              </li>
              <li className="inline-block mr-4">
                <FaFacebook size={24} />
              </li>
              <li className="inline-block mr-4">
                <FaTwitter size={24} />
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
