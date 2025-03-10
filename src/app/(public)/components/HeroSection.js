// "use client";

// import React, { useState, useRef, useEffect } from "react";
// import { DatePickerDemo } from "../../../components/DatePickerDemo";
// import CustomDropdown from "../Dropdown";
// import { motion } from "framer-motion"; // Import framer-motion for animations

// const HeroSection = () => {
//   const [checkInDate, setCheckInDate] = useState(null);
//   const [checkOutDate, setCheckOutDate] = useState(null);
//   const [rooms, setRooms] = useState(1);
//   const [adultsPerRoom, setAdultsPerRoom] = useState([1]);
//   const [childrenPerRoom, setChildrenPerRoom] = useState([0]);
//   const [showGuestDropdown, setShowGuestDropdown] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState(null);

//   const guestButtonRef = useRef(null);
//   const guestDropdownRef = useRef(null);
//   const roomDetailsRef = useRef(null);

//   const handleCheckInChange = (date) => {
//     setCheckInDate(date);
//   };

//   const handleCheckOutChange = (date) => {
//     setCheckOutDate(date);
//   };

//   const handleRoomChange = (newRooms) => {
//     setRooms(newRooms);
//     setAdultsPerRoom(Array(newRooms).fill(1));
//     setChildrenPerRoom(Array(newRooms).fill(0));
//     setActiveDropdown(null);
//   };

//   const handleAdultsChange = (roomIndex, newAdults) => {
//     const updatedAdults = [...adultsPerRoom];
//     updatedAdults[roomIndex] = newAdults;
//     setAdultsPerRoom(updatedAdults);
//     setActiveDropdown(null);
//   };

//   const handleChildrenChange = (roomIndex, newChildren) => {
//     const updatedChildren = [...childrenPerRoom];
//     updatedChildren[roomIndex] = newChildren;
//     setChildrenPerRoom(updatedChildren);
//     setActiveDropdown(null);
//   };

//   const toggleGuestDropdown = () => {
//     setShowGuestDropdown((prev) => !prev);
//     setActiveDropdown(null);
//   };

//   const totalAdults = adultsPerRoom.reduce((sum, num) => sum + num, 0);
//   const totalChildren = childrenPerRoom.reduce((sum, num) => sum + num, 0);

//   const roomOptions = Array.from({ length: 5 }, (_, i) => i + 1).map((num) => ({
//     value: num,
//     label: num.toString(),
//   }));
//   const guestOptions = Array.from({ length: 5 }, (_, i) => i + 1).map(
//     (num) => ({
//       value: num,
//       label: num.toString(),
//     })
//   );
//   const childrenOptions = Array.from({ length: 5 }, (_, i) => i).map((num) => ({
//     value: num,
//     label: num.toString(),
//   }));

//   const toggleDropdown = (dropdownType) => {
//     setActiveDropdown((prevActive) =>
//       prevActive === dropdownType ? null : dropdownType
//     );
//   };

//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (
//         guestDropdownRef.current &&
//         !guestDropdownRef.current.contains(event.target) &&
//         guestButtonRef.current &&
//         !guestButtonRef.current.contains(event.target)
//       ) {
//         setShowGuestDropdown(false);
//         setActiveDropdown(null);
//       }
//     }

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [guestButtonRef, guestDropdownRef]);

//   useEffect(() => {
//     function handleClickOutsideCustomDropdown(event) {
//       if (
//         guestDropdownRef.current &&
//         !guestDropdownRef.current.contains(event.target)
//       ) {
//         setActiveDropdown(null);
//       }
//     }

//     document.addEventListener("mousedown", handleClickOutsideCustomDropdown);
//     return () => {
//       document.removeEventListener(
//         "mousedown",
//         handleClickOutsideCustomDropdown
//       );
//     };
//   }, [guestDropdownRef]);

//   return (
//     <motion.div
//       className="hero-section py-16 bg-cover bg-center relative"
//       style={{ backgroundImage: "url('assets/images/hero-bg.png')" }} // Replace with your image path
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.8 }}
//     >
//       <div className="container mx-auto px-4 relative z-10">
//         {" "}
//         {/* Position content above overlay */}
//         <div className="space-y-6 text-white">
//           <h1 className="text-4xl lg:text-7xl font-bold text-center capitalize">
//             Welcome to Sahajanand Wellness
//           </h1>
//           <p className="text-lg lg:text-2xl text-center w-full lg:w-3/4 mx-auto leading-relaxed">
//             Experience the peaceful atmosphere of Swaminarayan Ashram. Start
//             your journey by booking a comfortable hotel room nearby for added
//             privacy and amenities.
//           </p>
//           <p className="text-xl lg:text-3xl text-center capitalize italic font-semibold">
//             Wellness - The Best Gift to Yourself
//           </p>
//         </div>
//         <div className="flex justify-center mt-12">
//           <div className="bg-white bg-opacity-90 rounded-2xl shadow-xl p-8 w-full max-w-3xl">
//             <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
//               Book Your Retreat
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <label
//                   htmlFor="checkInDate"
//                   className="block text-base font-medium text-gray-700 mb-2"
//                 >
//                   Check-in Date
//                 </label>
//                 <DatePickerDemo
//                   date={checkInDate}
//                   onSelect={handleCheckInChange}
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="checkOutDate"
//                   className="block text-base font-medium text-gray-700 mb-2"
//                 >
//                   Check-out Date
//                 </label>
//                 <DatePickerDemo
//                   date={checkOutDate}
//                   onSelect={handleCheckOutChange}
//                 />
//               </div>
//             </div>

