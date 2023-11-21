import React, { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="bg-gray-900 text-white p-8">
      <div className="container mx-auto flex justify-between">
        <div className="w-1/3">
          <h2 className="text-2xl font-bold mb-4">KarirKedua</h2>
          <p>Empowering Senior Citizen</p>
        </div>

        {/* <div className="w-1/3">
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <p>Email: info@company.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>

        <div className="w-1/3">
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div> */}
      </div>

      {/* <div className="mt-8 text-center">
        <p>
          &copy; {new Date().getFullYear()} Company Name. All rights reserved.
        </p>
      </div> */}
    </footer>
  );
};

export default Footer;
