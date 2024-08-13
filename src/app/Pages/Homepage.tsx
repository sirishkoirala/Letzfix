"use client";
import React from "react";
import { useDevices } from "./../hooks/useDevices";
import Navbar from "../components/Navbar";
import HeroHomePage from "../components/HeroHomePage";
import DeviceCard from "../components/DeviceCard";
import OnScrollPop from "../components/OnScrollPop";
import Companies from "../components/Companies";
import FeatureTitle from "../components/FeatureTitle";
import FeatureCard from "../components/FeatureCard";
import Feature2 from "../components/Feature2";
import LogoSupports from "../components/LogoSupports";
import BlackBanner from "../components/BlackBanner";
import VideoBlock from "../components/VideoBlock";
import TechRepairDoneRight from "../components/TechRepairDoneRight";
import WhatWeCanFixForYou from "../components/WhatWeCanFixForYou";
import { Device } from "../types/deviceTypes";

const Homepage: React.FC = () => {
   const { devices, isLoading, isError } = useDevices();
   if (isLoading) return <div>Loading...</div>;
   if (isError) return <div>Failed to load devices</div>;

   return (
      <>
         <OnScrollPop />
         <Navbar />
         <HeroHomePage />
         <h1 className="text-3xl font-semibold containers mt-8 tracking-tight">Our Services</h1>
         <div className="flex flex-wrap containers gap-12 my-8 items-center justify-center">
            {devices?.map((device: Device) => (
               <DeviceCard key={device.name} device={device} />
            ))}
         </div>
         <Companies />
         <FeatureTitle />
         <FeatureCard />
         <Feature2 />
         <LogoSupports />
         <BlackBanner />
         <VideoBlock />
         <TechRepairDoneRight />
         <WhatWeCanFixForYou />
      </>
   );
};

export default Homepage;
