import React from "react";
import HeroSection from "../../components/HeroBanner";
import Image from "next/image";
import VisitPlace from "../Section/Visit_Place/Places";
import BreadcrumbWithBack from "../../components/BreadcrumbWithBack";

const placeToVisit = () => {
  const breadcrumbSegments = [{ label: "Places to Visit" }]; // Simple breadcrumb for this page
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
      <VisitPlace />
    </>
  );
};
export default placeToVisit;
