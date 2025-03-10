// // BookingForm.js
// "use client";

// import React from "react";
// import { DatePickerDemo } from "../../components/DatePickerDemo";
// import GuestDropdown from "./GuestDropdown";
// import { motion, AnimatePresence } from "framer-motion";
// import { Users, Home, ChevronDown, ChevronUp } from "lucide-react";

// const BookingForm = ({
//   checkInDate,
//   checkOutDate,
//   rooms,
//   adultsPerRoom,
//   childrenPerRoom,
//   showGuestDropdown,
//   guestButtonRef,
//   guestDropdownRef,
//   handleCheckInChange,
//   handleCheckOutChange,
//   handleAdultsChange,
//   handleChildrenChange,
//   addRoom,
//   removeRoom,
//   toggleGuestDropdown,
//   totalAdults,
//   totalChildren,
// }) => {
//   return (
//     <div className="bg-white bg-opacity-90 rounded-2xl shadow-xl p-8 w-full max-w-3xl mx-auto">
//       <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
//         Book Your Retreat
//       </h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div>
//           <label
//             htmlFor="checkInDate"
//             className="block text-base font-medium text-gray-700 mb-2"
//           >
//             Check-in Date
//           </label>
//           <DatePickerDemo
//             date={checkInDate}
//             onSelect={handleCheckInChange}
//           />
//         </div>
//         <div>
//           <label
//             htmlFor="checkOutDate"
//             className="block text-base font-medium text-gray-700 mb-2"
//           >
//             Check-out Date
//           </label>
//           <DatePickerDemo
//             date={checkOutDate}
//             onSelect={handleCheckOutChange}
//           />
//         </div>
//       </div>

//       {/* Redesigned Guest Input */}
//       <div className="relative mt-6">
//         <label className="block text-base font-medium text-gray-700 mb-2">
//           Guests
//         </label>
//         <div className="border rounded-md px-4 py-3 cursor-pointer transition-colors duration-200 flex justify-between items-center gap-2">
//           <div
//             className=" w-full flex md:flex-row flex-col justify-between md:items-center items-start gap-2 "
//             onClick={toggleGuestDropdown}
//             ref={guestButtonRef}
//           >
//             <div className="flex items-center space-x-3 text-gray-700">
//               <Home size={20} />
//               <span>
//                 {rooms} {rooms === 1 ? "Room" : "Rooms"}
//               </span>
//             </div>
//             <div className="flex items-center gap-3 text-gray-700">
//               <Users size={20} />
//               <span>
//                 {totalAdults + totalChildren}{" "}
//                 {totalAdults + totalChildren === 1 ? "Guest" : "Guests"}{" "}
//                 <span className="text-gray-500 text-sm">
//                   ({totalAdults} {totalAdults === 1 ? "Adult" : "Adults"},{" "}
//                   {totalChildren} {totalChildren === 1 ? "Child" : "Children"})
//                 </span>
//               </span>
//             </div>
//           </div>
//           {showGuestDropdown ? (
//             <ChevronUp size={20} className="text-gray-600" />
//           ) : (
//             <ChevronDown size={20} className="text-gray-600" />
//           )}
//         </div>

//         <AnimatePresence>
//           {showGuestDropdown && (
//             <GuestDropdown
//               rooms={rooms}
//               adultsPerRoom={adultsPerRoom}
//               childrenPerRoom={childrenPerRoom}
//               handleAdultsChange={handleAdultsChange}
//               handleChildrenChange={handleChildrenChange}
//               addRoom={addRoom}
//               removeRoom={removeRoom}
//               toggleGuestDropdown={toggleGuestDropdown}
//               guestDropdownRef={guestDropdownRef}
//             />
//           )}
//         </AnimatePresence>
//       </div>

//       <button className="mt-8 w-full bg-main-color hover:bg-orange-500 text-white font-bold py-4 px-4 rounded-xl transition-colors duration-200">
//         Check Availability
//       </button>
//     </div>
//   );
// };

// export default BookingForm;







// BookingForm.js
"use client";

