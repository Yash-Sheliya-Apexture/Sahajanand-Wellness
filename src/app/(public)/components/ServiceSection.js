// import React from "react";
// import { ArrowRight, Play } from "lucide-react";
// import Image from "next/image";
// import service_img1 from "../../../../public/assets/images/service-img.webp";
// import service_img2 from "../../../../public/assets/images/service-img-2.jpg";

// const AshramWebsite = () => {
//   return (
//     <div className="min-h-screen bg-amber-50 py-12">
//       {/* Hero Section */}
//       <div className="container mx-auto px-4">
//         <div>
//           <h1 className="text-4xl md:text-5xl font-bold text-center text-orange-800 mb-8">
//             Sahajanand Wellness <span className="text-orange-500">Trust</span>
//           </h1>
//           <p className="mt-4 lg:text-xl text-lg text-gray-700 text-center">
//             Sahajanand Wellness Trust is a religious trust registered in
//             Uttarakhand. This trust is mainly dedicated to religious,
//             educational, and health related activities in and around Rishikesh.
//             Trust maintains dharmshala, gaushala, Veda-pathshala, yogshala,
//             yagyashala, annakshetra (free food for saints and needy), health
//             center, and conducts daily Ganga Arti. All the activities of the
//             trust are run by donations.
//           </p>
//         </div>

//         {/* Featured Sections with Parallax Effect */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
//           {/* Left Card */}
//           <div className="rounded-2xl overflow-hidden bg-white shadow-xl">
//             <div className="relative overflow-hidden">
//               <div className="">
//                 <Image
//                   src={service_img1} // Replace with your image URL
//                   alt="Ashram"
//                   className="w-full h-96 object-cover"
//                 />
//               </div>
//               <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-orange-500 rounded-full p-3 z-20 text-white shadow-lg hover:bg-orange-600 transition duration-300">
//                 <Play size={24} />
//               </button>
//             </div>
//             <div className="p-8">
//               <h2 className="text-2xl font-bold mb-4 text-orange-800">
//                 Serving Devotees and{" "}
//                 <span className="text-orange-500">
//                   Communities in Rishikesh
//                 </span>
//               </h2>
//               <p className="text-gray-700 mb-6">
//                 Sahajanand Wellness Trust, a registered religious trust in
//                 Uttarakhand, is dedicated to religious, educational, and
//                 health-related activities in Rishikesh.
//               </p>
//               <a
//                 href="#"
//                 className="inline-flex items-center text-orange-500 font-medium hover:text-orange-700 transition duration-300"
//               >
//                 Learn more about our mission{" "}
//                 <ArrowRight className="ml-2" size={16} />
//               </a>
//             </div>
//           </div>

//           {/* Decorative Elements */}
//         <div className="flex justify-center items-center lg:hidden">
//           <div className="h-px w-32 bg-orange-300"></div>
//           <div className="mx-4 text-orange-500 text-2xl">🕉️</div>
//           <div className="h-px w-32 bg-orange-300"></div>
//         </div>

//           {/* Right Card */}
//           <div className="rounded-2xl overflow-hidden shadow-xl bg-white ">
//             <div className="p-8 bg-white">
//               <h2 className="text-2xl font-bold mb-4 text-orange-800">
//                 Enhancing Serenity and{" "}
//                 <span className="text-orange-500">Charity Work</span>
//               </h2>
//               <p className="text-gray-700 mb-6">
//                 At our ashram, we regretfully cannot offer room service. Meals
//                 are exclusively provided in the langar hall for breakfast,
//                 lunch, and dinner. We kindly request visitors to help maintain
//                 the tranquil environment of the ashram.
//               </p>
//               <a
//                 href="#"
//                 className="inline-flex items-center text-orange-500 font-medium hover:text-orange-700 transition duration-300"
//               >
//                 Ashram guidelines <ArrowRight className="ml-2" size={16} />
//               </a>
//             </div>
//             <div className="relative overflow-hidden">
//               <div className="">
//                 <Image
//                   src={service_img2} // Replace with your image URL
//                   alt="Ashram"
//                   className="w-full h-96 object-cover"
//                 />
//               </div>

//               <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-orange-500 rounded-full p-3 z-20 text-white shadow-lg hover:bg-orange-600 transition duration-300">
//                 <Play size={24} />
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Additional Features */}
//         {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
//           <div className="bg-white p-6 rounded-xl shadow-lg text-center">
//             <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
//               <span className="text-orange-500 text-2xl">🧘</span>
//             </div>
//             <h3 className="text-xl font-semibold text-orange-800 mb-2">Spiritual Practices</h3>
//             <p className="text-gray-600">Daily meditation, yoga, and spiritual discourses to nourish the soul.</p>
//           </div>

//           <div className="bg-white p-6 rounded-xl shadow-lg text-center">
//             <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
//               <span className="text-orange-500 text-2xl">🙏</span>
//             </div>
//             <h3 className="text-xl font-semibold text-orange-800 mb-2">Community Service</h3>
//             <p className="text-gray-600">Engaging in seva activities that benefit the local Rishikesh community.</p>
//           </div>

//           <div className="bg-white p-6 rounded-xl shadow-lg text-center">
//             <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
//               <span className="text-orange-500 text-2xl">🍲</span>
//             </div>
//             <h3 className="text-xl font-semibold text-orange-800 mb-2">Langar Services</h3>
//             <p className="text-gray-600">Nutritious sattvic meals served with love in our community dining hall.</p>
//           </div>
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default AshramWebsite;

// import React from "react";
// import { ArrowRight, Play, Leaf, Heart, Sun } from "lucide-react";
// import Image from "next/image";
// import service_img1 from "../../../../public/assets/images/service-img.webp";
// import service_img2 from "../../../../public/assets/images/service-img-2.jpg";

// const AshramWebsite = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 py-12 relative">
//       {/* Decorative elements */}
//       <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
//         <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-orange-100 opacity-50"></div>
//         <div className="absolute bottom-40 right-20 w-48 h-48 rounded-full bg-orange-100 opacity-50"></div>
//         <div className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-orange-100 opacity-30"></div>
//       </div>

//       {/* Hero Section */}
//       <div className="container mx-auto px-4 relative">
//         <div className="relative z-10 max-w-4xl mx-auto">
//           <div className="flex justify-center mb-6">
//             <div className="h-px w-16 bg-orange-300 self-center"></div>
//             <div className="mx-4 text-orange-500 text-3xl">🕉️</div>
//             <div className="h-px w-16 bg-orange-300 self-center"></div>
//           </div>

//           <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
//             <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-800 to-orange-500">
//               Sahajanand Wellness Trust
//             </span>
//           </h1>

//           <p className="mt-4 lg:text-xl text-lg text-gray-700 text-center backdrop-blur-sm bg-white/30 p-6 rounded-lg shadow-sm">
//             Sahajanand Wellness Trust is a religious trust registered in
//             Uttarakhand. This trust is mainly dedicated to religious,
//             educational, and health related activities in and around Rishikesh.
//             Trust maintains dharmshala, gaushala, Veda-pathshala, yogshala,
//             yagyashala, annakshetra (free food for saints and needy), health
//             center, and conducts daily Ganga Arti. All the activities of the
//             trust are run by donations.
//           </p>
//         </div>

//         {/* Featured Sections with New Card Design */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
//           {/* Left Card */}
//           <div className="rounded-3xl overflow-hidden bg-white shadow-lg border border-orange-100 transform transition duration-500 ">
//             <div className="relative overflow-hidden">
//               <div className="h-96">
//                 <Image
//                   src={service_img1}
//                   alt="Ashram"
//                   className="w-full h-full object-cover transition duration-700 hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
//               </div>

//               {/* Play Button */}
//               <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-orange-500 rounded-full p-3 z-20 text-white shadow-lg hover:bg-orange-600 transition duration-300 hover:scale-110">
//                 <Play size={24} />
//               </button>
//               <div className="absolute top-4 left-4 bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
//                 <div className="flex items-center">
//                   <Leaf size={14} className="mr-1" />
//                   Featured
//                 </div>
//               </div>
//             </div>
//             <div className="p-8">
//               <h2 className="text-2xl font-bold mb-4">
//                 <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-800 to-orange-500">
//                   Serving Devotees and Communities in Rishikesh
//                 </span>
//               </h2>
//               <p className="text-gray-700 mb-6">
//                 Sahajanand Wellness Trust, a registered religious trust in
//                 Uttarakhand, is dedicated to religious, educational, and
//                 health-related activities in Rishikesh.
//               </p>
//               <a
//                 href="#"
//                 className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 text-orange-700 font-medium hover:bg-orange-200 transition duration-300"
//               >
//                 Learn more about our mission{" "}
//                 <ArrowRight className="ml-2" size={16} />
//               </a>
//             </div>
//           </div>

//           {/* Decorative Elements */}
//           <div className="flex justify-center items-center lg:hidden my-4">
//             <div className="h-px w-32 bg-orange-300"></div>
//             <div className="mx-4 text-orange-500 text-2xl">🕉️</div>
//             <div className="h-px w-32 bg-orange-300"></div>
//           </div>

//           {/* Right Card */}
//           <div className="rounded-3xl overflow-hidden shadow-lg bg-white border border-orange-100 transform transition duration-500 ">
//             <div className="p-8 bg-white">
//               <div className="flex items-center mb-4">
//                 <div className="h-8 w-1 bg-gradient-to-b from-orange-800 to-orange-500 rounded-full mr-3"></div>
//                 <h2 className="text-2xl font-bold">
//                   <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-800 to-orange-500">
//                     Enhancing Serenity and Charity Work
//                   </span>
//                 </h2>
//               </div>
//               <p className="text-gray-700 mb-6">
//                 At our ashram, we regretfully cannot offer room service. Meals
//                 are exclusively provided in the langar hall for breakfast,
//                 lunch, and dinner. We kindly request visitors to help maintain
//                 the tranquil environment of the ashram.
//               </p>
//               <a
//                 href="#"
//                 className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 text-orange-700 font-medium hover:bg-orange-200 transition duration-300"
//               >
//                 Ashram guidelines <ArrowRight className="ml-2" size={16} />
//               </a>
//             </div>
//             <div className="relative overflow-hidden">
//               <div className="h-96">
//                 <Image
//                   src={service_img2}
//                   alt="Ashram"
//                   className="w-full h-full object-cover transition duration-700 hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
//               </div>

//               {/* Play Button */}
//               <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-orange-500 rounded-full p-3 z-20 text-white shadow-lg hover:bg-orange-600 transition duration-300 hover:scale-110">
//                 <Play size={24} />
//               </button>
//               <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
//                 <div className="flex items-center">
//                   <Heart size={14} className="mr-1" />
//                   Community
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Footer decorative element */}
//         <div className="flex justify-center mt-16">
//           <div className="h-px w-24 bg-orange-300 self-center"></div>
//           <div className="mx-4">
//             <Sun className="text-orange-400" size={24} />
//           </div>
//           <div className="h-px w-24 bg-orange-300 self-center"></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AshramWebsite;

"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { FaArrowRight, FaPlay, FaSun } from "react-icons/fa"; // React Icons
import { LuHeart, LuLeaf } from "react-icons/lu";
import Image from "next/image";
import service_img1 from "../../../../public/assets/images/service-img.webp";
import service_img2 from "../../../../public/assets/images/service-img-2.jpg";

const ServiceSection = () => {
  const [isVideoOpen, setVideoOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("about");
  const videoModalRef = useRef(null);
  const videoUrl1 =
    "https://www.youtube.com/embed/KU45jWBn57Y?feature=oembed&autoplay=1&mute=0&loop=0&controls=1&start=0&end="; // Corrected URL
  const videoUrl2 =
    "https://www.youtube.com/embed/V2CrSWlqkgA?autoplay=1&mute=0&loop=0&controls=1"; // Corrected URL
  const [currentVideoUrl, setCurrentVideoUrl] = useState(""); // To store the currently active video URL

  const openVideoModal = (url) => {
    setCurrentVideoUrl(url);
    setVideoOpen(true);
  };

  const closeVideoModal = () => {
    setVideoOpen(false);
    setCurrentVideoUrl(""); // Reset the URL when closing
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        videoModalRef.current &&
        !videoModalRef.current.contains(event.target)
      ) {
        closeVideoModal();
      }
    }

    if (isVideoOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto";
    };
  }, [isVideoOpen]);

  return (
    <div className="Service-Section bg-gradient-to-b from-amber-50 to-orange-50 py-16 relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-orange-100 opacity-50"></div>
        <div className="absolute bottom-40 right-20 w-48 h-48 rounded-full bg-orange-100 opacity-50"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-orange-100 opacity-30"></div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 relative">
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="h-px w-16 bg-orange-300 self-center"></div>
            <div className="mx-4 text-orange-500 text-3xl">🕉️</div>
            <div className="h-px w-16 bg-orange-300 self-center"></div>
          </div>

          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-3xl lg:text-5xl md:text-4xl font-bold text-center mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-800 to-orange-500">
                Welcome to Sahajanand Wellness Trust
              </span>
            </h1>
            <p className="lg:text-xl text-lg text-gray-700 text-center">
              Sahajanand Wellness Trust is a religious trust registered in
              Uttarakhand. This trust is mainly dedicated to religious,
              educational, and health related activities in and around
              Rishikesh. Trust maintains dharmshala, gaushala, Veda-pathshala,
              yogshala, yagyashala, annakshetra (free food for saints and
              needy), health center, and conducts daily Ganga Arti. All the
              activities of the trust are run by donations.
            </p>

            <div className="flex justify-center mt-8">
              <div className="h-1 w-80 bg-gradient-to-r from-transparent via-orange-400 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Featured Sections with New Card Design */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
          {/* Left Card */}
          <div className="rounded-3xl overflow-hidden bg-white shadow-lg border border-orange-100 transform transition duration-500 ">
            <div className="relative overflow-hidden">
              <div className="h-96">
                <Image
                  src={service_img1}
                  alt="Ashram"
                  className="w-full h-full object-cover transition duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>

              {/* Play button with ripple effect */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative" onClick={() => openVideoModal(videoUrl1)}>
                  <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-30"></div>
                  <div className="relative bg-white p-5 rounded-full cursor-pointer transition-all duration-300 hover:scale-110 shadow-lg z-10">
                    <FaPlay className="text-main-color" />
                  </div>
                </div>
              </div>
              <div className="absolute top-4 left-4 bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                <div className="flex items-center">
                  <LuLeaf size={14} className="mr-1" />
                  Featured
                </div>
              </div>
            </div>
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-800 to-orange-500">
                  Serving Devotees and Communities in Rishikesh
                </span>
              </h2>
              <p className="text-gray-700 text-lg mb-6">
                Sahajanand Wellness Trust, a registered religious trust in
                Uttarakhand, is dedicated to religious, educational, and
                health-related activities in Rishikesh.
              </p>
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 text-orange-700 font-medium hover:bg-orange-200 transition duration-300"
              >
                Learn more about our mission{" "}
                <FaArrowRight className="ml-2" size={16} />
              </a>
            </div>
          </div>

          {/* Decorative Elements */}
          {/* <div className="flex justify-center items-center lg:hidden my-4">
                        <div className="h-px w-32 bg-orange-300"></div>
                        <div className="mx-4 text-orange-500 text-2xl">🕉️</div>
                        <div className="h-px w-32 bg-orange-300"></div>
                    </div> */}

          {/* Right Card */}
          <div className="rounded-3xl overflow-hidden shadow-lg bg-white border border-orange-100 transform transition duration-500 ">
            <div className="p-8 bg-white">
              <div className="flex items-center mb-4">
                <div className="h-8 w-1 bg-gradient-to-b from-orange-800 to-orange-500 rounded-full mr-3"></div>
                <h2 className="text-2xl font-bold">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-800 to-orange-500">
                    Enhancing Serenity and Charity Work
                  </span>
                </h2>
              </div>
              <p className="text-gray-700 text-lg mb-6">
                At our ashram, we regretfully cannot offer room service. Meals
                are exclusively provided in the langar hall for breakfast,
                lunch, and dinner. We kindly request visitors to help maintain
                the tranquil environment of the ashram.
              </p>
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 text-orange-700 font-medium hover:bg-orange-200 transition duration-300"
              >
                Ashram guidelines <FaArrowRight className="ml-2" size={16} />
              </a>
            </div>
            <div className="relative overflow-hidden">
              <div className="h-96">
                <Image
                  src={service_img2}
                  alt="Ashram"
                  className="w-full h-full object-cover transition duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>

              {/* Play button with ripple effect */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative" onClick={() => openVideoModal(videoUrl2)}>
                  <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-30"></div>
                  <div className="relative bg-white p-5 rounded-full cursor-pointer transition-all duration-300 hover:scale-110 shadow-lg z-10">
                    <FaPlay className="text-main-color" />
                  </div>
                </div>
              </div>

              <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                <div className="flex items-center">
                  <LuHeart size={14} className="mr-1" />
                  Community
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer decorative element */}
        <div className="flex justify-center mt-8">
          <div className="h-px w-24 bg-orange-300 self-center"></div>
          <div className="mx-4">
            <FaSun className="text-orange-400" size={24} />
          </div>
          <div className="h-px w-24 bg-orange-300 self-center"></div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="relative w-3/5 max-w-4xl" ref={videoModalRef}>
            <iframe
              width="100%"
              height="500"
              src={currentVideoUrl}
              title="Video"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceSection;
