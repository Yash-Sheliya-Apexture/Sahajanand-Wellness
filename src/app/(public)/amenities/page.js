import React from "react";
import HeroSection from "../../components/HeroBanner";
import RoomAmenities from '../Section/Amenitie/RoomAmenities';
import BreadcrumbWithBack from "../../components/BreadcrumbWithBack";


const AmenitiesPage = () => {
    const breadcrumbSegments = [
        { label: 'Amenities' } // The last segment is just the current page title
    ];
    return(
        <>
            <HeroSection 
            imageUrl="/assets/images/amenities.jpg"
            title="Amenities"
            subtitle="Welcome to Rishikesh's Holy Shrines: A spiritual journey awaits."
            />
            
            <BreadcrumbWithBack
                segments={breadcrumbSegments}
                backHref="/" //  Adjust this to the correct "back" URL, maybe a rooms listing page
                backText="Back to Home" // Adjust the back text as needed.  "Back to Rooms" or something else might be appropriate.
            />

            <RoomAmenities />
        </>
    )
}
export default AmenitiesPage;