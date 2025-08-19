"use client";
import { ReactLenis } from "lenis/react";
import HomeHeader from "./Components/Home/HomeHeader";
import RestaurantMenu from "./Components/Home/RestaurantMenu";
import OurGallery from "./Components/Home/OurGallery";
import Testimonial from "./Components/Home/Testimonial";
import LatestNews from "./Components/Home/LatestNews";
import Footer from "./Components/Common/Footer";
import Navbar from "./Components/Common/Navbar";
export default function Home() {
  return (
    <ReactLenis root>
      <main className="">
        <Navbar />
        <HomeHeader />
        <RestaurantMenu />
        <OurGallery/>
        <LatestNews />
        {/* <OurChefSection /> */}
        <Testimonial />
        <Footer />
      </main>
    </ReactLenis>
  );
}