//             {/* Guest Input */}
//             <div className="relative mt-6">
//               <div
//                 className="border rounded-xl p-4 cursor-pointer flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
//                 onClick={toggleGuestDropdown}
//                 ref={guestButtonRef}
//               >
//                 <div>
//                   <span className="font-semibold text-gray-800">{rooms}</span>{" "}
//                   Rooms
//                 </div>
//                 <div>
//                   <span className="font-semibold text-gray-800">
//                     {totalAdults}
//                   </span>{" "}
//                   Adults
//                 </div>
//                 <div>
//                   <span className="font-semibold text-gray-800">
//                     {totalChildren}
//                   </span>{" "}
//                   Children
//                 </div>
//               </div>

//               {showGuestDropdown && (
//                 <motion.div
//                   className="absolute top-full left-0 bg-white shadow-md rounded-xl p-6 w-full z-10 mt-2"
//                   ref={guestDropdownRef}
//                   initial={{ opacity: 0, y: -10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -10 }}
//                   transition={{ duration: 0.2 }}
//                   style={{ maxHeight: '350px', overflowY: 'auto' }} // Added style for scrollable content
//                 >
//                   <CustomDropdown
//                     label="Rooms"
//                     id="rooms"
//                     value={rooms}
//                     onChange={(newRooms) => handleRoomChange(newRooms)}
//                     options={roomOptions}
//                     isOpen={activeDropdown === "rooms"}
//                     onToggle={() => toggleDropdown("rooms")}
//                   />

//                   <div ref={roomDetailsRef}>
//                     {Array.from({ length: rooms }).map((_, roomIndex) => (
//                       <div key={roomIndex} className="mt-4">
//                         <h3 className="text-lg font-semibold text-gray-700 mb-2">
//                           Room {roomIndex + 1}
//                         </h3>
//                         <div className="grid grid-cols-2 gap-4">
//                           <CustomDropdown
//                             label="Adults"
//                             id={`adults-${roomIndex}`}
//                             value={adultsPerRoom[roomIndex]}
//                             onChange={(newAdults) =>
//                               handleAdultsChange(roomIndex, newAdults)
//                             }
//                             options={guestOptions}
//                             isOpen={activeDropdown === `adults-${roomIndex}`}
//                             onToggle={() =>
//                               toggleDropdown(`adults-${roomIndex}`)
//                             }
//                           />

//                           <CustomDropdown
//                             label="Children"
//                             id={`children-${roomIndex}`}
//                             value={childrenPerRoom[roomIndex]}
//                             onChange={(newChildren) =>
//                               handleChildrenChange(roomIndex, newChildren)
//                             }
//                             options={childrenOptions}
//                             isOpen={activeDropdown === `children-${roomIndex}`}
//                             onToggle={() =>
//                               toggleDropdown(`children-${roomIndex}`)
//                             }
//                           />
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </motion.div>
//               )}
//             </div>

//             <button className="mt-8 w-full bg-main-color hover:bg-orange-500 text-white font-bold py-4 px-4 rounded-xl transition-colors duration-200">
//               Check Availability
//             </button>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default HeroSection;

// HeroSection.js
// HeroSection.js



// "use client";

// import React, { useState, useRef, useEffect } from "react";
// import { DatePickerDemo } from "../../../components/DatePickerDemo";
// import { motion, AnimatePresence } from "framer-motion";
// import { Users, Home, Moon, Sun, ChevronDown, Calendar, Check, X, ArrowRight } from "lucide-react";

// const HeroSection = () => {
//   const [checkInDate, setCheckInDate] = useState(null);
//   const [checkOutDate, setCheckOutDate] = useState(null);
//   const [rooms, setRooms] = useState(1);
//   const [adultsPerRoom, setAdultsPerRoom] = useState([1]);
//   const [childrenPerRoom, setChildrenPerRoom] = useState([0]);
//   const [showGuestDropdown, setShowGuestDropdown] = useState(false);
//   const [bookingStep, setBookingStep] = useState(0);
//   const [expandedRoom, setExpandedRoom] = useState(null);

//   const guestButtonRef = useRef(null);
//   const guestDropdownRef = useRef(null);

//   const handleCheckInChange = (date) => {
//     setCheckInDate(date);
//   };

//   const handleCheckOutChange = (date) => {
//     setCheckOutDate(date);
//   };

