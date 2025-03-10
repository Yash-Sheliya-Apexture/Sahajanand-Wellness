// src/app/(public)/page.js
import HeroSection from "./components/HeroSection";
import ServiceSection from "./components/ServiceSection";
import RoomSection from "../(public)/components/RoomCardsSection/RoomsSection";
import WellnessSection from "./components/WellnessSection";
import AshramSection from "./components/AshramSection";
import GallerySection from "./components/GallerySection";
import GuestReviewSection from "./components/GuestReviewSection";
import GangaMaiyaSection from "./components/GangaMaiyaSection";


export default function Home () {

    const roomIdsToDisplay = [1, 2, 5, 6]; // Example: show rooms with IDs 1, 2, 5 and 6

    return(
        <>
            <HeroSection />
            <ServiceSection />
            <RoomSection roomIds={roomIdsToDisplay}/>
            <WellnessSection />
            <AshramSection />
            <GallerySection />
            <GuestReviewSection/>
            <GangaMaiyaSection />
        </>
    )
}