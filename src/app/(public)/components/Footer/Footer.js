// Footer.jsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagramSquare,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import {
  IoLocationOutline,
  IoMailOutline,
  IoCallOutline,
} from "react-icons/io5";

// Payment method images (local imports - ensure these paths are correct)
import mastercard from "../../../../../public/assets/images/mastercard.png";
import rupay from "../../../../../public/assets/images/rupay.png";
import visa from "../../../../../public/assets/images/visa.png";
import bhimupi from "../../../../../public/assets/images/bhimupi.png";
import logo from "../../../../../public/assets/images/logo.png";
import qrBanner from "../../../../../public/assets/images/QR_banner.jpeg";

const Footer = () => {
  const paymentMethods = [
    { name: "mastercard", image: mastercard },
    { name: "visa", image: visa },
    { name: "rupay", image: rupay },
    { name: "bhim", image: bhimupi }, // Use bhimupi here
  ];

  const quickLinks = [
    "Home",
    "About Us",
    "About Ashram",
    "Rooms",
    "Amenities",
    "Gallery",
    "Contact",
  ];

  return (
    <footer className="relative bg-gradient-to-r from-orange-50 to-amber-100 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}

          <div className="flex flex-col items-start ">
            <Image
              src={logo}
              alt="Sahajanand Wellness Trust"
              width={200}
              className="mb-4 w-fit"
            />
            <p className="text-gray-700 mt-3 leading-relaxed">
              Sahajanand Wellness Trust, a registered religious trust in
              Uttarakhand, is dedicated to religious, educational, and
              health-related activities in Rishikesh.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-orange-800 font-semibold text-lg mb-4 border-b border-orange-300 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((item) => (
                <li
                  key={item}
                  className="text-gray-700 hover:text-main-color transition-colors flex items-center"
                >
                  <IoIosArrowForward className="text-main-color" />

                  <Link href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-orange-800 font-semibold text-lg mb-4 border-b border-orange-300 pb-2">
              Connect With Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <IoLocationOutline
                  className="text-orange-500 mt-1 flex-shrink-0"
                  size={20}
                />
                <span className="text-gray-700">
                  Street No.13, Shisham Jhadi, Muni Ki Reti, Near Ganga Kinare,
                  Rishikesh U.K . Pin Code: 249201
                </span>
              </li>
              <li className="flex items-start gap-2">
                <IoMailOutline
                  className="text-orange-500 mt-0.5 flex-shrink-0"
                  size={20}
                />
                <a
                  href="mailto:swaminarayantb@gmail.com"
                  className="text-gray-700 hover:text-main-color"
                >
                  swaminarayantb@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <IoCallOutline
                  className="text-orange-500 mt-0.5 flex-shrink-0"
                  size={20}
                />
                <a
                  href="tel:+918511151708"
                  className="text-gray-700 hover:text-main-color"
                >
                  +91 8511151708
                </a>
              </li>
              <li className="flex items-start gap-2">
                <IoCallOutline
                  className="text-orange-500 mt-0.5 flex-shrink-0"
                  size={20}
                />
                <a
                  href="tel:+911353595424"
                  className="text-gray-700 hover:text-main-color"
                >
                  +91 1353595424
                </a>
              </li>
            </ul>
          </div>

          {/* Payment Methods */}
          <div>
            <div className="">
              <h3 className="text-orange-800 font-semibold mb-2text-orange-800 text-lg mb-4 border-b border-orange-300 pb-2">
                Scan to Donate
              </h3>
              <div className="bg-white p-2 rounded-md shadow-sm inline-block">
                <Image
                  src={qrBanner}
                  alt="Donation QR Code"
                  width={150}
                  height={150}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex md:flex-row flex-col justify-between lg:items-center items-start md:gap-12 gap-6">
          <div className="flex-1/2">
            <h4 className="text-orange-800 font-semibold mb-4">
              We Accept Payment Methods
            </h4>
            <div className="flex flex-wrap gap-2">
              {paymentMethods.map((payment) => (
                <div
                  key={payment.name}
                  className="bg-white p-2 rounded-md shadow-sm w-28 flex items-center justify-center"
                >
                  <Image
                    src={payment.image}
                    alt={payment.name}
                    width={40}
                    height={40}
                    className="object-contain h-6"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className=" flex-1/2">
          <h4 className="text-orange-800 font-semibold mb-4">
              Connect with us
            </h4>
          <div className="flex items-center gap-4 ">
            <Link
              href="https://facebook.com/sahajanandwellness"
              className=" border border-orange-200 bg-orange-100 hover:bg-orange-200 p-2 rounded-full transition-colors"
              aria-label="Facebook"
              target="_blank"
            >
              <FaFacebook size={22} color="#e67e22" />
            </Link>
            <Link
              href="https://instagram.com/sahajanandwellness"
              className=" border border-orange-200 bg-orange-100 hover:bg-orange-200 p-2 rounded-full transition-colors"
              aria-label="Instagram"
              target="_blank"
            >
              <FaInstagramSquare size={22} color="#e67e22" />
            </Link>
            <Link
              href="https://twitter.com/sahajanandwellness"
              className=" border border-orange-200 bg-orange-100 hover:bg-orange-200 p-2 rounded-full transition-colors"
              aria-label="Twitter"
              target="_blank"
            >
              <FaTwitter size={22} color="#e67e22" />
            </Link>
            <Link
              href="https://youtube.com/sahajanandwellness"
              className=" border border-orange-200 bg-orange-100 hover:bg-orange-200 p-2 rounded-full transition-colors"
              aria-label="Youtube"
              target="_blank"
            >
              <FaYoutube size={22} color="#e67e22" />
            </Link>
          </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex md:flex-row flex-col items-center justify-between mt-10 border-t border-orange-200 pt-6">
          <p className="text-orange-800 text-center font-semibold">
            Made by Apexture Pvt.Ltd.
          </p>
          <p className="text-orange-800 font-semibold md:mt-0 mt-4 text-center">
              © {new Date().getFullYear()} Sahajanand Wellness Trust. All rights reserved.
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