//   const handleRoomChange = (roomIndex, changeAmount) => {
//     const newCount = Math.max(1, adultsPerRoom[roomIndex] + changeAmount);
//     const updatedAdults = [...adultsPerRoom];
//     updatedAdults[roomIndex] = newCount;
//     setAdultsPerRoom(updatedAdults);
//   };

//   const handleChildrenChange = (roomIndex, changeAmount) => {
//     const newCount = Math.max(0, childrenPerRoom[roomIndex] + changeAmount);
//     const updatedChildren = [...childrenPerRoom];
//     updatedChildren[roomIndex] = newCount;
//     setChildrenPerRoom(updatedChildren);
//   };

//   const addRoom = () => {
//     if (rooms < 5) {
//       setRooms(rooms + 1);
//       setAdultsPerRoom([...adultsPerRoom, 1]);
//       setChildrenPerRoom([...childrenPerRoom, 0]);
//     }
//   };

//   const removeRoom = () => {
//     if (rooms > 1) {
//       setRooms(rooms - 1);
//       setAdultsPerRoom(adultsPerRoom.slice(0, -1));
//       setChildrenPerRoom(childrenPerRoom.slice(0, -1));
//     }
//   };

//   const toggleGuestDropdown = () => {
//     setShowGuestDropdown((prev) => !prev);
//   };

//   const totalAdults = adultsPerRoom.reduce((sum, num) => sum + num, 0);
//   const totalChildren = childrenPerRoom.reduce((sum, num) => sum + num, 0);

//   const nextStep = () => {
//     setBookingStep((prev) => Math.min(prev + 1, 2));
//   };

//   const prevStep = () => {
//     setBookingStep((prev) => Math.max(prev - 1, 0));
//   };

//   const toggleExpandRoom = (index) => {
//     setExpandedRoom(expandedRoom === index ? null : index);
//   };

//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (
//         guestDropdownRef.current &&
//         !guestDropdownRef.current.contains(event.target) &&
//         guestButtonRef.current &&
//         !guestButtonRef.current.contains(event.target)
//       ) {
//         setShowGuestDropdown(false);
//       }
//     }

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [guestButtonRef, guestDropdownRef]);

//   const stepVariants = {
//     initial: (direction) => ({
//       x: direction > 0 ? 100 : -100,
//       opacity: 0,
//     }),
//     animate: {
//       x: 0,
//       opacity: 1,
//       transition: {
//         x: { type: "spring", stiffness: 300, damping: 30 },
//         opacity: { duration: 0.2 },
//       },
//     },
//     exit: (direction) => ({
//       x: direction > 0 ? -100 : 100,
//       opacity: 0,
//       transition: {
//         x: { type: "spring", stiffness: 300, damping: 30 },
//         opacity: { duration: 0.2 },
//       },
//     }),
//   };

//   const roomCardWidth = expandedRoom !== null ? "scale-100" : "scale-95";

//   return (
//     <motion.div
//       className="hero-section py-16 bg-cover bg-center relative"
//       style={{ backgroundImage: "url('assets/images/hero-bg.png')" }}
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.8 }}
//     >
//       <div className="container mx-auto px-4 relative z-10">
//         <div className="space-y-6 text-white">
//           <h1 className="text-4xl lg:text-7xl font-bold text-center capitalize">
//             Welcome to Sahajanand Wellness
//           </h1>
//           <p className="text-lg lg:text-2xl text-center w-full lg:w-3/4 mx-auto leading-relaxed">
//             Experience the peaceful atmosphere of Swaminarayan Ashram. Start
//             your journey by booking a comfortable hotel room nearby for added
//             privacy and amenities.
//           </p>
//           <p className="text-xl lg:text-3xl text-center capitalize italic font-semibold">
//             Wellness - The Best Gift to Yourself
//           </p>
//         </div>

//         <div className="flex justify-center mt-12">
//           <div className="relative bg-white bg-opacity-80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 w-full max-w-4xl border border-gray-100 overflow-hidden">
//             {/* Decorative elements */}
//             <div className="absolute top-0 left-0 w-32 h-32 bg-main-color opacity-10 rounded-full -translate-x-16 -translate-y-16"></div>
//             <div className="absolute bottom-0 right-0 w-64 h-64 bg-orange-400 opacity-5 rounded-full translate-x-24 translate-y-24"></div>

//             <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800 flex items-center justify-center relative z-10">
//               <span className="inline-block bg-main-color text-white p-2 rounded-full mr-3">
//                 <Calendar size={20} />
//               </span>
//               Book Your Wellness Journey
//             </h2>

