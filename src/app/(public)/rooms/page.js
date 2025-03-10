// rooms/page.js (rooms/page.js, depending on your Next.js setup)
"use client";
import React from "react";
import RoomCard, { roomsData } from "../../components/RoomsCard"; // Adjust the path to RoomCard
import BreadcrumbWithBack from "../../components/BreadcrumbWithBack";

const RoomsPage = () => {
  const breadcrumbSegments = [{ label: "Rooms" }]; // Simple breadcrumb for this page

  return (
    <>
      {/* Breadcrumb */}
      <BreadcrumbWithBack
        segments={breadcrumbSegments}
        backHref="/"
        backText="Back to Home"
      />
      <section className="All-RoomsPage py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl text-prime font-bold mb-4">All Our Rooms</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roomsData.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default RoomsPage;
