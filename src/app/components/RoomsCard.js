// // components/RoomCard.js
// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { Tooltip } from "react-tooltip";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/autoplay";
// import "swiper/css/navigation";
// import "swiper/css/scrollbar";
// import "react-tooltip/dist/react-tooltip.css";

// const RoomCard = ({ room, getLabelColor, usdToInr }) => {
//   return (
//     <div
//       key={room.id}
//       className="bg-white rounded-xl overflow-hidden shadow-lg transform transition-all duration-500"
//     >
//       <div className="relative overflow-hidden">
//         <Swiper
//           modules={[Autoplay, Pagination]}
//           spaceBetween={30}
//           centeredSlides={true}
//           autoplay={{
//             delay: 2500,
//             disableOnInteraction: false,
//           }}
//           pagination={{
//             clickable: true,
//             renderBullet: (index, className) => {
//               return `<span class="${className} custom-bullet"></span>`;
//             },
//           }}
//           className="mySwiper"
//         >
//           {room.images.map((image, index) => (
//             <SwiperSlide key={index}>
//               <div className="">
//                 <Image
//                   src={image}
//                   alt={room.name}
//                   objectFit="cover"
//                   width={600} // Ensure these are defined
//                   height={400} // Ensure these are defined
//                   className="transition-transform duration-700 w-full rounded-t-xl"
//                 />
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//         <div
//           className={`absolute top-4 left-4 py-1 px-3 rounded-full text-xs font-semibold z-10 ${getLabelColor(
//             room.label
//           )}`}
//         >
//           {room.label}
//         </div>
//       </div>

//       <div className="p-6">
//         <div className="flex items-center justify-between pb-4 border-b">
//           <h3 className="text-2xl font-bold text-prime">{room.name}</h3>
//           <div className="text-right">
//             <span className={`text-xl font-semibold text-main-color`}>
//               ₹{usdToInr(room.price)}
//             </span>
//             <p className="text-base font-medium text-nowrap text-gray-800">
//               per night
//             </p>
//           </div>
//         </div>

//         <div className="mt-4">
//           <p className="text-gray-600 mb-4 line-clamp-2">
//             {room.description}
//           </p>

//           <div className="mb-5">
//             <h4 className="text-sm font-semibold text-gray-700">
//               Room Amenities:
//             </h4>
//             <div className="flex items-center flex-wrap gap-4 mt-2">
//               {room.icons.map((item, index) => (
//                 <div key={index}>
//                   <item.icon
//                     data-tooltip-id={`tooltip-${room.id}-${index}`}
//                     data-tooltip-content={item.name}
//                     data-tooltip-place="bottom"
//                     className="text-gray-600 hover:text-main-color font-me transform transition-all duration-150 h-5 w-5"
//                   />
//                   <Tooltip
//                     id={`tooltip-${room.id}-${index}`}
//                     style={{
//                       fontSize: "14px",
//                       color: "white",
//                       backgroundColor: "#1b1d22",
//                       padding: "5px 10px",
//                       borderRadius: "4px",
//                     }}
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         <button className="w-full inline-flex justify-end">
//           <Link
//             href={`/rooms/${room.id}`}
//             className=" px-6 py-2 bg-main-color text-white rounded-lg font-medium hover:bg-orange-500 transition-colors"
//           >
//             Details
//           </Link>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default RoomCard;

// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { Tooltip } from "react-tooltip";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";
// import { FaBed, FaBath, FaWifi, FaTv, FaSnowflake } from "react-icons/fa";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/autoplay";
// import "swiper/css/navigation";
// import "swiper/css/scrollbar";
// import "react-tooltip/dist/react-tooltip.css";

// // Import all images using aliases with updated names and paths - MOVED HERE
// import Economy_GowSeva_img1 from "../../../../../public/assets/images/hotels/hotel-1/Economy_GowSeva_img-1.jpg";
// import Economy_GowSeva_img2 from "../../../../../public/assets/images/hotels/hotel-1/Economy_GowSeva_img-2.jpg";

// import Normal_GowSeva_img1 from "../../../../../public/assets/images/hotels/hotel-2/Normal_GowSeva_img-1.jpg";
// import Normal_GowSeva_img2 from "../../../../../public/assets/images/hotels/hotel-2/Normal_GowSeva_img-2.jpg";

