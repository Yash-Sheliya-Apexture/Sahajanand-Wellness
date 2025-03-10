// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';
// import { X, ChevronLeft, ChevronRight, Info } from 'lucide-react';

// // Sample image data (replace with your actual image imports)
// const images = [
//   {
//     id: 1,
//     src: '/assets/images/neelkanth-mahadev-temple.jpg',
//     alt: 'Neelkanth Mahadev Temple',
//     title: 'Neelkanth Mahadev Temple',
//     description: 'Ancient temple dedicated to Lord Shiva, nestled in the Garhwal hills.'
//   },
//   {
//     id: 2,
//     src: '/assets/images/ashram-building.jpg',
//     alt: 'Ashram Building',
//     title: 'Parmarth Niketan Ashram',
//     description: 'One of the largest ashrams in Rishikesh, known for its Ganga Aarti ceremony.'
//   },
//   {
//     id: 3,
//     src: '/assets/images/about-img.jpg',
//     alt: 'Triveni Ghat',
//     title: 'Triveni Ghat',
//     description: 'Sacred bathing spot where three holy rivers meet.'
//   },
//   {
//     id: 4,
//     src: '/assets/images/Tera-Manzil-Temple.jpg',
//     alt: 'Tera Manzil Temple',
//     title: 'Trimbakeshwar Temple',
//     description: 'The 13-story temple complex also known as Tera Manzil Temple.'
//   },
//   {
//     id: 5,
//     src: '/assets/images/yoga.jpg',
//     alt: 'Yoga Practice',
//     title: 'Yoga by the Ganges',
//     description: 'Rishikesh is known worldwide as the Yoga Capital of the World.'
//   },
// ];

// const ImageGallery = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [isLightboxOpen, setIsLightboxOpen] = useState(false);
//   const [showInfo, setShowInfo] = useState(false);

//   // Handle keyboard navigation
//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (!isLightboxOpen) return;

//       if (e.key === 'ArrowLeft') {
//         navigateGallery(-1);
//       } else if (e.key === 'ArrowRight') {
//         navigateGallery(1);
//       } else if (e.key === 'Escape') {
//         setIsLightboxOpen(false);
//       }
//     };

//     window.addEventListener('keydown', handleKeyDown);
//     return () => window.removeEventListener('keydown', handleKeyDown);
//   }, [isLightboxOpen, activeIndex]);

//   // Open lightbox with the clicked image
//   const openLightbox = (index) => {
//     setActiveIndex(index);
//     setIsLightboxOpen(true);
//     setShowInfo(true);
//   };

//   // Navigate through images in lightbox
//   const navigateGallery = (direction) => {
//     const newIndex = (activeIndex + direction + images.length) % images.length;
//     setActiveIndex(newIndex);
//   };

//   // Toggle image information
//   const toggleInfo = () => {
//     setShowInfo(!showInfo);
//   };

//   return (
//     <div className="container mx-auto px-4 py-12">
//       <h2 className="text-3xl font-bold text-center mb-8">
//         <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-orange-400">
//           Explore Rishikesh
//         </span>
//       </h2>

//       {/* Main Gallery Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {images.map((image, index) => (
//           <div
//             key={image.id}
//             className="group relative h-64 md:h-80 overflow-hidden rounded-xl cursor-pointer transition-transform duration-300 hover:scale-105 shadow-md"
//             onClick={() => openLightbox(index)}
//           >
//             <Image
//               src={image.src}
//               alt={image.alt}
//               fill
//               className="object-cover transition-transform duration-500 group-hover:scale-110"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//               <div className="absolute bottom-4 left-4 right-4">
//                 <h3 className="text-white font-semibold text-lg">{image.title}</h3>
//                 <p className="text-white/80 text-sm line-clamp-2">{image.description}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Lightbox */}
//       {isLightboxOpen && (
//         <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
//           <div className="relative w-full h-full max-w-6xl max-h-[90vh] mx-auto flex flex-col items-center justify-center p-4">
//             {/* Controls */}
//             <button
//               className="absolute top-4 right-4 text-white bg-black/50 p-2 rounded-full hover:bg-black/70 z-10"
//               onClick={() => setIsLightboxOpen(false)}
//             >
//               <X size={24} />
//             </button>

