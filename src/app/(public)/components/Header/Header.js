// // components/Header.js
// import Link from 'next/link';

// function Header() {
//   return (
//     <header> {/* Apply the style */}
//       <nav>
//         <Link href="/">Home</Link>
//         <Link href="/about">About</Link>
//         <Link href="/contact">Contact</Link>
//       </nav>
//     </header>
//   );
// }

// export default Header;

// "use client";

// import { useState, useRef, useEffect } from "react";
// import Link from "next/link";
// import { motion, AnimatePresence } from "framer-motion";
// import { FaBars, FaTimes } from "react-icons/fa"; //Imported FaTimes
// import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

// import Image from "next/image";
// import logo from "../../../../../public/assets/images/logo.png";

// const navigation = [
//   { name: "Home", href: "/" },
//   { name: "Rooms", href: "/rooms" },
//   {
//     name: "About Us",
//     href: "/about",
//     children: [
//       { name: "About Ashram", href: "/about/ashram" },
//       { name: "Rishikesh City", href: "/about/rishikesh-city" },
//       { name: "Main Temples", href: "/about/main-temples" },
//       { name: "Place To Visit", href: "/about/places-to-visit" },
//     ],
//   },
//   { name: "Amenities", href: "/amenities" },
//   { name: "Gallery", href: "/gallery" },
//   { name: "Contact Us", href: "/contact" },
//   // { name: "Booking List", href: "/booking" },
// ];

// const dropdownVariants = {
//   initial: { opacity: 0, y: -10, scale: 0.95 },
//   animate: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: { duration: 0.2, ease: "easeInOut" },
//   },
//   exit: {
//     opacity: 0,
//     y: -10,
//     scale: 0.95,
//     transition: { duration: 0.15, ease: "easeInOut" },
//   },
// };

// function Header() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
//   const [isMobileAboutDropdownOpen, setIsMobileAboutDropdownOpen] =
//     useState(false); // for mobile dropdown
//   const aboutButtonRef = useRef(null);
//   const mobileAboutButtonRef = useRef(null); // mobile ref
//   const mobileMenuRef = useRef(null);

//   // Click outside for desktop About Us dropdown
//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (
//         aboutButtonRef.current &&
//         !aboutButtonRef.current.contains(event.target)
//       ) {
//         setIsAboutDropdownOpen(false);
//       }
//     }

//     document.addEventListener("mousedown", handleClickOutside);

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   // Click outside for mobile About Us dropdown
//   useEffect(() => {
//     function handleClickOutsideMobile(event) {
//       if (
//         mobileAboutButtonRef.current &&
//         !mobileAboutButtonRef.current.contains(event.target)
//       ) {
//         setIsMobileAboutDropdownOpen(false);
//       }
//     }

//     document.addEventListener("mousedown", handleClickOutsideMobile);

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutsideMobile);
//     };
//   }, []);

//   // Click outside for mobile menu
//   useEffect(() => {
//     function handleClickOutsideMobileMenu(event) {
//       if (
//         mobileMenuRef.current &&
//         !mobileMenuRef.current.contains(event.target)
//       ) {
//         setIsMobileMenuOpen(false);
//       }
//     }

//     document.addEventListener("mousedown", handleClickOutsideMobileMenu);

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutsideMobileMenu);
//     };
//   }, [isMobileMenuOpen]);

//   return (
//     <header className="bg-white shadow-md">
//       <div className="container mx-auto px-4">
//         <div className="py-2 flex items-center justify-between">
//           {/* Logo (Left) */}
//           <Link href="/">
//             <Image src={logo} alt="Sahajanand-Wellness" height={100} />
//           </Link>

//           {/* Desktop Navigation (Right) */}
//           <nav className="hidden lg:flex items-center space-x-6">
//             {navigation.map((item) =>
//               item.children ? (
//                 <div key={item.name} className="relative" ref={aboutButtonRef}>
//                   <button
//                     onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
//                     className="hover:text-main-color font-medium focus:outline-none flex items-center"
//                   >
//                     {item.name}{" "}
//                     {isAboutDropdownOpen ? (
//                       <IoIosArrowUp  className="w-4 h-4 ml-1" />
//                     ) : (
//                       <IoIosArrowDown className="w-4 h-4 ml-1" />
//                     )}
//                   </button>