// import Semi_Deluxe_Brahmbhoj_img1 from "../../../../../public/assets/images/hotels/hotel-3/Semi_Deluxe_Brahmbhoj_img-1.jpg";
// import Semi_Deluxe_Brahmbhoj_img2 from "../../../../../public/assets/images/hotels/hotel-3/Semi_Deluxe_Brahmbhoj_img-2.jpg";

// import Family_Room_AannaDan_img1 from "../../../../../public/assets/images/hotels/hotel-4/Family_Room_AannaDan_img-1.jpg";
// import Family_Room_AannaDan_img2 from "../../../../../public/assets/images/hotels/hotel-4/Family_Room_AannaDan_img-2.jpg";

// import Annadan_img1 from "../../../../../public/assets/images/hotels/hotel-5/Annadan_img-1.jpg";
// import Annadan_img2 from "../../../../../public/assets/images/hotels/hotel-5/Annadan_img-2.jpg";

// import Sant_Bhojan_Donetion_img1 from "../../../../../public/assets/images/hotels/hotel-6/Sant_Bhojan_Donetion_img-1.jpg";
// import Sant_Bhojan_Donetion_img2 from "../../../../../public/assets/images/hotels/hotel-6/Sant_Bhojan_Donetion_img-2.jpg";

// import Aarti_Donation_img1 from "../../../../../public/assets/images/hotels/hotel-7/Aarti_Donation_img-1.jpg";
// import Aarti_Donation_img2 from "../../../../../public/assets/images/hotels/hotel-7/Aarti_Donation_img-2.jpg";

// const roomsData = [
//   {
//     id: 1,
//     name: "Economy GowSeva",
//     description:
//       "Comfortable room to stay and enjoy the premine facilities. Both a bicycle rental service and a car rental service are available.",
//     price: 1200,
//     images: [Economy_GowSeva_img1, Economy_GowSeva_img2],
//     label: "Economy Room",
//     icons: [
//       { icon: FaBed, name: "Bed" },
//       { icon: FaWifi, name: "Wifi" },
//       { icon: FaTv, name: "TV" },
//     ],
//   },
//   {
//     id: 2,
//     name: "Normal GowSeva",
//     description:
//       "Non-Ac rooms. swaminarayan ashram is 4.1km from the Yog Nagari.",
//     price: 24817, //INR
//     images: [Normal_GowSeva_img1, Normal_GowSeva_img2],
//     label: "Standard Room",
//     icons: [
//       { icon: FaBed, name: "Bed" },
//       { icon: FaBath, name: "Bath" },
//       { icon: FaWifi, name: "Wifi" },
//       { icon: FaTv, name: "TV" },
//       { icon: FaSnowflake, name: "Air Conditioning" },
//     ],
//   },
//   {
//     id: 3,
//     name: "Semi Deluxe Brahmbhoj",
//     description:
//       "The daily breakfast offers continental or vegetarian options. Hotwater is available is bathroom.",
//     price: 16517, //INR
//     images: [Semi_Deluxe_Brahmbhoj_img1, Semi_Deluxe_Brahmbhoj_img2],
//     label: "Family Room",
//     icons: [
//       { icon: FaBed, name: "Bed" },
//       { icon: FaBath, name: "Bath" },
//       { icon: FaWifi, name: "Wifi" },
//       { icon: FaTv, name: "TV" },
//       { icon: FaSnowflake, name: "Air Conditioning" },
//     ],
//   },
//   {
//     id: 4,
//     name: "Premium Room VidhyaDaan",
//     description:
//       "vegetarian breakfast options are available daily at the homestay. Both a bicycle rental service and a car rental service are available.",
//     price: 28967, //INR
//     images: [Family_Room_AannaDan_img1, Family_Room_AannaDan_img2],
//     label: "Luxury Room",
//     icons: [
//       { icon: FaBed, name: "Bed" },
//       { icon: FaBath, name: "Bath" },
//       { icon: FaWifi, name: "Wifi" },
//       { icon: FaTv, name: "TV" },
//     ],
//   },
//   {
//     id: 5,
//     name: "Annadan",
//     description:
//       "Experience ultimate comfort in our Deluxe Room. Enjoy modern amenities and stylish decor for a relaxing stay.",
//     price: 35000,
//     images: [Annadan_img1, Annadan_img2],
//     label: "Luxury Room",
//     icons: [
//       { icon: FaBed, name: "Bed" },
//       { icon: FaBath, name: "Bath" },
//       { icon: FaWifi, name: "Wifi" },
//       { icon: FaTv, name: "TV" },
//       { icon: FaSnowflake, name: "Air Conditioning" },
//     ],
//   },
//   {
//     id: 6,
//     name: "Sant Bhojan Donetion",
//     description:
//       "Indulge in the spacious Super Deluxe Room with premium amenities. Perfect for families or guests seeking extra comfort.",
//     price: 45000,
//     images: [Sant_Bhojan_Donetion_img1, Sant_Bhojan_Donetion_img2],
//     label: "Family Room",
//     icons: [
//       { icon: FaBed, name: "Bed" },
//       { icon: FaBath, name: "Bath" },
//       { icon: FaWifi, name: "Wifi" },
//       { icon: FaTv, name: "TV" },
//       { icon: FaSnowflake, name: "Air Conditioning" },
//     ],
//   },
//   {
//     id: 7,
//     name: "Aarti Donation",
//     description:
//       "Luxurious Suite Room with separate living area and bedroom. Enjoy breathtaking views and unparalleled comfort.",
//     price: 60000,
//     images: [Aarti_Donation_img1, Aarti_Donation_img2],
//     label: "Economy Room",
//     icons: [
//       { icon: FaBed, name: "Bed" },
//       { icon: FaBath, name: "Bath" },
//       { icon: FaWifi, name: "Wifi" },
//       { icon: FaTv, name: "TV" },
//       { icon: FaSnowflake, name: "Air Conditioning" },
//     ],
//   },
// ];

// const RoomCard = ({ room }) => {
//   const getLabelColor = (label) => {
//     switch (label) {
//       case "Luxury Room":
//         return "bg-purple-100 text-purple-600";
//       case "Standard Room":
//         return "bg-green-100 text-green-600";
//       case "Family Room":
//         return "bg-blue-100 text-blue-600";
//       case "Economy Room":
//         return "bg-gray-100 text-gray-600";

//       default:
//         return "bg-gray-200 text-gray-700";
//     }
//   };

//   const usdToInr = (usd) => {
//     return usd;
//   };

//   return (
//     <div
//       key={room.id}
//       className="bg-white rounded-xl overflow-hidden shadow-lg"
//     >
//       <div className="relative overflow-hidden">
//         <Swiper
//           modules={[Autoplay, Pagination]}
//           spaceBetween={30}
//           centeredSlides={true}
//           autoplay={{
//             delay: 2500,
//             disableOnInteraction: false,
//           }}
//           pagination={{
//             clickable: true,
//             renderBullet: (index, className) => {
//               return `<span class="${className} custom-bullet"></span>`;
//             },
//           }}
//           className="mySwiper"
//         >
//           {room.images.map((image, index) => (
//             <SwiperSlide key={index}>
//               <div className="">
//                 <Image
//                   src={image}
//                   alt={room.name}
//                   objectFit="cover"
//                   width={600} // Ensure these are defined
//                   height={400} // Ensure these are defined
//                   className="transition-transform duration-700 w-full rounded-t-xl"
//                 />
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//         <div
//           className={`absolute top-4 left-4 py-1 px-3 rounded-full text-xs font-semibold z-10 ${getLabelColor(
//             room.label
//           )}`}
//         >
//           {room.label}
//         </div>
//       </div>

//       <div className="p-6">
//         <div className="flex items-center justify-between pb-4 border-b">
//           <h3 className="text-2xl font-bold text-prime">{room.name}</h3>
//           <div className="text-right">
//             <span className={`text-xl font-semibold text-main-color`}>
//               ₹{usdToInr(room.price)}
//             </span>
//             <p className="text-base font-medium text-nowrap text-gray-800">
//               per night
//             </p>
//           </div>
//         </div>

//         <div className="mt-4">
//           <p className="text-gray-600 mb-4 line-clamp-2">{room.description}</p>

