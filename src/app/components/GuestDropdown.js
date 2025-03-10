// components/GuestDropdown.js

// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import { Plus, Minus } from "lucide-react";

// const GuestDropdown = ({
//   rooms,
//   adultsPerRoom,
//   childrenPerRoom,
//   handleRoomChange,
//   handleChildrenChange,
//   addRoom,
//   removeRoom,
//   toggleGuestDropdown,
//   guestDropdownRef,
// }) => {
//   return (
//     <motion.div
//       className="absolute top-full left-0 bg-white shadow-lg rounded-xl p-6 w-full z-10 mt-2"
//       ref={guestDropdownRef}
//       initial={{ opacity: 0, y: -10 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -10 }}
//       transition={{ duration: 0.2 }}
//       style={{ maxHeight: "400px", overflowY: "auto" }}
//     >
//       <div className="flex justify-between items-center mb-6">
//         <h3 className="text-lg font-semibold text-gray-800">Rooms & Guests</h3>
//         <div className="flex items-center space-x-4">
//           <button
//             onClick={removeRoom}
//             disabled={rooms <= 1}
//             className={`p-2 rounded-full ${
//               rooms <= 1
//                 ? "bg-gray-100 text-gray-400"
//                 : "bg-gray-200 text-gray-700 hover:bg-gray-300"
//             }`}
//           >
//             <Minus size={16} />
//           </button>
//           <span className="font-medium text-gray-800">{rooms}</span>
//           <button
//             onClick={addRoom}
//             disabled={rooms >= 5}
//             className={`p-2 rounded-full ${
//               rooms >= 5
//                 ? "bg-gray-100 text-gray-400"
//                 : "bg-gray-200 text-gray-700 hover:bg-gray-300"
//             }`}
//           >
//             <Plus size={16} />
//           </button>
//         </div>
//       </div>

//       <div className="space-y-6">
//         {Array.from({ length: rooms }).map((_, roomIndex) => (
//           <div
//             key={roomIndex}
//             className="p-4 rounded-lg border border-gray-200 bg-gray-50 flex justify-between items-center"
//           >
//             <h4 className="text-md font-medium text-gray-700">
//               Room {roomIndex + 1}
//             </h4>

//             <div className="flex items-center gap-2">
//               <div className="flex justify-between items-center gap-2">
//                 <span className="text-gray-700">Adults</span>
//                 <div className="flex items-center space-x-3">
//                   <button
//                     onClick={() => handleRoomChange(roomIndex, -1)}
//                     disabled={adultsPerRoom[roomIndex] <= 1}
//                     className={`p-1.5 rounded-full ${
//                       adultsPerRoom[roomIndex] <= 1
//                         ? "bg-gray-100 text-gray-400"
//                         : "bg-gray-200 text-gray-700 hover:bg-gray-300"
//                     }`}
//                   >
//                     <Minus size={14} />
//                   </button>
//                   <span className="w-6 text-center font-medium">
//                     {adultsPerRoom[roomIndex]}
//                   </span>
//                   <button
//                     onClick={() => handleRoomChange(roomIndex, 1)}
//                     disabled={adultsPerRoom[roomIndex] >= 5}
//                     className={`p-1.5 rounded-full ${
//                       adultsPerRoom[roomIndex] >= 5
//                         ? "bg-gray-100 text-gray-400"
//                         : "bg-gray-200 text-gray-700 hover:bg-gray-300"
//                     }`}
//                   >
//                     <Plus size={14} />
//                   </button>
//                 </div>
//               </div>

