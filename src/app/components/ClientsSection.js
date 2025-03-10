// "use client";

// import React, { useEffect, useRef } from "react";
// import Image from "next/image";

// import client1 from "../../../public/assets/images/client-1.png";
// import client2 from "../../../public/assets/images/client-2.png";
// import client3 from "../../../public/assets/images/client-3.png";
// import client4 from "../../../public/assets/images/client-4.png";
// import client5 from "../../../public/assets/images/client-5.png";

// const ClientSection = () => {
//   const sliderRef = useRef(null);
//   const positionRef = useRef(0);
//   const isDragging = useRef(false);
//   const dragStartX = useRef(0);

//   const clients = [
//     { id: 1, name: "Noted", image: client1 },
//     { id: 2, name: "Goan", image: client2 },
//     { id: 3, name: "Mowi", image: client3 },
//     { id: 4, name: "Talo", image: client4 },
//     { id: 5, name: "Solid State", image: client5 },
//   ];

//   const totalClients = clients.length;

//   useEffect(() => {
//     let animationId;
//     const speed = 0.8;

//     const setupInfiniteScroll = () => {
//       if (!sliderRef.current) return;

//       const slider = sliderRef.current;
//       const originalItems = Array.from(slider.children);
//       const cloneItems = originalItems.map((item) => item.cloneNode(true));

//       cloneItems.forEach((clone) => {
//         slider.appendChild(clone);
//       });
//     };

//     setupInfiniteScroll();

//     const animate = () => {
//       if (sliderRef.current && !isDragging.current) {
//         positionRef.current -= speed;

//         const firstItem = sliderRef.current.firstElementChild;
//         if (firstItem) {
//           const itemWidth = firstItem.offsetWidth;
//           const itemMargin = 16;
//           const totalItemWidth = itemWidth + itemMargin;

//           if (positionRef.current <= -totalItemWidth * totalClients) {
//             positionRef.current += totalItemWidth * totalClients;
//           }

//           sliderRef.current.style.transform = `translateX(${positionRef.current}px)`;
//         }
//       }

//       animationId = requestAnimationFrame(animate);
//     };

//     animationId = requestAnimationFrame(animate);

//     return () => {
//       cancelAnimationFrame(animationId);
//     };
//   }, [totalClients]);

//   const handleMouseDown = (e) => {
//     isDragging.current = true;
//     dragStartX.current = e.clientX - positionRef.current;
//   };

//   const handleMouseMove = (e) => {
//     if (!isDragging.current || !sliderRef.current) return;

//     const x = e.clientX - dragStartX.current;
//     positionRef.current = x;
//     sliderRef.current.style.transform = `translateX(${x}px)`;
//   };

//   const handleMouseUp = () => {
//     isDragging.current = false;
//   };

//   const handleMouseLeave = () => {
//     isDragging.current = false;
//   };

//   return (
//     <div className="bg-gray-50 py-12">
//       <div className="container mx-auto text-center">
//         <div className="max-w-5xl mx-auto text-center">
//           <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
//             <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-800 to-orange-500">
//               Our Client
//             </span>
//           </h1>
//         </div>

//         <div className="overflow-hidden relative">
//           <div
//             className="flex px-4 items-center cursor-grab"
//             ref={sliderRef}
//             onMouseDown={handleMouseDown}
//             onMouseMove={handleMouseMove}
//             onMouseUp={handleMouseUp}
//             onMouseLeave={handleMouseLeave}
//           >
//             {clients.map((client) => (
//               <div
//                 key={client.id}
//                 className="flex-shrink-0 px-4 transform transition-all duration-500"
//                 style={{ width: `calc(100% / 5)` }}
//               >
//                 <div className="bg-white rounded-lg shadow-md flex items-center justify-center h-40">
//                   <Image
//                     src={client.image}
//                     alt={client.name}
//                     className=""
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ClientSection;

// "use client";

// import React, { useEffect, useRef } from "react";
// import Image from "next/image";

// import client1 from "../../../public/assets/images/client-1.png";
// import client2 from "../../../public/assets/images/client-2.png";
// import client3 from "../../../public/assets/images/client-3.png";
// import client4 from "../../../public/assets/images/client-4.png";
// import client5 from "../../../public/assets/images/client-5.png";

