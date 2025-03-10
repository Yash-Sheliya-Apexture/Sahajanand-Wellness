// import Image from 'next/image';

// const places = [
//   {
//     name: 'Shree Swaminarayan Ashram',
//     description: 'A serene ashram dedicated to spiritual practice and community service.',
//     imageUrl: '/images/swaminarayan-ashram.jpg', // Replace with your image URL
//   },
//   {
//     name: 'Mountain Escape',
//     description: 'Escape into the peaceful mountains surrounding Rishikesh for trekking and breathtaking views.',
//     imageUrl: '/images/mountain-escape.jpg', // Replace with your image URL
//   },
//   {
//     name: 'Town By The Ganges',
//     description: 'Explore the heart of Rishikesh, situated alongside the holy Ganges River.',
//     imageUrl: '/images/town-by-ganges.jpg', // Replace with your image URL
//   },
//   {
//     name: 'Ganga Aarti',
//     description: 'Witness the mesmerizing Ganga Aarti ceremony held every evening on the banks of the Ganges.',
//     imageUrl: '/images/ganga-aarti.jpg', // Replace with your image URL
//   },
//   {
//     name: 'Lakshman Jhula',
//     description: 'Cross the iconic Lakshman Jhula, a suspension bridge with stunning views of the Ganges and surrounding temples.',
//     imageUrl: '/images/lakshman-jhula.jpg', // Replace with your image URL
//   },
//   {
//     name: 'Ram Jhula',
//     description: 'Another famous suspension bridge, Ram Jhula offers similar views and access to ashrams and temples.',
//     imageUrl: '/images/ram-jhula.jpg', // Replace with your image URL
//   },
//   {
//     name: 'Rafting In Rishikesh',
//     description: 'Experience the thrill of white-water rafting on the Ganges River. Different stretches for different skill levels.',
//     imageUrl: '/images/rafting.jpg', // Replace with your image URL
//   },
//   {
//     name: 'Yoga In Rishikesh',
//     description: 'Immerse yourself in yoga and meditation at one of the many renowned yoga schools and ashrams.',
//     imageUrl: '/images/yoga.jpg', // Replace with your image URL
//   },
//   {
//     name: 'Parmarth Niketan Ashram',
//     description: 'One of the largest ashrams in Rishikesh, known for its daily Ganga Aarti and spiritual programs.',
//     imageUrl: '/images/parmarth-niketan.jpg', // Replace with your image URL
//   },
//   {
//     name: 'Gathering At The Ghat',
//     description: 'Join locals and visitors at the ghats along the Ganges for relaxation, reflection, and spiritual connection.',
//     imageUrl: '/images/ghat.jpg', // Replace with your image URL
//   },
// ];

