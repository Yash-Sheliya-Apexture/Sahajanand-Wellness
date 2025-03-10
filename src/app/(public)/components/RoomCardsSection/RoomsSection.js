// components/OurRooms.jsx
"use client";

// import React, { useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';

// const OurRooms = () => {
//   const [activeRoom, setActiveRoom] = useState(0);

//   const rooms = [
//     {
//       id: 1,
//       name: "Luxury Suite",
//       description: "Experience unparalleled comfort in our spacious luxury suite with panoramic views.",
//       price: 299,
//       features: ["King Size Bed", "Ocean View", "Jacuzzi", "Mini Bar", "Room Service"],
//       image: "/images/luxury-suite.jpg" // Replace with your actual image path
//     },
//     {
//       id: 2,
//       name: "Deluxe Room",
//       description: "Perfect blend of comfort and elegance with modern amenities for a memorable stay.",
//       price: 199,
//       features: ["Queen Size Bed", "City View", "Smart TV", "Coffee Maker", "Free WiFi"],
//       image: "/images/deluxe-room.jpg" // Replace with your actual image path
//     },
//     {
//       id: 3,
//       name: "Family Suite",
//       description: "Spacious accommodation designed for families, with separate living area and bedroom.",
//       price: 349,
//       features: ["2 Bedrooms", "Lounge Area", "Kids Play Corner", "Kitchenette", "2 Bathrooms"],
//       image: "/images/family-suite.jpg" // Replace with your actual image path
//     },
//     {
//       id: 4,
//       name: "Executive Suite",
//       description: "Premium suite for business travelers with dedicated workspace and premium amenities.",
//       price: 279,
//       features: ["Workspace", "Conference Call Setup", "Printer", "Premium Toiletries", "Express Checkout"],
//       image: "/images/executive-suite.jpg" // Replace with your actual image path
//     }
//   ];

//   // For demo purposes, we'll use placeholder images
//   const imagePlaceholder = (width, height) => `/api/placeholder/${width}/${height}`;

//   return (
//     <section className="py-16 bg-gradient-to-br from-indigo-50 to-gray-100">
//       <div className="container mx-auto px-4">
//         <div className="max-w-3xl mx-auto text-center mb-12">
//           <h2 className="text-4xl font-bold mb-4 text-gray-800">Discover Our <span className="text-indigo-600">Exquisite Rooms</span></h2>
//           <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6"></div>
//           <p className="text-lg text-gray-600">
//             Each room is thoughtfully designed to provide the perfect blend of comfort, luxury, and tranquility for an unforgettable stay.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mt-12">
//           {/* Interactive Room Display */}
//           <div className="relative rounded-xl overflow-hidden shadow-2xl h-96 transform transition-all duration-500 hover:scale-105">
//             <Image
//               src={imagePlaceholder(800, 600)}
//               alt={rooms[activeRoom].name}
//               layout="fill"
//               objectFit="cover"
//               className="transition-transform duration-700 hover:scale-110"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
//               <div className="transition-all duration-300 transform translate-y-0">
//                 <h3 className="text-3xl font-bold text-white mb-2">{rooms[activeRoom].name}</h3>
//                 <div className="flex items-center mb-4">
//                   <span className="text-2xl font-bold text-white">${rooms[activeRoom].price}</span>
//                   <span className="text-gray-300 ml-2">/ night</span>
//                 </div>
//                 <p className="text-gray-200 mb-6">{rooms[activeRoom].description}</p>
//                 <Link href="/booking">
//                   <span className="inline-block bg-indigo-600 text-white py-3 px-8 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
//                     Book Now
//                   </span>
//                 </Link>
//               </div>
//             </div>
//           </div>

