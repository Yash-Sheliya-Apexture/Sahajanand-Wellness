// // pages/gallery.js
// "use client";
// import { useState, useEffect } from "react";
// import Image from "next/image";
// import {
//   FaSearch,
//   FaChevronLeft,
//   FaChevronRight,
//   FaTimes,
//   FaShareAlt,
//   FaDownload,
// } from "react-icons/fa";

// // Mock data for gallery images with specified categories and image path
// const galleryData = [
//   {
//     id: 1,
//     imageUrl: "/assets/images/Gallery_Page/img-1.png",
//     category: "SHRI SWAMINARAYAN ASHRAM",
//   },
//   {
//     id: 2,
//     imageUrl: "/assets/images/Gallery_Page/img-2.png",
//     category: "SHRI SWAMINARAYAN ASHRAM",
//   },
//   {
//     id: 3,
//     imageUrl: "/assets/images/Gallery_Page/img-3.png",
//     category: "GANGA RIVER",
//   },
//   {
//     id: 4,
//     imageUrl: "/assets/images/Gallery_Page/img-4.png",
//     category: "GANGA RIVER",
//   },
//   {
//     id: 5,
//     imageUrl: "/assets/images/Gallery_Page/img-5.png",
//     category: "ROOMS",
//   },
//   {
//     id: 6,
//     imageUrl: "/assets/images/Gallery_Page/img-6.png",
//     category: "SHRI SWAMINARAYAN ASHRAM",
//   },
//   {
//     id: 7,
//     imageUrl: "/assets/images/Gallery_Page/img-7.png",
//     category: "GANGA RIVER",
//   },
//   {
//     id: 8,
//     imageUrl: "/assets/images/Gallery_Page/img-8.png",
//     category: "ROOMS",
//   },
//   {
//     id: 9,
//     imageUrl: "/assets/images/Gallery_Page/img-8.png",
//     category: "ROOMS",
//   },
// ];

// export default function Gallery() {
//   const [activeCategory, setActiveCategory] = useState("all");
//   const [filteredImages, setFilteredImages] = useState(galleryData);
//   const [selectedImageIndex, setSelectedImageIndex] = useState(null);

//   // Filter images based on category
//   useEffect(() => {
//     let result = galleryData;

//     // Filter by category
//     if (activeCategory !== "all") {
//       result = result.filter((image) => image.category === activeCategory);
//     }

//     setFilteredImages(result);
//   }, [activeCategory]);

//   // Categories for filtering
//   const categories = [
//     "all",
//     ...new Set(galleryData.map((image) => image.category)),
//   ];

//   // Navigate to next/previous image
//   const navigateImage = (direction) => {
//     if (selectedImageIndex === null) return;

//     if (direction === "next") {
//       setSelectedImageIndex((prev) =>
//         prev === filteredImages.length - 1 ? 0 : prev + 1
//       );
//     } else {
//       setSelectedImageIndex((prev) =>
//         prev === 0 ? filteredImages.length - 1 : prev - 1
//       );
//     }
//   };

//   // Share image functionality
//   const shareImage = () => {
//     if (selectedImageIndex === null) return;

//     const imageUrl = filteredImages[selectedImageIndex].imageUrl;

//     if (navigator.share) {
//       navigator
//         .share({
//           title: "Check out this image",
//           text: "I found this amazing image!",
//           url: window.location.href,
//         })
//         .catch((error) => console.log("Error sharing", error));
//     } else {
//       // Fallback for browsers that don't support the Web Share API
//       const dummyInput = document.createElement("input");
//       document.body.appendChild(dummyInput);
//       dummyInput.value = window.location.href;
//       dummyInput.select();
//       document.execCommand("copy");
//       document.body.removeChild(dummyInput);
//       alert("Link copied to clipboard!");
//     }
//   };

//   // Download image functionality
//   const downloadImage = () => {
//     if (selectedImageIndex === null) return;

//     const imageUrl = filteredImages[selectedImageIndex].imageUrl;

