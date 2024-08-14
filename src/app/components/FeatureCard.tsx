import React from "react";
import { feature } from "./../types/featureCard";
import { useFeatureCard } from "../hooks/usefeatureCard";
import Skeleton from "react-loading-skeleton";

const FeatureCard = () => {
   const { featureCard, isLoading, isError } = useFeatureCard();
   if (isLoading)
      return (
         <div className="containers">
            <Skeleton count={1}  height={400} />;
         </div>
      );

   if (isError) {
      return <div>Something went wrong</div>;
   }

   return (
      <>
         <div className="containers flex justify-around items-center flex-wrap ">
            {featureCard?.map((feature: feature) => {
               return (
                  <div className="w-[400px]">
                     <img src={feature.image} alt="google-pixel" className="w-[400px] " />
                     <div className="flex flex-col items-center justify-center">
                        <p className="my-4 text-center">{feature.detail}</p>
                        <button className="rounded-full bg-transparent font-normal text-base px-3 py-1 border-2 border-teal-700 text-teal-700 text-center hover:bg-teal-50 cursor-pointer">
                           {feature.button}
                        </button>
                     </div>
                  </div>
               );
            })}
         </div>
      </>
   );
};

export default FeatureCard;
