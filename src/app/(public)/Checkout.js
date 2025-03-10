"use client";

import React, { useState, useRef, useEffect } from "react";
import { DatePickerDemo } from "../../../components/DatePickerDemo";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Home, Moon, Sun, ChevronDown, Calendar, Check, X, ArrowRight } from "lucide-react";

const HeroSection = () => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [rooms, setRooms] = useState(1);
  const [adultsPerRoom, setAdultsPerRoom] = useState([1]);
  const [childrenPerRoom, setChildrenPerRoom] = useState([0]);
  const [showGuestDropdown, setShowGuestDropdown] = useState(false);
  const [bookingStep, setBookingStep] = useState(0);
  const [expandedRoom, setExpandedRoom] = useState(null);

  const guestButtonRef = useRef(null);
  const guestDropdownRef = useRef(null);

  const handleCheckInChange = (date) => {
    setCheckInDate(date);
  };

  const handleCheckOutChange = (date) => {
    setCheckOutDate(date);
  };

  const handleRoomChange = (roomIndex, changeAmount) => {
    const newCount = Math.max(1, adultsPerRoom[roomIndex] + changeAmount);
    const updatedAdults = [...adultsPerRoom];
    updatedAdults[roomIndex] = newCount;
    setAdultsPerRoom(updatedAdults);
  };

  const handleChildrenChange = (roomIndex, changeAmount) => {
    const newCount = Math.max(0, childrenPerRoom[roomIndex] + changeAmount);
    const updatedChildren = [...childrenPerRoom];
    updatedChildren[roomIndex] = newCount;
    setChildrenPerRoom(updatedChildren);
  };

  const addRoom = () => {
    if (rooms < 5) {
      setRooms(rooms + 1);
      setAdultsPerRoom([...adultsPerRoom, 1]);
      setChildrenPerRoom([...childrenPerRoom, 0]);
    }
  };

  const removeRoom = () => {
    if (rooms > 1) {
      setRooms(rooms - 1);
      setAdultsPerRoom(adultsPerRoom.slice(0, -1));
      setChildrenPerRoom(childrenPerRoom.slice(0, -1));
    }
  };

  const toggleGuestDropdown = () => {
    setShowGuestDropdown((prev) => !prev);
  };

  const totalAdults = adultsPerRoom.reduce((sum, num) => sum + num, 0);
  const totalChildren = childrenPerRoom.reduce((sum, num) => sum + num, 0);

  const nextStep = () => {
    setBookingStep((prev) => Math.min(prev + 1, 2));
  };

  const prevStep = () => {
    setBookingStep((prev) => Math.max(prev - 1, 0));
  };

  const toggleExpandRoom = (index) => {
    setExpandedRoom(expandedRoom === index ? null : index);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        guestDropdownRef.current &&
        !guestDropdownRef.current.contains(event.target) &&
        guestButtonRef.current &&
        !guestButtonRef.current.contains(event.target)
      ) {
        setShowGuestDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [guestButtonRef, guestDropdownRef]);

  const stepVariants = {
    initial: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    },
    exit: (direction) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    }),
  };

  const roomCardWidth = expandedRoom !== null ? "scale-100" : "scale-95";

  return (
    <motion.div
      className="hero-section py-16 bg-cover bg-center relative"
      style={{ backgroundImage: "url('assets/images/hero-bg.png')" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="space-y-6 text-white">
          <h1 className="text-4xl lg:text-7xl font-bold text-center capitalize">
            Welcome to Sahajanand Wellness
          </h1>
          <p className="text-lg lg:text-2xl text-center w-full lg:w-3/4 mx-auto leading-relaxed">
            Experience the peaceful atmosphere of Swaminarayan Ashram. Start
            your journey by booking a comfortable hotel room nearby for added
            privacy and amenities.
          </p>
          <p className="text-xl lg:text-3xl text-center capitalize italic font-semibold">
            Wellness - The Best Gift to Yourself
          </p>
        </div>
        
        <div className="flex justify-center mt-12">
          <div className="relative bg-white bg-opacity-80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 w-full max-w-4xl border border-gray-100 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-main-color opacity-10 rounded-full -translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-orange-400 opacity-5 rounded-full translate-x-24 translate-y-24"></div>
            
            <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800 flex items-center justify-center relative z-10">
              <span className="inline-block bg-main-color text-white p-2 rounded-full mr-3">
                <Calendar size={20} />
              </span>
              Book Your Wellness Journey
            </h2>
            
            {/* Progress Indicator */}
            <div className="relative mb-8 px-12">
              <div className="h-1 bg-gray-200 rounded-full">
                <div 
                  className="h-1 bg-main-color rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${(bookingStep / 2) * 100}%` }}
                ></div>
              </div>
              <div className="flex justify-between -mt-2">
                {[0, 1, 2].map((step) => (
                  <div 
                    key={step}
                    className={`relative cursor-pointer transition-all duration-300 ${bookingStep >= step ? "scale-110" : "scale-100"}`}
                    onClick={() => setBookingStep(step)}
                  >
                    <div 
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        bookingStep > step 
                          ? "bg-main-color border-main-color" 
                          : bookingStep === step 
                          ? "bg-white border-main-color" 
                          : "bg-white border-gray-300"
                      }`}
                    >
                      {bookingStep > step && (
                        <Check size={12} className="text-white" />
                      )}
                    </div>
                    <span 
                      className={`absolute -bottom-7 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-xs font-medium ${
                        bookingStep >= step ? "text-main-color" : "text-gray-400"
                      }`}
                    >
                      {step === 0 ? "Dates" : step === 1 ? "Guests" : "Review"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Main Content Area with Steps */}
            <AnimatePresence initial={false} custom={bookingStep}>
              <motion.div
                key={bookingStep}
                custom={bookingStep}
                variants={stepVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="min-h-64"
              >
                {bookingStep === 0 && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="relative bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden group">
                        <div className="absolute w-full h-1 bg-gradient-to-r from-orange-300 to-main-color top-0 left-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                        <div className="p-5 group-hover:border-main-color transition-colors duration-300 group-hover:shadow-md">
                          <div className="flex items-center mb-4">
                            <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center mr-3">
                              <Moon size={16} className="text-orange-500" />
                            </div>
                            <label
                              htmlFor="checkInDate"
                              className="block text-base font-medium text-gray-700"
                            >
                              Check-in Date
                            </label>
                          </div>
                          <DatePickerDemo
                            date={checkInDate}
                            onSelect={handleCheckInChange}
                          />
                        </div>
                      </div>
                      
                      <div className="relative bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden group">
                        <div className="absolute w-full h-1 bg-gradient-to-r from-orange-300 to-main-color top-0 left-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                        <div className="p-5 group-hover:border-main-color transition-colors duration-300 group-hover:shadow-md">
                          <div className="flex items-center mb-4">
                            <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center mr-3">
                              <Sun size={16} className="text-orange-500" />
                            </div>
                            <label
                              htmlFor="checkOutDate"
                              className="block text-base font-medium text-gray-700"
                            >
                              Check-out Date
                            </label>
                          </div>
                          <DatePickerDemo
                            date={checkOutDate}
                            onSelect={handleCheckOutChange}
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-6 flex justify-end">
                      <button 
                        onClick={nextStep} 
                        className="px-6 py-3 bg-main-color text-white rounded-full flex items-center hover:shadow-lg transition-shadow duration-300"
                        disabled={!checkInDate || !checkOutDate}
                      >
                        <span>Next: Guest Details</span>
                        <ArrowRight size={16} className="ml-2" />
                      </button>
                    </div>
                  </div>
                )}
                
                {bookingStep === 1 && (
                  <div className="space-y-6">
                    {/* Rooms Header */}
                    <div className="flex justify-between items-center mb-6">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center mr-3">
                          <Home size={16} className="text-orange-500" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800">Rooms & Guests</h3>
                      </div>
                      
                      <div className="flex items-center">
                        <button
                          onClick={removeRoom}
                          disabled={rooms <= 1}
                          className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            rooms <= 1 
                              ? "bg-gray-100 text-gray-400" 
                              : "bg-orange-100 text-orange-600 hover:bg-orange-200"
                          }`}
                        >
                          <span className="text-lg font-bold">-</span>
                        </button>
                        <span className="mx-3 font-medium text-lg">{rooms}</span>
                        <button
                          onClick={addRoom}
                          disabled={rooms >= 5}
                          className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            rooms >= 5 
                              ? "bg-gray-100 text-gray-400" 
                              : "bg-orange-100 text-orange-600 hover:bg-orange-200"
                          }`}
                        >
                          <span className="text-lg font-bold">+</span>
                        </button>
                      </div>
                    </div>
                    
                    {/* Rooms Display */}
                    <div className="space-y-4">
                      {Array.from({ length: rooms }).map((_, roomIndex) => (
                        <motion.div
                          key={roomIndex}
                          layoutId={`room-${roomIndex}`}
                          className={`relative rounded-xl transition-all duration-300 ${expandedRoom === roomIndex ? 'border-2 border-main-color shadow-lg' : 'border border-gray-200'}`}
                          onClick={() => toggleExpandRoom(roomIndex)}
                          whileHover={{ scale: 1.02 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                          <div className="absolute top-0 right-0 left-0 h-16 bg-gradient-to-b from-orange-50 to-transparent rounded-t-xl" />
                          
                          <div className="p-4 relative">
                            <div className="flex justify-between items-center mb-3">
                              <h4 className="font-bold text-gray-800 flex items-center text-lg">
                                <span className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-400 to-main-color text-white flex items-center justify-center mr-2 text-sm shadow-sm">
                                  {roomIndex + 1}
                                </span>
                                Wellness Room {roomIndex + 1}
                              </h4>
                              <ChevronDown 
                                size={18} 
                                className={`text-gray-500 transition-transform duration-300 ${expandedRoom === roomIndex ? 'rotate-180' : ''}`} 
                              />
                            </div>
                            
                            <AnimatePresence>
                              {expandedRoom === roomIndex && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                  className="overflow-hidden"
                                >
                                  <div className="grid grid-cols-2 gap-4 pb-2">
                                    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                                      <div className="flex justify-between items-center mb-3">
                                        <span className="font-medium text-gray-700 flex items-center">
                                          <Users size={14} className="mr-1 text-main-color" />
                                          Adults
                                        </span>
                                        <div className="flex items-center bg-gray-50 rounded-full overflow-hidden border border-gray-200">
                                          <button
                                            onClick={(e) => {
                                              e.stopPropagation();
                                              handleRoomChange(roomIndex, -1);
                                            }}
                                            disabled={adultsPerRoom[roomIndex] <= 1}
                                            className={`w-8 h-8 flex items-center justify-center text-sm ${
                                              adultsPerRoom[roomIndex] <= 1
                                                ? "text-gray-300"
                                                : "text-gray-700 hover:bg-gray-100"
                                            }`}
                                          >
                                            -
                                          </button>
                                          <span className="w-8 text-center font-medium text-sm">
                                            {adultsPerRoom[roomIndex]}
                                          </span>
                                          <button
                                            onClick={(e) => {
                                              e.stopPropagation();
                                              handleRoomChange(roomIndex, 1);
                                            }}
                                            disabled={adultsPerRoom[roomIndex] >= 5}
                                            className={`w-8 h-8 flex items-center justify-center text-sm ${
                                              adultsPerRoom[roomIndex] >= 5
                                                ? "text-gray-300"
                                                : "text-gray-700 hover:bg-gray-100"
                                            }`}
                                          >
                                            +
                                          </button>
                                        </div>
                                      </div>
                                      
                                      <div className="flex flex-wrap gap-1">
                                        {[...Array(adultsPerRoom[roomIndex])].map((_, i) => (
                                          <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-tr from-orange-300 to-main-color flex items-center justify-center shadow-sm">
                                            <Users size={12} className="text-white" />
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                    
                                    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                                      <div className="flex justify-between items-center mb-3">
                                        <span className="font-medium text-gray-700 flex items-center">
                                          <Users size={12} className="mr-1 text-orange-400" />
                                          Children
                                        </span>
                                        <div className="flex items-center bg-gray-50 rounded-full overflow-hidden border border-gray-200">
                                          <button
                                            onClick={(e) => {
                                              e.stopPropagation();
                                              handleChildrenChange(roomIndex, -1);
                                            }}
                                            disabled={childrenPerRoom[roomIndex] <= 0}
                                            className={`w-8 h-8 flex items-center justify-center text-sm ${
                                              childrenPerRoom[roomIndex] <= 0
                                                ? "text-gray-300"
                                                : "text-gray-700 hover:bg-gray-100"
                                            }`}
                                          >
                                            -
                                          </button>
                                          <span className="w-8 text-center font-medium text-sm">
                                            {childrenPerRoom[roomIndex]}
                                          </span>
                                          <button
                                            onClick={(e) => {
                                              e.stopPropagation();
                                              handleChildrenChange(roomIndex, 1);
                                            }}
                                            disabled={childrenPerRoom[roomIndex] >= 4}
                                            className={`w-8 h-8 flex items-center justify-center text-sm ${
                                              childrenPerRoom[roomIndex] >= 4
                                                ? "text-gray-300"
                                                : "text-gray-700 hover:bg-gray-100"
                                            }`}
                                          >
                                            +
                                          </button>
                                        </div>
                                      </div>
                                      
                                      <div className="flex flex-wrap gap-1">
                                        {childrenPerRoom[roomIndex] > 0 ? (
                                          [...Array(childrenPerRoom[roomIndex])].map((_, i) => (
                                            <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-300 to-orange-400 flex items-center justify-center shadow-sm">
                                              <Users size={10} className="text-white" />
                                            </div>
                                          ))
                                        ) : (
                                          <span className="text-xs text-gray-400 italic">No children</span>
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                  
                                  <div className="mt-4 p-3 rounded-lg bg-gray-50 border border-gray-200">
                                    <div className="flex items-center justify-between text-sm">
                                      <span className="text-gray-600">Room Amenities:</span>
                                      <span className="text-main-color font-medium">Premium Package</span>
                                    </div>
                                    <div className="mt-1 flex flex-wrap gap-2">
                                      {["Free Breakfast", "WiFi", "AC", "King Bed"].map((amenity, i) => (
                                        <span key={i} className="text-xs bg-white px-2 py-1 rounded-full border border-gray-100 text-gray-600">
                                          {amenity}
                                        </span>
                                      ))}
                                    </div>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                            
                            {expandedRoom !== roomIndex && (
                              <div className="flex justify-between items-center mt-2">
                                <div className="flex items-center">
                                  <span className="text-sm text-gray-600 mr-4">
                                    {adultsPerRoom[roomIndex]} {adultsPerRoom[roomIndex] === 1 ? "Adult" : "Adults"}
                                  </span>
                                  <span className="text-sm text-gray-600">
                                    {childrenPerRoom[roomIndex]} {childrenPerRoom[roomIndex] === 1 ? "Child" : "Children"}
                                  </span>
                                </div>
                                <span className="text-xs text-main-color border border-main-color rounded-full px-3 py-1">
                                  Tap to edit
                                </span>
                              </div>
                            )}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    
                    <div className="pt-6 flex justify-between">
                      <button 
                        onClick={prevStep} 
                        className="px-6 py-3 border border-gray-300 text-gray-700 rounded-full flex items-center hover:bg-gray-50 transition-colors duration-300"
                      >
                        <ArrowRight size={16} className="mr-2 rotate-180" />
                        <span>Back to Dates</span>
                      </button>
                      
                      <button 
                        onClick={nextStep} 
                        className="px-6 py-3 bg-main-color text-white rounded-full flex items-center hover:shadow-lg transition-shadow duration-300"
                      >
                        <span>Review Details</span>
                        <ArrowRight size={16} className="ml-2" />
                      </button>
                    </div>
                  </div>
                )}
                
                {bookingStep === 2 && (
                  <div className="space-y-6">
                    <div className="p-6 bg-orange-50 rounded-xl border border-orange-100">
                      <h3 className="text-lg font-bold text-gray-800 mb-4">Booking Summary</h3>
                      
                      <div className="space-y-4">
                        <div className="flex justify-between pb-3 border-b border-orange-100">
                          <div className="flex items-center">
                            <Calendar size={16} className="text-main-color mr-2" />
                            <span className="text-gray-600">Stay Period:</span>
                          </div>
                          <span className="font-medium text-gray-800">
                            {checkInDate ? checkInDate.toLocaleDateString() : "Not selected"} - {checkOutDate ? checkOutDate.toLocaleDateString() : "Not selected"}
                          </span>
                        </div>
                        
                        <div className="flex justify-between pb-3 border-b border-orange-100">
                          <div className="flex items-center">
                            <Home size={16} className="text-main-color mr-2" />
                            <span className="text-gray-600">Accommodation:</span>
                          </div>
                          <span className="font-medium text-gray-800">
                            {rooms} {rooms === 1 ? "Room" : "Rooms"}
                          </span>
                        </div>
                        
                        <div className="flex justify-between">
                          <div className="flex items-center">
                            <Users size={16} className="text-main-color mr-2" />
                            <span className="text-gray-600">Guests:</span>
                          </div>
                          <span className="font-medium text-gray-800">
                            {totalAdults} {totalAdults === 1 ? "Adult" : "Adults"}, {totalChildren} {totalChildren === 1 ? "Child" : "Children"}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-5 bg-white rounded-xl border border-gray-200 shadow-sm flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
                          <Check size={20} className="text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-800">Ready to Book</h4>
                          <p className="text-sm text-gray-500">Click the button to check availability</p>
                        </div>
                      </div>
                      <button className="px-5 py-2.5 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition-colors">
                        Confirm
                      </button>
                    </div>
                    
                    <div className="pt-6 flex justify-between">
                      <button 
                        onClick={prevStep} 
                        className="px-6 py-3 border border-gray-300 text-gray-700 rounded-full flex items-center hover:bg-gray-50 transition-colors duration-300"
                      >
                        <ArrowRight size={16} className="mr-2 rotate-180" />
                        <span>Back to Guests</span>
                      </button>
                      
                      <button 
                        className="px-6 py-3 bg-gradient-to-r from-main-color to-orange-500 text-white rounded-full flex items-center hover:shadow-lg hover:from-orange-500 hover:to-main-color transition-all duration-300"
                      >
                        <span>Check Availability</span>
                        <ArrowRight size={16} className="ml-2" />
                      </button>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSection;







// Design:- 2

// "use client";

// import React, { useState, useRef, useEffect } from "react";
// import { DatePickerDemo } from "../../../components/DatePickerDemo";
// import { motion, AnimatePresence } from "framer-motion";
// import { 
//   Users, Home, Calendar, Check, ArrowRight, ChevronRight, 
//   Star, Clock, Map, HeartPulse, Moon, Sun
// } from "lucide-react";

// const HeroSection = () => {
//   // State management
//   const [checkInDate, setCheckInDate] = useState(null);
//   const [checkOutDate, setCheckOutDate] = useState(null);
//   const [rooms, setRooms] = useState(1);
//   const [adultsPerRoom, setAdultsPerRoom] = useState([2]);
//   const [childrenPerRoom, setChildrenPerRoom] = useState([0]);
//   const [bookingStep, setBookingStep] = useState(0);
//   const [activeRoomEdit, setActiveRoomEdit] = useState(null);
  
//   // Date handling
//   const handleCheckInChange = (date) => setCheckInDate(date);
//   const handleCheckOutChange = (date) => setCheckOutDate(date);
  
//   // Room and guest management
//   const handleAdultsChange = (roomIndex, value) => {
//     const newCount = Math.max(1, Math.min(5, value));
//     const updatedAdults = [...adultsPerRoom];
//     updatedAdults[roomIndex] = newCount;
//     setAdultsPerRoom(updatedAdults);
//   };

//   const handleChildrenChange = (roomIndex, value) => {
//     const newCount = Math.max(0, Math.min(4, value));
//     const updatedChildren = [...childrenPerRoom];
//     updatedChildren[roomIndex] = newCount;
//     setChildrenPerRoom(updatedChildren);
//   };

//   const addRoom = () => {
//     if (rooms < 5) {
//       setRooms(rooms + 1);
//       setAdultsPerRoom([...adultsPerRoom, 2]);
//       setChildrenPerRoom([...childrenPerRoom, 0]);
//     }
//   };

//   const removeRoom = (index) => {
//     if (rooms > 1) {
//       const updatedAdults = [...adultsPerRoom];
//       const updatedChildren = [...childrenPerRoom];
//       updatedAdults.splice(index, 1);
//       updatedChildren.splice(index, 1);
      
//       setRooms(rooms - 1);
//       setAdultsPerRoom(updatedAdults);
//       setChildrenPerRoom(updatedChildren);
      
//       if (activeRoomEdit === index) {
//         setActiveRoomEdit(null);
//       } else if (activeRoomEdit > index) {
//         setActiveRoomEdit(activeRoomEdit - 1);
//       }
//     }
//   };
  
//   // Navigation
//   const nextStep = () => setBookingStep((prev) => Math.min(prev + 1, 2));
//   const prevStep = () => setBookingStep((prev) => Math.max(prev - 1, 0));
  
//   // Calculations
//   const totalGuests = adultsPerRoom.reduce((sum, num) => sum + num, 0) + 
//                      childrenPerRoom.reduce((sum, num) => sum + num, 0);
  
//   const totalNights = checkInDate && checkOutDate 
//     ? Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24))
//     : 0;
  
//   // Animation variants
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

//   return (
//     <section className="relative py-20 overflow-hidden">
//       {/* Background elements */}
//       <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 to-white -z-10"></div>
//       <div className="absolute top-0 right-0 w-1/2 h-full bg-main-color opacity-5 -z-10 rounded-bl-[200px]"></div>
//       <div className="absolute bottom-40 left-10 w-64 h-64 bg-orange-400 opacity-5 rounded-full -z-10"></div>

//       <div className="container mx-auto px-4">
//         {/* Hero text content */}
//         <div className="max-w-3xl mx-auto text-center mb-16">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="mb-6"
//           >
//             <span className="inline-block bg-main-color text-white text-sm font-medium px-4 py-1.5 rounded-full mb-3">
//               Rejuvenate Your Mind & Body
//             </span>
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 leading-tight">
//               Sahajanand <span className="text-main-color">Wellness</span> Experience
//             </h1>
//             <p className="text-lg text-gray-600 leading-relaxed">
//               Experience tranquility at Swaminarayan Ashram with our premium accommodations. 
//               Begin your wellness journey surrounded by nature and spirituality.
//             </p>
//           </motion.div>

//           {/* Features */}
//           <motion.div 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.3, duration: 0.6 }}
//             className="flex flex-wrap justify-center gap-4 mb-8"
//           >
//             {[
//               { icon: <HeartPulse size={16} />, text: "Holistic Wellness" },
//               { icon: <Map size={16} />, text: "Serene Location" },
//               { icon: <Star size={16} />, text: "Premium Experience" },
//               { icon: <Clock size={16} />, text: "24/7 Support" }
//             ].map((feature, index) => (
//               <div key={index} className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm border border-gray-100">
//                 <div className="mr-2 text-main-color">{feature.icon}</div>
//                 <span className="text-sm font-medium text-gray-700">{feature.text}</span>
//               </div>
//             ))}
//           </motion.div>
//         </div>

//         {/* Booking card */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.4, duration: 0.8 }}
//           className="max-w-4xl mx-auto"
//         >
//           <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden relative">
//             {/* Progress indicator */}
//             <div className="flex border-b">
//               {['Select Dates', 'Room & Guests', 'Review & Book'].map((step, index) => (
//                 <div 
//                   key={index} 
//                   className={`relative flex-1 py-4 text-center cursor-pointer transition-all ${
//                     bookingStep === index 
//                       ? 'text-main-color font-medium' 
//                       : bookingStep > index
//                       ? 'text-gray-600' 
//                       : 'text-gray-400'
//                   }`}
//                   onClick={() => {
//                     if (bookingStep > index || (index === 1 && checkInDate && checkOutDate)) {
//                       setBookingStep(index);
//                     }
//                   }}
//                 >
//                   <div className="flex items-center justify-center">
//                     <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-2 ${
//                       bookingStep === index 
//                         ? 'bg-main-color text-white' 
//                         : bookingStep > index
//                         ? 'bg-green-100 text-green-600' 
//                         : 'bg-gray-100 text-gray-400'
//                     }`}>
//                       {bookingStep > index ? <Check size={14} /> : index + 1}
//                     </div>
//                     <span className="hidden sm:inline">{step}</span>
//                   </div>
                  
//                   {index < 2 && (
//                     <div className="absolute top-1/2 right-0 -translate-y-1/2 text-gray-300">
//                       <ChevronRight size={16} />
//                     </div>
//                   )}
                  
//                   {bookingStep === index && (
//                     <div className="absolute bottom-0 left-0 w-full h-0.5 bg-main-color"></div>
//                   )}
//                 </div>
//               ))}
//             </div>
            
//             {/* Main content area */}
//             <div className="p-6 md:p-8">
//               <AnimatePresence initial={false} custom={bookingStep} mode="wait">
//                 <motion.div
//                   key={bookingStep}
//                   custom={bookingStep}
//                   variants={stepVariants}
//                   initial="initial"
//                   animate="animate"
//                   exit="exit"
//                   className="min-h-64"
//                 >
//                   {/* Step 1: Dates */}
//                   {bookingStep === 0 && (
//                     <div>
//                       <h2 className="text-xl font-semibold text-gray-800 mb-4">When would you like to stay with us?</h2>
                      
//                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                         <div className="bg-gray-50 rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:border-main-color transition-colors duration-300">
//                           <div className="p-5">
//                             <div className="flex items-center mb-4">
//                               <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center mr-3">
//                                 <Moon size={16} className="text-orange-500" />
//                               </div>
//                               <label className="block text-gray-700 font-medium">
//                                 Check-in Date
//                               </label>
//                             </div>
//                             <DatePickerDemo
//                               date={checkInDate}
//                               onSelect={handleCheckInChange}
//                             />
//                           </div>
//                         </div>
                        
//                         <div className="bg-gray-50 rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:border-main-color transition-colors duration-300">
//                           <div className="p-5">
//                             <div className="flex items-center mb-4">
//                               <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center mr-3">
//                                 <Sun size={16} className="text-orange-500" />
//                               </div>
//                               <label className="block text-gray-700 font-medium">
//                                 Check-out Date
//                               </label>
//                             </div>
//                             <DatePickerDemo
//                               date={checkOutDate}
//                               onSelect={handleCheckOutChange}
//                             />
//                           </div>
//                         </div>
//                       </div>
                      
//                       {/* Stay summary */}
//                       {checkInDate && checkOutDate && totalNights > 0 && (
//                         <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-100">
//                           <div className="flex items-center text-blue-700">
//                             <Calendar size={18} className="mr-2" />
//                             <span className="font-medium">Your stay: {totalNights} {totalNights === 1 ? 'night' : 'nights'}</span>
//                           </div>
//                         </div>
//                       )}
                      
//                       <div className="mt-8 flex justify-end">
//                         <button 
//                           onClick={nextStep} 
//                           disabled={!checkInDate || !checkOutDate}
//                           className={`px-6 py-3 rounded-lg flex items-center ${
//                             !checkInDate || !checkOutDate
//                               ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
//                               : 'bg-main-color text-white hover:shadow-lg'
//                           } transition-all duration-300`}
//                         >
//                           <span>Continue to Rooms</span>
//                           <ArrowRight size={18} className="ml-2" />
//                         </button>
//                       </div>
//                     </div>
//                   )}

//                   {/* Step 2: Rooms & Guests */}
//                   {bookingStep === 1 && (
//                     <div>
//                       <h2 className="text-xl font-semibold text-gray-800 mb-4">Choose your room configuration</h2>
                      
//                       {/* Room cards */}
//                       <div className="space-y-4 mb-6">
//                         {Array.from({ length: rooms }).map((_, index) => (
//                           <div 
//                             key={index}
//                             className="bg-gray-50 rounded-xl overflow-hidden shadow-sm border border-gray-100 transition-all duration-300"
//                           >
//                             <div className="p-4">
//                               <div className="flex justify-between items-center mb-3">
//                                 <div className="flex items-center">
//                                   <div className="w-8 h-8 rounded-full bg-gradient-to-r from-main-color to-orange-400 text-white flex items-center justify-center mr-2 text-sm">
//                                     {index + 1}
//                                   </div>
//                                   <h3 className="font-medium text-gray-800">Room {index + 1}</h3>
//                                 </div>
                                
//                                 <div className="flex items-center">
//                                   {rooms > 1 && (
//                                     <button 
//                                       onClick={() => removeRoom(index)}
//                                       className="mr-2 text-gray-400 hover:text-red-500 p-1"
//                                     >
//                                       <span className="text-xs bg-gray-100 hover:bg-red-100 px-2 py-1 rounded-full">Remove</span>
//                                     </button>
//                                   )}
                                  
//                                   <button 
//                                     onClick={() => setActiveRoomEdit(activeRoomEdit === index ? null : index)}
//                                     className="p-1"
//                                   >
//                                     <span className={`text-xs px-2 py-1 rounded-full ${
//                                       activeRoomEdit === index 
//                                         ? 'bg-main-color text-white' 
//                                         : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
//                                     }`}>
//                                       {activeRoomEdit === index ? 'Done' : 'Edit'}
//                                     </span>
//                                   </button>
//                                 </div>
//                               </div>

//                               {/* Room summary */}
//                               <div className="flex justify-between items-center">
//                                 <div className="flex items-center">
//                                   <div className="flex items-center mr-4">
//                                     <Users size={14} className="text-gray-600 mr-1" />
//                                     <span className="text-sm">{adultsPerRoom[index]} {adultsPerRoom[index] === 1 ? 'Adult' : 'Adults'}</span>
//                                   </div>
//                                   {childrenPerRoom[index] > 0 && (
//                                     <div className="flex items-center">
//                                       <Users size={12} className="text-gray-600 mr-1" />
//                                       <span className="text-sm">{childrenPerRoom[index]} {childrenPerRoom[index] === 1 ? 'Child' : 'Children'}</span>
//                                     </div>
//                                   )}
//                                 </div>
                                
//                                 <div className="flex items-center">
//                                   <Star size={14} className="text-yellow-500" />
//                                   <span className="text-xs ml-1 text-gray-600">Premium Room</span>
//                                 </div>
//                               </div>

//                               {/* Expanded room details */}
//                               <AnimatePresence>
//                                 {activeRoomEdit === index && (
//                                   <motion.div
//                                     initial={{ height: 0, opacity: 0 }}
//                                     animate={{ height: "auto", opacity: 1 }}
//                                     exit={{ height: 0, opacity: 0 }}
//                                     transition={{ duration: 0.3 }}
//                                     className="overflow-hidden mt-4 pt-4 border-t border-gray-200"
//                                   >
//                                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                                       {/* Adults */}
//                                       <div className="bg-white rounded-lg p-4 shadow-sm">
//                                         <div className="flex justify-between items-center mb-3">
//                                           <span className="font-medium text-gray-700">Adults</span>
//                                           <div className="flex items-center space-x-3">
//                                             <button 
//                                               onClick={() => handleAdultsChange(index, adultsPerRoom[index] - 1)}
//                                               disabled={adultsPerRoom[index] <= 1}
//                                               className={`w-8 h-8 rounded-full flex items-center justify-center ${
//                                                 adultsPerRoom[index] <= 1 
//                                                   ? 'bg-gray-100 text-gray-400' 
//                                                   : 'bg-orange-100 text-orange-600 hover:bg-orange-200'
//                                               }`}
//                                             >-</button>
//                                             <span className="font-medium w-6 text-center">{adultsPerRoom[index]}</span>
//                                             <button 
//                                               onClick={() => handleAdultsChange(index, adultsPerRoom[index] + 1)}
//                                               disabled={adultsPerRoom[index] >= 5}
//                                               className={`w-8 h-8 rounded-full flex items-center justify-center ${
//                                                 adultsPerRoom[index] >= 5 
//                                                   ? 'bg-gray-100 text-gray-400' 
//                                                   : 'bg-orange-100 text-orange-600 hover:bg-orange-200'
//                                               }`}
//                                             >+</button>
//                                           </div>
//                                         </div>
//                                         <div className="text-xs text-gray-500">Ages 13+</div>
//                                       </div>
                                      
//                                       {/* Children */}
//                                       <div className="bg-white rounded-lg p-4 shadow-sm">
//                                         <div className="flex justify-between items-center mb-3">
//                                           <span className="font-medium text-gray-700">Children</span>
//                                           <div className="flex items-center space-x-3">
//                                             <button 
//                                               onClick={() => handleChildrenChange(index, childrenPerRoom[index] - 1)}
//                                               disabled={childrenPerRoom[index] <= 0}
//                                               className={`w-8 h-8 rounded-full flex items-center justify-center ${
//                                                 childrenPerRoom[index] <= 0 
//                                                   ? 'bg-gray-100 text-gray-400' 
//                                                   : 'bg-orange-100 text-orange-600 hover:bg-orange-200'
//                                               }`}
//                                             >-</button>
//                                             <span className="font-medium w-6 text-center">{childrenPerRoom[index]}</span>
//                                             <button 
//                                               onClick={() => handleChildrenChange(index, childrenPerRoom[index] + 1)}
//                                               disabled={childrenPerRoom[index] >= 4}
//                                               className={`w-8 h-8 rounded-full flex items-center justify-center ${
//                                                 childrenPerRoom[index] >= 4 
//                                                   ? 'bg-gray-100 text-gray-400' 
//                                                   : 'bg-orange-100 text-orange-600 hover:bg-orange-200'
//                                               }`}
//                                             >+</button>
//                                           </div>
//                                         </div>
//                                         <div className="text-xs text-gray-500">Ages 0-12</div>
//                                       </div>
//                                     </div>
                                    
//                                     {/* Room amenities */}
//                                     <div className="mt-4 bg-white rounded-lg p-4 shadow-sm">
//                                       <h4 className="font-medium text-gray-700 mb-2">Room Amenities</h4>
//                                       <div className="flex flex-wrap gap-2">
//                                         {["Free Breakfast", "WiFi", "AC", "Premium TV", "King Bed"].map((amenity, i) => (
//                                           <span key={i} className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600">
//                                             {amenity}
//                                           </span>
//                                         ))}
//                                       </div>
//                                     </div>
//                                   </motion.div>
//                                 )}
//                               </AnimatePresence>
//                             </div>
//                           </div>
//                         ))}
//                       </div>
                      
//                       {/* Add room button */}
//                       {rooms < 5 && (
//                         <button 
//                           onClick={addRoom}
//                           className="w-full py-3 border border-dashed border-main-color text-main-color rounded-xl mb-6 hover:bg-main-color hover:text-white transition-colors duration-300 flex items-center justify-center"
//                         >
//                           <span>+ Add another room</span>
//                           <span className="text-xs ml-2">(up to 5)</span>
//                         </button>
//                       )}
                      
//                       {/* Summary card */}
//                       <div className="bg-orange-50 rounded-xl p-4 border border-orange-100 mb-8">
//                         <div className="flex justify-between items-center">
//                           <div>
//                             <h3 className="font-medium text-gray-800">Your stay summary</h3>
//                             <p className="text-sm text-gray-600 mt-1">
//                               {checkInDate?.toLocaleDateString()} - {checkOutDate?.toLocaleDateString()}
//                               {totalNights > 0 && ` · ${totalNights} nights`}
//                             </p>
//                           </div>
//                           <div className="text-right">
//                             <div className="flex items-center">
//                               <Users size={16} className="text-gray-600 mr-1" />
//                               <span className="text-gray-800">{totalGuests} {totalGuests === 1 ? 'Guest' : 'Guests'}</span>
//                             </div>
//                             <p className="text-sm text-gray-600 mt-1">
//                               {rooms} {rooms === 1 ? 'Room' : 'Rooms'}
//                             </p>
//                           </div>
//                         </div>
//                       </div>
                      
//                       {/* Navigation */}
//                       <div className="flex justify-between">
//                         <button 
//                           onClick={prevStep} 
//                           className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg flex items-center hover:bg-gray-50 transition-colors duration-300"
//                         >
//                           <ArrowRight size={18} className="mr-2 rotate-180" />
//                           <span>Back</span>
//                         </button>
                        
//                         <button 
//                           onClick={nextStep} 
//                           className="px-6 py-3 bg-main-color text-white rounded-lg flex items-center hover:shadow-lg transition-shadow duration-300"
//                         >
//                           <span>Continue</span>
//                           <ArrowRight size={18} className="ml-2" />
//                         </button>
//                       </div>
//                     </div>
//                   )}

//                   {/* Step 3: Review & Book */}
//                   {bookingStep === 2 && (
//                     <div>
//                       <h2 className="text-xl font-semibold text-gray-800 mb-6">Review your booking</h2>
                      
//                       <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden mb-6">
//                         {/* Header */}
//                         <div className="bg-gradient-to-r from-main-color to-orange-500 p-4 text-white">
//                           <h3 className="font-medium">Booking Summary</h3>
//                         </div>
                        
//                         {/* Content */}
//                         <div className="p-4 space-y-4">
//                           {/* Dates */}
//                           <div className="flex justify-between pb-3 border-b border-gray-100">
//                             <div className="flex items-start">
//                               <Calendar size={18} className="text-main-color mr-2 mt-0.5" />
//                               <div>
//                                 <div className="font-medium text-gray-800">Your Stay</div>
//                                 <div className="text-sm text-gray-600 mt-1">
//                                   {totalNights} {totalNights === 1 ? 'night' : 'nights'}
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="text-right">
//                               <div className="font-medium text-gray-800">
//                                 {checkInDate?.toLocaleDateString()} - {checkOutDate?.toLocaleDateString()}
//                               </div>
//                               <button 
//                                 onClick={() => setBookingStep(0)}
//                                 className="text-sm text-main-color hover:underline mt-1 inline-block"
//                               >
//                                 Change
//                               </button>
//                             </div>
//                           </div>
                          
//                           {/* Rooms & Guests */}
//                           <div className="flex justify-between pb-3 border-b border-gray-100">
//                             <div className="flex items-start">
//                               <Home size={18} className="text-main-color mr-2 mt-0.5" />
//                               <div>
//                                 <div className="font-medium text-gray-800">Accommodation</div>
//                                 <div className="text-sm text-gray-600 mt-1">
//                                   Premium wellness room
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="text-right">
//                               <div className="font-medium text-gray-800">
//                                 {rooms} {rooms === 1 ? 'Room' : 'Rooms'}, {totalGuests} {totalGuests === 1 ? 'Guest' : 'Guests'}
//                               </div>
//                               <button 
//                                 onClick={() => setBookingStep(1)}
//                                 className="text-sm text-main-color hover:underline mt-1 inline-block"
//                               >
//                                 Change
//                               </button>
//                             </div>
//                           </div>
                          
//                           {/* Price Estimate */}
//                           <div className="pt-2">
//                             <div className="flex justify-between font-medium text-gray-800">
//                               <span>Estimated Total</span>
//                               <span>₹{(12500 * rooms * totalNights).toLocaleString()}</span>
//                             </div>
//                             <div className="text-xs text-gray-500 mt-1">
//                               Includes taxes and fees. Final price will be confirmed during availability check.
//                             </div>
//                           </div>
//                         </div>
//                       </div>
                      
//                       {/* Confirmation button */}
//                       <div className="bg-green-50 border border-green-100 rounded-xl p-4 mb-8 flex items-center justify-between">
//                         <div className="flex items-center">
//                           <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
//                             <Check size={18} className="text-green-600" />
//                           </div>
//                           <div>
//                             <div className="font-medium text-gray-800">Ready to continue</div>
//                             <div className="text-sm text-gray-600">We'll check availability for your dates</div>
//                           </div>
//                         </div>
//                         <button className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow-sm transition-colors">
//                           Check Now
//                         </button>
//                       </div>
                      
//                       {/* Navigation */}
//                       <div className="flex justify-between">
//                         <button 
//                           onClick={prevStep} 
//                           className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg flex items-center hover:bg-gray-50 transition-colors duration-300"
//                         >
//                           <ArrowRight size={18} className="mr-2 rotate-180" />
//                           <span>Back</span>
//                         </button>
                        
//                         <button 
//                           className="px-8 py-3 bg-gradient-to-r from-main-color to-orange-500 text-white rounded-lg flex items-center shadow-md hover:shadow-lg transition-all duration-300"
//                         >
//                           <span className="font-medium">Complete Booking</span>
//                           <ArrowRight size={18} className="ml-2" />
//                         </button>
//                       </div>
//                     </div>
//                   )}
//                 </motion.div>
//               </AnimatePresence>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;