//     // Create a temporary link element
//     const link = document.createElement("a");
//     link.href = imageUrl;
//     link.download = `image-${filteredImages[selectedImageIndex].id}.jpg`;
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <div className="">
//       {/* Main Content */}
//       <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
//         {/* Category Filters */}
//         <div className="mb-8">
//           <div className="flex flex-wrap gap-2">
//             {categories.map((category) => (
//               <button
//                 key={category}
//                 onClick={() => setActiveCategory(category)}
//                 className={`px-4 py-2 rounded-full text-sm font-medium ${
//                   activeCategory === category
//                     ? "bg-indigo-600 text-white"
//                     : "bg-gray-200 text-gray-700 hover:bg-gray-300"
//                 }`}
//               >
//                 {category === "all" ? "All" : category}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Gallery Grid */}
//         {filteredImages.length > 0 ? (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {filteredImages.map((image, index) => (
//               <div
//                 key={image.id}
//                 className="rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
//                 onClick={() => setSelectedImageIndex(index)}
//               >
//                 <div className="h-96">
//                   <Image
//                     src={image.imageUrl}
//                     alt={`Gallery image ${image.id}`}
//                     width={500}
//                     height={300}
//                     className="object-cover w-full h-full"
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <div className="text-center py-12">
//             <p className="text-gray-500 text-lg">
//               No images found matching your criteria.
//             </p>
//             <button
//               className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
//               onClick={() => {
//                 setActiveCategory("all");
//               }}
//             >
//               Clear Filters
//             </button>
//           </div>
//         )}
//       </main>

//       {/* Modal for Selected Image */}
//       {selectedImageIndex !== null && (
//         <div className="fixed inset-0 bg-black/85 flex flex-col items-center justify-center z-50 p-4">
//           {/* Top Controls (Close) */}
//           <div className="flex justify-end w-full mb-2">
//             <button
//               className="bg-white rounded-full p-2 shadow-md z-10"
//               onClick={() => setSelectedImageIndex(null)}
//             >
//               <FaTimes className="h-6 w-6 text-gray-600" />
//             </button>
//           </div>

//           <div className="">
//             <div className="">
//               <Image
//                 src={filteredImages[selectedImageIndex].imageUrl}
//                 alt={`Gallery image ${filteredImages[selectedImageIndex].id}`}
//                 width={500}
//                 height={300}
//                 className=""
//               />
//             </div>

//             {/* Left and Right Navigation Buttons - Centered Vertically */}
//             <button
//               className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10"
//               onClick={() => navigateImage("prev")}
//             >
//               <FaChevronLeft className="h-6 w-6 text-gray-600" />
//             </button>

//             <button
//               className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10"
//               onClick={() => navigateImage("next")}
//             >
//               <FaChevronRight className="h-6 w-6 text-gray-600" />
//             </button>
//           </div>

//           {/* Bottom Controls (Share, Download) */}
//           <div className="p-4 flex justify-center space-x-4">
//             <button
//               onClick={shareImage}
//               className="px-4 py-2 bg-main-color/70 text-white rounded-md flex items-center"
//             >
//               <FaShareAlt className="h-5 w-5 mr-2" />
//               Share
//             </button>

//             <button
//               onClick={downloadImage}
//               className="px-4 py-2 bg-orange-100 text-main-color rounded-md flex items-center"
//             >
//               <FaDownload className="h-5 w-5 mr-2" />
//               Download
//             </button>

//           </div>

//         </div>
//       )}
//     </div>
//   );
// }

// "use client";
// import { useState } from "react";
// import Head from "next/head";
// import Image from "next/image";
// import {
//   FiX,
//   FiArrowLeft,
//   FiArrowRight,
//   FiShare2,
//   FiDownload,
// } from "react-icons/fi";

// export default function Gallery() {
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const categories = ["Shri Swaminarayan Ashram", "Ganga River", "Rooms"];

