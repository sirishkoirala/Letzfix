import React from "react";
import { Logos } from "../types/logoSupport";
import { useLogos } from "../hooks/useLogos";
import Skeleton from "react-loading-skeleton";

const LogoSupports = () => {
   const { logos, isLoading, isError } = useLogos();
   if (isLoading)
      return (
         <div className="containers">
            <Skeleton count={12}/>
         </div>
      );
   if (isError) return <div>Error...</div>;

   return (
      <>
         <div className="flex flex-wrap items-center justify-center containers my-12 px-4 pb-4">
            {logos?.map((logo: Logos) => {
               return (
                  <div className="flex flex-col items-center text-center p-4 w-[280px] h-[220px] ">
                     <img alt="tools-icon" src={logo.image} className="rounded-full mb-2" />
                     <h3 className="text-lg font-semibold text-foreground cursor-pointer">{logo.name}</h3>
                     <p className="text-muted-foreground">{logo.detail}</p>
                  </div>
               );
            })}
         </div>
      </>
   );
};

export default LogoSupports;
