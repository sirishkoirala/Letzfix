import React from "react";

const FeatureCard = () => {
   return (
      <>
         <div className="containers flex justify-around items-center flex-wrap ">
            <div className="w-[400px]">
               <img src="/features/iphone-screen.png" alt="google-pixel" className="w-[400px] " />
               <div className="flex flex-col items-center justify-center">
                  <p className="my-4 text-center">Fix your broken or cracked iPhone screen for a low price</p>
                  <button className="rounded-full bg-transparent font-normal text-base px-3 py-1 border-2 border-teal-700 text-teal-700 text-center hover:bg-teal-50 cursor-pointer">
                     Learn More
                  </button>
               </div>
            </div>
            <div className="w-[400px]">
               <img src="/features/samsung.png" alt="google-pixel" className="w-[400px] " />
               <div className="flex flex-col items-center justify-center">
                  <p className="my-4 text-center">Let our trusted experts repair your cracked Samsung® screen</p>
                  <button className="rounded-full bg-transparent font-normal text-base px-3 py-1 border-2 border-teal-700 text-teal-700 text-center hover:bg-teal-50 cursor-pointer">
                     Learn More
                  </button>
               </div>
            </div>
            <div className="w-[400px]">
               <img src="/features/google-pixel.png" alt="google-pixel" className="w-[400px] " />
               <div className="flex flex-col items-center justify-center">
                  <p className="my-4 text-center">
                     Have your Google Pixel™ put back in one piece by an authorized repair provider
                  </p>
                  <button className="rounded-full bg-transparent font-normal text-base px-3 py-1 border-2 border-teal-700 text-teal-700 text-center hover:bg-teal-50 cursor-pointer">
                     View Details
                  </button>
               </div>
            </div>
         </div>
      </>
   );
};

export default FeatureCard;