//   const images = [
//     {
//       id: 1,
//       src: "/assets/images/Gallery_Page/img-1.png",
//       category: "Shri Swaminarayan Ashram",
//       alt: "Ashram front view",
//     },
//     {
//       id: 2,
//       src: "/assets/images/Gallery_Page/img-2.png",
//       category: "Shri Swaminarayan Ashram",
//       alt: "Ashram temple",
//     },
//     {
//       id: 3,
//       src: "/assets/images/Gallery_Page/img-3.png",
//       category: "Shri Swaminarayan Ashram",
//       alt: "Ashram garden",
//     },
//     {
//       id: 4,
//       src: "/assets/images/Gallery_Page/img-4.png",
//       category: "Ganga River",
//       alt: "Ganga River sunset",
//     },
//     {
//       id: 5,
//       src: "/assets/images/Gallery_Page/img-5.png",
//       category: "Ganga River",
//       alt: "Ganga River boats",
//     },
//     {
//       id: 6,
//       src: "/assets/images/Gallery_Page/img-6.png",
//       category: "Ganga River",
//       alt: "Ganga River ceremony",
//     },
//     {
//       id: 7,
//       src: "/assets/images/Gallery_Page/img-7.png",
//       category: "Rooms",
//       alt: "Standard room",
//     },
//     {
//       id: 8,
//       src: "/assets/images/Gallery_Page/img-8.png",
//       category: "Rooms",
//       alt: "Deluxe room",
//     },
//     // { id: 9, src: "/assets/images/Gallery_Page/img-9.png", category: "Rooms", alt: "Premium room" },
//   ];

//   const openModal = (image, index) => {
//     setSelectedImage(image);
//     setCurrentIndex(index);
//   };

//   const closeModal = () => {
//     setSelectedImage(null);
//   };

//   const handlePrevImage = (e) => {
//     e.stopPropagation();
//     const newIndex = (currentIndex - 1 + images.length) % images.length;
//     setSelectedImage(images[newIndex]);
//     setCurrentIndex(newIndex);
//   };

//   const handleNextImage = (e) => {
//     e.stopPropagation();
//     const newIndex = (currentIndex + 1) % images.length;
//     setSelectedImage(images[newIndex]);
//     setCurrentIndex(newIndex);
//   };

//   const handleShare = async (e) => {
//     e.stopPropagation();
//     if (navigator.share) {
//       try {
//         await navigator.share({
//           title: selectedImage.alt,
//           text: `Check out this image of ${selectedImage.category}`,
//           url: window.location.href,
//         });
//       } catch (error) {
//         console.log("Error sharing:", error);
//       }
//     } else {
//       // Fallback for browsers that don't support the Web Share API
//       alert(
//         "Sharing is not supported on this browser. The link has been copied to clipboard."
//       );
//       navigator.clipboard.writeText(window.location.href);
//     }
//   };

//   const handleDownload = (e) => {
//     e.stopPropagation();
//     const link = document.createElement("a");
//     link.href = selectedImage.src;
//     link.download = `${selectedImage.category
//       .toLowerCase()
//       .replace(/\s+/g, "-")}-${selectedImage.id}.jpg`;
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   // Filter images by category for the gallery
//   const getCategoryImages = (category) => {
//     return images.filter((image) => image.category === category);
//   };

//   return (
//     <div className="min-h-screen">
//       <Head>
//         <title>Gallery | Our Beautiful Collection</title>
//         <meta
//           name="description"
//           content="View our collection of beautiful images"
//         />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className="container mx-auto px-4 py-8">
//         <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
//           Our Gallery
//         </h1>

//         {categories.map((category) => (
//           <div key={category} className="mb-12">
//             <h2 className="text-2xl font-semibold mb-4 text-gray-800">
//               {category}
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//               {getCategoryImages(category).map((image, index) => (
//                 <div
//                   key={image.id}
//                   className="relative h-96 rounded-lg overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300"
//                   onClick={() =>
//                     openModal(
//                       image,
//                       images.findIndex((img) => img.id === image.id)
//                     )
//                   }
//                 >
//                   <Image
//                     src={image.src}
//                     alt={image.alt}
//                     fill
//                     className="object-cover object-center"
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </main>

//       {/* Modal for displaying selected image */}
//       {selectedImage && (
//         <div
//           className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
//           onClick={closeModal}
//         >
//           <div className=" w-full h-full max-w-4xl max-h-screen p-4 flex flex-col items-center justify-center">
//             {/* Close button */}
//             <button
//               className="absolute top-4 right-4 text-main-color bg-white rounded-full p-2 hover:bg-opacity-100 z-10 cursor-pointer"
//               onClick={closeModal}
//             >
//               <FiX size={24} />
//             </button>