//             {/* Progress Indicator */}
//             <div className="relative mb-8 px-12">
//               <div className="h-1 bg-gray-200 rounded-full">
//                 <div
//                   className="h-1 bg-main-color rounded-full transition-all duration-500 ease-out"
//                   style={{ width: `${(bookingStep / 2) * 100}%` }}
//                 ></div>
//               </div>
//               <div className="flex justify-between -mt-2">
//                 {[0, 1, 2].map((step) => (
//                   <div
//                     key={step}
//                     className={`relative cursor-pointer transition-all duration-300 ${bookingStep >= step ? "scale-110" : "scale-100"}`}
//                     onClick={() => setBookingStep(step)}
//                   >
//                     <div
//                       className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
//                         bookingStep > step
//                           ? "bg-main-color border-main-color"
//                           : bookingStep === step
//                           ? "bg-white border-main-color"
//                           : "bg-white border-gray-300"
//                       }`}
//                     >
//                       {bookingStep > step && (
//                         <Check size={12} className="text-white" />
//                       )}
//                     </div>
//                     <span
//                       className={`absolute -bottom-7 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-xs font-medium ${
//                         bookingStep >= step ? "text-main-color" : "text-gray-400"
//                       }`}
//                     >
//                       {step === 0 ? "Dates" : step === 1 ? "Guests" : "Review"}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Main Content Area with Steps */}
//             <AnimatePresence initial={false} custom={bookingStep}>
//               <motion.div
//                 key={bookingStep}
//                 custom={bookingStep}
//                 variants={stepVariants}
//                 initial="initial"
//                 animate="animate"
//                 exit="exit"
//                 className="min-h-64"
//               >
//                 {bookingStep === 0 && (
//                   <div className="space-y-6">
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                       <div className="relative bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden group">
//                         <div className="absolute w-full h-1 bg-gradient-to-r from-orange-300 to-main-color top-0 left-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
//                         <div className="p-5 group-hover:border-main-color transition-colors duration-300 group-hover:shadow-md">
//                           <div className="flex items-center mb-4">
//                             <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center mr-3">
//                               <Moon size={16} className="text-orange-500" />
//                             </div>
//                             <label
//                               htmlFor="checkInDate"
//                               className="block text-base font-medium text-gray-700"
//                             >
//                               Check-in Date
//                             </label>
//                           </div>
//                           <DatePickerDemo
//                             date={checkInDate}
//                             onSelect={handleCheckInChange}
//                           />
//                         </div>
//                       </div>

//                       <div className="relative bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden group">
//                         <div className="absolute w-full h-1 bg-gradient-to-r from-orange-300 to-main-color top-0 left-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
//                         <div className="p-5 group-hover:border-main-color transition-colors duration-300 group-hover:shadow-md">
//                           <div className="flex items-center mb-4">
//                             <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center mr-3">
//                               <Sun size={16} className="text-orange-500" />
//                             </div>
//                             <label
//                               htmlFor="checkOutDate"
//                               className="block text-base font-medium text-gray-700"
//                             >
//                               Check-out Date
//                             </label>
//                           </div>
//                           <DatePickerDemo
//                             date={checkOutDate}
//                             onSelect={handleCheckOutChange}
//                           />
//                         </div>
//                       </div>
//                     </div>

//                     <div className="pt-6 flex justify-end">
//                       <button
//                         onClick={nextStep}
//                         className="px-6 py-3 bg-main-color text-white rounded-full flex items-center hover:shadow-lg transition-shadow duration-300"
//                         disabled={!checkInDate || !checkOutDate}
//                       >
//                         <span>Next: Guest Details</span>
//                         <ArrowRight size={16} className="ml-2" />
//                       </button>
//                     </div>
//                   </div>
//                 )}

//                 {bookingStep === 1 && (
//                   <div className="space-y-6">
//                     {/* Rooms Header */}
//                     <div className="flex justify-between items-center mb-6">
//                       <div className="flex items-center">
//                         <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center mr-3">
//                           <Home size={16} className="text-orange-500" />
//                         </div>
//                         <h3 className="text-lg font-semibold text-gray-800">Rooms & Guests</h3>
//                       </div>

//                       <div className="flex items-center">
//                         <button
//                           onClick={removeRoom}
//                           disabled={rooms <= 1}
//                           className={`w-10 h-10 rounded-full flex items-center justify-center ${
//                             rooms <= 1
//                               ? "bg-gray-100 text-gray-400"
//                               : "bg-orange-100 text-orange-600 hover:bg-orange-200"
//                           }`}
//                         >
//                           <span className="text-lg font-bold">-</span>
//                         </button>
//                         <span className="mx-3 font-medium text-lg">{rooms}</span>
//                         <button
//                           onClick={addRoom}
//                           disabled={rooms >= 5}
//                           className={`w-10 h-10 rounded-full flex items-center justify-center ${
//                             rooms >= 5
//                               ? "bg-gray-100 text-gray-400"
//                               : "bg-orange-100 text-orange-600 hover:bg-orange-200"
//                           }`}
//                         >
//                           <span className="text-lg font-bold">+</span>
//                         </button>
//                       </div>
//                     </div>

