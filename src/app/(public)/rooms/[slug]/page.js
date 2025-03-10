// "use client"
// import React from 'react';
// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Navigation } from "swiper/modules";
// import { FaBed, FaBath, FaWifi, FaTv, FaSnowflake, FaArrowLeft } from "react-icons/fa";
// import Link from "next/link";
// import { roomsData } from '../../components/RoomsCard';

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// export default function RoomDetail({ params }) {
//   const { slug } = params;
//   const roomId = parseInt(slug);
//   const room = roomsData.find(room => room.id === roomId);

//   if (!room) {
//     return (
//       <div className="container mx-auto py-16 px-4">
//         <h1 className="text-3xl font-bold mb-6 text-center">Room not found</h1>
//         <div className="text-center">
//           <Link href="/rooms" className="inline-flex items-center text-main-color hover:underline">
//             <FaArrowLeft className="mr-2" /> Back to All Rooms
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   const amenityIcons = {
//     Bed: FaBed,
//     Bath: FaBath,
//     Wifi: FaWifi,
//     TV: FaTv,
//     "Air Conditioning": FaSnowflake,
//   };

//   return (
//     <div className="container mx-auto py-8 px-4">
//       <Link href="/rooms" className="inline-flex items-center mb-6 text-main-color hover:underline">
//         <FaArrowLeft className="mr-2" /> Back to All Rooms
//       </Link>

//       <div className="bg-white rounded-xl overflow-hidden shadow-lg mb-8">
//         {/* Room Image Slider */}
//         <div className="relative">
//           <Swiper
//             modules={[Pagination, Navigation]}
//             spaceBetween={0}
//             navigation={true}
//             pagination={{
//               clickable: true,
//               renderBullet: (index, className) => {
//                 return `<span class="${className} custom-bullet"></span>`;
//               },
//             }}
//             className="mySwiper h-[400px] md:h-[500px]"
//           >
//             {room.images.map((image, index) => (
//               <SwiperSlide key={index}>
//                 <div className="h-full">
//                   <Image
//                     src={image}
//                     alt={`${room.name} - Image ${index + 1}`}
//                     fill
//                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                     style={{ objectFit: "cover" }}
//                     priority={index === 0}
//                     className="transition-transform duration-700"
//                   />
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//           <div className="absolute top-4 left-4 py-1 px-3 rounded-full text-xs font-semibold z-10 bg-orange-100 text-orange-600">
//             {room.label}
//           </div>
//         </div>

//         {/* Room Details */}
//         <div className="p-6 md:p-8">
//           <div className="flex flex-col md:flex-row md:items-center md:justify-between pb-4 border-b">
//             <h1 className="text-3xl font-bold mb-2 md:mb-0">{room.name}</h1>
//             <div className="text-left md:text-right">
//               <span className="text-2xl font-semibold text-main-color">₹{room.price}</span>
//               <p className="text-base font-medium text-gray-800">per night</p>
//             </div>
//           </div>

//           <div className="mt-8">
//             <h2 className="text-xl font-semibold mb-4">Description</h2>
//             <p className="text-gray-600 mb-8">{room.description}</p>

//             <div className="mb-8">
//               <h2 className="text-xl font-semibold mb-4">Room Amenities</h2>
//               <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//                 {room.icons.map((item, index) => (
//                   <div key={index} className="flex items-center p-3 rounded-lg bg-gray-50">
//                     <item.icon className="text-main-color h-5 w-5 mr-3" />
//                     <span className="text-gray-700">{item.name}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pt-4 border-t">
//               <div>
//                 <h3 className="text-lg font-semibold">Booking Information</h3>
//                 <p className="text-gray-600">Contact us for special requirements</p>
//               </div>
//               <Link
//                 href="#"
//                 className="px-6 py-3 bg-main-color text-white rounded-lg font-medium hover:bg-orange-500 transition-colors"
//               >
//                 Book Now
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Additional Information Section */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
//         <div className="bg-white rounded-xl p-6 shadow-lg">
//           <h2 className="text-xl font-semibold mb-4">Hotel Policies</h2>
//           <ul className="space-y-3 text-gray-600">
//             <li>• Check-in: 2:00 PM - 12:00 AM</li>
//             <li>• Check-out: 11:00 AM</li>
//             <li>• No pets allowed</li>
//             <li>• Non-smoking rooms</li>
//             <li>• ID proof required for check-in</li>
//           </ul>
//         </div>
//         <div className="bg-white rounded-xl p-6 shadow-lg">
//           <h2 className="text-xl font-semibold mb-4">Room Features</h2>
//           <ul className="space-y-3 text-gray-600">
//             <li>• Room service available</li>
//             <li>• Daily housekeeping</li>
//             <li>• Free toiletries</li>
//             <li>• Desk & work area</li>
//             <li>• Complimentary breakfast</li>
//           </ul>
//         </div>
//       </div>

//       {/* Related Rooms Section */}
//       <div className="mt-12">
//         <h2 className="text-2xl font-bold mb-6">You Might Also Like</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {roomsData
//             .filter(r => r.id !== room.id)
//             .slice(0, 3)
//             .map((relatedRoom) => (
//               <div key={relatedRoom.id} className="bg-white rounded-xl overflow-hidden shadow-lg">
//                 <div className="relative h-48">
//                   <Image
//                     src={relatedRoom.images[0]}
//                     alt={relatedRoom.name}
//                     fill
//                     style={{ objectFit: "cover" }}
//                     className="transition-transform duration-700"
//                   />
//                   <div className="absolute top-4 left-4 py-1 px-3 rounded-full text-xs font-semibold z-10 bg-orange-100 text-orange-600">
//                     {relatedRoom.label}
//                   </div>
//                 </div>
//                 <div className="p-4">
//                   <h3 className="text-lg font-bold">{relatedRoom.name}</h3>
//                   <div className="flex justify-between items-center mt-2">
//                     <p className="text-main-color font-semibold">₹{relatedRoom.price}</p>
//                     <Link
//                       href={`/rooms/${relatedRoom.id}`}
//                       className="text-sm text-main-color hover:underline"
//                     >
//                       View Details
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// RoomDetail.js

// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Navigation, EffectFade, Autoplay } from "swiper/modules";
// import {
//   FaArrowLeft,
//   FaRegCalendarAlt,
//   FaUsers,
//   FaCheck,
// } from "react-icons/fa";
// import Link from "next/link";
// import { roomsData } from "../../components/RoomsCard";
// import BookingForm from "../../components/BookingForm";
// import { useParams } from "next/navigation";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import "swiper/css/effect-fade";

// export default function RoomDetail() {
//   const params = useParams();
//   const { slug } = params;
//   const roomId = parseInt(slug);
//   const room = roomsData.find((room) => room.id === roomId);
//   const [selectedImage, setSelectedImage] = useState(0);

//   if (!room) {
//     return (
//       <div className="container mx-auto py-16 px-4">
//         <h1 className="text-3xl font-bold mb-6 text-center">Room not found</h1>
//         <div className="text-center">
//           <Link
//             href="/rooms"
//             className="inline-flex items-center text-main-color hover:underline"
//           >
//             <FaArrowLeft className="mr-2" /> Back to All Rooms
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <section className="Single-Room-Page py-12">
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between mb-8">
//           <Link
//             href="/rooms"
//             className="inline-flex items-center text-main-color hover:underline transition-all duration-300 transform hover:-translate-x-1"
//           >
//             <FaArrowLeft className="mr-2" /> Back to All Rooms
//           </Link>
//         </div>

//         <div className="mb-8">
//           <div className="bg-white rounded-xl overflow-hidden shadow-xl w-full border border-gray-100">
//             {/* Room Image Gallery */}
//             <div className="relative">
//               <Swiper
//                 modules={[Pagination, Navigation, EffectFade, Autoplay]}
//                 spaceBetween={0}
//                 navigation={true}
//                 effect="fade"
//                 autoplay={{
//                   delay: 5000,
//                   disableOnInteraction: false,
//                 }}
//                 pagination={{
//                   clickable: true,
//                   renderBullet: (index, className) => {
//                     return `<span class="${className} custom-bullet"></span>`;
//                   },
//                 }}
//                 onSlideChange={(swiper) => setSelectedImage(swiper.activeIndex)}
//                 className="mySwiper "
//               >
//                 {room.images.map((image, index) => (
//                   <SwiperSlide key={index}>
//                     <div className="relative group">
//                       <Image
//                         src={image}
//                         alt={`${room.name} - Image ${index + 1}`}
//                         priority={index === 0}
//                         className="transition-transform duration-700 h-full group-hover:scale-105 object-cover"
//                       />
//                       {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> */}
//                     </div>
//                   </SwiperSlide>
//                 ))}
//               </Swiper>
//               <div className="absolute top-4 left-4 z-10">
//                 <span className="py-2 px-4 rounded-full text-sm font-semibold bg-orange-100 text-orange-600 shadow-md">
//                   {room.label}
//                 </span>
//               </div>
//             </div>

//             {/* Room Details */}
//             <div className="p-4 md:p-6">
//               <div className="hidden md:block">
//                 <div className="flex space-x-2 mb-4">
//                   {room.images.map((image, index) => (
//                     <div
//                       key={index}
//                       className={`cursor-pointer rounded-md transition-all duration-200 ${
//                         selectedImage === index
//                           ? "scale-105 border-2 border-main-color"
//                           : "border-transparent opacity-70"
//                       }`}
//                       onClick={() =>
//                         document
//                           .querySelector(
//                             ".swiper-pagination-bullet:nth-child(" +
//                               (index + 1) +
//                               ")"
//                           )
//                           .click()
//                       }
//                     >
//                       <Image
//                         src={image}
//                         alt={`Thumbnail ${index + 1}`}
//                         width={100}
//                         style={{ objectFit: "cover" }}
//                         className="rounded-md"
//                       />
//                     </div>
//                   ))}
//                 </div>
//               </div>
//               <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 border-b">
//                 <h1 className="text-3xl font-bold mb-2 md:mb-0">
//                   {room.name}
//                 </h1>
//                 <div className="text-left md:text-right">
//                   <div className="flex items-baseline">
//                     <span className="text-3xl font-bold text-main-color">
//                       ₹{room.price}
//                     </span>
//                   </div>
//                   <p className="text-base font-medium text-gray-800">
//                     per night
//                   </p>
//                 </div>
//               </div>

//               <div className="mt-8">
//                 <h2 className="text-xl font-semibold mb-4">Description</h2>
//                 <p className="text-gray-600 mb-8 leading-relaxed">
//                   {room.description}
//                 </p>

//                 <div>
//                   <h2 className="text-xl font-semibold mb-4">Room Amenities</h2>
//                   <div className="flex items-center gap-2 flex-wrap">
//                     {room.icons.map((item, index) => (
//                       <div
//                         key={index}
//                         className="flex items-center gap-2 py-2 px-4 w-fit rounded-lg bg-gray-50 border border-gray-100 hover:shadow-md transition-all duration-300 hover:bg-gray-100"
//                       >
//                         <div className=" bg-main-color/10 p-2 rounded-full">
//                           <item.icon className="text-main-color" />
//                         </div>
//                         <span className="text-gray-700 font-medium text-nowrap">
//                           {item.name}
//                         </span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Booking form section */}
//         <div className="max-w-3xl ">
//           <BookingForm />
//         </div>

//         {/* Additional Information Section - Redesigned without cards */}
//         <div className="mb-12 mt-8">
//           <h2 className="text-2xl font-bold mb-6">
//             Additional Information
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//             {/* Hotel Policies */}
//             <div>
//               <div className="flex items-center mb-4">
//                 <div className="bg-main-color/10 p-2 rounded-full mr-3">
//                   <FaRegCalendarAlt className="text-main-color" />
//                 </div>
//                 <h3 className="text-xl font-semibold">Hotel Policies</h3>
//               </div>
//               <div className="border-l-2 border-main-color/20 pl-4">
//                 <ul className="space-y-3 text-gray-600">
//                   {room.hotelPolicies.map((policy, index) => (
//                     <li key={index} className="flex items-start">
//                       <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
//                       <span>{policy}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>

//             {/* Room Features */}
//             <div>
//               <div className="flex items-center mb-4">
//                 <div className="bg-main-color/10 p-2 rounded-full mr-3">
//                   <FaUsers className="text-main-color" />
//                 </div>
//                 <h3 className="text-xl font-semibold">Room Features</h3>
//               </div>
//               <div className="border-l-2 border-main-color/20 pl-4">
//                 <ul className="space-y-3 text-gray-600">
//                   {room.roomFeatures.map((feature, index) => (
//                     <li key={index} className="flex items-start">
//                       <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
//                       <span>{feature}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Related Rooms Section */}
//         <div className="mt-12">
//           <h2 className="text-2xl font-bold mb-6">You Might Also Like</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {roomsData
//               .filter((r) => r.id !== room.id)
//               .slice(0, 3)
//               .map((relatedRoom) => (
//                 <div
//                   key={relatedRoom.id}
//                   className="bg-white rounded-xl overflow-hidden shadow-lg"
//                 >
//                   <div className="relative h-48">
//                     <Image
//                       src={relatedRoom.images[0]}
//                       alt={relatedRoom.name}
//                       fill
//                       style={{ objectFit: "cover" }}
//                       className="transition-transform duration-700"
//                     />
//                     <div className="absolute top-4 left-4 py-1 px-3 rounded-full text-xs font-semibold z-10 bg-orange-100 text-orange-600">
//                       {relatedRoom.label}
//                     </div>
//                   </div>
//                   <div className="p-4">
//                     <h3 className="text-lg font-bold">
//                       {relatedRoom.name}
//                     </h3>
//                     <div className="flex justify-between items-center mt-2">
//                       <p className="text-main-color font-semibold">
//                         ₹{relatedRoom.price}
//                       </p>
//                       <Link
//                         href={`/rooms/${relatedRoom.id}`}
//                         className="text-sm text-main-color hover:underline"
//                       >
//                         View Details
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectFade, Autoplay } from "swiper/modules";
import { FaArrowLeft, FaStar } from "react-icons/fa";
import Link from "next/link";
import { roomsData } from "../../../components/RoomsCard";
import BookingForm from "../../../components/BookingForm";
import { useParams } from "next/navigation";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import BreadcrumbWithBack from "../../../components/BreadcrumbWithBack";

