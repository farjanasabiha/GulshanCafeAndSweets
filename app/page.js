"use client";
import { ReactLenis } from "lenis/react";
import HomeHeader from "./Components/Home/HomeHeader";
import RestaurantMenu from "./Components/Home/RestaurantMenu";
import OurGallery from "./Components/Home/OurGallery";
import Testimonial from "./Components/Home/Testimonial";
import LatestNews from "./Components/Home/LatestNews";
import Footer from "./Components/Common/Footer";
import Navbar from "./Components/Common/Navbar";
import FoodTab from "./Components/Home/FoodTab";
export default function Home() {
  return (
    <ReactLenis root>
      <main className="">
        <Navbar />
        <HomeHeader />
        <FoodTab />
        <RestaurantMenu />
        <OurGallery />
        <LatestNews />
        <Testimonial />
        <Footer />
      </main>
    </ReactLenis>
  );
}
