"use client";
import { IconArrowNarrowLeft, IconChevronDown } from "@tabler/icons-react";
import React, { useState } from "react";
import { usePhones } from "../hooks/usePhones";
import Skeleton from "react-loading-skeleton";
import { Device, DeviceModel } from "../types/deviceTypes";

const DeviceSelection = () => {
   const { Smartphones, isLoading, isError } = usePhones();
   const [models, setModels] = useState<DeviceModel[]>([]);

   const handlePhoneChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const selectedId = event.target.value;
      const selectedPhone = Smartphones.find((phone: Device) => phone.id === selectedId);
      console.log(selectedPhone);
      if (selectedPhone) {
         setModels(selectedPhone.models);
      } else {
         setModels([]);
      }
   };

   if (isLoading)
      return (
         <div className="containers">
            <Skeleton count={12} />
         </div>
      );

   if (isError) return <div>Error...</div>;

   return (
      <>
         <div className="mt-14 ">
            <div className="h-[480px] ">
               <h1 className="text-[38px] leading-[48px] font-light">What kind of phone is it?</h1>
               <p className="text-[22px] leading-[29px] tracking-tight mt-2 text-gray-500">
                  You’re in good hands—we do 50,000 repairs every month.
               </p>
               <div className="mt-10 mr-14">
                  <div className="relative inline-block w-full">
                     <select
                        className="block appearance-none w-full bg-background border-2 text-black py-5 px-4 pr-8 rounded-lg leading-tight focus:outline focus:bg-white focus:border-black"
                        onChange={handlePhoneChange}
                     >
                        <option disabled selected>
                           Brand
                        </option>
                        {Smartphones && Smartphones.length > 0 ? (
                           Smartphones.map((phone: Device) => (
                              <option key={phone.id} value={phone.id}>
                                 {phone.name}
                              </option>
                           ))
                        ) : (
                           <option disabled>No brands available</option>
                        )}
                     </select>
                     <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 mr-2">
                        <IconChevronDown size={22} />
                     </div>
                  </div>
               </div>

               <div className="mt-4 mr-14">
                  <div className="relative inline-block w-full">
                     <select className="block appearance-none w-full bg-background border-2 text-black py-5 px-4 pr-8 rounded-lg leading-tight focus:outline focus:bg-white focus:border-black">
                        <option disabled selected>
                           Model
                        </option>

                        {models.map((model: DeviceModel) => (
                           <option key={model.model_id} value={model.model_id}>
                              {model.name}
                           </option>
                        ))}
                     </select>
                     <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 mr-2">
                        <IconChevronDown size={22} />
                     </div>
                  </div>
               </div>

               <div className="mt-6 flex flex-col gap-3">
                  <p className="text-[15.5px]">
                     Is this device covered by a protection plan?
                     <span className="underline underline-offset-2 cursor-pointer"> Start a claim </span> for the best
                     price.
                  </p>
                  <p className="text-[15.5px]">
                     Have a question?
                     <span className="underline underline-offset-2 cursor-pointer"> Learn more</span>
                  </p>
               </div>
            </div>
            <div className="">
               <hr className="border" />
               <div className="flex items-center justify-between mt-8 ">
                  <div className="flex items-center">
                     <IconArrowNarrowLeft />
                     <span className="text-[15.5px] underline underline-offset-2">Back</span>
                  </div>
                  <div className="pr-6">
                     <button className="px-4 py-3 bg-gray-200 rounded-full ">Continue</button>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default DeviceSelection;