//           <div className="mb-5">
//             <h4 className="text-sm font-semibold text-gray-700">
//               Room Amenities:
//             </h4>
//             <div className="flex items-center flex-wrap gap-4 mt-2">
//               {room.icons.map((item, index) => (
//                 <div key={index}>
//                   <item.icon
//                     data-tooltip-id={`tooltip-${room.id}-${index}`}
//                     data-tooltip-content={item.name}
//                     data-tooltip-place="bottom"
//                     className="text-gray-600 hover:text-main-color font-me transform transition-all duration-150 h-5 w-5"
//                   />
//                   <Tooltip
//                     id={`tooltip-${room.id}-${index}`}
//                     style={{
//                       fontSize: "14px",
//                       color: "white",
//                       backgroundColor: "#1b1d22",
//                       padding: "5px 10px",
//                       borderRadius: "4px",
//                     }}
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         <button className="w-full inline-flex justify-end">
//           <Link
//             href={`/rooms/${room.id}`}
//             className=" px-6 py-2 bg-main-color text-white rounded-lg font-medium hover:bg-orange-500 transition-colors"
//           >
//             Details
//           </Link>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default RoomCard;
// export { roomsData }; // Export the data

"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Tooltip } from "react-tooltip";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import { FaBed, FaBath, FaWifi, FaTv, FaSnowflake, FaChild, FaPaw, FaUtensils, FaExclamationCircle, } from "react-icons/fa";
import { IoLogoNoSmoking } from "react-icons/io5";
import { BsFillPersonBadgeFill } from "react-icons/bs";
import { GiMeal } from "react-icons/gi";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "react-tooltip/dist/react-tooltip.css";

// Import all images using aliases with updated names and paths - MOVED HERE
import Economy_GowSeva_img1 from "../../../public/assets/images/hotels/hotel-1/Economy_GowSeva_img-1.jpg";
import Economy_GowSeva_img2 from "../../../public/assets/images/hotels/hotel-1/Economy_GowSeva_img-2.jpg";

import Normal_GowSeva_img1 from "../../../public/assets/images/hotels/hotel-2/Normal_GowSeva_img-1.jpg";
import Normal_GowSeva_img2 from "../../../public/assets/images/hotels/hotel-2/Normal_GowSeva_img-2.jpg";

import Semi_Deluxe_Brahmbhoj_img1 from "../../../public/assets/images/hotels/hotel-3/Semi_Deluxe_Brahmbhoj_img-1.jpg";
import Semi_Deluxe_Brahmbhoj_img2 from "../../../public/assets/images/hotels/hotel-3/Semi_Deluxe_Brahmbhoj_img-2.jpg";

import Family_Room_AannaDan_img1 from "../../../public/assets/images/hotels/hotel-4/Family_Room_AannaDan_img-1.jpg";
import Family_Room_AannaDan_img2 from "../../../public/assets/images/hotels/hotel-4/Family_Room_AannaDan_img-2.jpg";

import Annadan_img1 from "../../../public/assets/images/hotels/hotel-5/Annadan_img-1.jpg";
import Annadan_img2 from "../../../public/assets/images/hotels/hotel-5/Annadan_img-2.jpg";

import Sant_Bhojan_Donetion_img1 from "../../../public/assets/images/hotels/hotel-6/Sant_Bhojan_Donetion_img-1.jpg";
import Sant_Bhojan_Donetion_img2 from "../../../public/assets/images/hotels/hotel-6/Sant_Bhojan_Donetion_img-2.jpg";

import Aarti_Donation_img1 from "../../../public/assets/images/hotels/hotel-7/Aarti_Donation_img-1.jpg";
import Aarti_Donation_img2 from "../../../public/assets/images/hotels/hotel-7/Aarti_Donation_img-2.jpg";

