import React from "react";
import { repairDevices } from "../types/repairDevices";
import { useRepairDevices } from "../hooks/useRepairDevices";
import Skeleton from "react-loading-skeleton";

const RepairDevices = () => {
   const { repairDevices, isLoading, isError } = useRepairDevices();
   if (isLoading)
      return (
         <div className="containers">
            <Skeleton count={12} />
         </div>
      );
   if (isError) return <div>Error...</div>;

   return (
      <>
         <div className="containers flex flex-wrap gap-4   px-36  mb-[20px]">
            {repairDevices?.map((device: repairDevices) => {
               return (
                  <div className="flex flex-col justify-center w-[240px]  ">
                     <img src={device.image} alt="" className="  object-contain" />
                     <h2 className=" text-[17px] leading-[24px] font-light text-teal-900 text-center cursor-pointer">
                        {device.name}
                     </h2>
                  </div>
               );
            })}
         </div>
      </>
   );
};

export default RepairDevices;