//                     {/* Rooms Display */}
//                     <div className="space-y-4">
//                       {Array.from({ length: rooms }).map((_, roomIndex) => (
//                         <motion.div
//                           key={roomIndex}
//                           layoutId={`room-${roomIndex}`}
//                           className={`relative rounded-xl transition-all duration-300 ${expandedRoom === roomIndex ? 'border-2 border-main-color shadow-lg' : 'border border-gray-200'}`}
//                           onClick={() => toggleExpandRoom(roomIndex)}
//                           whileHover={{ scale: 1.02 }}
//                           transition={{ type: "spring", stiffness: 400, damping: 17 }}
//                         >
//                           <div className="absolute top-0 right-0 left-0 h-16 bg-gradient-to-b from-orange-50 to-transparent rounded-t-xl" />

//                           <div className="p-4 relative">
//                             <div className="flex justify-between items-center mb-3">
//                               <h4 className="font-bold text-gray-800 flex items-center text-lg">
//                                 <span className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-400 to-main-color text-white flex items-center justify-center mr-2 text-sm shadow-sm">
//                                   {roomIndex + 1}
//                                 </span>
//                                 Wellness Room {roomIndex + 1}
//                               </h4>
//                               <ChevronDown
//                                 size={18}
//                                 className={`text-gray-500 transition-transform duration-300 ${expandedRoom === roomIndex ? 'rotate-180' : ''}`}
//                               />
//                             </div>

//                             <AnimatePresence>
//                               {expandedRoom === roomIndex && (
//                                 <motion.div
//                                   initial={{ height: 0, opacity: 0 }}
//                                   animate={{ height: "auto", opacity: 1 }}
//                                   exit={{ height: 0, opacity: 0 }}
//                                   transition={{ type: "spring", stiffness: 300, damping: 20 }}
//                                   className="overflow-hidden"
//                                 >
//                                   <div className="grid grid-cols-2 gap-4 pb-2">
//                                     <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
//                                       <div className="flex justify-between items-center mb-3">
//                                         <span className="font-medium text-gray-700 flex items-center">
//                                           <Users size={14} className="mr-1 text-main-color" />
//                                           Adults
//                                         </span>
//                                         <div className="flex items-center bg-gray-50 rounded-full overflow-hidden border border-gray-200">
//                                           <button
//                                             onClick={(e) => {
//                                               e.stopPropagation();
//                                               handleRoomChange(roomIndex, -1);
//                                             }}
//                                             disabled={adultsPerRoom[roomIndex] <= 1}
//                                             className={`w-8 h-8 flex items-center justify-center text-sm ${
//                                               adultsPerRoom[roomIndex] <= 1
//                                                 ? "text-gray-300"
//                                                 : "text-gray-700 hover:bg-gray-100"
//                                             }`}
//                                           >
//                                             -
//                                           </button>
//                                           <span className="w-8 text-center font-medium text-sm">
//                                             {adultsPerRoom[roomIndex]}
//                                           </span>
//                                           <button
//                                             onClick={(e) => {
//                                               e.stopPropagation();
//                                               handleRoomChange(roomIndex, 1);
//                                             }}
//                                             disabled={adultsPerRoom[roomIndex] >= 5}
//                                             className={`w-8 h-8 flex items-center justify-center text-sm ${
//                                               adultsPerRoom[roomIndex] >= 5
//                                                 ? "text-gray-300"
//                                                 : "text-gray-700 hover:bg-gray-100"
//                                             }`}
//                                           >
//                                             +
//                                           </button>
//                                         </div>
//                                       </div>

//                                       <div className="flex flex-wrap gap-1">
//                                         {[...Array(adultsPerRoom[roomIndex])].map((_, i) => (
//                                           <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-tr from-orange-300 to-main-color flex items-center justify-center shadow-sm">
//                                             <Users size={12} className="text-white" />
//                                           </div>
//                                         ))}
//                                       </div>
//                                     </div>

//                                     <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
//                                       <div className="flex justify-between items-center mb-3">
//                                         <span className="font-medium text-gray-700 flex items-center">
//                                           <Users size={12} className="mr-1 text-orange-400" />
//                                           Children
//                                         </span>
//                                         <div className="flex items-center bg-gray-50 rounded-full overflow-hidden border border-gray-200">
//                                           <button
//                                             onClick={(e) => {
//                                               e.stopPropagation();
//                                               handleChildrenChange(roomIndex, -1);
//                                             }}
//                                             disabled={childrenPerRoom[roomIndex] <= 0}
//                                             className={`w-8 h-8 flex items-center justify-center text-sm ${
//                                               childrenPerRoom[roomIndex] <= 0
//                                                 ? "text-gray-300"
//                                                 : "text-gray-700 hover:bg-gray-100"
//                                             }`}
//                                           >
//                                             -
//                                           </button>
//                                           <span className="w-8 text-center font-medium text-sm">
//                                             {childrenPerRoom[roomIndex]}
//                                           </span>
//                                           <button
//                                             onClick={(e) => {
//                                               e.stopPropagation();
//                                               handleChildrenChange(roomIndex, 1);
//                                             }}
//                                             disabled={childrenPerRoom[roomIndex] >= 4}
//                                             className={`w-8 h-8 flex items-center justify-center text-sm ${
//                                               childrenPerRoom[roomIndex] >= 4
//                                                 ? "text-gray-300"
//                                                 : "text-gray-700 hover:bg-gray-100"
//                                             }`}
//                                           >
//                                             +
//                                           </button>
//                                         </div>
//                                       </div>

