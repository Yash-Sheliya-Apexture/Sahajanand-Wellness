"use client";
import React, { useState } from "react";

import HeroBanner from "../../components/HeroBanner"; // Import the new component
import GuidingAshram from "../Section/Ashram/GuidingAshram";
import AdiShankaracharya from "../Section/Ashram/AdiShankaracharya";
import BreadcrumbWithBack from "../../components/BreadcrumbWithBack";


const Ashram = () => {
  const breadcrumbSegments = [
    { label: 'Ashram' } // The last segment is just the current page title
];
  return (
    <>
      {/* Hero Section */}
      <HeroBanner
        imageUrl="/assets/images/ashram.jpg"
        title="Shri Swaminarayan Ashram"
        subtitle="A sanctuary of spiritual wisdom, nestled in the sacred embrace of the Himalayas"
      />
       <BreadcrumbWithBack
        segments={breadcrumbSegments}
        backHref="/"
        backText="Back to Home"
      />
      <AdiShankaracharya />
      <GuidingAshram />
    </>
  );
};

export default Ashram;
