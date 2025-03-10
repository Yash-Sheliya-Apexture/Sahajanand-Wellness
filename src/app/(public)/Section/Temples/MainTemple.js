import React from "react";
import Image from "next/image";

const MainTemple = () => {
  return (
    <section className="relative py-16">
      <div className="container mx-auto px-4">
        {/* Main heading with decorative elements */}
        <div className="relative space-y-4">
          <h1 className="text-3xl lg:text-5xl md:text-4xl font-semibold text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-800 to-orange-500">
              Sacred Temples of Rishikesh
            </span>
          </h1>
          <p className="text-lg lg:text-xl leading-relaxed text-center text-gray-800 italic">
            "Rishikesh is home to several ancient temples that hold great
            religious and cultural significance, forming the spiritual backbone
            of this holy city."
          </p>
        </div>

        {/* Content with flexbox instead of grid */}
        <div className="flex flex-col lg:flex-row items-center gap-6 mt-8">
          {/* Image with decorative elements */}
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/assets/images/temple-1.jpg"
                alt="Rishikesh Temple"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-6">
                <p className="text-white font-medium text-lg">
                  Experience the divine atmosphere of ancient temples
                </p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="space-y-6 p-6">
              <p className="text-lg leading-relaxed text-gray-700">
                Rishikesh is home to several main temples that hold great
                religious and cultural significance.
              </p>

              <p className="text-lg leading-relaxed text-gray-700">
                Rishikesh is one such destination that not only offers spiritual
                attractions but also allows travellers to rejuvenate amidst
                nature. However, make sure you do not miss out on visiting these
                ancient temples in Rishikesh that form the core of Uttarakhand’s
                essence.
              </p>

              <p className="text-lg leading-relaxed text-gray-700">
                These temples attract devotees and tourists from far and wide
                who come to seek blessings, offer prayers, and experience the
                spiritual ambiance of Rishikesh.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainTemple;
