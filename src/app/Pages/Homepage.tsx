"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import HeroHomePage from "../components/HeroHomePage";
import DeviceCard from "../components/DeviceCard";
import OnScrollPop from "../components/OnScrollPop";
import { Device } from "../types/deviceTypes";

const Homepage: React.FC = () => {
   const [devices, setDevices] = useState<Device[]>([]);

   const fetchDevices = async () => {
      try {
         const deviceData: Device[] = [];

         for (let i = 0; i <= 4; i++) {
            const response = await fetch(`http://localhost:3000/${i}`);
            if (!response.ok) {
               throw new Error(`HTTP error! status: ${response.status} for /${i}`);
            }
            const data: Device = await response.json();
            deviceData.push(data);
         }

         setDevices(deviceData);
      } catch (err) {
         console.error(err instanceof Error ? err.message : "An unexpected error occurred");
      }
   };
   console.log(devices);

   useEffect(() => {
      fetchDevices();
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
