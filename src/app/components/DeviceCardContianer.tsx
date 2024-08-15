import React from "react";
import { Device } from "../types/deviceTypes";
import DeviceCard from "../components/DeviceCard";
import { useDevices } from "./../hooks/useDevices";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const DeviceCardContianer = () => {
   const { devices, isLoading, isError } = useDevices();
   if (isLoading)
      return (
         <div className="containers">
            <Skeleton count={8} />
         </div>
      );
   if (isError) return <div>Failed to load devices</div>;
   return (
      <>
         <div className="flex flex-wrap containers gap-12 my-8 items-center justify-center">
            {devices?.map((device: Device) => (
               <DeviceCard key={device.id} device={device} />
            ))}
         </div>
      </>
   );
};

export default DeviceCardContianer;
