import React from "react";
import Image from "next/image";
import img from "../../../../public/assets/images/about-img.jpg";
import swaminarayan_logo from "../../../../public/assets/images/swaminarayan-logo.png";
import member1 from "../../../../public/assets/images/review-img-1.jpg";
import member2 from "../../../../public/assets/images/team_member.jpeg";
import member3 from "../../../../public/assets/images/team_member-2.jpg";
import { LuFacebook, LuTwitter, LuInstagram } from "react-icons/lu";
import Link from "next/link";
import ClientsSection from "../../components/ClientsSection";
import HeroSection from "../../components/HeroBanner";
import BreadcrumbWithBack from "../../components/BreadcrumbWithBack";


const About = () => {
  const teamMembers = [
    {
      name: "Swami Govindananda",
      title: "Head Priest and Spiritual Guide",
      description:
        "With decades of experience in Swaminarayan philosophy and rituals, Swami Govindananda oversees all spiritual activities and provides guidance to devotees.",
      imageSrc: member1,
      facebookLink: "#", // Add actual link if available
      twitterLink: "#", // Add actual link if available
      instagramLink: "#", // Add actual link if available
    },
    {
      name: "Sadhu Narayan Das",
      title: "Temple Manager and Seva Coordinator",
      description:
        "Sadhu Narayan Das efficiently manages the daily operations of the ashram, coordinating seva (selfless service) activities and ensuring the comfort of all visitors and residents.",
      imageSrc: member2,
      facebookLink: "#", // Add actual link if available
      twitterLink: "#", // Add actual link if available
      instagramLink: "#", // Add actual link if available
    },
    {
      name: "Santosh Ben Patel",
      title: "Kitchen Coordinator and Prasad Preparer",
      description:
        "Santosh Ben lovingly prepares delicious and sanctified prasad (offering) for the temple, ensuring hygienic and nutritious meals are available for all devotees.",
      imageSrc: member3,
      facebookLink: "#", // Add actual link if available
      twitterLink: "#", // Add actual link if available
      instagramLink: "#", // Add actual link if available
    },
  ];

  const breadcrumbSegments = [
    { label: 'About' } // The last segment is just the current page title
];

  return (
    <section className="About-Page">
      {/* Hero Section */}
      <HeroSection
        imageUrl="/assets/images/about.jpeg"
        title="sahajanand wellness trust"
        subtitle=" A spiritual sanctuary where ancient traditions guide the journey
            to enlightenment"
      />

<BreadcrumbWithBack
        segments={breadcrumbSegments}
        backHref="/"
        backText="Back to Home"
      />

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-10 mt-12">
          <div className="lg:w-1/2 p-6">
            <h1 className="text-3xl lg:text-5xl md:text-4xl font-semibold mb-8">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-800 to-orange-500">
                Our Legacy
              </span>
            </h1>

            <div className="space-y-4">
              <h2 className="text-xl font-medium text-orange-600">
                Tapasya Bhoomi: Sacred Ground for Spiritual Practice
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed">
                Our Ashram stands as a living testament to spiritual dedication,
                where countless Mahatmas have performed their tapasya throughout
                the ages. This sacred energy permeates every corner of our
                grounds.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                The spiritual vibrations left by these enlightened souls
                continue to inspire seekers who visit from across the globe,
                many following in the footsteps of their own Gurus and Acharyas
                who once practiced here.
              </p>

              <div className="flex items-center">
                <div className="w-12 h-1 bg-orange-600 mr-4"></div>
                <p className="text-lg text-gray-700 italic">
                  "A place where heaven meets earth"
                </p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 overflow-hidden">
            <div className="rounded-lg overflow-hidden">
              <Image
                src={img}
                alt="Spiritual chariot sculpture"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Our Story */}
        <div className="Our-Story rounded-lg p-6 text-center mt-12">
          <div className="text-center">
            <div className="w-full flex items-center justify-center mb-2">
              <Image
                src={swaminarayan_logo}
                alt="swaminarayan_logo"
                width={60}
              />
            </div>
            <h1 className="text-3xl lg:text-5xl md:text-4xl font-semibold text-center mb-8">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-800 to-orange-500">
                Our Story
              </span>
            </h1>
            <p className="lg:text-xl text-lg text-gray-700 text-center">
              Our life would be wholesome only if we do good activities and walk
              in the spiritual path. Aim for something in your life, which you
              consider it as good, and the then workout for its success,and do
              it till your death. this is the best method to gain sure success
              in your life. Give more attention to own language, and tell its
              importance to others. If you make others happy, then god would
              give permanent happiness to you. The path of Dharma is very bright
              , and there is no darkness in that. Because of the execellent
              powers of the god, we are able to live in this world without much
              difficulty. we ahave to definitely thank for giving this
              prosperous life to us. Those who live a lazy life are not to be
              considered as humans and Those who live actively like a busy bee
              would only be considered as humans.
            </p>
          </div>
        </div>

        {/* Our Team  */}
        <div className="Our-Team mt-12">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-3xl lg:text-5xl md:text-4xl font-semibold text-center mb-8">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-800 to-orange-500">
                Meet Our Team
              </span>
            </h1>
          </div>

          <div className="mt-10">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="relative bg-white rounded-xl overflow-hidden shadow-sm cursor-pointer"
                >
                  <div className="flex flex-col justify-between h-full">
                    <div>
                      <Image
                        src={member.imageSrc}
                        alt={member.name}
                        objectFit="cover"
                        className="w-full"
                      />
                    </div>

                    <div className="space-y-4 p-4">
                      <div className="font-bold text-xl text-prime">
                        {member.name}
                      </div>

                      <div>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-orange-100 text-main-color">
                          {member.title}
                        </span>
                      </div>

                      <div className="text-gray-700 text-sm line-clamp-2">
                        <span>{member.description}</span>
                      </div>
                    </div>

                    <div className="p-4 flex justify-center gap-4">
                      <Link
                        href={member.facebookLink}
                        className="text-main-color transition-colors duration-200 bg-orange-100 p-2 rounded-full"
                      >
                        <LuFacebook size={20} />
                      </Link>
                      <Link
                        href={member.twitterLink}
                        className="text-main-color transition-colors duration-200 bg-orange-100 p-2 rounded-full"
                      >
                        <LuTwitter size={20} />
                      </Link>
                      <Link
                        href={member.instagramLink}
                        className="text-main-color transition-colors duration-200 bg-orange-100 p-2 rounded-full"
                      >
                        <LuInstagram size={20} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Our Client */}
        <ClientsSection />
      </div>
    </section>
  );
};

export default About;