export default function RoomDetail() {
  const params = useParams();
  const { slug } = params;
  const roomId = parseInt(slug);
  const room = roomsData.find((room) => room.id === roomId);
  const [selectedImage, setSelectedImage] = useState(0);
  const [showAllGoodToKnow, setShowAllGoodToKnow] = useState(false);
  const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768); // Adjust breakpoint as needed
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  if (!room) {
    return (
      <div className="container mx-auto py-16 px-4">
        <h1 className="text-3xl font-bold mb-6 text-center">Room not found</h1>
        <div className="text-center">
          <Link
            href="/rooms"
            className="inline-flex items-center text-main-color hover:underline"
          >
            <FaArrowLeft className="mr-2" /> Back to All Rooms
          </Link>
        </div>
      </div>
    );
  }

  const displayedGoodToKnow = isMobile && !showAllGoodToKnow
    ? room.goodToKnow.slice(0, 2)
    : room.goodToKnow;

  const breadcrumbSegments = [
    { url: "/rooms", label: "Rooms" },
    { label: room.name },
  ];

  return (
    <section className="Single-Room-Page py-16">
      <div className="container mx-auto px-4">
       {/* Breadcrumb & Back Button */}
       <BreadcrumbWithBack
          segments={breadcrumbSegments}
          backHref="/rooms"
        />

        <div>
          <div className="rounded-xl overflow-hidden">
            {/* Room Image Gallery */}
            <div className="relative">
              <Swiper
                modules={[Pagination, Navigation, EffectFade, Autoplay]}
                spaceBetween={0}
                navigation={true}
                effect="fade"
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                  renderBullet: (index, className) => {
                    return `<span className="${className} custom-bullet"></span>`;
                  },
                }}
                onSlideChange={(swiper) => setSelectedImage(swiper.activeIndex)}
                className="mySwiper"
              >
                {room.images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative">
                      <Image
                        src={image}
                        alt={`${room.name} - Image ${index + 1}`}
                        priority={index === 0}
                        className="transition-transform duration-700 w-full h-[600px] object-cover"
                      />
                      {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> */}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              {/* Label */}
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col lg:flex-row justify-between gap-4">
          {/* Room Details */}
          <div className="p-4 md:p-6 lg:w-1/2 w-full bg-white rounded-xl overflow-hidden shadow-md border border-gray-100">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between pb-4 border-b">
              <h1 className="lg:text-3xl text-xl font-bold mb-2 md:mb-0">
                {room.name}
              </h1>
              <div className="text-left md:text-right">
                <div className="flex items-baseline">
                  <span className="lg:text-3xl text-xl font-bold text-main-color">
                    ₹{room.price}
                  </span>
                </div>
                <p className="text-base font-medium text-gray-800">per night</p>
              </div>
            </div>

            <div className="space-y-4 mt-4">
              <div className="description space-y-3">
                <h2 className="lg:text-2xl text-lg font-semibold">
                  Description
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {room.description}
                </p>
              </div>

              <div className="amenities space-y-3">
                <h2 className="lg:text-2xl text-lg font-semibold">
                  Room Amenities
                </h2>
                <div className="flex items-center gap-2 flex-wrap">
                  {room.icons.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 py-2 px-4 w-fit rounded-lg bg-gray-50 border border-gray-100 hover:shadow-md transition-all duration-300 hover:bg-gray-100"
                    >
                      <div className=" bg-main-color/10 p-2 rounded-full">
                        <item.icon className="text-main-color" />
                      </div>
                      <span className="text-gray-700 font-medium text-nowrap">
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Booking */}
          <div className="lg:w-1/2 w-full">
            <BookingForm />
          </div>
        </div>

        {/* Good To know section */}
        <div className="mt-8">
          <h2 className="text-4xl font-medium">Good to Know</h2>
          <div className="bg-gray-50 rounded-lg p-6 space-y-4 mt-4">
            {displayedGoodToKnow && displayedGoodToKnow.map((item, index) => (
              <div key={index} className="flex lg:items-center items-start gap-6 text-prime border-b-2 last:border-none pb-4 ">
                <item.icon className="h-6 w-6 lg:mt-0 mt-2" />
                <div className="flex justify-between lg:items-center items-start lg:flex-row gap-2 flex-col w-full">
                  <h3 className="text-2xl font-medium flex-1/2">{item.title}</h3>
                  <p className="flex-1/2">{item.description}</p>
                </div>
              </div>
            ))}

            {isMobile && room.goodToKnow.length > 2 && (
              <div className="text-center mt-4"> {/* Center the button */}
                <button
                  onClick={() => setShowAllGoodToKnow(!showAllGoodToKnow)}
                  className="text-main-color hover:underline"
                >
                  {showAllGoodToKnow ? "View Less" : "View More"}
                </button>
              </div>
            )}

          </div>


        </div>

        {/* Related Rooms Section - Enhanced */}
        <div className="mt-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">
              You Might Also Like
            </h2>
            <Link href="/rooms" className="text-main-color hover:underline">
              View All Rooms
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roomsData
              .filter((r) => r.id !== room.id)
              .slice(0, 3)
              .map((relatedRoom) => (
                <div
                  key={relatedRoom.id}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-100 group"
                >
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={relatedRoom.images[0]}
                      alt={relatedRoom.name}
                      fill
                      style={{ objectFit: "cover" }}
                      className="transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 py-1 px-3 rounded-full text-xs font-semibold z-10 bg-orange-100 text-orange-600">
                      {relatedRoom.label}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center mb-2">
                      <div className="flex text-amber-400 text-xs">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar className="text-gray-300" />
                      </div>
                      <span className="text-xs text-gray-500 ml-1">
                        (32 reviews)
                      </span>
                    </div>
                    <h3 className="text-lg font-bold mb-2">
                      {relatedRoom.name}
                    </h3>
                    <div className="flex justify-between items-center">
                      <p className="text-main-color font-semibold">
                        ₹{relatedRoom.price}{" "}
                        <span className="text-gray-500 text-sm">/night</span>
                      </p>
                      <Link
                        href={`/rooms/${relatedRoom.id}`}
                        className="py-2 px-4 rounded-lg bg-main-color/10 text-main-color text-sm font-medium hover:bg-main-color hover:text-white transition-colors"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
