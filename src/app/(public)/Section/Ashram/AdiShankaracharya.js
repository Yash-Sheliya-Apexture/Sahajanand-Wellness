// import React, { useState } from "react";
// import Image from "next/image";
// import adi from "../../../../../public/assets/images/adi.jpg";
// import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
// const AdiShankaracharya = () => {
//   const [showMore, setShowMore] = useState(false);

//   const toggleShowMore = () => {
//     setShowMore(!showMore);
//   };

//   const otherContentData = [
//     {
//       otherContent: [
//         {
//           type: "paragraph",
//           text: "Swami Vivekananda aptly captures the essence of Hinduism, proclaiming the Gita and Ganga as its core components - one representing theory, the other practice. In the symphony of Hindu spirituality, the Ganges flows as a sacred thread, weaving together the diverse tapestry of beliefs and practices, guiding souls on their eternal quest for salvation.",
//         },
//         {
//           type: "paragraph",
//           text: "In the serene realms of Muni Ki Reti and Tapovan in Rishikesh, where the whispers of great Tapsavies echo through the ages, lies the sacred enclave of Shri Swaminarayan Ashram, nestled amidst the divine aura. Here, seekers of spiritual enlightenment, be they revered Rishis, yogis, or devout bhakts, converge to embark on their journey of Tapasya, yearning to merge their souls with the spiritual realm.",
//         },
//         {
//           type: "paragraph",
//           text: "At the helm of this sanctified abode stands Rishiraj Sunil Bhagat, a true Karma yogi whose unwavering resolve and boundless dedication have sculpted the very fabric of the Shri Swaminarayan Ashram. From the humble inception of procuring the land to navigating the labyrinth of bureaucratic hurdles for construction permits, Bhagat's saga is one of resilience and fortitude.",
//         },
//         {
//           type: "paragraph",
//           text: "Born into a modest family in Gujarat, Bhagat's early years were steeped in the rituals of his grandfather's puja. It was this foundation that kindled the flames of devotion within him, guiding his path towards spiritual service. Transitioning from a career in textile manufacturing to embracing the call of sanyasi life, Bhagat's journey unfolded with a singular purpose – to serve humanity.",
//         },
//         {
//           type: "paragraph",
//           text: "Under the tutelage of Vishnu Prakash Das ji Swami Athana Wala, Vadtal Bhagat's metamorphosis into a revered Mahanta of Uttarakhand was nothing short of miraculous. His dedication earned him accolades, including a rare invitation from the Indian government for the Pran Pratisthan of the Ram temple, a testament to his revered stature.",
//         },
//         {
//           type: "paragraph",
//           text: "Yet, amidst his towering achievements, Bhagat remains a beacon of humility and simplicity. His vision for the ashram, coupled with his astute business acumen, has transformed it into a haven of tranquility and service. Whether interacting with students, donors, or dignitaries, Bhagat's warmth and tactfulness leave an indelible mark on all who cross his path.",
//         },
//         {
//           type: "paragraph",
//           text: "The rhythm of life within the ashram flows seamlessly, orchestrated by Bhagat's deft hand. Each member, from the kitchen staff to the devotees, plays their part with dedication and grace, embodying the spirit of service and compassion. Ekadashi sees the ashram bustling with activity, as meals are served with equal care to fasting sadhus and guests alike.",
//         },
//         {
//           type: "paragraph",
//           text: "In Bhagat's simple abode, devoid of luxuries, lies a profound lesson – that true freedom transcends material comforts. His unwavering resolve to live independently of external dependencies serves as a testament to the power of inner strength and resilience.",
//         },
//         {
//           type: "paragraph",
//           text: "In the quietude of the ashram, where Bhagat's presence commands reverence, one finds solace in the simplicity of his being. His life, a testament to the transformative power of devotion and selflessness, continues to inspire all who seek the path of service and spirituality.",
//         },
//       ],
//     },
//   ];

//   const initialContent = [
//     {
//       type: "paragraph",
//       text: "The timeless journey of Yogis and Sanyasis, traversing ancient paths in pursuit of truth and liberation, is a testament to human perseverance and spiritual yearning. Amidst the majestic peaks and winding rivers of the Himalayas lies a valley that stands out for its profound connection with humanity - the Valley of the mighty Ganges. For ages, this pristine river goddess has stirred the souls of countless beings who dwell within the embrace of the Himalayan ranges.",
//     },
//     {
//       type: "paragraph",
//       text: "As the saying goes, pilgrimages are ordained by destiny, granting access only to those deserving and fated. The Bhagirathi, originating from the Gangotri Glacier, mythically resides in the matted locks of Lord Shiva, symbolizing Tapovan, a meadow of celestial beauty nestled at the foot of Mount Shivling.",
//     },
//     {
//       type: "paragraph",
//       text: "The Ganga holds sacred significance for Hindus along its entire course. Pilgrims bathe in its purifying waters, offering homage to ancestors and gods by cupping water in their hands, adorning it with flowers and oil lamps, and carrying its sanctified essence home for ritual use. The mere sight, touch, or utterance of 'Ganga-Ganga' is believed to absolve sins and purify the soul, earning the river the revered title of SANSARTARINI, the redeemer of this world.",
//     },
//   ];
//   return (
//     <section className="Inspiration py-16">
//       <div className="container mx-auto px-4">
//         {/* Title */}
//         <h1 className="text-3xl md:text-3xl font-bold mb-8 text-center">
//           <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-800 to-orange-500">
//             In a moment of absolute spiritual inspiration, sitting by the banks
//             of the Ganges, thus wrote the great sage Adi Shankaracharya in the
//             8th century AD.
//           </span>
//         </h1>

//         {/* Main Content Area */}
//         <div className="flex flex-col lg:flex-row gap-8">
//           <div className="lg:w-3/5 p-6 space-y-6">
//             {/* Initial Content */}
//             <div className="space-y-6">
//               {initialContent.map((item, index) =>
//                 item.type === "paragraph" ? (
//                   <p
//                     key={index}
//                     className="text-lg text-gray-700 leading-relaxed"
//                   >
//                     {item.text}
//                   </p>
//                 ) : null
//               )}
//             </div>

//             {/* Read More Button */}
//             {!showMore && (
//               <button
//                 onClick={toggleShowMore}
//                 className="group relative inline-flex items-center gap-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-800 to-orange-500 font-bold transition-colors cursor-pointer"
//               >
//                 Read More
//                 <FaArrowRightLong className="text-main-color/70 transform transition-transform duration-300 group-hover:translate-x-2" />
//                 <span className="absolute -bottom-1 left-0 w-0 h-[3px] bg-gradient-to-r from-orange-800 to-orange-500 rounded-full transition-all duration-300 group-hover:w-full"></span>
//               </button>
//             )}
//           </div>

//           {/* Image Area */}
//           <div className="lg:w-2/5 h-fit shadow-lg rounded-lg overflow-hidden">
//             <Image
//               src={adi}
//               alt="Spiritual chariot sculpture"
//               className="w-full object-cover"
//               width={500}
//               height={500}
//             />
//           </div>
//         </div>

//         {/* Other Content:- Conditionally Rendered*/}
//         {showMore && (
//           <div className="relative mt-6">
//             <div className="relative z-10 pl-6">
//               <div className="space-y-6 relative">
//                 {otherContentData[0].otherContent.map((item, index) =>
//                   item.type === "paragraph" ? (
//                     <div key={index} className="relative group">
//                       <div className="absolute -left-6 top-0 bottom-0 w-1 rounded-full bg-gradient-to-b from-orange-500 to-orange-200 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
//                       <p className="text-lg text-gray-800 leading-relaxed transition-all duration-300 hover:translate-x-2 hover:text-orange-700">
//                         {item.text}
//                       </p>
//                     </div>
//                   ) : null
//                 )}
//               </div>

//               {/* Read Less Button */}
//               <div className="text-center mt-8">
//                 <button
//                   onClick={toggleShowMore}
//                   className="group relative inline-flex items-center gap-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-800 to-orange-500 font-bold transition-colors cursor-pointer"
//                 >
//                   Read Less
//                   <FaArrowLeftLong className="text-main-color/70 transform transition-transform duration-300 group-hover:translate-x-2" />
//                   <span className="absolute -bottom-1 left-0 w-0 h-[3px] bg-gradient-to-r from-orange-800 to-orange-500 rounded-full transition-all duration-300 group-hover:w-full"></span>
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };
// export default AdiShankaracharya;

import React, { useState } from "react";
import Image from "next/image";
import adi from "../../../../../public/assets/images/adi.jpg";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
const AdiShankaracharya = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const otherContentData = [
    {
      otherContent: [
        {
          type: "paragraph",
          text: "Swami Vivekananda aptly captures the essence of Hinduism, proclaiming the Gita and Ganga as its core components - one representing theory, the other practice. In the symphony of Hindu spirituality, the Ganges flows as a sacred thread, weaving together the diverse tapestry of beliefs and practices, guiding souls on their eternal quest for salvation.",
        },
        {
          type: "paragraph",
          text: "In the serene realms of Muni Ki Reti and Tapovan in Rishikesh, where the whispers of great Tapsavies echo through the ages, lies the sacred enclave of Shri Swaminarayan Ashram, nestled amidst the divine aura. Here, seekers of spiritual enlightenment, be they revered Rishis, yogis, or devout bhakts, converge to embark on their journey of Tapasya, yearning to merge their souls with the spiritual realm.",
        },
        {
          type: "paragraph",
          text: "At the helm of this sanctified abode stands Rishiraj Sunil Bhagat, a true Karma yogi whose unwavering resolve and boundless dedication have sculpted the very fabric of the Shri Swaminarayan Ashram. From the humble inception of procuring the land to navigating the labyrinth of bureaucratic hurdles for construction permits, Bhagat's saga is one of resilience and fortitude.",
        },
        {
          type: "paragraph",
          text: "Born into a modest family in Gujarat, Bhagat's early years were steeped in the rituals of his grandfather's puja. It was this foundation that kindled the flames of devotion within him, guiding his path towards spiritual service. Transitioning from a career in textile manufacturing to embracing the call of sanyasi life, Bhagat's journey unfolded with a singular purpose – to serve humanity.",
        },
        {
          type: "paragraph",
          text: "Under the tutelage of Vishnu Prakash Das ji Swami Athana Wala, Vadtal Bhagat's metamorphosis into a revered Mahanta of Uttarakhand was nothing short of miraculous. His dedication earned him accolades, including a rare invitation from the Indian government for the Pran Pratisthan of the Ram temple, a testament to his revered stature.",
        },
        {
          type: "paragraph",
          text: "Yet, amidst his towering achievements, Bhagat remains a beacon of humility and simplicity. His vision for the ashram, coupled with his astute business acumen, has transformed it into a haven of tranquility and service. Whether interacting with students, donors, or dignitaries, Bhagat's warmth and tactfulness leave an indelible mark on all who cross his path.",
        },
        {
          type: "paragraph",
          text: "The rhythm of life within the ashram flows seamlessly, orchestrated by Bhagat's deft hand. Each member, from the kitchen staff to the devotees, plays their part with dedication and grace, embodying the spirit of service and compassion. Ekadashi sees the ashram bustling with activity, as meals are served with equal care to fasting sadhus and guests alike.",
        },
        {
          type: "paragraph",
          text: "In Bhagat's simple abode, devoid of luxuries, lies a profound lesson – that true freedom transcends material comforts. His unwavering resolve to live independently of external dependencies serves as a testament to the power of inner strength and resilience.",
        },
        {
          type: "paragraph",
          text: "In the quietude of the ashram, where Bhagat's presence commands reverence, one finds solace in the simplicity of his being. His life, a testament to the transformative power of devotion and selflessness, continues to inspire all who seek the path of service and spirituality.",
        },
      ],
    },
  ];

  const initialContent = [
    {
      type: "paragraph",
      text: "The timeless journey of Yogis and Sanyasis, traversing ancient paths in pursuit of truth and liberation, is a testament to human perseverance and spiritual yearning. Amidst the majestic peaks and winding rivers of the Himalayas lies a valley that stands out for its profound connection with humanity - the Valley of the mighty Ganges. For ages, this pristine river goddess has stirred the souls of countless beings who dwell within the embrace of the Himalayan ranges.",
    },
    {
      type: "paragraph",
      text: "As the saying goes, pilgrimages are ordained by destiny, granting access only to those deserving and fated. The Bhagirathi, originating from the Gangotri Glacier, mythically resides in the matted locks of Lord Shiva, symbolizing Tapovan, a meadow of celestial beauty nestled at the foot of Mount Shivling.",
    },
    {
      type: "paragraph",
      text: "The Ganga holds sacred significance for Hindus along its entire course. Pilgrims bathe in its purifying waters, offering homage to ancestors and gods by cupping water in their hands, adorning it with flowers and oil lamps, and carrying its sanctified essence home for ritual use. The mere sight, touch, or utterance of 'Ganga-Ganga' is believed to absolve sins and purify the soul, earning the river the revered title of SANSARTARINI, the redeemer of this world.",
    },
  ];
  return (
    <section className="Inspiration py-16">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h1 className="text-3xl lg:text-4xl font-bold mb-8 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-800 to-orange-500">
            In a moment of absolute spiritual inspiration, sitting by the banks
            of the Ganges, thus wrote the great sage Adi Shankaracharya in the
            8th century AD.
          </span>
        </h1>

        {/* Main Content Area */}
        <div className="">
          {/* Image Area */}
          <div className="lg:w-2/5 lg:float-right lg:ml-4 h-fit shadow-lg rounded-lg overflow-hidden">
            <Image
              src={adi}
              alt="Spiritual chariot sculpture"
              className="w-full object-cover"
              width={500}
              height={500}
            />
          </div>

          <div className="p-6 space-y-6">
            {/* Initial Content */}
            <div className="space-y-6">
              {initialContent.map((item, index) =>
                item.type === "paragraph" ? (
                  <p
                    key={index}
                    className="text-lg text-gray-700 leading-relaxed"
                  >
                    {item.text}
                  </p>
                ) : null
              )}
              {/* Other Content:- Conditionally Rendered*/}
              {showMore && (
                <div className="relative">
                  <div className="relative z-10">
                    <div className="space-y-6 relative">
                      {otherContentData[0].otherContent.map((item, index) =>
                        item.type === "paragraph" ? (
                          <div key={index} className="relative group">
                            <div className="absolute -left-6 top-0 bottom-0 w-1 rounded-full bg-gradient-to-b from-orange-500 to-orange-200 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                            <p className="text-lg text-gray-800 leading-relaxed transition-all duration-300 hover:translate-x-2 hover:text-orange-700">
                              {item.text}
                            </p>
                          </div>
                        ) : null
                      )}
                    </div>

                    {/* Read Less Button */}
                    <div className="mt-8">
                      <button
                        onClick={toggleShowMore}
                        className="group relative inline-flex items-center gap-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-800 to-orange-500 font-bold transition-colors cursor-pointer"
                      >
                        Read Less
                        <FaArrowLeftLong className="text-main-color/70 transform transition-transform duration-300 group-hover:translate-x-2" />
                        <span className="absolute -bottom-1 left-0 w-0 h-[3px] bg-gradient-to-r from-orange-800 to-orange-500 rounded-full transition-all duration-300 group-hover:w-full"></span>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Read More Button */}
            {!showMore && (
              <button
                onClick={toggleShowMore}
                className="group relative inline-flex items-center gap-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-800 to-orange-500 font-bold transition-colors cursor-pointer"
              >
                Read More
                <FaArrowRightLong className="text-main-color/70 transform transition-transform duration-300 group-hover:translate-x-2" />
                <span className="absolute -bottom-1 left-0 w-0 h-[3px] bg-gradient-to-r from-orange-800 to-orange-500 rounded-full transition-all duration-300 group-hover:w-full"></span>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
export default AdiShankaracharya;

// import React, { useState } from "react";
// import Image from "next/image";
// import adi from "../../../../../public/assets/images/adi.jpg";
// import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
// const AdiShankaracharya = () => {
//   const [showMore, setShowMore] = useState(false);

//   const toggleShowMore = () => {
//     setShowMore(!showMore);
//   };

//   const otherContentData = [
//     {
//       otherContent: [
//         {
//           type: "paragraph",
//           text: "The Ganga holds sacred significance for Hindus along its entire course. Pilgrims bathe in its purifying waters, offering homage to ancestors and gods by cupping water in their hands, adorning it with flowers and oil lamps, and carrying its sanctified essence home for ritual use. The mere sight, touch, or utterance of 'Ganga-Ganga' is believed to absolve sins and purify the soul, earning the river the revered title of SANSARTARINI, the redeemer of this world.",
//         },
//         {
//           type: "paragraph",
//           text: "Swami Vivekananda aptly captures the essence of Hinduism, proclaiming the Gita and Ganga as its core components - one representing theory, the other practice. In the symphony of Hindu spirituality, the Ganges flows as a sacred thread, weaving together the diverse tapestry of beliefs and practices, guiding souls on their eternal quest for salvation.",
//         },
//         {
//           type: "paragraph",
//           text: "In the serene realms of Muni Ki Reti and Tapovan in Rishikesh, where the whispers of great Tapsavies echo through the ages, lies the sacred enclave of Shri Swaminarayan Ashram, nestled amidst the divine aura. Here, seekers of spiritual enlightenment, be they revered Rishis, yogis, or devout bhakts, converge to embark on their journey of Tapasya, yearning to merge their souls with the spiritual realm.",
//         },
//         {
//           type: "paragraph",
//           text: "At the helm of this sanctified abode stands Rishiraj Sunil Bhagat, a true Karma yogi whose unwavering resolve and boundless dedication have sculpted the very fabric of the Shri Swaminarayan Ashram. From the humble inception of procuring the land to navigating the labyrinth of bureaucratic hurdles for construction permits, Bhagat's saga is one of resilience and fortitude.",
//         },
//         {
//           type: "paragraph",
//           text: "Born into a modest family in Gujarat, Bhagat's early years were steeped in the rituals of his grandfather's puja. It was this foundation that kindled the flames of devotion within him, guiding his path towards spiritual service. Transitioning from a career in textile manufacturing to embracing the call of sanyasi life, Bhagat's journey unfolded with a singular purpose – to serve humanity.",
//         },
//         {
//           type: "paragraph",
//           text: "Under the tutelage of Vishnu Prakash Das ji Swami Athana Wala, Vadtal Bhagat's metamorphosis into a revered Mahanta of Uttarakhand was nothing short of miraculous. His dedication earned him accolades, including a rare invitation from the Indian government for the Pran Pratisthan of the Ram temple, a testament to his revered stature.",
//         },
//         {
//           type: "paragraph",
//           text: "Yet, amidst his towering achievements, Bhagat remains a beacon of humility and simplicity. His vision for the ashram, coupled with his astute business acumen, has transformed it into a haven of tranquility and service. Whether interacting with students, donors, or dignitaries, Bhagat's warmth and tactfulness leave an indelible mark on all who cross his path.",
//         },
//         {
//           type: "paragraph",
//           text: "The rhythm of life within the ashram flows seamlessly, orchestrated by Bhagat's deft hand. Each member, from the kitchen staff to the devotees, plays their part with dedication and grace, embodying the spirit of service and compassion. Ekadashi sees the ashram bustling with activity, as meals are served with equal care to fasting sadhus and guests alike.",
//         },
//         {
//           type: "paragraph",
//           text: "In Bhagat's simple abode, devoid of luxuries, lies a profound lesson – that true freedom transcends material comforts. His unwavering resolve to live independently of external dependencies serves as a testament to the power of inner strength and resilience.",
//         },
//         {
//           type: "paragraph",
//           text: "In the quietude of the ashram, where Bhagat's presence commands reverence, one finds solace in the simplicity of his being. His life, a testament to the transformative power of devotion and selflessness, continues to inspire all who seek the path of service and spirituality.",
//         },
//       ],
//     },
//   ];

//   const initialContent = [
//     {
//       type: "paragraph",
//       text: "The timeless journey of Yogis and Sanyasis, traversing ancient paths in pursuit of truth and liberation, is a testament to human perseverance and spiritual yearning. Amidst the majestic peaks and winding rivers of the Himalayas lies a valley that stands out for its profound connection with humanity - the Valley of the mighty Ganges. For ages, this pristine river goddess has stirred the souls of countless beings who dwell within the embrace of the Himalayan ranges.",
//     },
//     {
//       type: "paragraph",
//       text: "As the saying goes, pilgrimages are ordained by destiny, granting access only to those deserving and fated. The Bhagirathi, originating from the Gangotri Glacier, mythically resides in the matted locks of Lord Shiva, symbolizing Tapovan, a meadow of celestial beauty nestled at the foot of Mount Shivling.",
//     },
//   ];
//   return (
//     <section className="Inspiration py-16">
//       <div className="container mx-auto px-4">
//         {/* Title */}
//         <h1 className="text-3xl md:text-3xl font-bold mb-8 text-center">
//           <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-800 to-orange-500">
//             In a moment of absolute spiritual inspiration, sitting by the banks
//             of the Ganges, thus wrote the great sage Adi Shankaracharya in the
//             8th century AD.
//           </span>
//         </h1>

//         <div className="float-right clear-right">
//           <Image
//             src={adi}
//             alt="Spiritual chariot sculpture"
//             className="w-full object-cover"
//             width={500}
//             height={500}
//           />
//         </div>

//         {/* Main Content Area */}
//         <div className="flex flex-col lg:flex-row gap-8">
//           <div className="space-y-6">
//             {/* Initial Content */}
//             <div className="space-y-6">
//               {initialContent.map((item, index) =>
//                 item.type === "paragraph" ? (
//                   <p
//                     key={index}
//                     className="text-lg text-gray-700 leading-relaxed"
//                   >
//                     {item.text}
//                   </p>
//                 ) : null
//               )}
//             </div>

//             {/* Read More Button */}
//             {!showMore && (
//               <button
//                 onClick={toggleShowMore}
//                 className="group relative inline-flex items-center gap-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-800 to-orange-500 font-bold transition-colors cursor-pointer"
//               >
//                 Read More
//                 <FaArrowRightLong className="text-main-color/70 transform transition-transform duration-300 group-hover:translate-x-2" />
//                 <span className="absolute -bottom-1 left-0 w-0 h-[3px] bg-gradient-to-r from-orange-800 to-orange-500 rounded-full transition-all duration-300 group-hover:w-full"></span>
//               </button>
//             )}
//           </div>
//         </div>

//         {/* Other Content:- Conditionally Rendered*/}
//         {showMore && (
//           <div className="relative mt-6">
//             <div className="relative z-10 pl-6">
//               <div className="space-y-6 relative">
//                 {otherContentData[0].otherContent.map((item, index) =>
//                   item.type === "paragraph" ? (
//                     <div key={index} className="relative group">
//                       <div className="absolute -left-6 top-0 bottom-0 w-1 rounded-full bg-gradient-to-b from-orange-500 to-orange-200 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
//                       <p className="text-lg text-gray-800 leading-relaxed transition-all duration-300 hover:translate-x-2 hover:text-orange-700">
//                         {item.text}
//                       </p>
//                     </div>
//                   ) : null
//                 )}
//               </div>

//               {/* Read Less Button */}
//               <div className="text-center mt-8">
//                 <button
//                   onClick={toggleShowMore}
//                   className="group relative inline-flex items-center gap-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-800 to-orange-500 font-bold transition-colors cursor-pointer"
//                 >
//                   Read Less
//                   <FaArrowLeftLong className="text-main-color/70 transform transition-transform duration-300 group-hover:translate-x-2" />
//                   <span className="absolute -bottom-1 left-0 w-0 h-[3px] bg-gradient-to-r from-orange-800 to-orange-500 rounded-full transition-all duration-300 group-hover:w-full"></span>
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };
// export default AdiShankaracharya;
