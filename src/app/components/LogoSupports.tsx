import React from "react";

const LogoSupports = () => {
   return (
      <>
         <div className="flex flex-wrap items-center justify-center containers my-12 px-4 pb-4">
            <div className="flex flex-col items-center text-center p-4 w-[280px] h-[220px] ">
               <img alt="tools-icon" src="./logoSupport/device-repair.svg" className="rounded-full mb-2" />
               <h3 className="text-lg font-semibold text-foreground cursor-pointer">Trusted professionals</h3>
               <p className="text-muted-foreground">We have thousands of U.S.-based experts ready to help.</p>
            </div>
            <div className="flex flex-col items-center text-center p-4  w-[280px] h-[220px] ">
               <img alt="tools-icon" src="./logoSupport/icons-value.svg" className="rounded-full mb-2" />
               <h3 className="text-lg font-semibold text-foreground cursor-pointer">Speedy service</h3>
               <p className="text-muted-foreground">Most repairs done in 45 minutes or less.</p>
            </div>
            <div className="flex flex-col items-center text-center p-4  w-[280px] h-[220px]">
               <img
                  alt="tools-icon"
                  src="./logoSupport/icons-value-no_cost_diagnostics.svg"
                  className="rounded-full mb-2"
               />
               <h3 className="text-lg font-semibold text-foreground cursor-pointer">Free diagnostics</h3>
               <p className="text-muted-foreground">Not sure what’s wrong? Let us take a look.</p>
            </div>
            <div className="flex flex-col items-center text-center p-4  w-[280px] h-[220px] ">
               <img
                  alt="tools-icon"
                  src="./logoSupport/icons-value-low_price_guarantee.svg"
                  className="rounded-full mb-2"
               />
               <h3 className="text-lg font-semibold text-foreground cursor-pointer">Low price guarantee</h3>
               <p className="text-muted-foreground">
                  We'll beat any local competitor’s published price for the same repair by $5.
               </p>
            </div>
            <div className="flex flex-col items-center text-center p-4  w-[280px] h-[220px] ">
               <img
                  alt="tools-icon"
                  src="./logoSupport/icons-value-one_year_warranty.svg"
                  className="rounded-full mb-2"
               />
               <h3 className="text-lg font-semibold text-foreground cursor-pointer">1-year limited warranty</h3>
               <p className="text-muted-foreground">
                  Most repairs come with our hassle-free warranty—valid at any location.
               </p>
            </div>
         </div>
      </>
   );
};

export default LogoSupports;
