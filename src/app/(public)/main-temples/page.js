import React from "react";
import HeroSection from "../../components/HeroBanner";
import MainTemple from "../Section/Temples/MainTemple";
import Places_Temples from "../Section/Temples/Places_Temples";
import BreadcrumbWithBack from "../../components/BreadcrumbWithBack";


const MainTemples = () => {
  const breadcrumbSegments = [
    { label: 'Main Temples' } // The last segment is just the current page title
];
  return (
    <>
      <HeroSection
        imageUrl="/assets/images/rishikesh.jpg"
        title="Rishikesh’s Holy Shrines"
        subtitle="Welcome to Rishikesh's Holy Shrines: A spiritual journey awaits."
      />

       <BreadcrumbWithBack
        segments={breadcrumbSegments}
        backHref="/"
        backText="Back to Home"
      />
      
      <MainTemple />
      <Places_Temples />
    </>
  );
};
export default MainTemples;
