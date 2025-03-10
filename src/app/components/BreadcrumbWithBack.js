// components/BreadcrumbWithBack.js
import React from "react";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const BreadcrumbWithBack = ({
  segments,
  backHref,
  backText = "Back to All Rooms",
}) => {
  return (
    <section className="pt-6">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-gray-500">
            <Link href="/" className="hover:text-main-color transition-colors">
              Home
            </Link>
            {segments.map((segment, index) => (
              <React.Fragment key={index}>
                <span>/</span>
                {segment.url ? (
                  <Link
                    href={segment.url}
                    className="hover:text-main-color transition-colors"
                  >
                    {segment.label}
                  </Link>
                ) : (
                  <span className="text-main-color font-medium underline">
                    {segment.label}
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>

          <Link
            href={backHref}
            className="inline-flex items-center text-main-color hover:underline transition-all duration-300 transform hover:-translate-x-1"
          >
            <FaArrowLeft className="mr-2" /> {backText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BreadcrumbWithBack;