//                                       <div className="flex flex-wrap gap-1">
//                                         {childrenPerRoom[roomIndex] > 0 ? (
//                                           [...Array(childrenPerRoom[roomIndex])].map((_, i) => (
//                                             <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-300 to-orange-400 flex items-center justify-center shadow-sm">
//                                               <Users size={10} className="text-white" />
//                                             </div>
//                                           ))
//                                         ) : (
//                                           <span className="text-xs text-gray-400 italic">No children</span>
//                                         )}
//                                       </div>
//                                     </div>
//                                   </div>

//                                   <div className="mt-4 p-3 rounded-lg bg-gray-50 border border-gray-200">
//                                     <div className="flex items-center justify-between text-sm">
//                                       <span className="text-gray-600">Room Amenities:</span>
//                                       <span className="text-main-color font-medium">Premium Package</span>
//                                     </div>
//                                     <div className="mt-1 flex flex-wrap gap-2">
//                                       {["Free Breakfast", "WiFi", "AC", "King Bed"].map((amenity, i) => (
//                                         <span key={i} className="text-xs bg-white px-2 py-1 rounded-full border border-gray-100 text-gray-600">
//                                           {amenity}
//                                         </span>
//                                       ))}
//                                     </div>
//                                   </div>
//                                 </motion.div>
//                               )}
//                             </AnimatePresence>

//                             {expandedRoom !== roomIndex && (
//                               <div className="flex justify-between items-center mt-2">
//                                 <div className="flex items-center">
//                                   <span className="text-sm text-gray-600 mr-4">
//                                     {adultsPerRoom[roomIndex]} {adultsPerRoom[roomIndex] === 1 ? "Adult" : "Adults"}
//                                   </span>
//                                   <span className="text-sm text-gray-600">
//                                     {childrenPerRoom[roomIndex]} {childrenPerRoom[roomIndex] === 1 ? "Child" : "Children"}
//                                   </span>
//                                 </div>
//                                 <span className="text-xs text-main-color border border-main-color rounded-full px-3 py-1">
//                                   Tap to edit
//                                 </span>
//                               </div>
//                             )}
//                           </div>
//                         </motion.div>
//                       ))}
//                     </div>

//                     <div className="pt-6 flex justify-between">
//                       <button
//                         onClick={prevStep}
//                         className="px-6 py-3 border border-gray-300 text-gray-700 rounded-full flex items-center hover:bg-gray-50 transition-colors duration-300"
//                       >
//                         <ArrowRight size={16} className="mr-2 rotate-180" />
//                         <span>Back to Dates</span>
//                       </button>

//                       <button
//                         onClick={nextStep}
//                         className="px-6 py-3 bg-main-color text-white rounded-full flex items-center hover:shadow-lg transition-shadow duration-300"
//                       >
//                         <span>Review Details</span>
//                         <ArrowRight size={16} className="ml-2" />
//                       </button>
//                     </div>
//                   </div>
//                 )}

//                 {bookingStep === 2 && (
//                   <div className="space-y-6">
//                     <div className="p-6 bg-orange-50 rounded-xl border border-orange-100">
//                       <h3 className="text-lg font-bold text-gray-800 mb-4">Booking Summary</h3>

//                       <div className="space-y-4">
//                         <div className="flex justify-between pb-3 border-b border-orange-100">
//                           <div className="flex items-center">
//                             <Calendar size={16} className="text-main-color mr-2" />
//                             <span className="text-gray-600">Stay Period:</span>
//                           </div>
//                           <span className="font-medium text-gray-800">
//                             {checkInDate ? checkInDate.toLocaleDateString() : "Not selected"} - {checkOutDate ? checkOutDate.toLocaleDateString() : "Not selected"}
//                           </span>
//                         </div>

//                         <div className="flex justify-between pb-3 border-b border-orange-100">
//                           <div className="flex items-center">
//                             <Home size={16} className="text-main-color mr-2" />
//                             <span className="text-gray-600">Accommodation:</span>
//                           </div>
//                           <span className="font-medium text-gray-800">
//                             {rooms} {rooms === 1 ? "Room" : "Rooms"}
//                           </span>
//                         </div>

//                         <div className="flex justify-between">
//                           <div className="flex items-center">
//                             <Users size={16} className="text-main-color mr-2" />
//                             <span className="text-gray-600">Guests:</span>
//                           </div>
//                           <span className="font-medium text-gray-800">
//                             {totalAdults} {totalAdults === 1 ? "Adult" : "Adults"}, {totalChildren} {totalChildren === 1 ? "Child" : "Children"}
//                           </span>
//                         </div>
//                       </div>
//                     </div>