//                   <AnimatePresence>
//                     {isAboutDropdownOpen && (
//                       <motion.div
//                         className="absolute top-16 mt-1.5 left-0 w-52 bg-white border border-gray-200 rounded-xl shadow-lg z-20 p-2"
//                         variants={dropdownVariants}
//                         initial="initial"
//                         animate="animate"
//                         exit="exit"
//                       >
//                         {item.children.map((child) => (
//                           <Link
//                             key={child.name}
//                             href={child.href}
//                             className="block px-4 py-2 rounded-lg hover:bg-main-color hover:text-white"
//                           >
//                             {child.name}
//                           </Link>
//                         ))}
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </div>
//               ) : (
//                 <Link
//                   key={item.name}
//                   href={item.href}
//                   className="hover:text-main-color font-medium"
//                 >
//                   {item.name}
//                 </Link>
//               )
//             )}
//             <button className="bg-main-color hover:bg-orange-500 text-white font-medium py-2 px-4 rounded-md">
//               Send Inquiry
//             </button>
//           </nav>

//           {/* Mobile Menu Button */}
//           <div className="lg:hidden">
//             <button
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               className="text-main-color focus:outline-none"
//             >
//               <FaBars className="h-6 w-6" />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu (Slide-in) */}
//       <AnimatePresence>
//         {isMobileMenuOpen && (
//           <motion.div
//             ref={mobileMenuRef}
//             className="fixed top-0 left-0 h-full w-96 bg-white shadow-md z-20 lg:hidden flex flex-col justify-between"
//             initial={{ x: "-100%" }}
//             animate={{ x: 0, transition: { duration: 0.3, ease: "easeInOut" } }}
//             exit={{
//               x: "-100%",
//               transition: { duration: 0.2, ease: "easeInOut" },
//             }}
//           >
//             <div>
//               <div className="p-4 flex items-center justify-between">
//                 <Link href="/">
//                   <Image src={logo} alt="Sahajanand-Wellness" height={100} />
//                 </Link>
//                 <button
//                   onClick={() => setIsMobileMenuOpen(false)}
//                   className="text-gray-800 focus:outline-none"
//                 >
//                   <FaTimes className="h-6 w-6" />{" "}
//                   {/* Close icon on mobile menu*/}
//                 </button>
//               </div>
//               <nav className="flex flex-col space-y-4 p-4">
//                 {navigation.map((item) =>
//                   item.children ? (
//                     <div key={item.name} ref={mobileAboutButtonRef}>
//                       <button
//                         onClick={() =>
//                           setIsMobileAboutDropdownOpen(
//                             !isMobileAboutDropdownOpen
//                           )
//                         }
//                         className="hover:text-main-color font-medium focus:outline-none flex items-center w-full justify-between"
//                       >
//                         {item.name}
//                         {isMobileAboutDropdownOpen ? (
//                           <IoIosArrowUp className="w-4 h-4 ml-1" />
//                         ) : (
//                           <IoIosArrowDown className="w-4 h-4 ml-1" />
//                         )}
//                       </button>
//                       <AnimatePresence>
//                         {isMobileAboutDropdownOpen && (
//                           <motion.div
//                             className="mt-2 overflow-hidden bg-white border border-gray-200 rounded-xl shadow-lg p-2"
//                             variants={dropdownVariants}
//                             initial="initial"
//                             animate="animate"
//                             exit="exit"
//                           >
//                             {item.children.map((child) => (
//                               <Link
//                                 key={child.name}
//                                 href={child.href}
//                                 className="block px-4 py-2 rounded-lg hover:bg-main-color hover:text-white"
//                               >
//                                 {child.name}
//                               </Link>
//                             ))}
//                           </motion.div>
//                         )}
//                       </AnimatePresence>
//                     </div>
//                   ) : (
//                     <Link
//                       key={item.name}
//                       href={item.href}
//                       className="hover:text-main-color font-medium"
//                     >
//                       {item.name}
//                     </Link>
//                   )
//                 )}
//               </nav>
//             </div>
//             <div className="p-4">
//               <button className="bg-main-color w-full text-white font-medium py-2 px-4 rounded-md">
//                 Send Inquiry
//               </button>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// }

// export default Header;










"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa"; //Imported FaTimes
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import Image from "next/image";
import logo from "../../../../../public/assets/images/logo.png";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Rooms", href: "/rooms" },
  {
    name: "About Us",
    href: "/about",
    children: [
      { name: "About Ashram", href: "/ashram" },
      { name: "Rishikesh City", href: "/rishikesh-city" },
      { name: "Main Temples", href: "/main-temples" },
      { name: "Place To Visit", href: "/places-to-visit" },
    ],
  },
  { name: "Amenities", href: "/amenities" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact Us", href: "/contact" },
  // { name: "Booking List", href: "/booking" },
];

const dropdownVariants = {
  initial: { opacity: 0, y: -10, scale: 0.95 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.2, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    y: -10,
    scale: 0.95,
    transition: { duration: 0.15, ease: "easeInOut" },
  },
};

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isMobileAboutDropdownOpen, setIsMobileAboutDropdownOpen] =
    useState(false); // for mobile dropdown
  const aboutButtonRef = useRef(null);
  const mobileAboutButtonRef = useRef(null); // mobile ref
  const mobileMenuRef = useRef(null);

  // Click outside for desktop About Us dropdown (now handles hover out)
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        aboutButtonRef.current &&
        !aboutButtonRef.current.contains(event.target)
      ) {
        setIsAboutDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Click outside for mobile About Us dropdown
  useEffect(() => {
    function handleClickOutsideMobile(event) {
      if (
        mobileAboutButtonRef.current &&
        !mobileAboutButtonRef.current.contains(event.target)
      ) {
        setIsMobileAboutDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutsideMobile);

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideMobile);
    };
  }, []);

  // Click outside for mobile menu
  useEffect(() => {
    function handleClickOutsideMobileMenu(event) {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutsideMobileMenu);

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideMobileMenu);
    };
  }, [isMobileMenuOpen]);

  const handleAboutMouseEnter = () => {
    setIsAboutDropdownOpen(true);
  };

  const handleAboutMouseLeave = () => {
    setIsAboutDropdownOpen(false);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="py-2 flex items-center justify-between">
          {/* Logo (Left) */}
          <Link href="/">
            <Image src={logo} alt="Sahajanand-Wellness" height={100} />
          </Link>

          {/* Desktop Navigation (Right) */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navigation.map((item) =>
              item.children ? (
                <div
                  key={item.name}
                  className="relative"
                  ref={aboutButtonRef}
                  onMouseEnter={handleAboutMouseEnter}
                  onMouseLeave={handleAboutMouseLeave}
                >
                  <Link href={item.href}>
                    <span className="hover:text-main-color font-medium focus:outline-none flex items-center cursor-pointer">
                      {item.name}
                      {isAboutDropdownOpen ? (
                        <IoIosArrowUp className="w-4 h-4 ml-1" />
                      ) : (
                        <IoIosArrowDown className="w-4 h-4 ml-1" />
                      )}
                    </span>
                  </Link>

                  <AnimatePresence>
                    {isAboutDropdownOpen && (
                      <motion.div
                        className="absolute top-16 mt-1.5 left-0 w-52 bg-white border border-gray-200 rounded-xl shadow-lg z-30 p-2"
                        variants={dropdownVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block px-4 py-2 rounded-lg hover:bg-main-color hover:text-white"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="hover:text-main-color font-medium"
                >
                  {item.name}
                </Link>
              )
            )}
            <button className="bg-main-color hover:bg-orange-500 text-white font-medium py-2 px-4 rounded-md">
              Send Inquiry
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-main-color focus:outline-none"
            >
              <FaBars className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Slide-in) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            className="fixed top-0 left-0 h-full w-96 bg-white shadow-md z-50 lg:hidden flex flex-col justify-between"
            initial={{ x: "-100%" }}
            animate={{ x: 0, transition: { duration: 0.3, ease: "easeInOut" } }}
            exit={{
              x: "-100%",
              transition: { duration: 0.2, ease: "easeInOut" },
            }}
          >
            <div>
              <div className="p-4 flex items-center justify-between">
                <Link href="/">
                  <Image src={logo} alt="Sahajanand-Wellness" height={100} />
                </Link>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-800 focus:outline-none"
                >
                  <FaTimes className="h-6 w-6" />{" "}
                  {/* Close icon on mobile menu*/}
                </button>
              </div>
              <nav className="flex flex-col space-y-4 p-4">
                {navigation.map((item) =>
                  item.children ? (
                    <div key={item.name} ref={mobileAboutButtonRef}>
                      <Link href={item.href}>
                        <button
                          onClick={() =>
                            setIsMobileAboutDropdownOpen(
                              !isMobileAboutDropdownOpen
                            )
                          }
                          className="hover:text-main-color font-medium focus:outline-none flex items-center w-full justify-between"
                        >
                          {item.name}
                          {isMobileAboutDropdownOpen ? (
                            <IoIosArrowUp className="w-4 h-4 ml-1" />
                          ) : (
                            <IoIosArrowDown className="w-4 h-4 ml-1" />
                          )}
                        </button>
                      </Link>
                      <AnimatePresence>
                        {isMobileAboutDropdownOpen && (
                          <motion.div
                            className="mt-2 overflow-hidden bg-white border border-gray-200 rounded-xl shadow-lg p-2"
                            variants={dropdownVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                          >
                            {item.children.map((child) => (
                              <Link
                                key={child.name}
                                href={child.href}
                                className="block px-4 py-2 rounded-lg hover:bg-main-color hover:text-white"
                              >
                                {child.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="hover:text-main-color font-medium"
                    >
                      {item.name}
                    </Link>
                  )
                )}
              </nav>
            </div>
            <div className="p-4">
              <button className="bg-main-color w-full text-white font-medium py-2 px-4 rounded-md">
                Send Inquiry
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;