// const ClientSection = () => {
//   const sliderRef = useRef(null);
//   const positionRef = useRef(0);
//   const isDragging = useRef(false);
//   const dragStartX = useRef(0);

//   const clients = [
//     { id: 1, name: "Noted", image: client1 },
//     { id: 2, name: "Goan", image: client2 },
//     { id: 3, name: "Mowi", image: client3 },
//     { id: 4, name: "Talo", image: client4 },
//     { id: 5, name: "Solid State", image: client5 },
//   ];

//   const totalClients = clients.length;

//   useEffect(() => {
//     let animationId;
//     const speed = 0.8;

//     const setupInfiniteScroll = () => {
//       if (!sliderRef.current) return;

//       const slider = sliderRef.current;
//       const originalItems = Array.from(slider.children);
//       const cloneItems = originalItems.map((item) => item.cloneNode(true));

//       cloneItems.forEach((clone) => {
//         slider.appendChild(clone);
//       });
//     };

//     setupInfiniteScroll();

//     const animate = () => {
//       if (sliderRef.current && !isDragging.current) {
//         positionRef.current -= speed;

//         const firstItem = sliderRef.current.firstElementChild;
//         if (firstItem) {
//           const itemWidth = firstItem.offsetWidth;
//           const itemMargin = 16;
//           const totalItemWidth = itemWidth + itemMargin;

//           if (positionRef.current <= -totalItemWidth * totalClients) {
//             positionRef.current += totalItemWidth * totalClients;
//           }

//           sliderRef.current.style.transform = `translateX(${positionRef.current}px)`;
//         }
//       }

//       animationId = requestAnimationFrame(animate);
//     };

//     animationId = requestAnimationFrame(animate);

//     return () => {
//       cancelAnimationFrame(animationId);
//     };
//   }, [totalClients]);

//   const handleMouseDown = (e) => {
//     isDragging.current = true;
//     dragStartX.current = e.clientX - positionRef.current;
//   };

//   const handleMouseMove = (e) => {
//     if (!isDragging.current || !sliderRef.current) return;

//     const x = e.clientX - dragStartX.current;
//     positionRef.current = x;
//     sliderRef.current.style.transform = `translateX(${x}px)`;
//   };

//   const handleMouseUp = () => {
//     isDragging.current = false;
//   };

//   const handleMouseLeave = () => {
//     isDragging.current = false;
//   };

//   return (
//     <div className="bg-gray-50 py-12">
//       <div className="container mx-auto text-center">
//         <div className="max-w-5xl mx-auto text-center">
//           <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
//             <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-800 to-orange-500">
//               Our Client
//             </span>
//           </h1>
//         </div>

//         <div className="overflow-hidden relative">
//           <div
//             className="flex px-4 items-center cursor-grab"
//             ref={sliderRef}
//             onMouseDown={handleMouseDown}
//             onMouseMove={handleMouseMove}
//             onMouseUp={handleMouseUp}
//             onMouseLeave={handleMouseLeave}
//           >
//             {clients.map((client) => (
//               <div
//                 key={client.id}
//                 className="flex-shrink-0 px-4 transform transition-all duration-500"
//                 style={{ width: "calc(100% / 5)" }}
//               >
//                 <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center">
//                   <Image
//                     src={client.image}
//                     alt={client.name}
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ClientSection;

// "use client";
// import React, { useRef, useEffect, useState } from "react";
// import Image from "next/image";

// const clients = [
//   { name: "Talo", src: "/assets/images/client-1.png" },
//   { name: "Solid State", src: "/assets/images/client-2.png" },
//   { name: "Noted", src: "/assets/images/client-3.png" },
//   { name: "Goan", src: "/assets/images/client-4.png" },
//   { name: "Mowi", src: "/assets/images/client-5.png" },
// ];

// const ClientsSection = () => {
//   const sliderRef = useRef(null);
//   const positionRef = useRef(0);
//   const isDragging = useRef(false);
//   const [totalClients, setTotalClients] = useState(clients.length);

//   useEffect(() => {
//     let animationId;
//     const speed = 0.8;

//     const setupInfiniteScroll = () => {
//       if (!sliderRef.current) return;

//       const slider = sliderRef.current;
//       const originalItems = Array.from(slider.children);
//       const cloneItems = originalItems.map((item) => item.cloneNode(true));

//       cloneItems.forEach((clone) => {
//         slider.appendChild(clone);
//       });
//     };