//             <button
//               className="absolute top-4 left-4 text-white bg-black/50 p-2 rounded-full hover:bg-black/70 z-10"
//               onClick={toggleInfo}
//             >
//               <Info size={24} />
//             </button>

//             <button
//               className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black/50 p-2 rounded-full hover:bg-black/70 z-10"
//               onClick={() => navigateGallery(-1)}
//             >
//               <ChevronLeft size={28} />
//             </button>

//             <button
//               className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black/50 p-2 rounded-full hover:bg-black/70 z-10"
//               onClick={() => navigateGallery(1)}
//             >
//               <ChevronRight size={28} />
//             </button>

//             {/* Image container */}
//             <div className="relative w-full h-full flex items-center justify-center">
//               <Image
//                 src={images[activeIndex].src}
//                 alt={images[activeIndex].alt}
//                 className="object-contain max-h-full"
//                 fill
//               />
//             </div>

//             {/* Image info */}
//             {showInfo && (
//               <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white transition-opacity duration-300">
//                 <h3 className="text-xl md:text-2xl font-bold mb-2">{images[activeIndex].title}</h3>
//                 <p className="text-sm md:text-base">{images[activeIndex].description}</p>
//                 <div className="mt-4">
//                   <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg text-sm transition-colors">
//                     Learn More
//                   </button>
//                 </div>
//               </div>
//             )}

//             {/* Image counter */}
//             <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
//               {activeIndex + 1} / {images.length}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ImageGallery;

// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';
// import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// const images = [
//     {
//       id: 1,
//       src: '/assets/images/neelkanth-mahadev-temple.jpg',
//       alt: 'Neelkanth Mahadev Temple',
//       title: 'Neelkanth Mahadev Temple',
//       description: 'Ancient temple dedicated to Lord Shiva, nestled in the Garhwal hills.',
//       details: 'Located about 32 km from Rishikesh, this ancient temple is where Lord Shiva consumed the poison that came out during the churning of the ocean. The beautiful architecture surrounded by dense forests makes it a serene pilgrimage site. Devotees trek through picturesque landscapes to reach this sacred shrine, especially during Shivratri when a special puja is performed.',
//       extendedDetails: [
//         "This temple is situated at 1325 meters height and 31 kms far from Rishikesh. Neelkant Mahadev is Temple of Lord Shiva. According to legends Lord Shiva came here for meditation when he consumed poison during the sea churning. Lord Shiva's throat became blue colored due to the poison so he is known as a NeelKanth (Blue throated)",
//         "Neelkanth Mahadev Temple is a prominent Hindu temple located near Rishikesh in the state of Uttarakhand, India. Situated amidst the picturesque backdrop of the Himalayas, the temple is dedicated to Lord Shiva, one of the major deities in Hinduism.",
//         "The temple is named after Lord Shiva's mythical form, Neelkanth, which means Blue Throat in Sanskrit. According to Hindu mythology, during the churning of the cosmic ocean by gods and demons to obtain the elixir of immortality, Lord Shiva consumed the poison that emerged, turning his throat blue. The temple commemorates this legend and is considered a sacred site by devotees."
//       ],
//     },
//     {
//       id: 2,
//       src: '/assets/images/ashram-building.jpg',
//       alt: 'Ashram Building',
//       title: 'Parmarth Niketan Ashram',
//       description: 'One of the largest ashrams in Rishikesh, known for its Ganga Aarti ceremony.',
//       details: 'Parmarth Niketan offers a peaceful environment for yoga, meditation and spiritual practices. The ashram hosts the famous Ganga Aarti every evening, a spectacular ritual that attracts visitors from around the world. With over 1,000 rooms, it accommodates spiritual seekers looking for courses in yoga, meditation, and Vedic heritage.',
//       extendedDetails: [
//         "The Beatles Ashram, also known as Maharishi Mahesh Yogi Ashram, is a historic site located in Rishikesh, Uttarakhand, India. This ashram gained international fame when the renowned English rock band, The Beatles, stayed there in 1968 to study Transcendental Meditation under the guidance of Maharishi Mahesh Yogi.",
//         "During their stay at the ashram, The Beatles composed numerous songs, which later appeared on their iconic White Album. The tranquil surroundings of the ashram, nestled in the forests near the Ganges River, provided an inspiring backdrop for their creative pursuits."
//       ],
//     },
//     {
//       id: 3,
//       src: '/assets/images/about-img.jpg',
//       alt: 'Triveni Ghat',
//       title: 'Triveni Ghat',
//       description: 'Sacred bathing spot where three holy rivers meet.',
//       details: 'Triveni Ghat is the confluence of three sacred rivers - Ganga, Yamuna and Saraswati. It\'s believed that taking a dip here cleanses one of all sins. Every evening, the ghat comes alive with the melodious chants during the aarti ceremony. The ghat is also famous for its early morning ritual baths and feeding the fish, which is considered auspicious.',
//       extendedDetails: [
//         "Triveni Ghat is a revered bathing ghat (riverbank) situated in the holy city of Rishikesh, Uttarakhand, India. It is one of the most sacred spots along the banks of the Ganges River and holds immense religious significance for Hindus.",
//         "The name Triveni signifies the confluence of three sacred rivers: the Ganges, Yamuna, and Saraswati. According to Hindu mythology, taking a dip at Triveni Ghat is believed to cleanse ones sins and purify the soul. It is considered a holy site for performing rituals, offering prayers, and conducting religious ceremonies.",
//         "Triveni Ghat is bustling with activity and attracts devotees, sadhus (holy men), and pilgrims who gather here to take part in the evening aarti (prayer ceremony)"
//       ],
//     },
//     {
//       id: 4,
//       src: '/assets/images/Tera-Manzil-Temple.jpg',
//       alt: 'Tera Manzil Temple',
//       title: 'Trimbakeshwar Temple',
//       description: 'The 13-story temple complex also known as Tera Manzil Temple.',
//       details: 'The Trimbakeshwar Temple, popularly known as Tera Manzil Temple, is a 13-story religious complex that stands tall on the banks of the Ganges. Each floor houses different deities, making it a comprehensive spiritual journey. The temples architecture is a remarkable blend of traditional design with modern elements, offering panoramic views of Rishikesh from its top floors.',
//       extendedDetails: [
//         "I apologize, but I couldn't find any information about a specific Tera Manzil Temple in Rishikesh or any other location. It's possible that the temple you mentioned may have a different name or is not widely known. Rishikesh is home to several temples, ashrams, and spiritual centers, each with its own unique significance. If you have any other queries or if there is another topic I can assist you with, please let me know."
//       ],
//     },
//     {
//       id: 5,
//       src: '/assets/images/yoga.jpg',
//       alt: 'Yoga Practice',
//       title: 'Yoga by the Ganges',
//       description: 'Rishikesh is known worldwide as the Yoga Capital of the World.',
//       details: 'Rishikesh attracts yoga enthusiasts from across the globe with its perfect setting for spiritual practice. The tradition of yoga has been preserved here for centuries, with numerous schools offering courses from beginner to advanced levels. The serene banks of the Ganges provide an ideal backdrop for meditation and pranayama. Many world-renowned yoga teachers have established their ashrams in this holy city.',
//       extendedDetails: [
//         "Rishikesh, nestled in the foothills of the Himalayas, has long been revered as the Yoga Capital of the World. Its serene atmosphere, coupled with the spiritual energy of the Ganges River, creates an ideal environment for those seeking to deepen their yoga practice.",
//         "The city boasts a myriad of yoga schools and ashrams that offer a wide range of courses, from beginner to advanced levels. Whether you're a seasoned yogi or just starting your journey, Rishikesh provides an immersive experience that will enhance your physical, mental, and spiritual well-being. Immerse yourself in the ancient traditions and practices of yoga amidst the breathtaking beauty of the Himalayas."
//       ],
//     },
//   ];