//               <div className="flex justify-between items-center gap-2">
//                 <span className="text-gray-700">Children</span>
//                 <div className="flex items-center space-x-3">
//                   <button
//                     onClick={() => handleChildrenChange(roomIndex, -1)}
//                     disabled={childrenPerRoom[roomIndex] <= 0}
//                     className={`p-1.5 rounded-full ${
//                       childrenPerRoom[roomIndex] <= 0
//                         ? "bg-gray-100 text-gray-400"
//                         : "bg-gray-200 text-gray-700 hover:bg-gray-300"
//                     }`}
//                   >
//                     <Minus size={14} />
//                   </button>
//                   <span className="w-6 text-center font-medium">
//                     {childrenPerRoom[roomIndex]}
//                   </span>
//                   <button
//                     onClick={() => handleChildrenChange(roomIndex, 1)}
//                     disabled={childrenPerRoom[roomIndex] >= 4}
//                     className={`p-1.5 rounded-full ${
//                       childrenPerRoom[roomIndex] >= 4
//                         ? "bg-gray-100 text-gray-400"
//                         : "bg-gray-200 text-gray-700 hover:bg-gray-300"
//                     }`}
//                   >
//                     <Plus size={14} />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <button
//         className="mt-6 w-full bg-main-color hover:bg-orange-500 text-white font-bold py-3 px-4 rounded-xl transition-colors duration-200"
//         onClick={toggleGuestDropdown}
//       >
//         Done
//       </button>
//     </motion.div>
//   );
// };

// export default GuestDropdown;






// GuestDropdown.js

"use client";

import React from "react";
import { motion } from "framer-motion";
import { LuPlus, LuMinus } from "react-icons/lu";

const GuestDropdown = ({
  rooms,
  adultsPerRoom,
  childrenPerRoom,
  handleAdultsChange,
  handleChildrenChange,
  addRoom,
  removeRoom,
  toggleGuestDropdown,
  guestDropdownRef,
}) => {
  return (
    <motion.div
      className="absolute top-full left-0 bg-white shadow-lg rounded-xl border p-4 w-full z-10 mt-2"
      ref={guestDropdownRef}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      
    >
      <div className="flex flex-row justify-between items-center mb-3">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 md:mb-0">Rooms & Guests</h3>
        <div className="flex items-center space-x-4">
          <button
            onClick={removeRoom}
            disabled={rooms <= 1}
            className={`p-2 rounded-full ${
              rooms <= 1
                ? "bg-gray-100 text-gray-400"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
                       <LuMinus size={12}/>

          </button>
          <span className="font-medium text-gray-800">{rooms}</span>
          <button
            onClick={addRoom}
            disabled={rooms >= 5}
            className={`p-2 rounded-full ${
              rooms >= 5
                ? "bg-gray-100 text-gray-400"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            <LuPlus size={12}/>
          </button>
        </div>
      </div>

      <div className="space-y-3" style={{ maxHeight: "180px", overflowY: "auto" }}>
        {Array.from({ length: rooms }).map((_, roomIndex) => (
          <div
            key={roomIndex}
            className="px-4 py-2 rounded-lg border flex flex-col md:flex-row justify-between items-start md:items-center"
          >
            <h4 className=" font-bold text-gray-700 md:mb-0 mb-2 ">
              Room {roomIndex + 1}
            </h4>

            <div className="flex flex-row items-center gap-2">
              <div className="flex justify-between items-center gap-2">
                <span className="text-gray-700">Adults</span>
                <input
                  type="number"
                  min="1"
                  max="5"
                  value={adultsPerRoom[roomIndex]}
                  onChange={(e) => handleAdultsChange(roomIndex, e.target.value)}
                  className="text-center border rounded-md py-1 px-2 text-gray-700"
                />
              </div>

              <div className="flex justify-between items-center gap-2">
                <span className="text-gray-700">Children</span>
                <input
                  type="number"
                  min="0"
                  max="4"
                  value={childrenPerRoom[roomIndex]}
                  onChange={(e) => handleChildrenChange(roomIndex, e.target.value)}
                  className="text-center border rounded-md py-1 px-2 text-gray-700"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        className="mt-4 w-full bg-main-color hover:bg-orange-500 text-white font-bold py-3 px-4 rounded-xl transition-colors duration-200"
        onClick={toggleGuestDropdown}
      >
        Done
      </button>
    </motion.div>
  );
};

export default GuestDropdown