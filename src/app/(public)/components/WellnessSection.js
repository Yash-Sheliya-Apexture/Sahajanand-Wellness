// import React from "react";
// import Image from "next/image";
// import img1 from "../../../../public/assets/images/wellness-img-1.jpg";
// import img2 from "../../../../public/assets/images/wellness-img-2.jpg";
// import img3 from "../../../../public/assets/images/wellness-img-3.jpg";

// const WellnessSection = () => {
//   const wellnessCardsData = [
//     {
//       id: 1,
//       title: "Wellness",
//       description:
//         "The ability to be in the present moment is a major component of mental wellness. Take care of your body, it's the only place you have to live. You can't stop the waves, but you can learn to surf. Wellness is a connection of paths: knowledge and action.",
//       imageSrc: img1,
//       imageAlt: "Wellness Image",
//       icon: (
//         <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//           <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
//         </svg>
//       ),
//     },
//     {
//       id: 2,
//       title: "Food Place",
//       description:
//         "The Sahajanand Wellness provide a pure vegetarian food because good food make your health fit and fine . A crust eaten in peace is better than a banquet partaken in anxiety.",
//       imageSrc: img2,
//       imageAlt: "Food Place Image",
//       icon: (
//         <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//           <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
//           <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
//           <line x1="6" y1="1" x2="6" y2="4"></line>
//           <line x1="10" y1="1" x2="10" y2="4"></line>
//           <line x1="14" y1="1" x2="14" y2="4"></line>
//         </svg>
//       ),
//     },
//     {
//       id: 3,
//       title: "Ganga Arti",
//       description:
//         "By this you will get the same result as taking a bath in the Ganges. Om Namo Gangayai Vishwarupini Narayani Namo Namah. Om Jai Gange Mata, Mother Jai Gange Mata. Om Jai Gange Mata, Mother Jai Gange Mata.",
//       imageSrc: img3,
//       imageAlt: "Ganga Arti Image",
//       icon: (
//         <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//           <circle cx="12" cy="12" r="5"></circle>
//           <line x1="12" y1="1" x2="12" y2="3"></line>
//           <line x1="12" y1="21" x2="12" y2="23"></line>
//           <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
//           <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
//           <line x1="1" y1="12" x2="3" y2="12"></line>
//           <line x1="21" y1="12" x2="23" y2="12"></line>
//           <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
//           <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
//         </svg>
//       ),
//     },
//   ];

//   return (
//     <section className="wellness-section py-24 relative overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">

//       <div className="absolute inset-0 opacity-20">
//         <svg
//           className="absolute bottom-0 left-0"
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 1440 320"
//         >
//           <path
//             fill="#f97316" // Or any color from your gradient, adjust opacity for subtle effect
//             fillOpacity="0.3"
//             d="M0,96L48,112C96,128,192,160,288,138.7C384,117,480,43,576,37.3C672,32,768,96,864,112C960,128,1056,96,1152,96C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
//           ></path>
//         </svg>
//       </div>

//       <div className="container mx-auto px-4 relative z-10">
//         {/* Heading with ornamental elements */}
//         <div className="max-w-5xl mx-auto text-center">

//           <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-800 relative inline-block">
//             <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-800 via-orange-500 to-amber-500">
//               The Sahajanand Wellness
//             </span>

//           </h1>

//           <p className="lg:text-xl text-lg text-gray-700 text-center leading-relaxed max-w-3xl mx-auto">
//             Purani Shree Vishnu Prakash Das Ji Swami and Rishiraj Sunil Bhagat
//             Ji conducts short term Saptah frequently on Shrimad Bhagwat, Satsang
//             Jivan, Ramayana and Vachanamrat. Disciples of Swami Ji hailing from
//             different parts of India participate during the occasion.
//           </p>

//           {/* Decorative element below text */}
//           <div className="flex justify-center mt-8">
//             <div className="h-0.5 w-80 bg-gradient-to-r from-transparent via-orange-400 to-transparent"></div>
//           </div>
//         </div>

//         {/* Cards with enhanced design */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
//           {wellnessCardsData.map((card, index) => (
//             <div
//               key={card.id}
//               className="group rounded-2xl overflow-hidden transform transition-all duration-500 hover:-translate-y-4 relative bg-white"
//             >

//               {/* Image with reveal effect */}
//               <div className="relative h-64 overflow-hidden rounded-t-2xl">
//                 <Image
//                   src={card.imageSrc}
//                   alt={card.imageAlt}
//                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                   width={500}
//                   height={300}
//                   style={{
//                     width: "100%",
//                     height: "100%",
//                     objectFit: "cover",
//                   }}
//                   priority
//                 />
//                 {/* Gradient overlay with enhanced colors */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent"></div>

//                 {/* Title positioned on the image */}
//                 <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-transform duration-300 group-hover:translate-y-2">
//                   <div className="flex items-center space-x-3">
//                     <div className="p-2 rounded-full bg-orange-500/80 text-white">
//                       {card.icon}
//                     </div>
//                     <h3 className="text-2xl font-bold">{card.title}</h3>
//                   </div>
//                 </div>
//               </div>

//               {/* Content with animated reveal */}
//               <div className="p-6 relative z-10">
//                 {/* Ornamental element */}
//                 <div className="absolute top-5 right-6 w-10 h-10 border-r-2 border-t-2 border-orange-400 opacity-50"></div>

//                 <p className="text-lg text-gray-700 leading-relaxed mt-2">
//                   {card.description}
//                 </p>
//               </div>

//               {/* Corner decorative elements */}
//               <div className="absolute top-0 left-0 w-16 h-16 overflow-hidden">
//                 <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-400 opacity-70 transform -translate-x-8 -translate-y-8 rotate-45"></div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WellnessSection;

"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import img1 from "../../../../public/assets/images/wellness-img-1.jpg";
import img2 from "../../../../public/assets/images/wellness-img-2.jpg";
import img3 from "../../../../public/assets/images/wellness-img-3.jpg";
import swaminarayan_logo from '../../../../public/assets/images/swaminarayan-logo.png'

const WellnessSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    // Add parallax scrolling effect for decorative elements
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const scrollPosition = window.scrollY;
      const decorElements =
        sectionRef.current.querySelectorAll(".decor-element");

      decorElements.forEach((el, index) => {
        const speed = 0.05 + index * 0.02;
        el.style.transform = `translateY(${scrollPosition * speed}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const wellnessCardsData = [
    {
      id: 1,
      title: "Wellness",
      description:
        "The ability to be in the present moment is a major component of mental wellness. Take care of your body, it's the only place you have to live. You can't stop the waves, but you can learn to surf. Wellness is a connection of paths: knowledge and action.",
      imageSrc: img1,
      imageAlt: "Wellness Image",
      color: "from-emerald-500 to-teal-600",
      symbol: "ॐ", // Om symbol
    },
    {
      id: 2,
      title: "Food Place",
      description:
        "The Sahajanand Wellness provide a pure vegetarian food because good food make your health fit and fine . A crust eaten in peace is better than a banquet partaken in anxiety.",
      imageSrc: img2,
      imageAlt: "Food Place Image",
      color: "from-amber-500 to-orange-600",
      symbol: "अन्न", // Anna (food) in Sanskrit
    },
    {
      id: 3,
      title: "Ganga Arti",
      description:
        "By this you will get the same result as taking a bath in the Ganges. Om Namo Gangayai Vishwarupini Narayani Namo Namah. Om Jai Gange Mata, Mother Jai Gange Mata. Om Jai Gange Mata, Mother Jai Gange Mata.",
      imageSrc: img3,
      imageAlt: "Ganga Arti Image",
      color: "from-blue-500 to-indigo-600",
      symbol: "॥", // Vishrama symbol
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="wellness-section relative py-16 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100"
    >
      <div className="container mx-auto px-4 relative z-10">
        {/* Main heading with ornate styling */}
        <div className="max-w-5xl mx-auto text-center">
         <div className="w-full flex items-center justify-center mb-2">
         <Image 
          src={swaminarayan_logo}
          alt="swaminarayan_logo"
          width={60}
          />
         </div>
          <h1 className="text-3xl lg:text-5xl md:text-4xl font-bold text-center mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-800 to-orange-500">
              The Sahajanand Wellness
            </span>
          </h1>

          <p className="lg:text-xl text-lg text-gray-700 text-center">
            Purani Shree Vishnu Prakash Das Ji Swami and Rishiraj Sunil Bhagat
            Ji conducts short term Saptah frequently on Shrimad Bhagwat, Satsang
            Jivan, Ramayana and Vachanamrat. Disciples of Swami Ji hailing from
            different parts of India participate during the occasion.
          </p>

          <div className="flex justify-center mt-8">
            <div className="h-1 w-80 bg-gradient-to-r from-transparent via-orange-400 to-transparent"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 ">
          {wellnessCardsData.map((card, index) => (
            <div
              key={card.id}
              className="group relative w-full bg-white rounded-2xl shadow-md"
            >
              <div className="relative ">
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br bg-white shadow-md z-20">
                  <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-600">
                    {card.symbol}
                  </span>
                </div>


                <div className="relative h-96 overflow-hidden rounded-t-lg">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-black/10 z-10"></div>
                  <div className="absolute inset-2 border-2 border-white/40 rounded-lg z-10"></div>

                  <Image
                    src={card.imageSrc}
                    alt={card.imageAlt}
                    className="w-full h-full object-cover rounded-t-2xl transition-transform duration-1000 ease-in-out group-hover:scale-110"
                    width={500}
                    height={300}
                    priority
                  />

                  {/* Card Title */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
                    <div className="w-fit px-6 py-2 rounded-full shadow-lg backdrop-blur-sm border border-white/20 bg-gradient-to-r from-white/10 to-white/5">
                      <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white">
                        {card.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* description */}
                <div className="p-6">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WellnessSection;