//             {/* Navigation buttons */}
//             <button
//               className="absolute left-4 top-1/2 transform -translate-y-1/2 text-main-color bg-white rounded-full p-2 hover:bg-opacity-100 z-10 cursor-pointer"
//               onClick={handlePrevImage}
//             >
//               <FiArrowLeft size={24} />
//             </button>

//             <button
//               className="absolute right-4 top-1/2 transform -translate-y-1/2 text-main-color bg-white rounded-full p-2 hover:bg-opacity-100 z-10 cursor-pointer"
//               onClick={handleNextImage}
//             >
//               <FiArrowRight size={24} />
//             </button>

//             {/* Image container */}
//             <div
//               className="relative w-full h-full flex items-center justify-center"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <div className="relative w-full h-4/5 ">
//                 <Image
//                   src={selectedImage.src}
//                   alt={selectedImage.alt}
//                   fill
//                   className="object-contain"
//                 />
//               </div>

//                 <div className="absolute bottom-10 flex justify-center items-center gap-4">
//                   <button
//                     className="text-main-color p-1 rounded-md bg-white transition-colors inline-flex items-center gap-2"
//                     onClick={handleShare}
//                     title="Share"
//                   >
//                     <FiShare2 size={20} />
//                     <span>Share</span>
//                   </button>
//                   <button
//                     className="text-main-color bg-white p-1 rounded-md transition-colors inline-flex items-center gap-2"
//                     onClick={handleDownload}
//                     title="Download"
//                   >
//                     <FiDownload size={20} />
//                     <span>Download</span>

//                   </button>
//                 </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }









"use client";
import { useState, useRef, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import {
  FiX,
  FiArrowLeft,
  FiArrowRight,
  FiShare2,
  FiDownload,
} from "react-icons/fi";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState(null); // Track active category
  const galleryRef = useRef(null); // Ref for the gallery container

  const categories = ["Shri Swaminarayan Ashram", "Ganga River", "Rooms"];

  const images = [
    {
      id: 1,
      src: "/assets/images/Gallery_Page/img-1.png",
      category: "Shri Swaminarayan Ashram",
      alt: "Ashram front view",
    },
    {
      id: 2,
      src: "/assets/images/Gallery_Page/img-2.png",
      category: "Shri Swaminarayan Ashram",
      alt: "Ashram temple",
    },
    {
      id: 3,
      src: "/assets/images/Gallery_Page/img-3.png",
      category: "Shri Swaminarayan Ashram",
      alt: "Ashram garden",
    },
    {
      id: 4,
      src: "/assets/images/Gallery_Page/img-4.png",
      category: "Ganga River",
      alt: "Ganga River sunset",
    },
    {
      id: 5,
      src: "/assets/images/Gallery_Page/img-5.png",
      category: "Ganga River",
      alt: "Ganga River boats",
    },
    {
      id: 6,
      src: "/assets/images/Gallery_Page/img-6.png",
      category: "Ganga River",
      alt: "Ganga River ceremony",
    },
    {
      id: 7,
      src: "/assets/images/Gallery_Page/img-7.png",
      category: "Rooms",
      alt: "Standard room",
    },
    {
      id: 8,
      src: "/assets/images/Gallery_Page/img-8.png",
      category: "Rooms",
      alt: "Deluxe room",
    },
    {
      id: 9,
      src: "/assets/images/Gallery_Page/img-1.png",
      category: "Shri Swaminarayan Ashram",
      alt: "Ashram front view",
    },
    {
      id: 10,
      src: "/assets/images/Gallery_Page/img-2.png",
      category: "Shri Swaminarayan Ashram",
      alt: "Ashram temple",
    },
    {
      id: 11,
      src: "/assets/images/Gallery_Page/img-3.png",
      category: "Shri Swaminarayan Ashram",
      alt: "Ashram garden",
    },
    {
      id: 12,
      src: "/assets/images/Gallery_Page/img-4.png",
      category: "Ganga River",
      alt: "Ganga River sunset",
    },
    {
      id: 13,
      src: "/assets/images/Gallery_Page/img-5.png",
      category: "Ganga River",
      alt: "Ganga River boats",
    },
    {
      id: 14,
      src: "/assets/images/Gallery_Page/img-6.png",
      category: "Ganga River",
      alt: "Ganga River ceremony",
    },
    {
      id: 15,
      src: "/assets/images/Gallery_Page/img-7.png",
      category: "Rooms",
      alt: "Standard room",
    },
    {
      id: 16,
      src: "/assets/images/Gallery_Page/img-8.png",
      category: "Rooms",
      alt: "Deluxe room",
    },
    {
      id: 17,
      src: "/assets/images/Gallery_Page/img-1.png",
      category: "Shri Swaminarayan Ashram",
      alt: "Ashram front view",
    },
    {
      id: 18,
      src: "/assets/images/Gallery_Page/img-2.png",
      category: "Shri Swaminarayan Ashram",
      alt: "Ashram temple",
    },
    {
      id: 19,
      src: "/assets/images/Gallery_Page/img-3.png",
      category: "Shri Swaminarayan Ashram",
      alt: "Ashram garden",
    },
    {
      id: 20,
      src: "/assets/images/Gallery_Page/img-4.png",
      category: "Ganga River",
      alt: "Ganga River sunset",
    },
    {
      id: 21,
      src: "/assets/images/Gallery_Page/img-5.png",
      category: "Ganga River",
      alt: "Ganga River boats",
    },
    {
      id: 22,
      src: "/assets/images/Gallery_Page/img-6.png",
      category: "Ganga River",
      alt: "Ganga River ceremony",
    },
    {
      id: 23,
      src: "/assets/images/Gallery_Page/img-7.png",
      category: "Rooms",
      alt: "Standard room",
    },
    {
      id: 24,
      src: "/assets/images/Gallery_Page/img-8.png",
      category: "Rooms",
      alt: "Deluxe room",
    },
     {
      id: 25,
      src: "/assets/images/Gallery_Page/img-7.png",
      category: "Rooms",
      alt: "Standard room",
    },
    {
      id: 26,
      src: "/assets/images/Gallery_Page/img-8.png",
      category: "Rooms",
      alt: "Deluxe room",
    },
      {
      id: 27,
      src: "/assets/images/Gallery_Page/img-9.png",
      category: "Rooms",
      alt: "Deluxe room",
    },

      {
      id: 28,
      src: "/assets/images/Gallery_Page/img-1.png",
      category: "Shri Swaminarayan Ashram",
      alt: "Ashram front view",
    },
    {
      id: 29,
      src: "/assets/images/Gallery_Page/img-2.png",
      category: "Shri Swaminarayan Ashram",
      alt: "Ashram temple",
    },
    {
      id: 30,
      src: "/assets/images/Gallery_Page/img-3.png",
      category: "Shri Swaminarayan Ashram",
      alt: "Ashram garden",
    },
    {
      id: 31,
      src: "/assets/images/Gallery_Page/img-4.png",
      category: "Ganga River",
      alt: "Ganga River sunset",
    },
    {
      id: 32,
      src: "/assets/images/Gallery_Page/img-5.png",
      category: "Ganga River",
      alt: "Ganga River boats",
    },
    {
      id: 33,
      src: "/assets/images/Gallery_Page/img-6.png",
      category: "Ganga River",
      alt: "Ganga River ceremony",
    },
     {
      id: 34,
      src: "/assets/images/Gallery_Page/img-9.png",
      category: "Ganga River",
      alt: "Ganga River ceremony",
    },
       {
      id: 35,
      src: "/assets/images/Gallery_Page/img-9.png",
      category: "Shri Swaminarayan Ashram",
      alt: "Ashram ceremony",
    },
       {
      id: 36,
      src: "/assets/images/Gallery_Page/img-9.png",
      category: "Rooms",
      alt: "Room ceremony",
    },
    // { id: 9, src: "/assets/images/Gallery_Page/img-9.png", category: "Rooms", alt: "Premium room" },
  ];

  const openModal = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const handlePrevImage = (e) => {
    e.stopPropagation();
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[newIndex]);
    setCurrentIndex(newIndex);
  };

  const handleNextImage = (e) => {
    e.stopPropagation();
    const newIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[newIndex]);
    setCurrentIndex(newIndex);
  };

  const handleShare = async (e) => {
    e.stopPropagation();
    if (navigator.share) {
      try {
        await navigator.share({
          title: selectedImage.alt,
          text: `Check out this image of ${selectedImage.category}`,
          url: window.location.href,
        });
      } catch (error) {
        console.log("Error sharing:", error);
      }
    } else {
      // Fallback for browsers that don't support the Web Share API
      alert(
        "Sharing is not supported on this browser. The link has been copied to clipboard."
      );
      navigator.clipboard.writeText(window.location.href);
    }
  };

  const handleDownload = (e) => {
    e.stopPropagation();
    const link = document.createElement("a");
    link.href = selectedImage.src;
    link.download = `${selectedImage.category
      .toLowerCase()
      .replace(/\s+/g, "-")}-${selectedImage.id}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Filter images by category for the gallery
  const getCategoryImages = (category) => {
    return images.filter((image) => image.category === category);
  };

  const scrollGallery = (direction, category) => {
    const gallery = galleryRef.current;

    if (gallery) {
      const scrollAmount = gallery.offsetWidth * 0.8; // Scroll by 80% of gallery width
      gallery.scrollLeft += direction === 'left' ? -scrollAmount : scrollAmount;
    }

    setActiveCategory(category); // Update active category when scrolling
  };

  return (
    <div className="min-h-screen">
      <Head>
        <title>Gallery | Our Beautiful Collection</title>
        <meta
          name="description"
          content="View our collection of beautiful images"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Our Gallery
        </h1>

        {categories.map((category) => (
          <div key={category} className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center justify-between">
              {category}
              <div>
                <button
                  className="text-gray-600 hover:text-gray-800 focus:outline-none"
                  onClick={() => scrollGallery('left', category)}
                  aria-label={`Scroll ${category} gallery left`}
                >
                  <FiArrowLeft size={24} />
                </button>
                <button
                  className="text-gray-600 hover:text-gray-800 focus:outline-none"
                  onClick={() => scrollGallery('right', category)}
                  aria-label={`Scroll ${category} gallery right`}
                >
                  <FiArrowRight size={24} />
                </button>
              </div>
            </h2>
            <div
              ref={galleryRef}
              className="gallery-container flex overflow-x-auto gap-4 pb-4 scroll-smooth"
            >
              {getCategoryImages(category).map((image, index) => (
                <div
                  key={image.id}
                  className="relative w-96 h-96 rounded-lg overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300 flex-shrink-0"
                  onClick={() =>
                    openModal(
                      image,
                      images.findIndex((img) => img.id === image.id)
                    )
                  }
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover object-center"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </main>

      {/* Modal for displaying selected image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          onClick={closeModal}
        >
          <div className=" w-full h-full max-w-4xl max-h-screen p-4 flex flex-col items-center justify-center">
            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-main-color bg-white rounded-full p-2 hover:bg-opacity-100 z-10 cursor-pointer"
              onClick={closeModal}
            >
              <FiX size={24} />
            </button>

            {/* Navigation buttons */}
            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-main-color bg-white rounded-full p-2 hover:bg-opacity-100 z-10 cursor-pointer"
              onClick={handlePrevImage}
            >
              <FiArrowLeft size={24} />
            </button>

            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-main-color bg-white rounded-full p-2 hover:bg-opacity-100 z-10 cursor-pointer"
              onClick={handleNextImage}
            >
              <FiArrowRight size={24} />
            </button>

            {/* Image container */}
            <div
              className="relative w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-4/5 ">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="absolute bottom-10 flex justify-center items-center gap-4">
                <button
                  className="text-main-color p-1 rounded-md bg-white transition-colors inline-flex items-center gap-2"
                  onClick={handleShare}
                  title="Share"
                >
                  <FiShare2 size={20} />
                  <span>Share</span>
                </button>
                <button
                  className="text-main-color bg-white p-1 rounded-md transition-colors inline-flex items-center gap-2"
                  onClick={handleDownload}
                  title="Download"
                >
                  <FiDownload size={20} />
                  <span>Download</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}