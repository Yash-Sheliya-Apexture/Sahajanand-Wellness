// import React from "react";
// import Image from "next/image";
// import rishikeshImage from "../../../../../public/assets/images/rishikesh-city-1.jpg";
// import rishikeshImage2 from "../../../../../public/assets/images/rishikesh-city-2.jpg";
// import himalayasImage from "../../../../../public/assets/images/himalayasImage.jpg";

// const History = () => {
//   return (
//     <section className="Rishikesh-History">
//       <div className="container mx-auto px-4">
//         <div className=" max-w-6xl mx-auto">
//           {/* Section 1: Rishikesh History */}
//           <div className="pt-12">
//             <h2 className="text-4xl md:text-5xl font-bold mb-6">
//               <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-800 to-orange-500">
//                 A Glimpse into Rishikesh's Rich History
//               </span>
//             </h2>

//             <div className="space-y-4">
//               <h3 className="text-2xl font-semibold text-orange-700">
//                 Ancient Roots and Spiritual Significance
//               </h3>

//               <p className="text-lg text-gray-700 leading-relaxed">
//                 Rishikesh, also spelt as Hrishikesh, in the state of
//                 Uttarakhand, is situated on the right bank of the Ganges River.
//                 It is a pilgrimage town for Hindus, with ancient sages and
//                 saints meditating here in search of higher knowledge.
//               </p>
              
//             </div>

//             <div className="grid md:grid-cols-2 gap-8 items-center mt-6">
//               <div className="rounded-2xl overflow-hidden">
//                 <Image
//                   src={rishikeshImage2}
//                   alt="Rishikesh Ganga Aarti"
//                   width={500} // Adjust as needed
//                   height={300} // Adjust as needed
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div className="space-y-4">
//               <p className="text-lg text-gray-700 leading-relaxed">
//                 Rishikesh holds great significance in Hindu mythology and is
//                 considered a sacred place.
//               </p>
//                 <p className="text-lg text-gray-700 leading-relaxed">
//                   For centuries, seekers have been drawn to its serene
//                   environment, seeking enlightenment and spiritual growth on the
//                   banks of the holy Ganges.
//                 </p>

//                 <blockquote className="border-l-4 border-orange-600 pl-6 py-2 bg-orange-50 rounded-r-lg">
//                   <p className="text-lg text-gray-700 italic">
//                     "Rishikesh's history is etched in the whispers of the Ganga
//                     and the chants of the ancient sages."
//                   </p>
//                 </blockquote>
//               </div>
//             </div>
//           </div>

//           {/* Section 2: Spiritual Heart */}
//           <div className="pt-12">
//             <h1 className="text-4xl md:text-5xl font-bold mb-6">
//               <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-800 to-orange-500">
//                 Rishikesh: The Spiritual Heart of Uttarakhand
//               </span>
//             </h1>

//             <div className="space-y-4">
//               <h3 className="text-2xl font-semibold text-orange-700">
//                 Gateway to the Garhwal Himalayas and Spiritual Awakening
//               </h3>
//               <p className="text-lg text-gray-700 leading-relaxed">
//                 Rishikesh, known as the spiritual hub of Uttarakhand, sits
//                 gracefully on the banks of the sacred Ma Ganga, drawing millions
//                 of seekers from across the globe in search of divine
//                 enlightenment. The revered river, stretching from the Himalayan
//                 peaks to the Indian plains, embodies purity and spirituality.
//               </p>
//             </div>

//             <div className="grid md:grid-cols-2 gap-8 items-center mt-6">
//               <div className="space-y-4">
//                 <p className="text-lg text-gray-700 leading-relaxed">
//                   The majestic Himalayas, adorning the northern landscape of
//                   India, serve as a breathtaking testament to the splendor of
//                   nature. These towering peaks, lush valleys, and diverse flora
//                   and fauna have enchanted travelers, adventurers, and spiritual
//                   aspirants for centuries.
//                 </p>

//                 <blockquote className="border-l-4 border-orange-600 pl-6 py-2 bg-orange-50 rounded-r-lg">
//                   <p className="text-lg text-gray-700 italic">
//                     "In the heart of Rishikesh, find peace amidst the Ganga's
//                     flow and the Himalayas' embrace."
//                   </p>
//                 </blockquote>
//               </div>
//               <div className="rounded-2xl overflow-hidden">
//                 <Image
//                   src={rishikeshImage}
//                   alt="Spiritual chariot sculpture"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Section 3: Spiritual Essence */}
//           <div className="pt-12">
//             <h2 className="text-4xl md:text-5xl font-bold mb-6">
//               <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-800 to-orange-500">
//                 The Spiritual Essence of the Himalayas
//               </span>
//             </h2>

//             <div className="space-y-4">
//               <h3 className="text-2xl font-semibold text-orange-700">
//                 Solace and Enlightenment Among the Peaks
//               </h3>

//               <p className="text-lg text-gray-700 leading-relaxed">
//                 Beyond their natural allure, the Himalayas hold profound
//                 spiritual and cultural significance, offering solace and
//                 enlightenment to generations of seekers. As we marvel at their
//                 magnificence, let us also commit to preserving and safeguarding
//                 these sacred mountains for future generations to cherish.
//               </p>
//             </div>

//             <div className="grid md:grid-cols-2 gap-8 items-center mt-6">
//               <div className="rounded-2xl overflow-hidden">
//                 <Image
//                   src={himalayasImage}
//                   alt="Himalayas Landscape"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div className="space-y-4">
//                 <p className="text-lg text-gray-700 leading-relaxed">
//                   Among these peaks, one valley stands out, stirring a divine
//                   trance with its blend of beauty, spirituality, poetry, and
//                   ancient Vedic legends. From the mythical penance of Prince
//                   Bhagirath to the poetic creations of Adi Shankara, this valley
//                   resonates with a timeless aura of reverence and inspiration.
//                 </p>

//                 <blockquote className="border-l-4 border-orange-600 pl-6 py-2 bg-orange-50 rounded-r-lg">
//                   <p className="text-lg text-gray-700 italic">
//                     "The Himalayas whisper ancient secrets to those who listen
//                     with their hearts."
//                   </p>
//                 </blockquote>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
// export default History;









import React from "react";
import Image from "next/image";
import rishikeshImage from "../../../../../public/assets/images/rishikesh-city-1.jpg";
import rishikeshImage2 from "../../../../../public/assets/images/rishikesh-city-2.jpg";
import himalayasImage from "../../../../../public/assets/images/himalayasImage.jpg";

const History = () => {
  return (
    <section className="Rishikesh-History">
      <div className="container mx-auto px-4">
        <div className="">
          {/* Section 1: Rishikesh History */}
          <div className="pt-12">
            <h2 className="text-3xl lg:text-5xl md:text-4xl font-semibold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-800 to-orange-500">
                A Glimpse into Rishikesh's Rich History
              </span>
            </h2>

            <div className="grid lg:grid-cols-2 gap-8  mt-6">
              <div className="rounded-2xl overflow-hidden">
                <Image
                  src={rishikeshImage2}
                  alt="Rishikesh Ganga Aarti"
                  width={500} // Adjust as needed
                  height={300} // Adjust as needed
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-orange-700">
                Ancient Roots and Spiritual Significance
              </h3>

              <p className="text-lg text-gray-700 leading-relaxed">
                Rishikesh, also spelt as Hrishikesh, in the state of
                Uttarakhand, is situated on the right bank of the Ganges River.
                It is a pilgrimage town for Hindus, with ancient sages and
                saints meditating here in search of higher knowledge.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Rishikesh holds great significance in Hindu mythology and is
                considered a sacred place.
              </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  For centuries, seekers have been drawn to its serene
                  environment, seeking enlightenment and spiritual growth on the
                  banks of the holy Ganges.
                </p>

                <blockquote className="border-l-4 border-orange-600 px-6 py-2 bg-orange-50 rounded-r-lg">
                  <p className="text-lg text-gray-700 italic">
                    "Rishikesh's history is etched in the whispers of the Ganga
                    and the chants of the ancient sages."
                  </p>
                </blockquote>
              </div>
            </div>
          </div>

          {/* Section 2: Spiritual Heart */}
          <div className="pt-12">
            <h1 className="text-3xl lg:text-5xl md:text-4xl font-semibold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-800 to-orange-500">
                Rishikesh: The Spiritual Heart of Uttarakhand
              </span>
            </h1>

            <div className="grid lg:grid-cols-2 gap-8 mt-6">
              <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-orange-700">
                Gateway to the Garhwal Himalayas and Spiritual Awakening
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Rishikesh, known as the spiritual hub of Uttarakhand, sits
                gracefully on the banks of the sacred Ma Ganga, drawing millions
                of seekers from across the globe in search of divine
                enlightenment. The revered river, stretching from the Himalayan
                peaks to the Indian plains, embodies purity and spirituality.
              </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  The majestic Himalayas, adorning the northern landscape of
                  India, serve as a breathtaking testament to the splendor of
                  nature. These towering peaks, lush valleys, and diverse flora
                  and fauna have enchanted travelers, adventurers, and spiritual
                  aspirants for centuries.
                </p>

                <blockquote className="border-l-4 border-orange-600 pl-6 py-2 bg-orange-50 rounded-r-lg">
                  <p className="text-lg text-gray-700 italic">
                    "In the heart of Rishikesh, find peace amidst the Ganga's
                    flow and the Himalayas' embrace."
                  </p>
                </blockquote>
              </div>
              <div className="rounded-2xl overflow-hidden">
                <Image
                  src={rishikeshImage}
                  alt="Spiritual chariot sculpture"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Section 3: Spiritual Essence */}
          <div className="pt-12">
            <h2 className="text-3xl lg:text-5xl md:text-4xl font-semibold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-800 to-orange-500">
                The Spiritual Essence of the Himalayas
              </span>
            </h2>

            <div className="grid lg:grid-cols-2 gap-8 mt-6">
              <div className="rounded-2xl overflow-hidden">
                <Image
                  src={himalayasImage}
                  alt="Himalayas Landscape"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-orange-700">
                Solace and Enlightenment Among the Peaks
              </h3>

              <p className="text-lg text-gray-700 leading-relaxed">
                Beyond their natural allure, the Himalayas hold profound
                spiritual and cultural significance, offering solace and
                enlightenment to generations of seekers. As we marvel at their
                magnificence, let us also commit to preserving and safeguarding
                these sacred mountains for future generations to cherish.
              </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Among these peaks, one valley stands out, stirring a divine
                  trance with its blend of beauty, spirituality, poetry, and
                  ancient Vedic legends. From the mythical penance of Prince
                  Bhagirath to the poetic creations of Adi Shankara, this valley
                  resonates with a timeless aura of reverence and inspiration.
                </p>

                <blockquote className="border-l-4 border-orange-600 pl-6 py-2 bg-orange-50 rounded-r-lg">
                  <p className="text-lg text-gray-700 italic">
                    "The Himalayas whisper ancient secrets to those who listen
                    with their hearts."
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default History;
