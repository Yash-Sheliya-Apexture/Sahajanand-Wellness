// "use client"
// import { useState, useEffect } from 'react';
// import { Star, ThumbsUp, Award, MessageCircle } from 'lucide-react';

// const GuestReviewSection = ({ initialReviews = [] }) => {
//   const [reviews, setReviews] = useState(initialReviews);
//   const [filter, setFilter] = useState('all');
//   const [showForm, setShowForm] = useState(false);
//   const [newReview, setNewReview] = useState({
//     name: '',
//     rating: 5,
//     comment: '',
//     date: new Date().toISOString(),
//     helpful: 0,
//     images: [],
//   });

//   // Sample reviews if none provided
//   useEffect(() => {
//     if (reviews.length === 0) {
//       setReviews([
//         {
//           id: 1,
//           name: 'Sarah Johnson',
//           rating: 5,
//           comment: 'Absolutely stunning experience! The service was impeccable and the amenities exceeded all expectations. Will definitely be returning soon.',
//           date: '2025-02-15T00:00:00.000Z',
//           helpful: 24,
//           verified: true,
//           images: ['/api/placeholder/200/150'],
//           tags: ['Family trip', 'Luxury']
//         },
//         {
//           id: 2,
//           name: 'Michael Chen',
//           rating: 4,
//           comment: 'Great location and wonderful staff. The room was slightly smaller than expected, but very comfortable and clean.',
//           date: '2025-02-02T00:00:00.000Z',
//           helpful: 16,
//           verified: true,
//           tags: ['Business trip']
//         },
//         {
//           id: 3,
//           name: 'Emma Rodriguez',
//           rating: 3,
//           comment: 'Mixed feelings about our stay. Fantastic location and beautiful property, but there were some issues with the room service timing.',
//           date: '2025-01-20T00:00:00.000Z',
//           helpful: 8,
//           verified: true,
//           tags: ['Couple', 'Weekend getaway']
//         }
//       ]);
//     }
//   }, [reviews.length]);

//   const filteredReviews = filter === 'all'
//     ? reviews
//     : reviews.filter(review => {
//         if (filter === 'positive') return review.rating >= 4;
//         if (filter === 'critical') return review.rating <= 3;
//         if (filter === 'verified') return review.verified;
//         if (filter === 'with-photos') return review.images?.length > 0;
//         return true;
//       });

//   const averageRating = reviews.length
//     ? (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1)
//     : 0;

//   const ratingCounts = [5, 4, 3, 2, 1].map(rating => ({
//     rating,
//     count: reviews.filter(review => review.rating === rating).length,
//     percentage: Math.round((reviews.filter(review => review.rating === rating).length / reviews.length) * 100) || 0
//   }));

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const updatedReviews = [
//       ...reviews,
//       {
//         ...newReview,
//         id: reviews.length + 1,
//         date: new Date().toISOString(),
//         helpful: 0,
//         verified: true,
//       }
//     ];
//     setReviews(updatedReviews);
//     setNewReview({
//       name: '',
//       rating: 5,
//       comment: '',
//       date: new Date().toISOString(),
//       helpful: 0,
//       images: [],
//     });
//     setShowForm(false);
//   };

//   const handleHelpful = (id) => {
//     setReviews(reviews.map(review =>
//       review.id === id
//         ? {...review, helpful: review.helpful + 1}
//         : review
//     ));
//   };

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-12">
//       {/* Header Section */}
//       <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
//         <div>
//           <h2 className="text-3xl font-bold text-gray-900">Guest Reviews</h2>
//           <div className="flex items-center mt-2">
//             <div className="flex mr-2">
//               {[1, 2, 3, 4, 5].map((star) => (
//                 <Star
//                   key={star}
//                   className={`w-5 h-5 ${parseFloat(averageRating) >= star ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
//                 />
//               ))}
//             </div>
//             <span className="text-2xl font-bold text-gray-900">{averageRating}</span>
//             <span className="text-sm text-gray-500 ml-2">from {reviews.length} reviews</span>
//           </div>
//         </div>

//         <button
//           onClick={() => setShowForm(!showForm)}
//           className="mt-4 md:mt-0 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-full transition-colors duration-300 flex items-center"
//         >
//           <MessageCircle className="w-4 h-4 mr-2" />
//           Write a Review
//         </button>
//       </div>

//       {/* Review Form */}
//       {showForm && (
//         <div className="bg-white p-6 rounded-xl shadow-lg mb-8 border border-indigo-100">
//           <h3 className="text-xl font-semibold mb-4">Share Your Experience</h3>
//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label className="block text-gray-700 mb-2">Your Name</label>
//               <input
//                 type="text"
//                 value={newReview.name}
//                 onChange={(e) => setNewReview({...newReview, name: e.target.value})}
//                 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                 required
//               />
//             </div>

//             <div className="mb-4">
//               <label className="block text-gray-700 mb-2">Rating</label>
//               <div className="flex space-x-1">
//                 {[1, 2, 3, 4, 5].map((star) => (
//                   <button
//                     key={star}
//                     type="button"
//                     onClick={() => setNewReview({...newReview, rating: star})}
//                     className="focus:outline-none"
//                   >
//                     <Star
//                       className={`w-8 h-8 ${newReview.rating >= star ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
//                     />
//                   </button>
//                 ))}
//               </div>
//             </div>

//             <div className="mb-4">
//               <label className="block text-gray-700 mb-2">Your Review</label>
//               <textarea
//                 value={newReview.comment}
//                 onChange={(e) => setNewReview({...newReview, comment: e.target.value})}
//                 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 min-h-32"
//                 required
//               />
//             </div>

//             <div className="flex justify-end space-x-3">
//               <button
//                 type="button"
//                 onClick={() => setShowForm(false)}
//                 className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
//               >
//                 Cancel
//               </button>
//               <button
//                 type="submit"
//                 className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
//               >
//                 Submit Review
//               </button>
//             </div>
//           </form>
//         </div>
//       )}

//       {/* Rating Breakdown */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
//         <div className="md:col-span-1 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
//           <h3 className="text-lg font-semibold mb-4">Rating Breakdown</h3>
//           <div className="space-y-3">
//             {ratingCounts.map(({rating, count, percentage}) => (
//               <div key={rating} className="flex items-center">
//                 <div className="w-16 text-sm font-medium">{rating} stars</div>
//                 <div className="flex-1 mx-2">
//                   <div className="w-full bg-gray-200 rounded-full h-2">
//                     <div
//                       className="bg-indigo-600 h-2 rounded-full"
//                       style={{ width: `${percentage}%` }}
//                     ></div>
//                   </div>
//                 </div>
//                 <div className="w-10 text-sm text-right text-gray-500">{count}</div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Filter Section */}
//         <div className="md:col-span-2">
//           <div className="flex flex-wrap gap-2 mb-6">
//             <button
//               onClick={() => setFilter('all')}
//               className={`px-4 py-2 rounded-full text-sm font-medium ${filter === 'all' ? 'bg-indigo-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}`}
//             >
//               All Reviews
//             </button>
//             <button
//               onClick={() => setFilter('positive')}
//               className={`px-4 py-2 rounded-full text-sm font-medium ${filter === 'positive' ? 'bg-indigo-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}`}
//             >
//               Positive
//             </button>
//             <button
//               onClick={() => setFilter('critical')}
//               className={`px-4 py-2 rounded-full text-sm font-medium ${filter === 'critical' ? 'bg-indigo-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}`}
//             >
//               Critical
//             </button>
//             <button
//               onClick={() => setFilter('verified')}
//               className={`px-4 py-2 rounded-full text-sm font-medium ${filter === 'verified' ? 'bg-indigo-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}`}
//             >
//               Verified Stays
//             </button>
//             <button
//               onClick={() => setFilter('with-photos')}
//               className={`px-4 py-2 rounded-full text-sm font-medium ${filter === 'with-photos' ? 'bg-indigo-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}`}
//             >
//               With Photos
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Reviews List */}
//       <div className="space-y-6">
//         {filteredReviews.length === 0 ? (
//           <div className="text-center py-10">
//             <p className="text-gray-500">No reviews match your filters.</p>
//           </div>
//         ) : (
//           filteredReviews.map((review) => (
//             <div key={review.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transition-all hover:shadow-md">
//               <div className="flex justify-between items-start">
//                 <div className="flex items-start">
//                   <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-800 font-bold text-xl mr-4">
//                     {review.name.charAt(0)}
//                   </div>
//                   <div>
//                     <div className="flex items-center">
//                       <h4 className="font-semibold text-lg">{review.name}</h4>
//                       {review.verified && (
//                         <div className="ml-2 flex items-center text-green-600 text-xs font-medium">
//                           <Award className="w-3 h-3 mr-1" />
//                           Verified Stay
//                         </div>
//                       )}
//                     </div>
//                     <div className="flex items-center mt-1">
//                       <div className="flex mr-2">
//                         {[1, 2, 3, 4, 5].map((star) => (
//                           <Star
//                             key={star}
//                             className={`w-4 h-4 ${review.rating >= star ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
//                           />
//                         ))}
//                       </div>
//                       <span className="text-sm text-gray-500">
//                         {new Date(review.date).toLocaleDateString('en-US', {
//                           month: 'short',
//                           day: 'numeric',
//                           year: 'numeric'
//                         })}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="mt-4">
//                 <p className="text-gray-700">{review.comment}</p>
//               </div>

//               {review.images && review.images.length > 0 && (
//                 <div className="mt-4 flex flex-wrap gap-2">
//                   {review.images.map((image, index) => (
//                     <img
//                       key={index}
//                       src={image}
//                       alt={`Review by ${review.name}`}
//                       className="w-20 h-20 object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
//                     />
//                   ))}
//                 </div>
//               )}

//               {review.tags && review.tags.length > 0 && (
//                 <div className="mt-3 flex flex-wrap gap-2">
//                   {review.tags.map((tag, index) => (
//                     <span
//                       key={index}
//                       className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//               )}

//               <div className="mt-4 flex justify-between items-center">
//                 <button
//                   onClick={() => handleHelpful(review.id)}
//                   className="flex items-center text-sm text-gray-500 hover:text-indigo-600"
//                 >
//                   <ThumbsUp className="w-4 h-4 mr-1" />
//                   Helpful ({review.helpful})
//                 </button>
//               </div>
//             </div>
//           ))
//         )}
//       </div>

//       {/* Pagination */}
//       {filteredReviews.length > 0 && (
//         <div className="mt-8 flex justify-center">
//           <nav className="flex items-center space-x-2">
//             <button className="px-3 py-1 rounded border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50">
//               Previous
//             </button>
//             <button className="px-3 py-1 rounded bg-indigo-600 text-white">1</button>
//             <button className="px-3 py-1 rounded border border-gray-300 text-gray-700 hover:bg-gray-50">2</button>
//             <button className="px-3 py-1 rounded border border-gray-300 text-gray-700 hover:bg-gray-50">3</button>
//             <span className="px-1">...</span>
//             <button className="px-3 py-1 rounded border border-gray-300 text-gray-700 hover:bg-gray-50">
//               Next
//             </button>
//           </nav>
//         </div>
//       )}
//     </div>
//   );
// };

// export default GuestReviewSection;

"use client";
// ReviewList.jsx
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import reviewImg1 from "../../../../public/assets/images/review-img-1.jpg";
import reviewImg2 from "../../../../public/assets/images/review-img-2.jpg";
import reviewImg3 from "../../../../public/assets/images/review-img-3.jpg";

const reviews = [
  {
    id: 1,
    name: "Emma Thompson",
    avatar: reviewImg1,

    rating: 5,
    review:
      "“I have traveled all over the world and stayed in amazing places, but this is indeed in a category of its own.”",
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    avatar: reviewImg2,

    rating: 4,
    review:
      "the spiritual home to something called “life enhancement” and “wellness",
  },
  {
    id: 3,
    name: "Sarah Johnson",
    avatar: reviewImg3,

    rating: 5,
    review:
      "“If I could survive The Ashram for one week, then I could do anything.”",
  },
];

const ReviewCard = ({ review }) => {
  return (
    <div className="bg-white border rounded-2xl overflow-hidden shadow-md transition-all duration-300 group transform hover:-translate-y-2">
      <div className="p-6">
        <div className="flex items-center gap-4">
          <div className="">
            <Image
              src={review.avatar}
              alt={`${review.name} avatar`}
              className="w-16 h-16 rounded-full object-cover ring-2 ring-orange-100"
            />
          </div>
          <div>
            <h3 className="font-bold text-gray-800 text-lg">{review.name}</h3>
            <div className="flex mt-1">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={`h-4 w-4 ${
                    i < review.rating ? "text-orange-400" : "text-gray-200"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
        <hr className="my-4 " />
        <div className="mt-4">
          <p className="text-gray-600 italic leading-relaxed">
            {review.review}
          </p>
        </div>
      </div>
    </div>
  );
};

const ReviewList = () => {
  return (
    <section className="Guest-Review py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl lg:text-5xl md:text-4xl font-bold text-center mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-800 to-orange-500">
              Guest Reviews
            </span>
          </h1>

          <div className="flex justify-center mt-8">
            <div className="h-1 w-80 bg-gradient-to-r from-transparent via-orange-400 to-transparent"></div>
          </div>
        </div>

        {/* Display Reviews in a Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewList;