// const VisitPlace = () => {
//   return (
//     <div className="bg-gray-100 py-12">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
//           Places to Visit in Rishikesh
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {places.map((place) => (
//             <div key={place.name} className="bg-white rounded-lg shadow-md overflow-hidden">
//               <Image
//                 src={place.imageUrl}
//                 alt={place.name}
//                 width={600}  // Adjust as needed
//                 height={400} // Adjust as needed
//                 className="object-cover w-full h-48"
//               />
//               <div className="p-4">
//                 <h3 className="text-xl font-semibold text-gray-800 mb-2">{place.name}</h3>
//                 <p className="text-gray-600">{place.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VisitPlace;

// "use client"
// import Image from 'next/image';
// import { useState } from 'react';

// const places = [
//   {
//     name: 'Shree Swaminarayan Ashram',
//     description: 'A serene ashram dedicated to spiritual practice and community service.',
//     imageUrl: '/assets/images/visit-place-1.png',
//     longDescription: 'Shree Swaminarayan Ashram, Rishikesh, is a place of tranquility and devotion. It provides a peaceful environment for spiritual seekers and offers various community service activities.',
//   },
//   {
//     name: 'Mountain Escape',
//     description: 'Escape into the peaceful mountains surrounding Rishikesh for trekking and breathtaking views.',
//     imageUrl: '/assets/images/visit-place-2.png',
//     longDescription: 'The mountains around Rishikesh offer incredible opportunities for hiking, trekking, and enjoying panoramic views of the Himalayas.  Several trails cater to different skill levels.',
//   },
//   {
//     name: 'Town By The Ganges',
//     description: 'Explore the heart of Rishikesh, situated alongside the holy Ganges River.',
//     imageUrl: '/assets/images/visit-place-3.png',
//     longDescription: `Rishikesh is a vibrant town nestled along the banks of the Ganges. It's a hub for spiritual activities, adventure sports, and cultural experiences.`,
//   },
//   {
//     name: 'Ganga Aarti',
//     description: 'Witness the mesmerizing Ganga Aarti ceremony held every evening on the banks of the Ganges.',
//     imageUrl: '/assets/images/visit-place-4.png',
//     longDescription: `The Ganga Aarti is a devotional ritual performed every evening at several ghats in Rishikesh. It's a beautiful spectacle of lights, chants, and prayer.`,
//   },
//   {
//     name: 'Lakshman Jhula',
//     description: 'Cross the iconic Lakshman Jhula, a suspension bridge with stunning views of the Ganges and surrounding temples.',
//     imageUrl: '/assets/images/visit-place-5.png',
//     longDescription: 'Lakshman Jhula is a famous iron suspension bridge that spans the Ganges River. It offers breathtaking views of the surrounding landscape and connects several temples and ashrams.',
//   },
//   {
//     name: 'Ram Jhula',
//     description: 'Another famous suspension bridge, Ram Jhula offers similar views and access to ashrams and temples.',
//     imageUrl: '/assets/images/visit-place-5.png',
//     longDescription: 'Ram Jhula is another iconic suspension bridge across the Ganges, similar to Lakshman Jhula. It provides access to various ashrams, temples, and shops on both sides of the river.',
//   },
//   {
//     name: 'Rafting In Rishikesh',
//     description: 'Experience the thrill of white-water rafting on the Ganges River. Different stretches for different skill levels.',
//     imageUrl: '/assets/images/visit-place-6.png',
//     longDescription: 'Rishikesh is a popular destination for white-water rafting. The Ganges offers different stretches of rapids ranging from beginner-friendly to challenging, catering to various adventure seekers.',
//   },
//   {
//     name: 'Yoga In Rishikesh',
//     description: 'Immerse yourself in yoga and meditation at one of the many renowned yoga schools and ashrams.',
//     imageUrl: '/assets/images/visit-place-7.png',
//     longDescription: `Rishikesh is known as the "Yoga Capital of the World." It's home to numerous yoga schools and ashrams offering various styles of yoga and meditation practices.`,
//   },
//   {
//     name: 'Parmarth Niketan Ashram',
//     description: 'One of the largest ashrams in Rishikesh, known for its daily Ganga Aarti and spiritual programs.',
//     imageUrl: '/assets/images/visit-place-8.png',
//     longDescription: 'Parmarth Niketan is one of the largest ashrams in Rishikesh. It is known for its daily Ganga Aarti, yoga and meditation programs, and spiritual discourses.',
//   },
//   {
//     name: 'Gathering At The Ghat',
//     description: 'Join locals and visitors at the ghats along the Ganges for relaxation, reflection, and spiritual connection.',
//     imageUrl: '/assets/images/visit-place-9.png',
//     longDescription: 'The ghats along the Ganges in Rishikesh are gathering places for locals and tourists alike. They offer a space for relaxation, meditation, and spiritual connection with the holy river.',
//   },
// ];

// const VisitPlace = () => {
//   const [expandedPlace, setExpandedPlace] = useState(null);  // Track which place is expanded

//   const handleReadMore = (placeName) => {
//     setExpandedPlace(placeName === expandedPlace ? null : placeName); // Toggle expansion
//   };

//   return (
//     <div className="bg-gray-50 py-12">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
//           Places to Visit in Rishikesh
//         </h2>

//         <ul className="divide-y divide-gray-200">
//           {places.map((place) => (
//             <li key={place.name} className="py-6">
//               <div className="flex items-center space-x-6">
//                 <div className="flex-shrink-0 w-96 relative">
//                   <Image
//                     src={place.imageUrl}
//                     alt={place.name}
//                     width={500}
//                     height={300}
//                     className="object-cover w-full h-auto rounded-lg"
//                   />
//                 </div>

//                 <div>
//                   <h3 className="text-xl font-semibold text-gray-800">{place.name}</h3>
//                   <p className="text-gray-600 mt-2">{place.description}</p>

//                   {expandedPlace === place.name && (
//                     <p className="text-gray-700 mt-2">{place.longDescription}</p>
//                   )}

//                   <button
//                     className="text-indigo-600 hover:text-indigo-800 mt-2"
//                     onClick={() => handleReadMore(place.name)}
//                   >
//                     {expandedPlace === place.name ? 'Read Less' : 'Read More'}
//                   </button>
//                 </div>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default VisitPlace;

"use client";
// PlacesToVisit.jsx
import React, { useState, useRef } from "react";
import Image from "next/image";
import { FaMapMarkerAlt, FaClock } from "react-icons/fa";

const places = [
  {
    id: 1,
    name: "Shree Swaminarayan Ashram",
    description:
      "Swaminarayan Ashram in Rishikesh City, Rishikesh is a top player in the category Ashrams in the Rishikesh. This well-known establishment acts as a one-stop destination servicing customers both local and from other parts of Rishikesh.",
    image: "/assets/images/visit-place-1.png",
    location: "Near Lakshman Jhula, Tapovan, Rishikesh",
  },
  {
    id: 2,
    name: "Mountain Escape",
    description:
      "In Rishikesh, the Ganga River runs through hills, thus carving a very pretty landscape in the process. This Process. The makes the town of Rishikesh One of the favorite Mountain getaways in India",
    image: "/assets/images/visit-place-2.png",
    location: "Himalayan Foothills surrounding Rishikesh (e.g., Shivpuri area)",
  },
  {
    id: 3,
    name: "Town By The Ganges",
    description:
      "Swaminarayan Ashram in Rishikesh City, Rishikesh is a top player in the category Ashrams in the Rishikesh. This well-known establishment acts as a one-stop destination servicing customers both local and from other parts of Rishikesh.",
    image: "/assets/images/visit-place-3.png",
    location: "Main Market Area, Rishikesh",
  },
  {
    id: 4,
    name: "Ganga Aarti",
    description:
      "after Varanasi’s ganga aarti, the rishikesh aarti is one of the most popular and photographed events in india. it’s a daily event and you must include it in your Rishikesh itinerary",
    image: "/assets/images/visit-place-4.png",
    location: "Triveni Ghat & Parmarth Niketan, Rishikesh",
  },
  {
    id: 5,
    name: "Lakshman Jhula & Ram Jhula",
    description:
      "Lakshman Jhula, though it is closed due to safety reasons right now, is one of the most famous tourist attractions in Rishikesh Ram Jhula is suspension bridge across the Ganga River, and is one of the busiest bridges in rishikesh. Thousand of people cross the bridge daily to visit the ganga ghats and to partake in the Ganga aarti",
    image: "/assets/images/visit-place-5.png",
    location: "Lakshman Jhula & Ram Jhula Area, Rishikesh",
  },
  {
    id: 6,
    name: "Rafting In Rishikesh",
    description:
      "Rishikesh is one of the favorite adventure destination in India. The town is widely popular for white river rafting. it starts from Shivpuri and ends at Lakshman Jhula.",
    image: "/assets/images/visit-place-6.png",
    location: "Rafting launch points near Shivpuri, upstream from Rishikesh",
  },
  {
    id: 7,
    name: "Yoga In Rishikesh",
    description:
      "Rishikesh is not called the Yoga capital of the world for nothing. Yoga enthusiasts come to Rishikesh from all over the world to learn and understand yoga.",
    image: "/assets/images/visit-place-7.png",
    location:
      "Tapovan and Upper Rishikesh area (lots of ashrams concentrated here)",
  },
  {
    id: 8,
    name: "Parmarth Niketan Ashram",
    description:
      "it is the largest non-denomination ashram in Rishikesh. The ashram also hosts the annual week-long international yoga festival.",
    image: "/assets/images/visit-place-8.png",
    location: "Near Ram Jhula, Swarg Ashram, Rishikesh",
  },
  {
    id: 9,
    name: "Gathering At The Ghat",
    description:
      "Rishikesh Ghats see some of the largest congregations of pilgrims. from active prayer sessions to pilgrims sitting quietly in meditation, you’ll find them all here.",
    image: "/assets/images/visit-place-9.png",
    location:
      "Triveni Ghat and other ghats along the Ganges River in Rishikesh",
  },
];

const PlacesToVisit = () => {
  const [activePlace, setActivePlace] = useState(places[0]);
  const featuredPlaceRef = useRef(null);

  const handlePlaceClick = (place) => {
    setActivePlace(place);

    // Scroll to the featured place section
    if (featuredPlaceRef.current) {
      featuredPlaceRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4" ref={featuredPlaceRef}>
        <div className="text-center mb-8 ">
          <h1 className="text-3xl lg:text-5xl md:text-4xl font-bold text-center mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-800 to-orange-500">
              Discover Rishikesh
            </span>
          </h1>
          <p className="lg:text-xl text-lg text-gray-700">
            Spiritual and Adventure Hub of India
          </p>
        </div>

        {/* Featured Place */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <div className="md:flex">
            <div className="md:w-1/2 relative h-auto md:h-96">
              <Image
                src={activePlace.image}
                alt={activePlace.name}
                width={600}
                height={300}
                objectFit="cover"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="md:w-1/2 p-6 space-y-4">
              <div className="uppercase tracking-wide text-sm text-orange-500 font-semibold">
                Featured Place
              </div>
              <h2 className="text-2xl font-bold text-prime">
                {activePlace.name}
              </h2>
              <p className="text-gray-700">{activePlace.description}</p>

              <div className="flex items-center">
                <FaMapMarkerAlt className="h-5 w-5 text-gray-500 mr-2" />
                <span className="text-gray-700">{activePlace.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Place Selection */}
        <div className="mb-8">
          <h3 className="text-3xl font-semibold mb-4">
           <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-800 to-orange-500">
           Places Worth Visiting
           </span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {places.map((place) => (
              <div
                key={place.id}
                className={`border rounded-lg overflow-hidden shadow-md cursor-pointer transition-all duration-300 ${
                  activePlace.id === place.id ? "ring-2 ring-main-color" : ""
                }`}
                onClick={() => handlePlaceClick(place)}
              >
                <div className="relative">
                  <Image
                    src={place.image}
                    alt={place.name}
                    width={500}
                    height={300}
                    objectFit="cover"
                    className="w-full h-full"
                  />
                </div>
                <div className="p-4">
                  <h4 className={`font-bold text-xl ${activePlace.id === place.id ? "text-main-color" : "text-prime" }`}>{place.name}</h4>
                  <p className="text-gray-700 mt-1 line-clamp-2">
                    {place.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* About Rishikesh */}
        <div className="bg-amber-50 rounded-lg p-6 shadow">
          <h3 className="text-2xl font-semibold mb-4 text-prime">
            About Rishikesh
          </h3>
          <p className="text-gray-700 mb-4">
            Nestled in the foothills of the Himalayas along the convergence of
            the Ganges and Chandrabhaga rivers, Rishikesh is known as the 'Yoga
            Capital of the World' and a gateway to the Garhwal Himalayas.
          </p>
          <p className="text-gray-700 mb-4">
            The city is a blend of spiritual significance and adventure
            activities, attracting both pilgrims and thrill-seekers from around
            the globe. With its ashrams, ancient temples, and stunning natural
            beauty, Rishikesh offers a unique experience to all visitors.
          </p>
          <p className="text-gray-700">
            Whether you're seeking spiritual enlightenment, adventure sports, or
            simply a peaceful retreat, Rishikesh has something to offer
            everyone.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PlacesToVisit;