//     setupInfiniteScroll();

//     const animate = () => {
//       if (sliderRef.current && !isDragging.current) {
//         positionRef.current -= speed;

//         const firstItem = sliderRef.current.firstElementChild;
//         if (firstItem) {
//           const itemWidth = firstItem.offsetWidth;
//           const itemMargin = 16;
//           const totalItemWidth = itemWidth + itemMargin;

//           if (positionRef.current <= -totalItemWidth * totalClients) {
//             positionRef.current += totalItemWidth * totalClients;
//           }

//           sliderRef.current.style.transform = `translateX(${positionRef.current}px)`;
//         }
//       }

//       animationId = requestAnimationFrame(animate);
//     };

//     animationId = requestAnimationFrame(animate);

//     return () => {
//       cancelAnimationFrame(animationId);
//     };
//   }, [totalClients]);

//   return (
//     <div className="mt-16 py-10 bg-gray-50 overflow-hidden">
//       <div className="container mx-auto text-center">
//         <div className="max-w-5xl mx-auto text-center">
//           <h1 className="text-4xl md:text-5xl font-bold text-center">
//             <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-800 to-orange-500">
//             Trusted By These Great Client
//             </span>
//           </h1>
//         </div>

//         <div className="relative w-full overflow-hidden mt-12">
//           <div
//             ref={sliderRef}
//             className="flex transition-transform duration-0 ease-linear"
//             style={{ transform: "translateX(0px)" }}
//           >
//             {[...clients, ...clients].map((client, index) => (
//               <div
//                 key={index}
//                 className="flex-shrink-0 w-64 h-40 bg-white rounded-lg shadow-md flex justify-center items-center mx-6"
//                 onMouseDown={() => (isDragging.current = true)}
//                 onMouseUp={() => (isDragging.current = false)}
//                 onMouseLeave={() => (isDragging.current = false)}
//               >
//                 <Image
//                   src={client.src}
//                   alt={client.name}
//                   width={100}
//                   height={50}
//                   className="object-contain"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ClientsSection;

// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import Image from "next/image";

// const clients = [
//   { name: "Talo", src: "/assets/images/client-1.png" },
//   { name: "Solid State", src: "/assets/images/client-2.png" },
//   { name: "Noted", src: "/assets/images/client-3.png" },
//   { name: "Goan", src: "/assets/images/client-4.png" },
//   { name: "Mowi", src: "/assets/images/client-5.png" },
//   { name: "Talo", src: "/assets/images/client-1.png" },
//   { name: "Solid State", src: "/assets/images/client-2.png" },
//   { name: "Noted", src: "/assets/images/client-3.png" },
//   { name: "Goan", src: "/assets/images/client-4.png" },
//   { name: "Mowi", src: "/assets/images/client-5.png" },
//   { name: "Talo", src: "/assets/images/client-1.png" },
//   { name: "Solid State", src: "/assets/images/client-2.png" },
//   { name: "Noted", src: "/assets/images/client-3.png" },
//   { name: "Goan", src: "/assets/images/client-4.png" },
//   { name: "Mowi", src: "/assets/images/client-5.png" },
// ];

// const ClientsSection = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [progress, setProgress] = useState(0);
//   const carouselRef = useRef(null);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setProgress((prevProgress) => {
//         if (prevProgress >= 100) {
//           setActiveIndex((prevIndex) => (prevIndex + 1) % clients.length);
//           return 0;
//         }
//         return prevProgress + 1;
//       });
//     }, 50);

//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     if (carouselRef.current) {
//       const activeImage = carouselRef.current.children[activeIndex];
//       if (activeImage) {
//         carouselRef.current.scrollTo({
//           left:
//             activeImage.offsetLeft -
//             (carouselRef.current.offsetWidth - activeImage.offsetWidth) / 2,
//           behavior: "smooth",
//         });
//       }
//     }
//   }, [activeIndex]);

//   const handleDotClick = (index) => {
//     setActiveIndex(index);
//     setProgress(0);
//   };

//   return (
//     <div className="Our-Clinets py-16">
//       <div className="max-w-5xl mx-auto text-center">
//         <h1 className="text-3xl md:text-5xl font-bold text-center mb-8">
//           <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-800 to-orange-500">
//             Our Trusted Clients
//           </span>
//         </h1>
//         <p className="mt-4 text-lg text-gray-600">
//           Collaborating with organizations that share our vision of growth and
//           excellence
//         </p>
//       </div>

