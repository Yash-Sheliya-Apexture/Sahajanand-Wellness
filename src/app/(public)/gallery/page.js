import React from "react";
import BreadcrumbWithBack from "../../components/BreadcrumbWithBack";
import Gallery from "../Section/Gallery/Gallery";

const GalleryPage = () => {
  const breadcrumbSegments = [
    { label: "Gallery" }, // The last segment is just the current page title
  ];
  return (
    <>
      <BreadcrumbWithBack
        segments={breadcrumbSegments}
        backHref="/"
        backText="Back to Home"
      />
      <Gallery />
    </>
  );
};

export default GalleryPage;
