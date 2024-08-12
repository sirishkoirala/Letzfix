'use client'
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import HeroHomePage from "../components/HeroHomePage";
import DeviceCard from "../components/DeviceCard";
import OnScrollPop from "../components/OnScrollPop";
import { Device } from "../types/deviceTypes";

const Homepage: React.FC = () => {
   const [devices, setDevices] = useState<Device[]>([]);

   useEffect(() => {
      fetch("./data/devices.json")
         .then((response) => response.json())
         .then((data: Device[]) => setDevices(data))
         .catch((error) => console.error("Error fetching devices:", error));
   }, []);

   return (
      <>
         <OnScrollPop />
         <Navbar />
         <HeroHomePage />
         <h1 className="text-3xl font-semibold containers mt-8">Our Services</h1>
         <div className="flex flex-wrap containers gap-12 my-8 items-center justify-center">
            {devices.map((device) => (
               <DeviceCard key={device.name} device={device} />
            ))}
         </div>
      </>
   );
};

export default Homepage;
