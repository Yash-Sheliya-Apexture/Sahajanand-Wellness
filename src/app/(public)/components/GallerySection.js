// // pages/gallery.js
// "use client"
// import React, { useEffect, useRef } from 'react';
// import Image from 'next/image';
// import img1 from '../../../../public/assets/images/Gallery/img-1.jpg'
// import img2 from '../../../../public/assets/images/Gallery/img-2.jpg'
// import img3 from '../../../../public/assets/images/Gallery/img-3.jpg'
// import img4 from '../../../../public/assets/images/Gallery/img-4.jpg'
// import img5 from '../../../../public/assets/images/Gallery/img-5.jpg'
// import img6 from '../../../../public/assets/images/Gallery/img-6.jpg'

// export default function Gallery() {
//   const sliderRef = useRef(null);

//   // Sample image data - replace with your actual images
//   const galleryImages = [
//     {
//       src: img1, // Replace with your image paths
//       alt: "Mountain landscape",
//     },
//     {
//       src: img2,
//       alt: "Ocean waves"
//     },
//     {
//       src: img3,
//       alt: "Forest path"
//     },
//     {
//       src: img4,
//       alt: "Desert sunset"
//     },
//     {
//       src: img5,
//       alt: "City skyline"
//     },
//     {
//       src: img6,
//       alt: "Wildlife photography"
//     },
//   ];

//   useEffect(() => {
//     // Clone the slider to create the infinite effect
//     if (sliderRef.current) {
//       const slider = sliderRef.current;
//       slider.innerHTML += slider.innerHTML;

//       // Start the animation
//       startSlideAnimation();
//     }

//     // Function to animate the slider
//     function startSlideAnimation() {
//       const slider = sliderRef.current;
//       let position = 0;
//       const speed = 0.5; // pixels per frame

//       function animate() {
//         position -= speed;

//         // Reset position when first set of images has passed
//         if (position <= -slider.firstElementChild.offsetWidth * (galleryImages.length)) {
//           position = 0;
//         }

//         slider.style.transform = `translateX(${position}px)`;
//         requestAnimationFrame(animate);
//       }

//       requestAnimationFrame(animate);
//     }

//     // Cleanup animation on unmount
//     return () => {
//       if (sliderRef.current) {
//         sliderRef.current.innerHTML = '';
//       }
//     };
//   }, [galleryImages]);

//   return (
//     <div className="Gallery-Section bg-gray-900 py-16">
//         <div className="container mx-auto px-4">
//           <h1 className="text-5xl font-bold text-white text-center mb-8">
//             Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Gallery</span>
//           </h1>
//           <p className="text-gray-300 text-center max-w-2xl mx-auto mb-16">
//             Explore our collection of stunning images that showcase our work and inspiration.
//             The gallery below features an infinite sliding animation to provide a seamless viewing experience.
//           </p>
//         </div>

//         <div className="w-full overflow-hidden bg-gray-900 py-12 relative">
//           {/* Gradient overlays for fade effect */}
//           <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-gray-900 to-transparent z-10"></div>
//           <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-gray-900 to-transparent z-10"></div>

//           <h2 className="text-3xl font-bold text-white text-center mb-8">Our Gallery</h2>

//           <div className="relative w-full mx-auto">
//             <div
//               ref={sliderRef}
//               className="flex"
//             >
//               {galleryImages.map((image, index) => (
//                 <div
//                   key={`image-${index}`}
//                   className="flex-shrink-0 px-2 transform transition-all duration-300 hover:scale-105"
//                   style={{ width: '300px' }}
//                 >
//                   <div className="relative w-full overflow-hidden rounded-lg shadow-lg group">
//                     <Image
//                       src={image.src}
//                       alt={image.alt || 'Gallery image'}
//                       width={300}
//                       height={320}
//                       objectFit="cover"
//                       className="transition-all duration-500 group-hover:scale-110"
//                     />

//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//     </div>
//   );
// }