// const ImageGallery = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [isLightboxOpen, setIsLightboxOpen] = useState(false);
//   const [showDetails, setShowDetails] = useState(false);

//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (!isLightboxOpen) return;

//       if (e.key === 'ArrowLeft') {
//         navigateGallery(-1);
//       } else if (e.key === 'ArrowRight') {
//         navigateGallery(1);
//       } else if (e.key === 'Escape') {
//         setIsLightboxOpen(false);
//       }
//     };

//     window.addEventListener('keydown', handleKeyDown);
//     return () => window.removeEventListener('keydown', handleKeyDown);
//   }, [isLightboxOpen, activeIndex]);

//   const openLightbox = (index) => {
//     setActiveIndex(index);
//     setIsLightboxOpen(true);
//     setShowDetails(false);
//   };

//   const navigateGallery = (direction) => {
//     const newIndex = (activeIndex + direction + images.length) % images.length;
//     setActiveIndex(newIndex);
//     setShowDetails(false);
//   };

//   const toggleDetails = () => {
//     setShowDetails(!showDetails);
//   };

//   return (
//     <div className="container mx-auto px-4 py-12">
//       <h2 className="text-3xl font-bold text-center mb-8">
//         <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-orange-400">
//           Explore Rishikesh
//         </span>
//       </h2>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {images.map((image, index) => (
//           <div
//             key={image.id}
//             className="group relative h-64 md:h-80 overflow-hidden rounded-xl cursor-pointer transition-transform duration-300 hover:scale-105 shadow-md"
//             onClick={() => openLightbox(index)}
//           >
//             <Image
//               src={image.src}
//               alt={image.alt}
//               fill
//               className="object-cover transition-transform duration-500 group-hover:scale-110"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
//               <div className="absolute bottom-4 left-4 right-4">
//                 <h3 className="text-white font-semibold text-lg">{image.title}</h3>
//                 <p className="text-white/80 text-sm line-clamp-2">{image.description}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {isLightboxOpen && (
//         <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
//           <div className="relative w-full h-full max-w-6xl max-h-[90vh] mx-auto flex flex-col items-center justify-center p-4">
//             <button
//               className="absolute top-4 right-4 text-white bg-black/50 p-2 rounded-full hover:bg-black/70 z-10"
//               onClick={() => setIsLightboxOpen(false)}
//             >
//               <X size={24} />
//             </button>

//             <button
//               className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black/50 p-2 rounded-full hover:bg-black/70 z-10"
//               onClick={() => navigateGallery(-1)}
//             >
//               <ChevronLeft size={28} />
//             </button>

//             <button
//               className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black/50 p-2 rounded-full hover:bg-black/70 z-10"
//               onClick={() => navigateGallery(1)}
//             >
//               <ChevronRight size={28} />
//             </button>

//             <div className={`relative w-full ${showDetails ? 'h-full scale-75' : ' h-full'} flex items-center justify-center transition-all duration-300`}>
//               <Image
//                 src={images[activeIndex].src}
//                 alt={images[activeIndex].alt}
//                 className="object-contain max-h-full"
//                 fill
//               />
//             </div>

//             <div
//   className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white transition-all duration-300 ${showDetails ? 'h-1/2 md:h-1/3 overflow-y-auto custom-scrollbar' : 'max-h-32'}`}
// >
//               <h3 className="text-xl md:text-2xl font-bold mb-2">{images[activeIndex].title}</h3>
//               <p className="text-sm md:text-base">{images[activeIndex].description}</p>

//               {/* Detailed information section */}
//               {showDetails && (
//                 <div className="mt-4 animate-fadeIn">
//                   {images[activeIndex].extendedDetails.map((paragraph, index) => (
//                     <p key={index} className="text-white/90 leading-relaxed mb-2">
//                       {paragraph}
//                     </p>
//                   ))}
//                 </div>
//               )}

//               {/* Button to toggle details if not showing them */}
//               {!showDetails && (
//                 <button
//                   className="mt-3 underline text-orange-400 hover:text-orange-300 text-sm transition-colors"
//                   onClick={toggleDetails}
//                 >
//                   Learn more about this place
//                 </button>
//               )}

//               {/* Button to hide details if showing them */}
//               {showDetails && (
//                 <button
//                   className="mt-3 underline text-orange-400 hover:text-orange-300 text-sm transition-colors"
//                   onClick={toggleDetails}
//                 >
//                   Show less
//                 </button>
//               )}
//             </div>

//             <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
//               {activeIndex + 1} / {images.length}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ImageGallery;

// import React, { useState } from "react";
// import Image from "next/image";
// import { FaArrowRightLong } from "react-icons/fa6";

// // Sample image data (replace with your actual image imports)
// const images = [
//   {
//     id: 1,
//     src: "/assets/images/neelkanth-mahadev-temple.jpg",
//     alt: "Neelkanth Mahadev Temple",
//     title: "Neelkanth Mahadev Temple",
//     description:
//       "Ancient temple dedicated to Lord Shiva, nestled in the Garhwal hills.",
//     details: `This temple is situated at 1325 meters height and 31 kms far from Rishikesh. Neelkant Mahadev is Temple of Lord Shiva. According to legends Lord Shiva came here for meditation when he consumed poison during the sea churning. Lord Shiva's throat became blue colored due to the poison so he is known as a NeelKanth (Blue throated)

//     Neelkanth Mahadev Temple is a prominent Hindu temple located near Rishikesh in the state of Uttarakhand, India. Situated amidst the picturesque backdrop of the Himalayas, the temple is dedicated to Lord Shiva, one of the major deities in Hinduism.

//     The temple is named after Lord Shiva's mythical form, Neelkanth, which means "Blue Throat" in Sanskrit. According to Hindu mythology, during the churning of the cosmic ocean by gods and demons to obtain the elixir of immortality, Lord Shiva consumed the poison that emerged, turning his throat blue. The temple commemorates this legend and is considered a sacred site by devotees.`,
//   },
//   {
//     id: 2,
//     src: "/assets/images/ashram-building.jpg",
//     alt: "Ashram Building",
//     title: "Parmarth Niketan Ashram",
//     description:
//       "One of the largest ashrams in Rishikesh, known for its Ganga Aarti ceremony.",
//     details: `The Beatles Ashram, also known as Maharishi Mahesh Yogi Ashram, is a historic site located in Rishikesh, Uttarakhand, India. This ashram gained international fame when the renowned English rock band, The Beatles, stayed there in 1968 to study Transcendental Meditation under the guidance of Maharishi Mahesh Yogi.

//       During their stay at the ashram, The Beatles composed numerous songs, which later appeared on their iconic "White Album." The tranquil surroundings of the ashram, nestled in the forests near the Ganges River, provided an inspiring backdrop for their creative pursuits.`,
//   },
//   {
//     id: 3,
//     src: "/assets/images/about-img.jpg",
//     alt: "Triveni Ghat",
//     title: "Triveni Ghat",
//     description: "Sacred bathing spot where three holy rivers meet.",
//     details: `Triveni Ghat is a revered bathing ghat (riverbank) situated in the holy city of Rishikesh, Uttarakhand, India. It is one of the most sacred spots along the banks of the Ganges River and holds immense religious significance for Hindus.

//       The name "Triveni" signifies the confluence of three sacred rivers: the Ganges, Yamuna, and Saraswati. According to Hindu mythology, taking a dip at Triveni Ghat is believed to cleanse one's sins and purify the soul. It is considered a holy site for performing rituals, offering prayers, and conducting religious ceremonies.

//       Triveni Ghat is bustling with activity and attracts devotees, sadhus (holy men), and pilgrims who gather here to take part in the evening aarti (prayer ceremony)`,
//   },
//   {
//     id: 4,
//     src: "/assets/images/Tera-Manzil-Temple.jpg",
//     alt: "Tera Manzil Temple",
//     title: "Trimbakeshwar Temple",
//     description:
//       "The 13-story temple complex also known as Tera Manzil Temple.",
//     details: `I apologize, but I couldn't find any information about a specific "Tera Manzil Temple" in Rishikesh or any other location. It's possible that the temple you mentioned may have a different name or is not widely known. Rishikesh is home to several temples, ashrams, and spiritual centers, each with its own unique significance. If you have any other queries or if there is another topic I can assist you with, please let me know.`,
//   },
//   {
//     id: 5,
//     src: "/assets/images/yoga.jpg",
//     alt: "Yoga Practice",
//     title: "Yoga by the Ganges",
//     description:
//       "Rishikesh is known worldwide as the Yoga Capital of the World.",
//     details:
//       "Rishikesh attracts yoga enthusiasts from across the globe with its perfect setting for spiritual practice. The tradition of yoga has been preserved here for centuries, with numerous schools offering courses from beginner to advanced levels. The serene banks of the Ganges provide an ideal backdrop for meditation and pranayama. Many world-renowned yoga teachers have established their ashrams in this holy city.",
//   },
// ];

// const ImageGallery = () => {
//   // First image is active by default
//   const [activeImageIndex, setActiveImageIndex] = useState(0);

//   return (
//     <section className="Image-Gallery py-12">
//       <div className="container mx-auto px-4">
//         <h2 className="text-4xl md:text-5xl font-bold mb-6">
//           <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-800 to-orange-500">
//             Explore Rishikesh
//           </span>
//         </h2>

//         <div className="flex gap-4 lg:flex-row flex-col p-6 border rounded-xl w-full">

//         {/* Tabs */}
//         <div className="lg:w-1/2 w-full rounded-xl shadow-md border flex lg:flex-col flex-row flex-wrap lg:justify-between gap-4 p-4">
//           {images.map((image, index) => (
//             <div
//               key={image.id}
//               onClick={() => setActiveImageIndex(index)}
//               className={`flex items-center justify-between cursor-pointer rounded-full transition-colors duration-200 border p-4 relative ${
//                 index === activeImageIndex
//                   ? "bg-orange-50 border-main-color"
//                   : "border-prime"
//               }`}
//             >
//               <h3
//                 className={`font-semibold ${
//                   index === activeImageIndex ? "text-main-color" : "text-prime"
//                 }`}
//               >
//                 {image.title}
//               </h3>
//               {/* Arrow Icon */}
//               {/* { index === activeImageIndex && <div className="w-5 h-5 bg-white border-main-color border absolute right-7 rounded-full"></div>} */}
//               { index === activeImageIndex &&  <FaArrowRightLong size={20} className={`lg:block hidden text-main-color relative z-10`}/> }

//             </div>
//           ))}
//         </div>

//         <div className="w-full  bg-white rounded-xl shadow-md overflow-hidden border p-4 ">
//           <div className="h-full">
//             {/* Image section */}
//             <div className="lg:float-left lg:w-1/2 w-full">
//               <div className="relative rounded-2xl overflow-hidden h-64 md:h-80 lg:h-96 lg:mr-6">
//                 <Image
//                   src={images[activeImageIndex].src}
//                   alt={images[activeImageIndex].alt}
//                   fill
//                   className="object-cover w-full"
//                 />
//                 <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
//                   <h2 className="text-white text-2xl font-bold">
//                     {images[activeImageIndex].title}
//                   </h2>
//                 </div>
//               </div>
//             </div>
//             {/* Details section */}
//             <div className="lg:mt-0 mt-4">
//               <p className="text-gray-700 leading-relaxed whitespace-pre-line ">
//                 {images[activeImageIndex].details}
//               </p>
//             </div>
//           </div>
//         </div>

//         </div>

//       </div>
//     </section>
//   );
// };

// export default ImageGallery;

import React, { useState } from "react";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

// Sample image data (replace with your actual image imports)
const images = [
  {
    id: 1,
    src: "/assets/images/neelkanth-mahadev-temple.jpg",
    alt: "Neelkanth Mahadev Temple",
    title: "Neelkanth Mahadev Temple",
    description:
      "Ancient temple dedicated to Lord Shiva, nestled in the Garhwal hills.",
    details: `This temple is situated at 1325 meters height and 31 kms far from Rishikesh. Neelkant Mahadev is Temple of Lord Shiva. According to legends Lord Shiva came here for meditation when he consumed poison during the sea churning. Lord Shiva's throat became blue colored due to the poison so he is known as a NeelKanth (Blue throated)

    Neelkanth Mahadev Temple is a prominent Hindu temple located near Rishikesh in the state of Uttarakhand, India. Situated amidst the picturesque backdrop of the Himalayas, the temple is dedicated to Lord Shiva, one of the major deities in Hinduism.

    The temple is named after Lord Shiva's mythical form, Neelkanth, which means "Blue Throat" in Sanskrit. According to Hindu mythology, during the churning of the cosmic ocean by gods and demons to obtain the elixir of immortality, Lord Shiva consumed the poison that emerged, turning his throat blue. The temple commemorates this legend and is considered a sacred site by devotees.`,
  },
  {
    id: 2,
    src: "/assets/images/ashram-building.jpg",
    alt: "Ashram Building",
    title: "Parmarth Niketan Ashram",
    description:
      "One of the largest ashrams in Rishikesh, known for its Ganga Aarti ceremony.",
    details: `The Beatles Ashram, also known as Maharishi Mahesh Yogi Ashram, is a historic site located in Rishikesh, Uttarakhand, India. This ashram gained international fame when the renowned English rock band, The Beatles, stayed there in 1968 to study Transcendental Meditation under the guidance of Maharishi Mahesh Yogi. 

      During their stay at the ashram, The Beatles composed numerous songs, which later appeared on their iconic "White Album." The tranquil surroundings of the ashram, nestled in the forests near the Ganges River, provided an inspiring backdrop for their creative pursuits.`,
  },
  {
    id: 3,
    src: "/assets/images/about-img.jpg",
    alt: "Triveni Ghat",
    title: "Triveni Ghat",
    description: "Sacred bathing spot where three holy rivers meet.",
    details: `Triveni Ghat is a revered bathing ghat (riverbank) situated in the holy city of Rishikesh, Uttarakhand, India. It is one of the most sacred spots along the banks of the Ganges River and holds immense religious significance for Hindus.
      
      The name "Triveni" signifies the confluence of three sacred rivers: the Ganges, Yamuna, and Saraswati. According to Hindu mythology, taking a dip at Triveni Ghat is believed to cleanse one's sins and purify the soul. It is considered a holy site for performing rituals, offering prayers, and conducting religious ceremonies.

      Triveni Ghat is bustling with activity and attracts devotees, sadhus (holy men), and pilgrims who gather here to take part in the evening aarti (prayer ceremony)`,
  },
  {
    id: 4,
    src: "/assets/images/Tera-Manzil-Temple.jpg",
    alt: "Tera Manzil Temple",
    title: "Trimbakeshwar Temple",
    description:
      "The 13-story temple complex also known as Tera Manzil Temple.",
    details: `I apologize, but I couldn't find any information about a specific "Tera Manzil Temple" in Rishikesh or any other location. It's possible that the temple you mentioned may have a different name or is not widely known. Rishikesh is home to several temples, ashrams, and spiritual centers, each with its own unique significance. If you have any other queries or if there is another topic I can assist you with, please let me know.`,
  },
  {
    id: 5,
    src: "/assets/images/yoga.jpg",
    alt: "Yoga Practice",
    title: "Yoga by the Ganges",
    description:
      "Rishikesh is known worldwide as the Yoga Capital of the World.",
    details: [
      {
        title:
          "The Tradition of Yoga in Rishikesh: A Journey through Ancient Wisdom",
        subpoints: [
          "Historical background of yoga in Rishikesh",
          "Influence of renowned gurus and spiritual masters",
          "Preservation of traditional yoga practices",
        ],
      },
      {
        title: "Yoga Ashrams and Retreats: Sanctuaries for Spiritual Growth",
        subpoints: [
          "Overview of popular yoga ashrams and retreat centers in Rishikesh",
          "Different styles and teachings offered by various institutions",
          "Immersive experiences and daily routines in ashrams",
        ],
      },
      {
        title: "Hatha Yoga and Asana Practice: Nurturing the Body and Mind",
        subpoints: [
          "Understanding Hatha Yoga and its significance in Rishikesh",
          "Detailed exploration of yoga asanas (postures) and their benefits",
          "Guidance on alignment, breath control, and mindful movement",
        ],
      },
    ],
  },
];

const ImageGallery = () => {
  // First image is active by default
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const renderDetails = (details) => {
    if (Array.isArray(details)) {
      return (
        <ul className="list-decimal lg:pl-0 pl-6">
          {details.map((item, index) => (
            <li key={index} className="">
              <b>{item.title}</b>
              {item.subpoints && (
                <ul className="list-disc pl-4">
                  {item.subpoints.map((subpoint, subIndex) => (
                    <li key={subIndex}>{subpoint}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      );
    } else {
      return details; // It's a simple string, render it directly
    }
  };

  return (
    <section className="Image-Gallery py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-5xl md:text-4xl font-semibold mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-800 to-orange-500">
            Explore Rishikesh
          </span>
        </h2>

        <div className="flex gap-4 lg:flex-row flex-col md:p-6 p-4 border rounded-xl w-full">
          {/* Tabs */}
          <div className="lg:w-1/2 w-full rounded-xl shadow-md border flex lg:flex-col flex-row flex-wrap lg:justify-between gap-4 p-4">
            {images.map((image, index) => (
              <div
                key={image.id}
                onClick={() => setActiveImageIndex(index)}
                className={`flex items-center justify-between cursor-pointer rounded-xl transition-colors duration-200 border lg:p-4 p-2.5 relative ${
                  index === activeImageIndex
                    ? "bg-orange-50 border-main-color"
                    : "border-prime"
                }`}
              >
                <h3
                  className={`font-semibold ${
                    index === activeImageIndex
                      ? "text-main-color"
                      : "text-prime"
                  }`}
                >
                  {image.title}
                </h3>
                {/* Arrow Icon */}
                {index === activeImageIndex && (
                  <FaArrowRightLong
                    size={20}
                    className={`lg:block hidden text-main-color relative z-10`}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="w-full  bg-white rounded-xl shadow-md overflow-hidden border p-4 ">
            <div className="h-full">
              {/* Image section */}
              <div className="lg:float-left lg:w-1/2 w-full">
                <div className="relative rounded-2xl overflow-hidden h-64 md:h-80 lg:h-96 lg:mr-6">
                  <Image
                    src={images[activeImageIndex].src}
                    alt={images[activeImageIndex].alt}
                    fill
                    className="object-cover w-full"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                    <h2 className="text-white text-2xl font-bold">
                      {images[activeImageIndex].title}
                    </h2>
                  </div>
                </div>
              </div>
              {/* Details section */}
              <div className="lg:mt-0 mt-4">
                <div className="text-gray-700 leading-relaxed whitespace-pre-line ">
                  {renderDetails(images[activeImageIndex].details)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