//           {/* Room Selection Panel */}
//           <div className="bg-white rounded-xl shadow-lg p-8">
//             <h3 className="text-2xl font-bold text-gray-800 mb-6">Choose Your Perfect Room</h3>
//             <div className="space-y-4">
//               {rooms.map((room, index) => (
//                 <div
//                   key={room.id}
//                   className={`cursor-pointer p-4 rounded-lg transition-all duration-300 ${
//                     activeRoom === index
//                       ? 'bg-indigo-600 text-white shadow-lg'
//                       : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
//                   }`}
//                   onClick={() => setActiveRoom(index)}
//                 >
//                   <div className="flex justify-between items-center">
//                     <h4 className="font-bold text-lg">{room.name}</h4>
//                     <span className={`font-semibold ${activeRoom === index ? 'text-white' : 'text-indigo-600'}`}>
//                       ${room.price}
//                     </span>
//                   </div>
//                   <div className="mt-3">
//                     <div className="flex flex-wrap gap-2 mt-2">
//                       {room.features.slice(0, 3).map((feature, idx) => (
//                         <span
//                           key={idx}
//                           className={`text-xs py-1 px-2 rounded-full ${
//                             activeRoom === index
//                               ? 'bg-white/20 text-white'
//                               : 'bg-gray-200 text-gray-700'
//                           }`}
//                         >
//                           {feature}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <div className="mt-8 flex justify-between items-center">
//               <span className="text-gray-600">All rooms include free cancellation</span>
//               <Link href="/rooms">
//                 <span className="text-indigo-600 font-semibold hover:text-indigo-800 transition-colors">
//                   View All Rooms →
//                 </span>
//               </Link>
//             </div>
//           </div>
//         </div>

//         {/* Room Features List */}
//         <div className="mt-16">
//           <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">
//             Featured Amenities in {rooms[activeRoom].name}
//           </h3>
//           <div className="grid grid-cols-2 lg:grid-cols-3 lg:grid-cols-5 gap-4">
//             {rooms[activeRoom].features.map((feature, index) => (
//               <div key={index} className="bg-white rounded-lg shadow-md p-4 text-center transform transition-transform hover:scale-105">
//                 <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-3">
//                   {/* You can replace this with actual icons */}
//                   <div className="w-6 h-6 bg-indigo-600 rounded-full"></div>
//                 </div>
//                 <p className="font-medium text-gray-800">{feature}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Call to Action */}
//         <div className="mt-16 text-center">
//           <Link href="/booking">
//             <span className="inline-block bg-indigo-600 text-white py-4 px-10 rounded-lg font-bold text-lg hover:bg-indigo-700 transition-colors shadow-lg">
//               Book Your Stay Now
//             </span>
//           </Link>
//           <p className="mt-4 text-gray-600">Best rates guaranteed when you book directly with us</p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OurRooms;

// Latest Code
// import React, { useState, useEffect, useRef } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { FaBed, FaBath, FaWifi, FaTv, FaSnowflake, FaChevronLeft, FaChevronRight, FaPause, FaPlay } from 'react-icons/fa';

// import Economy_GowSeva_img1 from '../../../../public/assets/images/hotels/hotel-1/Economy_GowSeva_img-1.jpg';
// import Economy_GowSeva_img2 from '../../../../public/assets/images/hotels/hotel-1/Economy_GowSeva_img-2.jpg';
// import Normal_GowSeva_im_img1 from '../../../../public/assets/images/hotels/hotel-2/Normal_GowSeva_img-1.jpg';
// import Normal_GowSeva_im_img2 from '../../../../public/assets/images/hotels/hotel-2/Normal_GowSeva_img-2.jpg';
// import Family_Room_AannaD_img1 from '../../../../public/assets/images/hotels/hotel-4/Family_Room_AannaDan_img-1.jpg';
// import Family_Room_AannaD_img2 from '../../../../public/assets/images/hotels/hotel-4/Family_Room_AannaDan_img-2.jpg';

// const OurRooms = () => {
//   // Define the rooms with actual image paths from your folder structure
//   const rooms = [
//     {
//       id: 1,
//       name: "Luxury Suite",
//       description: "Experience unparalleled comfort in our spacious luxury suite with panoramic views.",
//       price: 299,
//       images: [Normal_GowSeva_im_img1, Normal_GowSeva_im_img2],
//       label: "Luxury",
//       icons: [FaBed, FaBath, FaWifi, FaTv, FaSnowflake]
//     },
//     {
//       id: 2,
//       name: "Deluxe Room",
//       description: "Perfect blend of comfort and elegance with modern amenities for a memorable stay.",
//       price: 199,
//       images: [Family_Room_AannaD_img1, Family_Room_AannaD_img2],
//       label: "Standard",
//       icons: [FaBed, FaBath, FaWifi, FaTv, FaSnowflake]
//     },
//     {
//       id: 3,
//       name: "Family Suite",
//       description: "Spacious accommodation designed for families, with separate living area and bedroom.",
//       price: 349,
//       images: [Family_Room_AannaD_img1, Family_Room_AannaD_img2],
//       label: "Family",
//       icons: [FaBed, FaBath, FaWifi, FaTv]
//     },
//     {
//       id: 4,
//       name: "Economy Room",
//       description: "A budget-friendly option with essential amenities for a comfortable stay.",
//       price: 99,
//       images: [Economy_GowSeva_img1, Economy_GowSeva_img2],
//       label: "Economy",
//       icons: [FaBed, FaWifi, FaTv]
//     }
//   ];