//       <div className="relative">
//         {/* Carousel Container */}
//         <div
//           className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory hide-scrollbar py-4"
//           ref={carouselRef}
//         >
//           {clients.map((client, index) => (
//             <div
//               key={index}
//               className={`flex-shrink-0 snap-center w-48 h-36 mx-4 transition-all duration-500 ease-in-out ${
//                 index === activeIndex
//                   ? "scale-110"
//                   : "scale-90 opacity-50 grayscale"
//               }`}
//             >
//               <div className="bg-white rounded-xl shadow-sm p-6 w-full h-full flex items-center justify-center">
//                 <Image
//                   src={client.src}
//                   alt={client.name}
//                   width={100}
//                   height={60}
//                   className="object-contain"
//                 />
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Pagination Dots */}
//         <div className="flex justify-center mt-8 space-x-2">
//           {clients.map((_, index) => (
//             <div
//               key={index}
//               className="relative group cursor-pointer"
//               onClick={() => handleDotClick(index)}
//             >
//               <div
//                 className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                   index === activeIndex ? "bg-orange-500 w-8" : "bg-gray-300"
//                 }`}
//               />
//               {index === activeIndex && (
//                 <div
//                   className="absolute bottom-[-4px] left-0 h-[3px] bg-orange-500 rounded-full transition-all duration-300"
//                   style={{
//                     width: `${progress}%`,
//                   }}
//                 />
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ClientsSection;




"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const clients = [
  { name: "Talo", src: "/assets/images/client-1.png" },
  { name: "Solid State", src: "/assets/images/client-2.png" },
  { name: "Noted", src: "/assets/images/client-3.png" },
  { name: "Goan", src: "/assets/images/client-4.png" },
  { name: "Mowi", src: "/assets/images/client-5.png" },
  { name: "Talo", src: "/assets/images/client-1.png" },
  { name: "Solid State", src: "/assets/images/client-2.png" },
  { name: "Noted", src: "/assets/images/client-3.png" },
  { name: "Goan", src: "/assets/images/client-4.png" },
  { name: "Mowi", src: "/assets/images/client-5.png" },
  { name: "Talo", src: "/assets/images/client-1.png" },
  { name: "Solid State", src: "/assets/images/client-2.png" },
  { name: "Noted", src: "/assets/images/client-3.png" },
  { name: "Goan", src: "/assets/images/client-4.png" },
  { name: "Mowi", src: "/assets/images/client-5.png" },
];

const ClientsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    if (carouselRef.current) {
      const activeImage = carouselRef.current.children[activeIndex];
      if (activeImage) {
        carouselRef.current.scrollTo({
          left:
            activeImage.offsetLeft -
            (carouselRef.current.offsetWidth - activeImage.offsetWidth) / 2,
          behavior: "smooth",
        });
      }
    }
  }, [activeIndex]);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % clients.length);
    }, 2500); // Change image every 2.5 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, []);


  return (
    <div className="Our-Clinets py-16">
      <div className="max-w-5xl mx-auto text-center mb-8">
        <h1 className="text-3xl lg:text-5xl md:text-4xl font-semibold text-center mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-800 to-orange-500">
            Our Trusted Clients
          </span>
        </h1>
        <p className="text-lg lg:text-xl text-gray-600">
          Collaborating with organizations that share our vision of growth and
          excellence
        </p>
      </div>

      <div className="relative">
        {/* Carousel Container */}
        <div
          className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory hide-scrollbar py-4"
          ref={carouselRef}
        >
          {clients.map((client, index) => (
            <div
              key={index}
              className={`flex-shrink-0 snap-center w-48 h-36 mx-4 transition-all duration-500 ease-in-out ${
                index === activeIndex
                  ? "scale-110"
                  : "scale-90 opacity-50 grayscale"
              }`}
            >
              <div className="bg-white rounded-xl shadow-sm p-6 w-full h-full flex items-center justify-center">
                <Image
                  src={client.src}
                  alt={client.name}
                  width={100}
                  height={60}
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {clients.map((_, index) => (
            <div
              key={index}
              className="relative group cursor-pointer"
              onClick={() => handleDotClick(index)}
            >
              <div
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex ? "bg-orange-500 w-8" : "bg-gray-300"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientsSection;