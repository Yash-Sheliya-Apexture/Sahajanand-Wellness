import React from "react";

const GuidingAshram = () => {
    const dailyOperation = {
        title: "Guiding Principles of Our Ashram",
        description:
          "The daily operations of the ashram encompass various activities aimed at spiritual and humanitarian upliftment",
        principles: [
          {
            title: "Residential School",
            description:
              "The ashram welcomes students seeking to immerse themselves in Vedic teachings, particularly those from nearby regions. Admission criteria prioritize orphaned children, those from financially challenged backgrounds aspiring for Vedic education, and offspring of devout parents. The curriculum includes Sanskrit studies, comprehension of Vedas, Puranas, Ramayana, and Mahabharata, alongside disciplined living and yoga. The ashram covers expenses such as attire, winter wear, and meals in addition to state-sponsored education.",
          },
          {
            title: "Daily Yagna Ceremony",
            description:
              "Ritualistic yagna ceremonies, symbolizing cosmic order maintenance, demand precise execution and purity of participants and paraphernalia. Commencing on January 14, 2005, and conducted daily from 7 AM to 9 AM on the river bank of the Ganges, the yagna involves continuous offerings, invoking deities and celestial beings. Participation is open to individuals contributing Rs. 251, with Brahmins overseeing the proceedings, supported by student residents under Bhagat's guidance.",
          },
          {
            title: "Ma Ganga Aarti",
            description:
              "Brahmins conduct Ganga Aarti with milk ablutions, floral offerings, and 51 oil lamps, inviting patrons to participate for Rs. 2100. The ritual aims to solicit blessings for devotees' aspirations. Students partake in the ceremony, adhering to prescribed protocols, followed by meditation sessions facilitated by Bhagat and honored guests. The meticulously orchestrated Aarti is a source of inspiration and spiritual rejuvenation.",
          },
          {
            title: "Annakshetra: Feeding the Soul",
            description:
              "Catering to ascetics and impoverished individuals, the ashram organizes daily meals, served promptly at 10:45 AM. Hermitage residents receive food either in their own vessels or provided plates, while subsequent servings accommodate the needy and laborers. The disciplined process ensures efficient distribution, maintaining consistency in food quality for all recipients, including staff, students, and guests.",
          },
          {
            title: "Gau Shala: Sanctuary of Harmony",
            description:
              "Catering to ascetics and impoverished individuals, the ashram organizes daily meals, served promptly at 10:45 AM. Hermitage residents receive food either in their own vessels or provided plates, while subsequent servings accommodate the needy and laborers. The disciplined process ensures efficient distribution, maintaining consistency in food quality for all recipients, including staff, students, and guests.",
          },
        ],
      };
  return (
    <section className="Principles-of-the-Ashram pb-16">
      <div className="container mx-auto px-4">
        <div className="mb-8 space-y-4">
          <h1 className="text-3xl lg:text-5xl md:text-4xl font-semibold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-800 to-orange-500">
              {dailyOperation.title}
            </span>
          </h1>
          <p className="lg:text-xl text-lg text-gray-700">
            {dailyOperation.description}
          </p>
        </div>

        <div className="space-y-6">
          {dailyOperation.principles.map((principle, index) => (
            <div key={index}>
              <div>
                <h2 className="text-2xl font-semibold text-main-color mb-3">
                  {principle.title}
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <hr className="my-4 border-t border-orange-200" />
        <div>
          <p className="text-lg text-gray-700">
            Established by the vision of Shri Swaminarayan saints, our Rishikesh
            ashram stands as a spiritual beacon, welcoming pilgrims and seekers,
            particularly from Gujarat. Through the generous support of devoted
            families like Shri Pravinbhai Laxmanbhai Lad's, we continue to
            inspire and transform lives.
          </p>
        </div>

      </div>
    </section>
  );
};
export default GuidingAshram;