const roomsData = [
  {
    id: 1,
    name: "Economy GowSeva",
    description:
      "Comfortable room to stay and enjoy the premine facilities. Both a bicycle rental service and a car rental service are available.",
    price: 1200,
    images: [Economy_GowSeva_img1, Economy_GowSeva_img2],
    label: "Economy Room",
    icons: [
      { icon: FaBed, name: "Bed" },
      { icon: FaWifi, name: "Wifi" },
      { icon: FaTv, name: "TV" },
    ],
    goodToKnow: [  // Add this!
      {
        title: "Children",
        description: "Children are welcome at this hotel.",
        icon: FaChild,
      },
      {
        title: "Additional Beds",
        description: "Cribs cannot be added. Children can use extra beds for an additional charge of INR 500.0.",
        icon: FaBed,
      },
      {
        title: "Pets",
        description: "Pets are not allowed.",
        icon: FaPaw,
      },
      {
          title: "Breakfast",
          description: "Breakfast available.",
          icon: FaUtensils,
      },
      {
        title: "ID Proof Required",
        description: "ID proof required for check-in.",
        icon: BsFillPersonBadgeFill,
      },
      {
        title: "Room Service",
        description: "Room service available.",
        icon: GiMeal,
      },
      {
        title: "Non-Smoking Rooms",
        description: "Non-smoking rooms are available.",
        icon: IoLogoNoSmoking,
      },
      {
        title: "Important Information from the hotel",
        description: "A damage deposit of INR 5000 is required on arrival. This will be collected as a cash payment. You should be reimbursed on check-out. Your deposit will be refunded in full in cash, subject to an inspection of the property.",
        icon: FaExclamationCircle,
      },
    ],
  },
  {
    id: 2,
    name: "Normal GowSeva",
    description:
      "Non-Ac rooms. swaminarayan ashram is 4.1km from the Yog Nagari.",
    price: 1500, //INR
    images: [Normal_GowSeva_img1, Normal_GowSeva_img2],
    label: "Normal Room",
    icons: [
      { icon: FaBed, name: "Bed" },
      { icon: FaBath, name: "Bath" },
      { icon: FaWifi, name: "Wifi" },
      { icon: FaTv, name: "TV" },
      { icon: FaSnowflake, name: "Air Conditioning" },
    ],
    goodToKnow: [  // Add this!
      {
        title: "Children",
        description: "Children are welcome at this hotel.",
        icon: FaChild,
      },
      {
        title: "Additional Beds",
        description: "Extra beds can be arranged for an additional fee.",
        icon: FaBed,
      },
      {
          title: "Breakfast",
          description: "Breakfast available.",
          icon: FaUtensils,
      },
      {
        title: "ID Proof Required",
        description: "ID proof required for check-in.",
        icon: BsFillPersonBadgeFill,
      },
      {
        title: "Non-Smoking Rooms",
        description: "Non-smoking rooms are available.",
        icon: IoLogoNoSmoking,
      },
    ],
  },
  {
    id: 3,
    name: "Semi Deluxe Brahmbhoj",
    description:
      "The daily breakfast offers continental or vegetarian options. Hotwater is available is bathroom.",
    price: 2100, //INR
    images: [Semi_Deluxe_Brahmbhoj_img1, Semi_Deluxe_Brahmbhoj_img2],
    label: "Semi Deluxe Room",
    icons: [
      { icon: FaBed, name: "Bed" },
      { icon: FaBath, name: "Bath" },
      { icon: FaWifi, name: "Wifi" },
      { icon: FaTv, name: "TV" },
      { icon: FaSnowflake, name: "Air Conditioning" },
    ],
      goodToKnow: [  // Add this!
        {
          title: "Children",
          description: "Children are welcome at this hotel.",
          icon: FaChild,
        },
        {
          title: "Additional Beds",
          description: "Cribs cannot be added. Children can use extra beds for an additional charge of INR 500.0.",
          icon: FaBed,
        },
        {
          title: "Pets",
          description: "Pets are not allowed.",
          icon: FaPaw,
        },
        {
            title: "Breakfast",
            description: "Breakfast available.",
            icon: FaUtensils,
        },
        {
          title: "ID Proof Required",
          description: "ID proof required for check-in.",
          icon: BsFillPersonBadgeFill,
        },
        {
          title: "Room Service",
          description: "Room service available.",
          icon: GiMeal,
        },
        {
          title: "Non-Smoking Rooms",
          description: "Non-smoking rooms are available.",
          icon: IoLogoNoSmoking,
        },
      ],
  },
  {
    id: 4,
    name: "Premium Room VidhyaDaan",
    description:
      "vegetarian breakfast options are available daily at the homestay. Both a bicycle rental service and a car rental service are available.",
    price: 2400, //INR
    images: [Family_Room_AannaDan_img1, Family_Room_AannaDan_img2],
    label: "Premium Room",
    icons: [
      { icon: FaBed, name: "Bed" },
      { icon: FaBath, name: "Bath" },
      { icon: FaWifi, name: "Wifi" },
      { icon: FaTv, name: "TV" },
    ],
      goodToKnow: [  // Add this!
        {
          title: "Children",
          description: "Children are welcome at this hotel.",
          icon: FaChild,
        },
        {
          title: "Additional Beds",
          description: "Cribs cannot be added. Children can use extra beds for an additional charge of INR 500.0.",
          icon: FaBed,
        },
        {
          title: "Pets",
          description: "Pets are not allowed.",
          icon: FaPaw,
        },
        {
            title: "Breakfast",
            description: "Breakfast available.",
            icon: FaUtensils,
        },
        {
          title: "ID Proof Required",
          description: "ID proof required for check-in.",
          icon: BsFillPersonBadgeFill,
        },
        {
          title: "Room Service",
          description: "Room service available.",
          icon: GiMeal,
        },
        {
          title: "Non-Smoking Rooms",
          description: "Non-smoking rooms are available.",
          icon: IoLogoNoSmoking,
        },
      ],
  },
  {
    id: 5,
    name: "Annadan",
    description:
      "Experience ultimate comfort in our Deluxe Room. Enjoy modern amenities and stylish decor for a relaxing stay.",
    price: 3600,
    images: [Annadan_img1, Annadan_img2],
    label: "Family Room",
    icons: [
      { icon: FaBed, name: "Bed" },
      { icon: FaBath, name: "Bath" },
      { icon: FaWifi, name: "Wifi" },
      { icon: FaTv, name: "TV" },
      { icon: FaSnowflake, name: "Air Conditioning" },
    ],
      goodToKnow: [  // Add this!
        {
          title: "Children",
          description: "Children are welcome at this hotel.",
          icon: FaChild,
        },
        {
          title: "Additional Beds",
          description: "Cribs cannot be added. Children can use extra beds for an additional charge of INR 500.0.",
          icon: FaBed,
        },
        {
          title: "Pets",
          description: "Pets are not allowed.",
          icon: FaPaw,
        },
        {
            title: "Breakfast",
            description: "Breakfast available.",
            icon: FaUtensils,
        },
        {
          title: "ID Proof Required",
          description: "ID proof required for check-in.",
          icon: BsFillPersonBadgeFill,
        },
        {
          title: "Room Service",
          description: "Room service available.",
          icon: GiMeal,
        },
        {
          title: "Non-Smoking Rooms",
          description: "Non-smoking rooms are available.",
          icon: IoLogoNoSmoking,
        },
      ],
  },
  {
    id: 6,
    name: "Sant Bhojan Donetion",
    description:
      "Indulge in the spacious Super Deluxe Room with premium amenities. Perfect for families or guests seeking extra comfort.",
    price: 3900,
    images: [Sant_Bhojan_Donetion_img1, Sant_Bhojan_Donetion_img2],
    label: "Family Premium Room",
    icons: [
      { icon: FaBed, name: "Bed" },
      { icon: FaBath, name: "Bath" },
      { icon: FaWifi, name: "Wifi" },
      { icon: FaTv, name: "TV" },
      { icon: FaSnowflake, name: "Air Conditioning" },
    ],
      goodToKnow: [  // Add this!
        {
          title: "Children",
          description: "Children are welcome at this hotel.",
          icon: FaChild,
        },
        {
          title: "Additional Beds",
          description: "Cribs cannot be added. Children can use extra beds for an additional charge of INR 500.0.",
          icon: FaBed,
        },
        {
          title: "Pets",
          description: "Pets are not allowed.",
          icon: FaPaw,
        },
        {
            title: "Breakfast",
            description: "Breakfast available.",
            icon: FaUtensils,
        },
        {
          title: "ID Proof Required",
          description: "ID proof required for check-in.",
          icon: BsFillPersonBadgeFill,
        },
        {
          title: "Room Service",
          description: "Room service available.",
          icon: GiMeal,
        },
        {
          title: "Non-Smoking Rooms",
          description: "Non-smoking rooms are available.",
          icon: IoLogoNoSmoking,
        },
      ],
  },
  {
    id: 7,
    name: "Aarti Donation",
    description:
      "Luxurious Suite Room with separate living area and bedroom. Enjoy breathtaking views and unparalleled comfort.",
    price: 4500,
    images: [Aarti_Donation_img1, Aarti_Donation_img2],
    label: "Economy Room",
    icons: [
      { icon: FaBed, name: "Bed" },
      { icon: FaBath, name: "Bath" },
      { icon: FaWifi, name: "Wifi" },
      { icon: FaTv, name: "TV" },
      { icon: FaSnowflake, name: "Air Conditioning" },
    ],
      goodToKnow: [  // Add this!
        {
          title: "Children",
          description: "Children are welcome at this hotel.",
          icon: FaChild,
        },
        {
          title: "Additional Beds",
          description: "Cribs cannot be added. Children can use extra beds for an additional charge of INR 500.0.",
          icon: FaBed,
        },
        {
          title: "Pets",
          description: "Pets are not allowed.",
          icon: FaPaw,
        },
        {
            title: "Breakfast",
            description: "Breakfast available.",
            icon: FaUtensils,
        },
        {
          title: "ID Proof Required",
          description: "ID proof required for check-in.",
          icon: BsFillPersonBadgeFill,
        },
        {
          title: "Room Service",
          description: "Room service available.",
          icon: GiMeal,
        },
        {
          title: "Non-Smoking Rooms",
          description: "Non-smoking rooms are available.",
          icon: IoLogoNoSmoking,
        },
      ],
  },
];

const RoomCard = ({ room }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getLabelColor = (label) => {
    switch (label) {
      case "Semi Deluxe Room":
        return "bg-purple-100 text-purple-600";
      case "Normal Room":
        return "bg-green-100 text-green-600";
      case "Family Room":
        return "bg-blue-100 text-blue-600";
      case "Economy Room":
        return "bg-gray-100 text-gray-600";
      case "Deluxe":
        return "bg-yellow-100 text-yellow-600";
      case "Premium Room":
        return "bg-red-100 text-red-600";
      case "Family Premium Room":
        return "bg-indigo-100 text-indigo-600";
      default:
        return "bg-gray-200 text-gray-700";
    }
  };

  const usdToInr = (usd) => {
    return usd;
  };

  return (
    <div
      key={room.id}
      className="bg-white rounded-xl overflow-hidden shadow-lg"
    >
      <div
        className="relative overflow-hidden group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={30}
          pagination={{
            clickable: true,
            renderBullet: (index, className) => {
              return `<span className="${className} custom-bullet"></span>`;
            },
          }}
          navigation={isHovered ? true : false} // Conditionally render navigation
          className="mySwiper"
        >
          {room.images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="">
                <Image
                  src={image}
                  alt={room.name}
                  objectFit="cover"
                  width={600} // Ensure these are defined
                  height={400} // Ensure these are defined
                  className="transition-transform duration-700 w-full rounded-t-xl"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div
          className={`absolute top-4 left-4 py-1 px-3 rounded-full text-xs font-semibold z-10 ${getLabelColor(
            room.label
          )}`}
        >
          {room.label}
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between pb-4 border-b">
          <h3 className="text-2xl font-bold text-prime">{room.name}</h3>
          <div className="text-right">
            <span className={`text-xl font-semibold text-main-color`}>
              ₹{usdToInr(room.price)}
            </span>
            <p className="text-base font-medium text-nowrap text-gray-800">
              per night
            </p>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-gray-600 mb-4 line-clamp-2">{room.description}</p>

          <div className="mb-5">
            <h4 className="text-sm font-semibold text-gray-700">
              Room Amenities:
            </h4>
            <div className="flex items-center flex-wrap gap-4 mt-2">
              {room.icons.map((item, index) => (
                <div key={index}>
                  <item.icon
                    data-tooltip-id={`tooltip-${room.id}-${index}`}
                    data-tooltip-content={item.name}
                    data-tooltip-place="bottom"
                    className="text-gray-600 hover:text-main-color font-me transform transition-all duration-150 h-5 w-5"
                  />
                  <Tooltip
                    id={`tooltip-${room.id}-${index}`}
                    style={{
                      fontSize: "14px",
                      color: "white",
                      backgroundColor: "#1b1d22",
                      padding: "5px 10px",
                      borderRadius: "4px",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <button className="w-full inline-flex justify-end">
          <Link
            href={`/rooms/${room.id}`}
            className=" px-6 py-2 bg-main-color text-white rounded-lg font-medium hover:bg-orange-500 transition-colors"
          >
            Details
          </Link>
        </button>
      </div>
    </div>
  );
};

export default RoomCard;
export { roomsData }; // Export the data
