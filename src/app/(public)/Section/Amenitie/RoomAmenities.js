// pages/room-amenities.js
"use client";
import React, { useState } from "react";
import {
  FaSnowflake,
  FaCouch,
  FaHotTub,
  FaConciergeBell,
  FaBath,
} from "react-icons/fa";
import { MdLocalLaundryService } from "react-icons/md";
import { GiTowel } from "react-icons/gi";



const RoomAmenities = () => {
  const [activeAmenity, setActiveAmenity] = useState(1);

  const amenities = [
    {
      id: 1,
      name: "Air Conditioning",
      description:
        "Stay cool and comfortable with our state-of-the-art air conditioning system that maintains the perfect temperature year-round.",
      icon: <FaSnowflake size={24} />,
    },
    {
      id: 2,
      name: "Common Area",
      description:
        "Our elegantly designed common area provides the perfect space to socialize, work, or simply unwind in a comfortable environment.",
      icon: <FaCouch size={24} />,
    },
    {
      id: 3,
      name: "Geyser",
      description:
        "Enjoy hot water on demand with our energy-efficient water heating system, ensuring comfort during your entire stay.",
      icon: <FaHotTub size={24} />,
    },
    {
      id: 4,
      name: "Laundry",
      description:
        "Our premium laundry service keeps your clothes fresh and clean, with quick turnaround times and exceptional care.",
      icon: <MdLocalLaundryService size={24} />,
    },
    {
      id: 5,
      name: "Front Desk",
      description:
        "Our attentive 24/7 front desk staff is always ready to assist you with any queries or special requests throughout your stay.",
      icon: <FaConciergeBell size={24} />,
    },
    {
      id: 6,
      name: "Towels",
      description:
        "Premium, plush towels are provided daily, ensuring you always have fresh linens during your stay with us.",
      icon: <GiTowel size={24} />,
    },
    {
      id: 7,
      name: "Common Washroom",
      description:
        "Impeccably maintained common washrooms with premium fixtures and amenities, cleaned regularly throughout the day.",
      icon: <FaBath size={24} />,
    },
  ];

  const activeItem = amenities.find((item) => item.id === activeAmenity);

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl lg:text-5xl md:text-4xl font-bold text-center mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-800 to-orange-500">
              Premium Amenities
            </span>
          </h1>
          <p className="text-gray-700 text-lg lg:text-xl">
            Experience luxury and comfort with our carefully curated selection
            of premium room amenities, designed to enhance your stay.
          </p>
        </div>

        {/* Experience Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenities.map((amenity) => (
            <div key={amenity.id} className="rounded-2xl border border-main-color shadow">
              <div className="p-6 flex flex-col">
                <div
                  className={`w-12 h-12 text-main-color bg-orange-50 rounded-full flex items-center justify-center mb-4`}
                >
                  {amenity.icon}
                </div>
                <h3 className="text-xl text-prime font-semibold mb-2">
                  {amenity.name}
                </h3>
                <p className="text-gray-700 flex-grow">
                  {amenity.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RoomAmenities