"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import img1 from "../../../../public/assets/images/Gallery/img-1.jpg";
import img2 from "../../../../public/assets/images/Gallery/img-2.jpg";
import img3 from "../../../../public/assets/images/Gallery/img-3.jpg";
import img4 from "../../../../public/assets/images/Gallery/img-4.jpg";
import img5 from "../../../../public/assets/images/Gallery/img-5.jpg";
import img6 from "../../../../public/assets/images/Gallery/img-6.jpg";
import img7 from "../../../../public/assets/images/Gallery/img-7.jpg";
import img8 from "../../../../public/assets/images/Gallery/img-8.jpg";
import img9 from "../../../../public/assets/images/Gallery/img-9.jpg";
import img10 from "../../../../public/assets/images/Gallery/img-10.jpg";
import img11 from "../../../../public/assets/images/Gallery/img-11.jpg";
import img12 from "../../../../public/assets/images/Gallery/img-12.jpg";
import img13 from "../../../../public/assets/images/Gallery/img-13.jpg";
import img14 from "../../../../public/assets/images/Gallery/img-14.jpg";

export default function GalleryAlternative() {
  const sliderRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const positionRef = useRef(0); // Use a ref to maintain position between renders

  const galleryImages = [
    { src: img1, alt: "Image 1" },
    { src: img2, alt: "Image 2" },
    { src: img3, alt: "Image 3" },
    { src: img4, alt: "Image 4" },
    { src: img5, alt: "Image 5" },
    { src: img6, alt: "Image 6" },
    { src: img7, alt: "Image 7" },
    { src: img8, alt: "Image 8" },
    { src: img9, alt: "Image 9" },
    { src: img10, alt: "Image 10" },
    { src: img11, alt: "Image 11" },
    { src: img12, alt: "Image 12" },
    { src: img13, alt: "Image 13" },
    { src: img14, alt: "Image 14" },
  ];

  useEffect(() => {
    let animationId;
    const speed = 1; // pixels per frame

    const setupInfiniteScroll = () => {
      if (!sliderRef.current) return;

      // Create double of items
      const slider = sliderRef.current;
      const originalItems = Array.from(slider.children);
      const cloneItems = originalItems.map((item) => item.cloneNode(true));

      // Append clones
      cloneItems.forEach((clone) => {
        slider.appendChild(clone);
      });
    };

    setupInfiniteScroll();

    // Animation function with smooth infinite loop
    const animate = () => {
      if (!isPaused && sliderRef.current) {
        positionRef.current -= speed;

        // Calculate when to reset
        const firstItem = sliderRef.current.firstElementChild;
        if (firstItem) {
          const itemWidth = firstItem.offsetWidth;
          const itemMargin = 32; // equivalent to the margin/padding - increased to 32 to match your styling better
          const totalItemWidth = itemWidth + itemMargin;

          // Reset position when first set of images has passed, but do it seamlessly
          if (positionRef.current <= -totalItemWidth * galleryImages.length) {
            // Instead of resetting to 0, adjust by exactly one loop length
            positionRef.current += totalItemWidth * galleryImages.length;
          }

          sliderRef.current.style.transform = `translateX(${positionRef.current}px)`;
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    // Start animation
    animationId = requestAnimationFrame(animate);

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [galleryImages, isPaused]);

  return (
    <section className="Gallery-Section overflow-hidden py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl lg:text-5xl md:text-4xl font-bold text-center mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-800 to-orange-500">
              Our Gallery
            </span>
          </h1>
          <p className="lg:text-xl text-lg text-gray-700 text-center">
            " Journey through the heart of spiritual India with glimpses of the
            serene Swaminarayan Ashram, comfortable hotel rooms offering
            peaceful retreats, the mesmerizing Ganga Aarti ceremony, and the
            vibrant cultural tapestry of Rishikesh. "
          </p>

          <div className="flex justify-center mt-8">
            <div className="h-1 w-80 bg-gradient-to-r from-transparent via-orange-400 to-transparent"></div>
          </div>
        </div>
      </div>

      <div className="relative mt-12">
        {/* Curved gallery with simulated 3D effect */}
        <div
          className="flex px-8 py-6 items-center perspective-1000"
          ref={sliderRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {galleryImages.map((image, index) => (
            <div
              key={`image-${index}`}
              className="flex-shrink-0 px-4 transform transition-all duration-500 hover:-translate-y-3 hover:rotate-2"
              style={{
                transform: `rotateY(${index % 2 === 0 ? "-3deg" : "3deg"})`,
              }}
            >
              <div className="rounded-3xl w-48 md:w-56 h-72 group relative">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={224}
                  height={288}
                  className="object-cover rounded-3xl h-full w-full shadow-md transition-transform duration-700 group-hover:scale-110 overflow-hidden"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Edge fades */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-amber-50 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-amber-50 to-transparent z-10"></div>
      </div>
    </section>
  );
}