//   // State to track current image index for each room
//   const [currentImageIndex, setCurrentImageIndex] = useState({});
//   // State to track if auto-slide is paused for each room
//   const [isPaused, setIsPaused] = useState({});

//   // Interval refs to manage timers
//   const intervalRefs = useRef({});

//   // Set up automatic sliding for all rooms
//   useEffect(() => {
//     // Initialize all rooms with autoplay
//     rooms.forEach(room => {
//       if (!intervalRefs.current[room.id]) {
//         intervalRefs.current[room.id] = setInterval(() => {
//           if (!isPaused[room.id]) {
//             setCurrentImageIndex(prev => ({
//               ...prev,
//               [room.id]: (prev[room.id] !== undefined ? prev[room.id] : 0) + 1 >= rooms.find(r => r.id === room.id).images.length
//                 ? 0
//                 : (prev[room.id] !== undefined ? prev[room.id] : 0) + 1
//             }));
//           }
//         }, 3000); // Change slide every 3 seconds
//       }
//     });

//     // Cleanup intervals on component unmount
//     return () => {
//       Object.values(intervalRefs.current).forEach(interval => {
//         clearInterval(interval);
//       });
//     };
//   }, [isPaused, rooms]);

//   const getLabelColor = (label) => {
//     switch (label) {
//       case "Luxury":
//         return "bg-purple-500 text-white";
//       case "Standard":
//         return "bg-green-500 text-white";
//       case "Family":
//         return "bg-blue-500 text-white";
//       case "Economy":
//         return "bg-gray-500 text-white";
//       default:
//         return "bg-gray-200 text-gray-700";
//     }
//   };

//   const usdToInr = (usd) => {
//     const exchangeRate = 83; // Approximate exchange rate
//     return Math.round(usd * exchangeRate);
//   };

//   // Navigation for the carousel
//   const nextImage = (roomId, e) => {
//     e.stopPropagation(); // Prevent event bubbling
//     setCurrentImageIndex(prev => ({
//       ...prev,
//       [roomId]: (prev[roomId] !== undefined ? prev[roomId] : 0) + 1 >= rooms.find(r => r.id === roomId).images.length
//         ? 0
//         : (prev[roomId] !== undefined ? prev[roomId] : 0) + 1
//     }));
//   };

//   const prevImage = (roomId, e) => {
//     e.stopPropagation(); // Prevent event bubbling
//     setCurrentImageIndex(prev => ({
//       ...prev,
//       [roomId]: (prev[roomId] !== undefined ? prev[roomId] : 0) - 1 < 0
//         ? rooms.find(r => r.id === roomId).images.length - 1
//         : (prev[roomId] !== undefined ? prev[roomId] : 0) - 1
//     }));
//   };

//   // Toggle pause/play for a specific room
//   const togglePause = (roomId, e) => {
//     e.stopPropagation(); // Prevent event bubbling
//     setIsPaused(prev => ({
//       ...prev,
//       [roomId]: !prev[roomId]
//     }));
//   };

//   return (
//     <section className="py-16 bg-gradient-to-br from-indigo-50 to-gray-100">
//       <div className="container mx-auto px-4">
//         <div className="max-w-3xl mx-auto text-center mb-12">
//           <h2 className="text-4xl font-bold mb-4 text-gray-800">Our <span className="text-indigo-600">Signature Rooms</span></h2>
//           <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6"></div>
//           <p className="text-lg text-gray-600">
//             Choose from our selection of carefully designed rooms offering the perfect combination of comfort and luxury.
//           </p>
//         </div>

//         {/* Row of Room Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {rooms.map((room) => (
//             <div key={room.id} className="bg-white rounded-xl overflow-hidden shadow-lg transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
//               {/* Room Image Carousel */}
//               <div className="relative h-64 w-full overflow-hidden">
//                 <Image
//                   src={room.images[currentImageIndex[room.id] !== undefined ? currentImageIndex[room.id] : 0]}
//                   alt={room.name}
//                   width={600}
//                   height={400}
//                   className="object-cover w-full h-full transition-transform duration-700"
//                 />
//                 {/* Carousel Controls */}
//                 <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300">
//                   {/* Pause/Play Button */}
//                   <button
//                     onClick={(e) => togglePause(room.id, e)}
//                     className="absolute top-4 right-4 bg-black bg-opacity-50 rounded-full p-2 text-white z-10"
//                   >
//                     {isPaused[room.id] ? <FaPlay size={12} /> : <FaPause size={12} />}
//                   </button>

//                   {/* Left/Right Navigation */}
//                   <button
//                     onClick={(e) => prevImage(room.id, e)}
//                     className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2 text-white z-10"
//                   >
//                     <FaChevronLeft />
//                   </button>
//                   <button
//                     onClick={(e) => nextImage(room.id, e)}
//                     className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2 text-white z-10"
//                   >
//                     <FaChevronRight />
//                   </button>
//                 </div>

//                 {/* Image Indicator Dots */}
//                 <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
//                   {room.images.map((_, index) => (
//                     <div
//                       key={index}
//                       className={`h-2 w-2 rounded-full ${
//                         (currentImageIndex[room.id] !== undefined ? currentImageIndex[room.id] : 0) === index
//                           ? 'bg-white'
//                           : 'bg-white bg-opacity-50'
//                       }`}
//                     />
//                   ))}
//                 </div>

//                 <div className={`absolute top-4 left-4 py-1 px-3 rounded-full text-xs font-semibold ${getLabelColor(room.label)}`}>
//                   {room.label}
//                 </div>
//               </div>

//               {/* Room Details */}
//               <div className="p-6">
//                 <div className="flex items-center justify-between mb-1">
//                   <h3 className="text-2xl font-bold text-gray-800">{room.name}</h3>
//                   <div className="text-right">
//                     <span className="text-xl font-semibold text-indigo-600">₹{usdToInr(room.price)}</span>
//                     <p className="text-sm text-gray-500">per night</p>
//                   </div>
//                 </div>
//                 <p className="text-gray-600 mb-4 line-clamp-2">{room.description}</p>

//                 {/* Room Features - Icons */}
//                 <div className="mb-5">
//                   <h4 className="text-sm font-semibold text-gray-700 mb-2">Room Features:</h4>
//                   <div className="flex flex-wrap gap-2">
//                     {room.icons.map((Icon, index) => (
//                       <Icon key={index} className="text-indigo-600 h-5 w-5" />
//                     ))}
//                   </div>
//                 </div>

//                 {/* CTA Button */}
//                 <div className="flex space-x-3">
//                   <Link href={`/rooms/${room.id}`}>
//                     <span className="flex-1 text-center py-2 border border-indigo-600 text-indigo-600 rounded-lg font-medium hover:bg-indigo-50 transition-colors">
//                       Details
//                     </span>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* View All Rooms Link */}
//         <div className="mt-12 text-center">
//           <Link href="/rooms">
//             <span className="inline-flex items-center text-indigo-600 font-bold hover:text-indigo-800 transition-colors">
//               View All Room Options
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
//                 <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
//               </svg>
//             </span>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OurRooms;

// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { FaBed, FaBath, FaWifi, FaTv, FaSnowflake } from "react-icons/fa";
// import { FaArrowRightLong } from "react-icons/fa6";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Autoplay } from "swiper/modules";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/autoplay";
// import "swiper/css/navigation";
// import "swiper/css/scrollbar";

// // Import all images using aliases with updated names and paths
// import Economy_GowSeva_img1 from "../../../../public/assets/images/hotels/hotel-1/Economy_GowSeva_img-1.jpg";
// import Economy_GowSeva_img2 from "../../../../public/assets/images/hotels/hotel-1/Economy_GowSeva_img-2.jpg";
// import Normal_GowSeva_img1 from "../../../../public/assets/images/hotels/hotel-2/Normal_GowSeva_img-1.jpg";
// import Normal_GowSeva_img2 from "../../../../public/assets/images/hotels/hotel-2/Normal_GowSeva_img-2.jpg";
// import Semi_Deluxe_Brahmbhoj_img1 from "../../../../public/assets/images/hotels/hotel-3/Semi_Deluxe_Brahmbhoj_img-1.jpg";
// import Semi_Deluxe_Brahmbhoj_img2 from "../../../../public/assets/images/hotels/hotel-3/Semi_Deluxe_Brahmbhoj_img-2.jpg";

// import Family_Room_AannaDan_img1 from "../../../../public/assets/images/hotels/hotel-4/Family_Room_AannaDan_img-1.jpg";
// import Family_Room_AannaDan_img2 from "../../../../public/assets/images/hotels/hotel-4/Family_Room_AannaDan_img-2.jpg";

// const OurRooms = () => {
//   const [rooms, setRooms] = useState([]);

//   useEffect(() => {
//     // Initialize rooms with actual image paths after component mounts
//     setRooms([
//       {
//         id: 1,
//         name: "Economy GowSeva",
//         description:
//           "Comfortable room to stay and enjoy the premine facilities. Both a bicycle rental service and a car rental service are available.",
//         price: 1200,
//         images: [Economy_GowSeva_img1, Economy_GowSeva_img2], // Use imported aliases
//         label: "Economy Room",
//         icons: [FaBed, FaWifi, FaTv],
//       },
//       {
//         id: 2,
//         name: "Normal GowSeva",
//         description:
//           "Non-Ac rooms. swaminarayan ashram is 4.1km from the Yog Nagari.",
//         price: 24817, //INR
//         images: [Normal_GowSeva_img1, Normal_GowSeva_img2], // Use imported aliases
//         label: "Standard Room",
//         icons: [FaBed, FaBath, FaWifi, FaTv, FaSnowflake],
//       },
//       {
//         id: 3,
//         name: "Semi Deluxe Brahmbhoj",
//         description:
//           "The daily breakfast offers continental or vegetarian options. Hotwater is available is bathroom.",
//         price: 16517, //INR
//         images: [Semi_Deluxe_Brahmbhoj_img1, Semi_Deluxe_Brahmbhoj_img2], // Use imported aliases
//         label: "Family Room",
//         icons: [FaBed, FaBath, FaWifi, FaTv, FaSnowflake],
//       },
//       {
//         id: 4,
//         name: "Premium Room VidhyaDaan",
//         description:
//           "vegetarian breakfast options are available daily at the homestay. Both a bicycle rental service and a car rental service are available.",
//         price: 28967, //INR
//         images: [Family_Room_AannaDan_img1, Family_Room_AannaDan_img2], // Use imported aliases
//         label: "Luxury Room",
//         icons: [FaBed, FaBath, FaWifi, FaTv],
//       },
//     ]);
//   }, []);

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

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     arrows: false,
//     pagination: {
//       clickable: true,
//     },
//   };

//   return (
//     <section className="Room-Section py-12 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <div className="max-w-5xl mx-auto text-center">
//           <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
//             <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-800 to-orange-500">
//               Our Signature Rooms
//             </span>
//           </h1>
//           <p className="lg:text-xl text-lg text-gray-700 text-center">
//             Choose from our selection of carefully designed rooms offering the
//             perfect combination of comfort and luxury.
//           </p>

//           <div className="flex justify-center mt-8">
//             <div className="h-0.5 w-80 bg-gradient-to-r from-transparent via-orange-400 to-transparent"></div>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
//           {rooms.map((room) => (
//             <div
//               key={room.id}
//               className="bg-white rounded-xl overflow-hidden shadow-lg transform transition-all duration-500"
//             >
//               <div className="relative overflow-hidden">
//                 <Swiper
//                   modules={[Autoplay, Pagination]}
//                   spaceBetween={30}
//                   centeredSlides={true}
//                   autoplay={{
//                     delay: 2500,
//                     disableOnInteraction: false,
//                   }}
//                   pagination={{
//                     clickable: true,
//                   }}
//                   className="mySwiper"
//                 >
//                   {room.images.map((image, index) => (
//                     <SwiperSlide key={index}>
//                       <div className="">
//                         <Image
//                           src={image}
//                           alt={room.name}
//                           // layout="fill"
//                           objectFit="cover"
//                           className="transition-transform duration-700 w-full rounded-t-xl"
//                         />
//                       </div>
//                     </SwiperSlide>
//                   ))}
//                 </Swiper>
//                 <div
//                   className={`absolute top-4 left-4 py-1 px-3 rounded-full text-xs font-semibold z-10 ${getLabelColor(
//                     room.label
//                   )}`}
//                 >
//                   {room.label}
//                 </div>
//               </div>

//               <div className="p-6">
//                 <div className="flex items-center justify-between mb-1">
//                   <h3 className="text-2xl font-bold text-prime">{room.name}</h3>
//                   <div className="text-right">
//                     <span className={`text-xl font-semibold text-main-color`}>
//                       ₹{usdToInr(room.price)}
//                     </span>
//                     <p className="text-base font-medium text-nowrap text-gray-800">
//                       per night
//                     </p>
//                   </div>
//                 </div>
//                 <p className="text-gray-600 mb-4 line-clamp-2">
//                   {room.description}
//                 </p>

//                 <div className="mb-5">
//                   <h4 className="text-sm font-semibold text-gray-700">
//                     Room Features:
//                   </h4>
//                   <div className="flex items-center flex-wrap gap-4 mt-2">
//                     {room.icons.map((Icon, index) => (
//                       <Icon key={index} className="text-gray-600 hover:text-main-color transform transition-all duration-150 h-5 w-5" />
//                     ))}
//                   </div>
//                 </div>

//                 <button className="w-full inline-flex justify-end">
//                   <Link
//                     href={`/rooms/${room.id}`}
//                     className=" px-6 py-2 bg-main-color text-white rounded-lg font-medium hover:bg-orange-500 transition-colors"
//                   >
//                     Details
//                   </Link>
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="mt-12 text-xl text-center">
//       <Link href="/rooms">
//         <span className="group relative inline-flex items-center gap-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-800 to-orange-500 font-bold transition-colors">
//           View All Room Options
//           <FaArrowRightLong className="text-main-color/70" />
//           <span className="absolute -bottom-1 left-0 w-0 h-[3px] bg-gradient-to-r from-orange-800 to-orange-500 rounded-full transition-all duration-300 group-hover:w-full"></span>
//         </span>
//       </Link>
//     </div>
//       </div>
//     </section>
//   );
// };

// export default OurRooms;

// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { FaBed, FaBath, FaWifi, FaTv, FaSnowflake } from "react-icons/fa";
// import { FaArrowRightLong } from "react-icons/fa6";
// import { Tooltip } from "react-tooltip"; // Correct Import

// import "react-tooltip/dist/react-tooltip.css"; // Import the CSS

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Autoplay } from "swiper/modules";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/autoplay";
// import "swiper/css/navigation";
// import "swiper/css/scrollbar";

// // Import all images using aliases with updated names and paths
// import Economy_GowSeva_img1 from "../../../../public/assets/images/hotels/hotel-1/Economy_GowSeva_img-1.jpg";
// import Economy_GowSeva_img2 from "../../../../public/assets/images/hotels/hotel-1/Economy_GowSeva_img-2.jpg";
// import Normal_GowSeva_img1 from "../../../../public/assets/images/hotels/hotel-2/Normal_GowSeva_img-1.jpg";
// import Normal_GowSeva_img2 from "../../../../public/assets/images/hotels/hotel-2/Normal_GowSeva_img-2.jpg";
// import Semi_Deluxe_Brahmbhoj_img1 from "../../../../public/assets/images/hotels/hotel-3/Semi_Deluxe_Brahmbhoj_img-1.jpg";
// import Semi_Deluxe_Brahmbhoj_img2 from "../../../../public/assets/images/hotels/hotel-3/Semi_Deluxe_Brahmbhoj_img-2.jpg";

// import Family_Room_AannaDan_img1 from "../../../../public/assets/images/hotels/hotel-4/Family_Room_AannaDan_img-1.jpg";
// import Family_Room_AannaDan_img2 from "../../../../public/assets/images/hotels/hotel-4/Family_Room_AannaDan_img-2.jpg";

// const OurRooms = () => {
//   const [rooms, setRooms] = useState([]);