//                     <div className="p-5 bg-white rounded-xl border border-gray-200 shadow-sm flex justify-between items-center">
//                       <div className="flex items-center">
//                         <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
//                           <Check size={20} className="text-green-600" />
//                         </div>
//                         <div>
//                           <h4 className="font-medium text-gray-800">Ready to Book</h4>
//                           <p className="text-sm text-gray-500">Click the button to check availability</p>
//                         </div>
//                       </div>
//                       <button className="px-5 py-2.5 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition-colors">
//                         Confirm
//                       </button>
//                     </div>

//                     <div className="pt-6 flex justify-between">
//                       <button
//                         onClick={prevStep}
//                         className="px-6 py-3 border border-gray-300 text-gray-700 rounded-full flex items-center hover:bg-gray-50 transition-colors duration-300"
//                       >
//                         <ArrowRight size={16} className="mr-2 rotate-180" />
//                         <span>Back to Guests</span>
//                       </button>

//                       <button
//                         className="px-6 py-3 bg-gradient-to-r from-main-color to-orange-500 text-white rounded-full flex items-center hover:shadow-lg hover:from-orange-500 hover:to-main-color transition-all duration-300"
//                       >
//                         <span>Check Availability</span>
//                         <ArrowRight size={16} className="ml-2" />
//                       </button>
//                     </div>
//                   </div>
//                 )}
//               </motion.div>
//             </AnimatePresence>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default HeroSection;




// "use client";

// import React, { useState, useRef, useEffect } from "react";
// import { DatePickerDemo } from "../../components/DatePickerDemo";
// import GuestDropdown from "./GuestDropdown";
// import { motion, AnimatePresence } from "framer-motion";
// import { Users, Home, ChevronDown, ChevronUp } from "lucide-react";

// const HeroSection = () => {
//   const [checkInDate, setCheckInDate] = useState(null);
//   const [checkOutDate, setCheckOutDate] = useState(null);
//   const [rooms, setRooms] = useState(1);
//   const [adultsPerRoom, setAdultsPerRoom] = useState([1]);
//   const [childrenPerRoom, setChildrenPerRoom] = useState([0]);
//   const [showGuestDropdown, setShowGuestDropdown] = useState(false);

//   const guestButtonRef = useRef(null);
//   const guestDropdownRef = useRef(null);

//   const handleCheckInChange = (date) => {
//     setCheckInDate(date);
//   };

//   const handleCheckOutChange = (date) => {
//     setCheckOutDate(date);
//   };

//   const handleAdultsChange = (roomIndex, value) => {
//     const newCount = Math.max(1, Math.min(5, parseInt(value, 10) || 1)); // Ensure value is between 1 and 5
//     const updatedAdults = [...adultsPerRoom];
//     updatedAdults[roomIndex] = newCount;
//     setAdultsPerRoom(updatedAdults);
//   };

//   const handleChildrenChange = (roomIndex, value) => {
//     const newCount = Math.max(0, Math.min(4, parseInt(value, 10) || 0)); // Ensure value is between 0 and 4
//     const updatedChildren = [...childrenPerRoom];
//     updatedChildren[roomIndex] = newCount;
//     setChildrenPerRoom(updatedChildren);
//   };

//   const addRoom = () => {
//     if (rooms < 5) {
//       setRooms(rooms + 1);
//       setAdultsPerRoom([...adultsPerRoom, 1]);
//       setChildrenPerRoom([...childrenPerRoom, 0]);
//     }
//   };

//   const removeRoom = () => {
//     if (rooms > 1) {
//       setRooms(rooms - 1);
//       setAdultsPerRoom(adultsPerRoom.slice(0, -1));
//       setChildrenPerRoom(childrenPerRoom.slice(0, -1));
//     }
//   };

//   const toggleGuestDropdown = () => {
//     setShowGuestDropdown((prev) => !prev);
//   };

//   const totalAdults = adultsPerRoom.reduce((sum, num) => sum + num, 0);
//   const totalChildren = childrenPerRoom.reduce((sum, num) => sum + num, 0);

//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (
//         guestDropdownRef.current &&
//         !guestDropdownRef.current.contains(event.target) &&
//         guestButtonRef.current &&
//         !guestButtonRef.current.contains(event.target)
//       ) {
//         setShowGuestDropdown(false);
//       }
//     }

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [guestButtonRef, guestDropdownRef]);

//   return (
//     <motion.div
//       className="Hero-Section py-16 bg-cover bg-center relative"
//       style={{ backgroundImage: "url('assets/images/hero-bg.png')" }}
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.8 }}
//     >
//       <div className="container mx-auto px-4 relative z-10">
//         <div className="flex lg:flex-row flex-col items-center lg:items-start">
//           <div className="space-y-6 text-white lg:w-1/2 w-full mb-8 lg:mb-0">
//             <h1 className="text-4xl lg:text-7xl font-bold  capitalize">
//               Welcome to Sahajanand Wellness
//             </h1>
//             <p className="text-lg lg:text-2xl leading-relaxed">
//               Experience the peaceful atmosphere of Swaminarayan Ashram. Start
//               your journey by booking a comfortable hotel room nearby for added
//               privacy and amenities.
//             </p>
//             <p className="text-xl lg:text-3xl capitalize italic font-semibold">
//               Wellness - The Best Gift to Yourself
//             </p>
//           </div>

