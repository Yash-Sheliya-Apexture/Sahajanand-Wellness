"use client";
import React from "react";
import HeroSection from "../../components/HeroBanner";
import History from "../Section/Rishikesh/History";
import ImageGallery from "../Section/Rishikesh/ImageGallery";
import BreadcrumbWithBack from "../../components/BreadcrumbWithBack";

const RishikeshCity = () => {
  const breadcrumbSegments = [
    { label: "Rishikesh City" }, // The last segment is just the current page title
  ];
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        imageUrl="/assets/images/rishikesh-city.jpg"
        title="Visit Rishikesh City"
        subtitle="Discover spiritual serenity and adventure in the Yoga Capital of the World."
      />

      <BreadcrumbWithBack
        segments={breadcrumbSegments}
        backHref="/"
        backText="Back to Home"
      />

      <History />
      <ImageGallery />
    </>
  );
};

export default RishikeshCity;