//   useEffect(() => {
//     // Initialize rooms with actual image paths after component mounts
//     setRooms([
//       {
//         id: 1,
//         name: "Economy GowSeva",
//         description:
//           "Comfortable room to stay and enjoy the premine facilities. Both a bicycle rental service and a car rental service are available.",
//         price: 1200,
//         images: [Economy_GowSeva_img1, Economy_GowSeva_img2], // Use imported aliases
//         label: "Economy Room",
//         icons: [
//           { icon: FaBed, name: "Bed" },
//           { icon: FaWifi, name: "Wifi" },
//           { icon: FaTv, name: "TV" },
//         ],
//       },
//       {
//         id: 2,
//         name: "Normal GowSeva",
//         description:
//           "Non-Ac rooms. swaminarayan ashram is 4.1km from the Yog Nagari.",
//         price: 24817, //INR
//         images: [Normal_GowSeva_img1, Normal_GowSeva_img2], // Use imported aliases
//         label: "Standard Room",
//         icons: [
//           { icon: FaBed, name: "Bed" },
//           { icon: FaBath, name: "Bath" },
//           { icon: FaWifi, name: "Wifi" },
//           { icon: FaTv, name: "TV" },
//           { icon: FaSnowflake, name: "Air Conditioning" },
//         ],
//       },
//       {
//         id: 3,
//         name: "Semi Deluxe Brahmbhoj",
//         description:
//           "The daily breakfast offers continental or vegetarian options. Hotwater is available is bathroom.",
//         price: 16517, //INR
//         images: [Semi_Deluxe_Brahmbhoj_img1, Semi_Deluxe_Brahmbhoj_img2], // Use imported aliases
//         label: "Family Room",
//         icons: [
//           { icon: FaBed, name: "Bed" },
//           { icon: FaBath, name: "Bath" },
//           { icon: FaWifi, name: "Wifi" },
//           { icon: FaTv, name: "TV" },
//           { icon: FaSnowflake, name: "Air Conditioning" },
//         ],
//       },
//       {
//         id: 4,
//         name: "Premium Room VidhyaDaan",
//         description:
//           "vegetarian breakfast options are available daily at the homestay. Both a bicycle rental service and a car rental service are available.",
//         price: 28967, //INR
//         images: [Family_Room_AannaDan_img1, Family_Room_AannaDan_img2], // Use imported aliases
//         label: "Luxury Room",
//         icons: [
//           { icon: FaBed, name: "Bed" },
//           { icon: FaBath, name: "Bath" },
//           { icon: FaWifi, name: "Wifi" },
//           { icon: FaTv, name: "TV" },
//         ],
//       },
//     ]);
//   }, []);

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
//     <>
//       {/* <ReactTooltip /> */}
//       <section className="Room-Section py-12 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <div className="max-w-5xl mx-auto text-center">
//             <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
//               <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-800 to-orange-500">
//                 Our Signature Rooms
//               </span>
//             </h1>
//             <p className="lg:text-xl text-lg text-gray-700 text-center">
//               Choose from our selection of carefully designed rooms offering the
//               perfect combination of comfort and luxury.
//             </p>

//             <div className="flex justify-center mt-8">
//               <div className="h-1 w-80 bg-gradient-to-r from-transparent via-orange-400 to-transparent"></div>
//             </div>
//           </div>

//           {/* Rooms Cards */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
//             {rooms.map((room) => (
//               <div
//                 key={room.id}
//                 className="bg-white rounded-xl overflow-hidden shadow-lg transform transition-all duration-500"
//               >
//                 <div className="relative overflow-hidden">
//                   <Swiper
//                     modules={[Autoplay, Pagination]}
//                     spaceBetween={30}
//                     centeredSlides={true}
//                     autoplay={{
//                       delay: 2500,
//                       disableOnInteraction: false,
//                     }}
//                     pagination={{
//                       clickable: true,
//                       //Use custom bullets
//                       renderBullet: (index, className) => {
//                         return `<span class="${className} custom-bullet"></span>`;
//                       },
//                     }}
//                     className="mySwiper"
//                   >
//                     {room.images.map((image, index) => (
//                       <SwiperSlide key={index}>
//                         <div className="">
//                           <Image
//                             src={image}
//                             alt={room.name}
//                             // layout="fill"
//                             objectFit="cover"
//                             className="transition-transform duration-700 w-full rounded-t-xl"
//                           />
//                         </div>
//                       </SwiperSlide>
//                     ))}
//                   </Swiper>
//                   <div
//                     className={`absolute top-4 left-4 py-1 px-3 rounded-full text-xs font-semibold z-10 ${getLabelColor(
//                       room.label
//                     )}`}
//                   >
//                     {room.label}
//                   </div>
//                 </div>