//           {/* Booking form */}
//           <div className="lg:w-1/2 w-full">
//             <div className="bg-white bg-opacity-90 rounded-2xl shadow-xl p-8 w-full max-w-3xl mx-auto">
//               <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
//                 Book Your Retreat
//               </h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <label
//                     htmlFor="checkInDate"
//                     className="block text-base font-medium text-gray-700 mb-2"
//                   >
//                     Check-in Date
//                   </label>
//                   <DatePickerDemo
//                     date={checkInDate}
//                     onSelect={handleCheckInChange}
//                   />
//                 </div>
//                 <div>
//                   <label
//                     htmlFor="checkOutDate"
//                     className="block text-base font-medium text-gray-700 mb-2"
//                   >
//                     Check-out Date
//                   </label>
//                   <DatePickerDemo
//                     date={checkOutDate}
//                     onSelect={handleCheckOutChange}
//                   />
//                 </div>
//               </div>

//               {/* Redesigned Guest Input */}
//               <div className="relative mt-6">
//                 <label className="block text-base font-medium text-gray-700 mb-2">
//                   Guests
//                 </label>
//                 <div className="border rounded-md px-4 py-3 cursor-pointer transition-colors duration-200 flex justify-between items-center gap-2">
//                   <div
//                     className=" w-full flex md:flex-row flex-col justify-between md:items-center items-start gap-2 "
//                     onClick={toggleGuestDropdown}
//                     ref={guestButtonRef}
//                   >
//                     <div className="flex items-center space-x-3 text-gray-700">
//                       <Home size={20}/>
//                       <span>
//                         {rooms} {rooms === 1 ? "Room" : "Rooms"}
//                       </span>
//                     </div>
//                     <div className="flex items-center gap-3 text-gray-700">
//                       <Users size={20} />
//                       <span>
//                         {totalAdults + totalChildren}{" "}
//                         {totalAdults + totalChildren === 1 ? "Guest" : "Guests"}{" "}
//                         <span className="text-gray-500 text-sm">
//                           ({totalAdults}{" "}
//                           {totalAdults === 1 ? "Adult" : "Adults"},{" "}
//                           {totalChildren}{" "}
//                           {totalChildren === 1 ? "Child" : "Children"})
//                         </span>
//                       </span>
//                     </div>
//                   </div>
//                   {showGuestDropdown ? (
//                     <ChevronUp size={20} className="text-gray-600" />
//                   ) : (
//                     <ChevronDown size={20} className="text-gray-600" />
//                   )}
//                 </div>

//                 <AnimatePresence>
//                   {showGuestDropdown && (
//                     <GuestDropdown
//                       rooms={rooms}
//                       adultsPerRoom={adultsPerRoom}
//                       childrenPerRoom={childrenPerRoom}
//                       handleAdultsChange={handleAdultsChange}
//                       handleChildrenChange={handleChildrenChange}
//                       addRoom={addRoom}
//                       removeRoom={removeRoom}
//                       toggleGuestDropdown={toggleGuestDropdown}
//                       guestDropdownRef={guestDropdownRef}
//                     />
//                   )}
//                 </AnimatePresence>
//               </div>

//               <button className="mt-8 w-full bg-main-color hover:bg-orange-500 text-white font-bold py-4 px-4 rounded-xl transition-colors duration-200">
//                 Check Availability
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default HeroSection;





// HeroSection.js
"use client";

import React from "react";
import { motion } from "framer-motion";
import BookingForm from "../../components/BookingForm"; // Import the new component

const HeroSection = () => {
  return (
    <motion.div
      className="Hero-Section py-16 bg-cover bg-center relative"
      style={{ backgroundImage: "url('assets/images/hero-bg.png')" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex lg:flex-row flex-col items-center lg:items-start">
          <div className="space-y-6 text-white lg:w-1/2 w-full mb-8 lg:mb-0">
            <h1 className="text-3xl lg:text-6xl md:text-4xl font-bold  capitalize">
              Welcome to Sahajanand Wellness
            </h1>
            <p className="text-lg lg:text-2xl leading-relaxed">
              Experience the peaceful atmosphere of Swaminarayan Ashram. Start
              your journey by booking a comfortable hotel room nearby for added
              privacy and amenities.
            </p>
            <p className="text-xl lg:text-3xl capitalize italic font-semibold">
              Wellness - The Best Gift to Yourself
            </p>
          </div>

          {/* Booking form */}
          <div className="lg:w-1/2 w-full">
            <BookingForm />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSection;