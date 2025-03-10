import React from "react";
import { BsWifi } from "react-icons/bs";
import { FaOm, FaHandHoldingHeart } from "react-icons/fa";

const ashramData = [
  {
    id: 1,
    icon: <BsWifi className="text-main-color text-5xl" />,
    title: "Free Wi-Fi Available",
    description:
      "Sahajanand wellness is ready give all information regarding Ashram from the internert. Free wifi is available 24 hr at the building in every floor .",
  },
  {
    id: 2,
    icon: <FaOm className="text-main-color text-5xl" />,
    title: "Bhagwat and Arti",
    description:
      "For those moments of liesure, or when Bhagwat and Puja has to be organize outside the confines of a corporate environment. We promise you, the experience will be worth repeating, over and over again.",
  },
  {
    id: 3,
    icon: <FaHandHoldingHeart className="text-main-color text-5xl" />,
    title: "Donation and Efficient",
    description:
      "All the activities of the trust are run by donations. Trust provides lodging and food to the pilgrims and they are encouraged to make donations for the charity work carried out by the trust. Trust accepts these donations to carry out its activities.",
  },
];

const AshramSection = () => {
  return (
    <section className="Ashram-Section relative py-16 bg-amber-50 overflow-hidden">

      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-orange-100 -translate-x-1/2 -translate-y-1/2 opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-orange-100 translate-x-1/4 translate-y-1/4 opacity-50"></div>

      <div className="container mx-auto px-4 relative z-10">

        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl lg:text-5xl md:text-4xl font-bold text-center mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-800 to-orange-500">
              Shree Swaminarayan Ashram
            </span>
          </h1>
          <p className="lg:text-xl text-lg text-gray-700 text-center">
            Gateway of spiritual life
          </p>

          <div className="flex justify-center mt-8">
            <div className="h-1 w-80 bg-gradient-to-r from-transparent via-orange-400 to-transparent"></div>
          </div>
        </div>

        <div className="relative max-w-5xl mx-auto mt-12">

          {ashramData.map((item, index) => (
            <div key={item.id}>
              {/* Conditional rendering for reversed row */}
              <div
                className={`flex flex-col md:flex-row items-center relative ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="md:w-1/3 flex justify-center mb-8 md:mb-0">
                  <div className="bg-orange-100 p-5 rounded-full inline-block shadow-lg">
                    {item.icon}
                  </div>
                </div>
                <div
                  className={`md:w-2/3 ${
                    index % 2 !== 0 ? " text-right" : ""
                  }`}
                >
                  <h2 className="text-2xl font-semibold text-main-color mb-4">
                    {item.title}
                  </h2>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {item.description}
                  </p>
                  <div
                    className={`w-16 h-1 bg-orange-300 mt-4 ${
                      index % 2 !== 0 ? "ml-auto" : ""
                    }`}
                  ></div>
                </div>
              </div>

              <div className="flex items-center justify-center">
              <div className="border-t-2 border-dashed border-orange-200 w-3/4 my-12"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AshramSection;
