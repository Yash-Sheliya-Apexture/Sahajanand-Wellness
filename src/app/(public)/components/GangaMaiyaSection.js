"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import img1 from "../../../../public/assets/images/arti-img.jpg";
import { FaPlay } from "react-icons/fa6";

const GangaMaiyaSection = () => {
  const [isVideoOpen, setVideoOpen] = useState(false);
  const videoModalRef = useRef(null);
  const videoUrl =
    "https://www.youtube.com/embed/Q0gYQrebGwY?si=b5z776MfFRFRsuWu";
  const [currentVideoUrl, setCurrentVideoUrl] = useState("");

  const openVideoModal = () => {
    setCurrentVideoUrl(videoUrl);
    setVideoOpen(true);
  };

  const closeVideoModal = () => {
    setVideoOpen(false);
    setCurrentVideoUrl("");
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
    <section className="relative bg-gray-50 py-24">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl lg:text-5xl md:text-4xl font-bold text-center mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-800 to-orange-500">
              Ganga Maiya
            </span>
          </h1>

          <div className="flex justify-center mt-8">
            <div className="h-1 w-80 bg-gradient-to-r from-transparent via-orange-400 to-transparent"></div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex flex-col lg:flex-row items-stretch gap-12 mt-12">
          <div className="w-full lg:w-1/2 relative">
            <div className="relative bg-white lg:p-8 p-6 border rounded-3xl shadow-xl z-10 h-full">
              <div className="space-y-6 text-gray-700">
                <p className="text-lg leading-relaxed">
                  The sprawling Ganga basin, an area of 860,000 sq km spread
                  across 11 states, is the world's most populous river basin. It
                  is home to more than 600 million Indians, close to half the
                  country's population; and over 40 percent of the country's GDP
                  is generated in this region.
                </p>

                <p className="text-lg leading-relaxed">
                  The basin provides more than one-third of India's surface
                  water, 90 percent of which is used for irrigation.
                  Paradoxically, this fertile region is also home to some of the
                  poorest sections of India's population, with more than 200
                  million people living below the national poverty line.
                </p>
              </div>

              {/* Stats section */}
              <div className="grid grid-cols-2 gap-6 mt-10">
                <div className="text-center p-4 bg-white border border-main-color rounded-lg">
                  <p className="text-3xl font-bold text-orange-600">600M+</p>
                  <p className="font-semibold">Population</p>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg border border-orange-50">
                  <p className="text-3xl font-bold text-orange-600">40%</p>
                  <p className=" font-semibold text-prime">Of India's GDP</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Image with flowing wave overlay */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative h-full rounded-3xl overflow-hidden shadow-xl group">
              <Image
                src={img1}
                alt="Ganga River with crowds gathered at ghats"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Play button with ripple effect */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative" onClick={openVideoModal}>
                  <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-30"></div>
                  <div className="relative bg-white p-5 rounded-full cursor-pointer transition-all duration-300 hover:scale-110 shadow-lg z-10">
                    <FaPlay className="text-main-color" />
                  </div>
                </div>
              </div>

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-lg font-semibold">
                  Experience the divinity of Ganga Maiya
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-4xl" ref={videoModalRef}>
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
    </section>
  );
};

export default GangaMaiyaSection;