//                 <div className="p-6">
//                   <div className="flex items-center justify-between pb-4 border-b">
//                     <h3 className="text-2xl font-bold text-prime">
//                       {room.name}
//                     </h3>
//                     <div className="text-right">
//                       <span className={`text-xl font-semibold text-main-color`}>
//                         ₹{usdToInr(room.price)}
//                       </span>
//                       <p className="text-base font-medium text-nowrap text-gray-800">
//                         per night
//                       </p>
//                     </div>
//                   </div>

//                   <div className="mt-4">
//                     <p className="text-gray-600 mb-4 line-clamp-2">
//                       {room.description}
//                     </p>

//                     <div className="mb-5">
//                       <h4 className="text-sm font-semibold text-gray-700">
//                         Room Amenities:
//                       </h4>
//                       <div className="flex items-center flex-wrap gap-4 mt-2">
//                         {room.icons.map((item, index) => (
//                           <div key={index}>
//                             <item.icon
//                               data-tooltip-id={`tooltip-${room.id}-${index}`}
//                               data-tooltip-content={item.name}
//                               data-tooltip-place="bottom"
//                               className="text-gray-600 hover:text-main-color font-me transform transition-all duration-150 h-5 w-5"
//                             />
//                             <Tooltip
//                               id={`tooltip-${room.id}-${index}`}
//                               style={{
//                                 fontSize: "14px",
//                                 color: "white",
//                                 backgroundColor: "#1b1d22", // Semi-transparent black
//                                 padding: "5px 10px",
//                                 borderRadius: "4px",
//                               }}
//                             />
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   </div>

//                   <button className="w-full inline-flex justify-end">
//                      {/* In OurRooms component, inside the rooms.map() method: */}
//                     <Link
//                       href={`/rooms/${room.id}`}
//                       className=" px-6 py-2 bg-main-color text-white rounded-lg font-medium hover:bg-orange-500 transition-colors"
//                     >
//                       Details
//                     </Link>
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="mt-12 text-xl text-center">
//             <Link href="/rooms" className="">
//               <span className="group relative inline-flex items-center gap-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-800 to-orange-500 font-bold transition-colors">
//                 View All Room Options
//                 <FaArrowRightLong className="text-main-color/70" />
//                 <span className="absolute -bottom-1 left-0 w-0 h-[3px] bg-gradient-to-r from-orange-800 to-orange-500 rounded-full transition-all duration-300 group-hover:w-full"></span>
//               </span>
//             </Link>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default OurRooms;















// components/OurRooms.js (or pages/OurRooms.js if it's a page)
import React from "react";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import RoomCard, { roomsData } from "../../../components/RoomsCard"; // Adjust path if needed.  Import roomsData.

const OurRooms = ({ roomIds }) => {

  // Display only the first 4 rooms
  // const displayedRooms = roomsData.slice(0, 4);
  const displayedRooms = roomsData.filter((room) => roomIds.includes(room.id));

  return (
    <>
      <section className="Room-Section py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-3xl lg:text-5xl md:text-4xl font-bold text-center mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-800 to-orange-500">
                Our Signature Rooms
              </span>
            </h1>
            <p className="lg:text-xl text-lg text-gray-700 text-center">
              Choose from our selection of carefully designed rooms offering the
              perfect combination of comfort and luxury.
            </p>

            <div className="flex justify-center mt-8">
              <div className="h-1 w-80 bg-gradient-to-r from-transparent via-orange-400 to-transparent"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {displayedRooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>

          <div className="mt-12 text-xl text-center">
            <Link href="/rooms" className="">
              <span className="group relative inline-flex items-center gap-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-800 to-orange-500 font-bold transition-colors">
                View All Room Options
                <FaArrowRightLong className="text-main-color/70" />
                <span className="absolute -bottom-1 left-0 w-0 h-[3px] bg-gradient-to-r from-orange-800 to-orange-500 rounded-full transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurRooms;