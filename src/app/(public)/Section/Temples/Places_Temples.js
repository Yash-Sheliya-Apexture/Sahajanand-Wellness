// import React from "react";
// import Image from "next/image";

// const Places_Temples = () => {
//   return (
//     <section className="Places&Temples pb-16">
//       <div className="container mx-auto px-4">
//         <h1 className="text-3xl lg:text-5xl font-semibold text-center mb-8">
//           <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-800 to-orange-500">
//             Main Temples of Rishikesh
//           </span>
//         </h1>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {/* Temple Card 1 */}
//           <div className="group">
//             <div className="relative h-96 mb-6 overflow-hidden rounded-lg shadow-lg">
//               <Image
//                 src="/assets/images/place-1.png"
//                 alt="Neelkanth Mahadev Temple"
//                 width={500}
//                 height={300}
//                 className="object-cover w-full h-auto"
//               />
//             </div>
//             <h3 className="text-2xl mb-2">
//               Neelkanth Mahadev
//             </h3>
//             <p className="text-gray-700 font-medium">
//               Dedicated to Lord Shiva, this temple is located at the confluence
//               of rivers Pankaja and Madhumati, surrounded by dense forests and
//               mountains.
//             </p>
//           </div>

//           {/* Temple Card 2 */}
//           <div className="group">
//             <div className="relative h-96 mb-6 overflow-hidden rounded-lg shadow-lg">
//               <Image
//                 src="/assets/images/place-2.png"
//                 alt="Triveni Ghat"
//                 width={500}
//                 height={300}
//                 className="object-cover w-full h-auto"
//               />
//             </div>
//             <h3 className="text-2xl mb-2">
//               Triveni Ghat
//             </h3>
//             <p className="text-gray-700">
//               A sacred bathing spot at the confluence of three holy rivers where
//               evening Ganga Aarti is performed with devotion and splendor.
//             </p>
//           </div>

//           {/* Temple Card 3 */}
//           <div className="">
//             <div className="relative h-96 mb-6 overflow-hidden rounded-lg shadow-lg">
//               <Image
//                 src="/assets/images/place-3.png"
//                 alt="Bharat Mandir"
//                 width={800}
//                 height={300}
//                 className="object-cover w-full h-auto"
//               />
//             </div>
//             <h3 className="text-2xl mb-2">
//               Bharat Mandir
//             </h3>
//             <p className="text-gray-700">
//               One of the oldest temples in Rishikesh, dedicated to Lord Vishnu
//               in his incarnation as Lord Hrishikesh, dating back to the 9th
//               century.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Places_Temples;

// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";

// const TemplesOfRishikesh = () => {
//   // State to track which temple popup is open
//   const [popupTemple, setPopupTemple] = useState(null);

//   const temples = [
//     {
//       id: 1,
//       name: "Neelkanth Mahadev",
//       image: "/assets/images/place-1.png",
//       description:
//         "Neelkanth Mahadev Temple, situated at an altitude of 1,330 meters, is a sacred Hindu temple dedicated to Lord Shiva. According to mythology, this is the place where Lord Shiva consumed the poison that emerged during the churning of the ocean (Samudra Manthan), which turned his throat blue. The temple is surrounded by dense forests and offers breathtaking views of the Himalayan ranges. Devotees trek approximately 14 km from Swarg Ashram to reach this spiritual sanctuary, especially during the holy month of Shravan when thousands of pilgrims visit to offer the sacred water of the Ganges to Lord Shiva.",
//     },
//     {
//       id: 2,
//       name: "Triveni Ghat",
//       image: "/assets/images/place-2.png",
//       description:
//         "Triveni Ghat is the most sacred bathing spot in Rishikesh, located at the confluence of three holy rivers - Ganga, Yamuna, and Saraswati. The ghat comes alive during the spectacular Ganga Aarti performed every evening, attracting hundreds of devotees and tourists who witness the priests performing rituals with oil lamps, flowers, and incense. It is believed that taking a dip at this ghat washes away all sins and purifies the soul. The ghat is also famous for the ritual of feeding the fish, as they are considered sacred. Many devotees also perform pind-daan (ancestral rites) at this auspicious spot.",
//     },
//     {
//       id: 3,
//       name: "Bharat Mandir",
//       image: "/assets/images/place-3.png",
//       description:
//         "Bharat Mandir is the oldest and most revered temple in Rishikesh, established by Adi Shankaracharya in the 9th century. The main deity is Lord Vishnu in his incarnation as Hrishikesh, from which the city derives its name. The temple houses a unique Shaligram (a black fossil stone) idol of Lord Vishnu, which is said to have been consecrated by Adi Shankaracharya himself. During Basant Panchami, the temple celebrates its foundation day with great enthusiasm. The temple complex also contains several smaller shrines dedicated to other deities. The ancient architecture and spiritual significance make this temple a must-visit for those exploring the religious heritage of Rishikesh.",
//     },
//   ];

//   // Function to open popup for a temple
//   const openPopup = (templeId) => {
//     setPopupTemple(templeId);
//     // Add a class to prevent background scrolling when popup is open
//     document.body.style.overflow = "hidden";
//   };

//   // Function to close popup
//   const closePopup = () => {
//     setPopupTemple(null);
//     // Re-enable scrolling when popup is closed
//     document.body.style.overflow = "auto";
//   };

//   // Animation variants
//   const cardVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.5,
//       },
//     },
//   };

//   const popupVariants = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: {
//         duration: 0.4,
//         ease: "easeOut",
//       },
//     },
//     exit: {
//       opacity: 0,
//       scale: 0.8,
//       transition: {
//         duration: 0.3,
//       },
//     },
//   };

//   const overlayVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         duration: 0.3,
//       },
//     },
//     exit: {
//       opacity: 0,
//       transition: {
//         duration: 0.3,
//       },
//     },
//   };

//   const staggerContainer = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   return (
//     <section className="bg-gradient-to-b from-amber-50 to-white py-16">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-sm uppercase tracking-wider text-orange-600 font-bold mb-2">
//             Spiritual Journey
//           </h2>
//           <h1 className="text-4xl lg:text-5xl font-bold mb-4">
//             <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-800 to-orange-500">
//               Sacred Temples of Rishikesh
//             </span>
//           </h1>
//           <motion.div
//             className="w-24 h-1 bg-orange-500 mx-auto mb-6"
//             initial={{ width: 0 }}
//             animate={{ width: 96 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//           ></motion.div>
//           <p className="max-w-2xl mx-auto text-gray-600">
//             Discover the ancient and spiritually significant temples that make
//             Rishikesh a divine destination for pilgrims and travelers alike.
//           </p>
//         </motion.div>

//         <motion.div
//           variants={staggerContainer}
//           initial="hidden"
//           animate="visible"
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//         >
//           {temples.map((temple) => (
//             <motion.div
//               key={temple.id}
//               variants={cardVariants}
//               whileHover={{ y: -8 }}
//               className="group bg-white rounded-xl overflow-hidden shadow-md"
//             >
//               <div className="relative h-64 overflow-hidden">
//                 <Image
//                   src={temple.image}
//                   alt={temple.name}
//                   width={500}
//                   height={300}
//                   className="object-cover w-full h-full"
//                 />
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   whileHover={{ opacity: 1 }}
//                   className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
//                 ></motion.div>
//               </div>

//               <div className="p-6">
//                 <h3 className="text-2xl font-bold mb-2 text-gray-800 group-hover:text-orange-600 transition-colors">
//                   {temple.name}
//                 </h3>
//                 <motion.div
//                   initial={{ width: 0 }}
//                   whileHover={{ width: 48 }}
//                   className="w-0 h-1 bg-orange-500 mb-4"
//                 ></motion.div>
//                 <p className="text-gray-600 mb-4 line-clamp-3">
//                   {temple.description}
//                 </p>
//               </div>

//               <div className="px-6 pb-6">
//                 <motion.button
//                   whileHover={{ scale: 1.03 }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={() => openPopup(temple.id)}
//                   className="w-full py-3 bg-orange-100 text-orange-600 font-medium rounded-lg hover:bg-orange-600 hover:text-white transition-colors duration-300"
//                 >
//                   Read More
//                 </motion.button>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.4 }}
//           className="mt-12 text-center"
//         >
//           <motion.button
//             whileTap={{ scale: 0.95 }}
//             className="inline-flex items-center px-6 py-3 bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700 transition-colors duration-300"
//           >
//             View All Sacred Sites
//           </motion.button>
//         </motion.div>
//       </div>

//       {/* Popup Modal */}
//       <AnimatePresence>
//         {popupTemple && (
//           <>
//             {/* Overlay */}
//             <motion.div
//               variants={overlayVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
//               onClick={closePopup}
//             ></motion.div>

//             {/* Popup Content */}
//             <motion.div
//               variants={popupVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-11/12 max-w-4xl max-h-[90vh] overflow-auto bg-white rounded-xl shadow-2xl"
//             >
//               {temples
//                 .filter((temple) => temple.id === popupTemple)
//                 .map((temple) => (
//                   <div key={temple.id} className="flex flex-col lg:flex-row">
//                     <div className="lg:w-1/3 relative">
//                       <Image
//                         src={temple.image}
//                         alt={temple.name}
//                         width={800}
//                         height={600}
//                         className="object-cover w-full h-full max-h-96 lg:max-h-full"
//                       />
//                     </div>

//                     <div className="lg:w-2/3 p-8">
//                       <div className="flex justify-between items-start mb-4">
//                         <div>
//                           <motion.h3
//                             initial={{ opacity: 0, y: -10 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.5, delay: 0.3 }}
//                             className="text-3xl font-bold mb-2 text-gray-800"
//                           >
//                             {temple.name}
//                           </motion.h3>
//                           <motion.div
//                             initial={{ width: 0 }}
//                             animate={{ width: 64 }}
//                             transition={{ duration: 0.5, delay: 0.4 }}
//                             className="w-16 h-1 bg-orange-500 mb-6"
//                           ></motion.div>
//                         </div>
//                         <motion.button
//                           whileHover={{ rotate: 90 }}
//                           whileTap={{ scale: 0.9 }}
//                           onClick={closePopup}
//                           className="text-orange-600 hover:text-orange-800"
//                           aria-label="Close"
//                         >
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="h-6 w-6"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth={2}
//                               d="M6 18L18 6M6 6l12 12"
//                             />
//                           </svg>
//                         </motion.button>
//                       </div>

//                       <div className="text-gray-600 mb-8">
//                         <p>{temple.description}</p>
//                       </div>

//                       <div className="mt-auto">
//                         <motion.button
//                           whileTap={{ scale: 0.9 }}
//                           onClick={closePopup}
//                           className="px-6 py-3 bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700 transition-colors duration-300"
//                         >
//                           Close Details
//                         </motion.button>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// };

// export default TemplesOfRishikesh;

"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";

const TemplesOfRishikesh = () => {
  // State to track which temple popup is open
  const [popupTemple, setPopupTemple] = useState(null);
  const [showAllTemples, setShowAllTemples] = useState(false);

  const initialTemples = [
    {
      id: 1,
      name: "Bhootnath Temple",
      image: "/assets/images/place-1.png",
      description:
        "Built in the remembrance of Lord Shiva once again, many people believe that this is the place where Lord Shiva rested during the period of time when he planned to marry his wife Sati. This place will normally be full of silence and seclusion amidst nature as it is yet to explored by the travellers to its fullest potential. An ideal place to be visited with friends and families, it is one of the best temples in Rishikesh to plan a perfect day out.",
    },
    {
      id: 2,
      name: "Neelkanth Mahadev Temple",
      image: "/assets/images/neelkanth-mahadev-temple.jpg",
      description:
        "Dedicated to Lord Shiva, the Neelkanth Mahadev Temple is the most famous temple when compared to the other temples in Rishikesh. Owing much of its popularity to its location, the temple looks small when compared to the other Shiva temples in Rishikesh. Irrespective of the size of the temple, one can feel the positive vibes during their visit. Located inside a dense forest, visiting the temple becomes more fun with friends and family when one has to go through the jungle. Apart from that, one can also visit the waterfalls and nature’s other marvels while visit this temple.",
    },
    {
      id: 3,
      name: "Shri Bharat Temple",
      image: "/assets/images/place-2.png",
      description:
        "Among the many famous temples in Rishikesh, this temple ranks 10th among the many places to visit in Rishikesh. Dedicated to Lord Vishnu, this ancient temple was found by Adi Guru Shankaracharya in the 12th century. The idol present here is shaped out of an individual piece of Saligram. Also, some of the very old pots, coins of old times, and many ancient statues were yielded during the excavation of this site. Striking a perfect blend between the traditional architecture and aesthetical values, one cannot miss out on this temple when in Rishikesh.",
    },
  ];

  const additionalTemples = [
    {
      id: 4,
      name: "Parmarth Niketan",
      image: "/assets/images/place-3.png", // Replace with actual image
      description:
        "This too is one of the prominent temples in Rishikesh, India. You’ll even find a great religious school inside this temple that focuses on imparting valuable teachings of Hinduism. It also renowned as the Yoga school in the city of Rishikesh. During the evening, people gather here to be a part of the pious Ganga Aart which is held at the Parmarth Ghat.",
    },
    {
      id: 5,
      name: "Gita Bhawan",
      image: "/assets/images/place-4.png", // Replace with actual image
      description:
        "This site is considered to be one of the oldest temples to visit in Rishikesh. The walls of this temple is embellished with the beautiful depiction of the famous epics, Ramayana and Mahabharata. People flock here to experience the exuberance of the famous Ganga Aarti.",
    },
    {
      id: 6,
      name: "Trayambakeshwar Temple",
      image: "/assets/images/place-5.png", // Replace with actual image
      description:
        "This temple is one of the famous holy shrines in Rishikesh. Also known as the Tera Manzil Temple, the temple was constructed as an abode of Lord Shiva, and this particular Rishikesh Shiva temple is considered to be the one of the many Jyotirlingas of Lord Shiva. Once can witness the intricate designs and architectural brilliance on the walls and idols inside this 13-storied Trayambakeshwar temple. Considered to be more than 400 years old, it is one of the must-visit temples in Rishikesh.",
    },
  ];

  const temples = showAllTemples
    ? [...initialTemples, ...additionalTemples]
    : initialTemples;

  // Function to open popup for a temple
  const openPopup = (templeId) => {
    setPopupTemple(templeId);
    // Add a class to prevent background scrolling when popup is open
    document.body.style.overflow = "hidden";
  };

  // Function to close popup
  const closePopup = () => {
    setPopupTemple(null);
    // Re-enable scrolling when popup is closed
    document.body.style.overflow = "auto";
  };

  const toggleShowAllTemples = () => {
    setShowAllTemples(!showAllTemples);
  };

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const popupVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3,
      },
    },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section className="Places&Temple py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-5xl md:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-800 to-orange-500">
              Sacred Temples of Rishikesh
            </span>
          </h1>

          <p className="lg:text-xl text-lg text-gray-700">
            Rishikesh’s temples, set along the Ganges and Himalayas, radiate
            spirituality and devotion. Rich in mythology and serenity, they
            attract seekers and pilgrims from around the world.
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {temples.map((temple) => (
            <motion.div
              key={temple.id}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-xl overflow-hidden shadow-md h-full flex flex-col justify-between"
            >
              <div>
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={temple.image}
                    alt={temple.name}
                    width={500}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                  ></motion.div>
                </div>

                <div className="sm:p-6 p-4">
                  <h3 className="text-2xl font-bold mb-2 text-gray-800 group-hover:text-orange-600 transition-colors">
                    {temple.name}
                  </h3>
                  <motion.div
                    initial={{ width: 0 }}
                    whileHover={{ width: 48 }}
                    className="w-0 h-1 bg-orange-500 mb-4"
                  ></motion.div>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {temple.description}
                  </p>
                </div>
              </div>

              <div className="sm:p-6 p-4">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => openPopup(temple.id)}
                  className="w-full py-3 bg-orange-100 text-orange-600 font-medium rounded-lg hover:bg-orange-600 hover:text-white transition-colors duration-300"
                >
                  Read More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={toggleShowAllTemples}
            className="inline-flex items-center px-6 py-3 bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700 transition-colors duration-300"
          >
            {showAllTemples ? "View Less" : "View All Sacred Temple"}
          </motion.button>
        </motion.div>
      </div>

      {/* Popup Modal */}
      <AnimatePresence>
        {popupTemple && (
          <>
            {/* Overlay */}
            <motion.div
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={closePopup}
            ></motion.div>

            {/* Popup Content */}
            <motion.div
              variants={popupVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-11/12 max-w-4xl max-h-[90vh] overflow-auto bg-white rounded-xl shadow-2xl"
            >
              {temples
                .filter((temple) => temple.id === popupTemple)
                .map((temple) => (
                  <div key={temple.id} className="flex flex-col lg:flex-row">
                    <div className="lg:w-1/3 relative md:block hidden">
                      <Image
                        src={temple.image}
                        alt={temple.name}
                        width={800}
                        height={600}
                        className="object-cover w-full h-full max-h-96 lg:max-h-full"
                      />
                    </div>

                    <div className="lg:w-2/3 p-8">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <motion.h3
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="text-3xl font-bold mb-2 text-gray-800"
                          >
                            {temple.name}
                          </motion.h3>
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: 64 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="w-16 h-1 bg-orange-500 mb-6"
                          ></motion.div>
                        </div>
                        <motion.button
                          
                          whileTap={{ scale: 0.9 }}
                          onClick={closePopup}
                          className="text-orange-600 hover:text-orange-800"
                          aria-label="Close"
                        >
                          <FiX size={22} />
                        </motion.button>
                      </div>

                      <div className="text-gray-600 mb-8">
                        <p>{temple.description}</p>
                      </div>

                      <div className="mt-auto">
                        <motion.button
                          whileTap={{ scale: 0.9 }}
                          onClick={closePopup}
                          className="px-6 py-3 bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700 transition-colors duration-300"
                        >
                          Close Details
                        </motion.button>
                      </div>
                    </div>
                  </div>
                ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default TemplesOfRishikesh;