import React, { useState, useRef, useEffect } from "react";
import { DatePickerDemo } from "./DatePickerDemo";
import GuestDropdown from "./GuestDropdown";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Home, ChevronDown, ChevronUp } from "lucide-react";

const BookingForm = () => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [rooms, setRooms] = useState(1);
  const [adultsPerRoom, setAdultsPerRoom] = useState([1]);
  const [childrenPerRoom, setChildrenPerRoom] = useState([0]);
  const [showGuestDropdown, setShowGuestDropdown] = useState(false);

  const guestButtonRef = useRef(null);
  const guestDropdownRef = useRef(null);

  const handleCheckInChange = (date) => {
    setCheckInDate(date);
  };

  const handleCheckOutChange = (date) => {
    setCheckOutDate(date);
  };

  const handleAdultsChange = (roomIndex, value) => {
    const newCount = Math.max(1, Math.min(5, parseInt(value, 10) || 1)); // Ensure value is between 1 and 5
    const updatedAdults = [...adultsPerRoom];
    updatedAdults[roomIndex] = newCount;
    setAdultsPerRoom(updatedAdults);
  };

  const handleChildrenChange = (roomIndex, value) => {
    const newCount = Math.max(0, Math.min(4, parseInt(value, 10) || 0)); // Ensure value is between 0 and 4
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

  return (
    <div className="bg-white bg-opacity-90 border rounded-2xl shadow-md p-8 w-full">
      <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
        Book Your Retreat
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="checkInDate"
            className="block text-base font-medium text-gray-700 mb-2"
          >
            Check-in Date
          </label>
          <DatePickerDemo
            date={checkInDate}
            onSelect={handleCheckInChange}
          />
        </div>
        <div>
          <label
            htmlFor="checkOutDate"
            className="block text-base font-medium text-gray-700 mb-2"
          >
            Check-out Date
          </label>
          <DatePickerDemo
            date={checkOutDate}
            onSelect={handleCheckOutChange}
          />
        </div>
      </div>

      {/* Redesigned Guest Input */}
      <div className="relative mt-6">
        <label className="block text-base font-medium text-gray-700 mb-2">
          Guests
        </label>
        <div className="border rounded-md px-4 py-3 cursor-pointer transition-colors duration-200 flex justify-between items-center gap-2">
          <div
            className=" w-full flex md:flex-row flex-col justify-between md:items-center items-start gap-2 "
            onClick={toggleGuestDropdown}
            ref={guestButtonRef}
          >
            <div className="flex items-center space-x-3 text-gray-700">
              <Home size={20} />
              <span>
                {rooms} {rooms === 1 ? "Room" : "Rooms"}
              </span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <Users size={20} />
              <span>
                {totalAdults + totalChildren}{" "}
                {totalAdults + totalChildren === 1 ? "Guest" : "Guests"}{" "}
                <span className="text-gray-500 text-sm">
                  ({totalAdults} {totalAdults === 1 ? "Adult" : "Adults"},{" "}
                  {totalChildren} {totalChildren === 1 ? "Child" : "Children"})
                </span>
              </span>
            </div>
          </div>
          {showGuestDropdown ? (
            <ChevronUp size={20} className="text-gray-600" />
          ) : (
            <ChevronDown size={20} className="text-gray-600" />
          )}
        </div>

        <AnimatePresence>
          {showGuestDropdown && (
            <GuestDropdown
              rooms={rooms}
              adultsPerRoom={adultsPerRoom}
              childrenPerRoom={childrenPerRoom}
              handleAdultsChange={handleAdultsChange}
              handleChildrenChange={handleChildrenChange}
              addRoom={addRoom}
              removeRoom={removeRoom}
              toggleGuestDropdown={toggleGuestDropdown}
              guestDropdownRef={guestDropdownRef}
            />
          )}
        </AnimatePresence>
      </div>

      <button className="mt-8 w-full bg-main-color hover:bg-orange-500 text-white font-bold py-4 px-4 rounded-xl transition-colors duration-200">
        Check Availability
      </button>
    </div>
  );
};

export default BookingForm;