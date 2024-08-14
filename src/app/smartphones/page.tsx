import React from "react";
import OnScrollPop from "../components/OnScrollPop";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SmartphoneHero from "../components/SmartphoneHero";
import CompaniesInRepair from "../components/CompaniesInRepair";
import WhatWeCanFixForYou from "../components/WhatWeCanFixForYou";
import VideoBlock from "../components/VideoBlock";
import RepairsReplacements from "../components/RepairsReplacements";
import RepairDevices from "../components/RepairDevices";

const page = () => {
   return (
      <>
         <OnScrollPop />
         <Navbar />
         <SmartphoneHero />
         <CompaniesInRepair />
         <RepairsReplacements />
         <VideoBlock />
         <WhatWeCanFixForYou />
         <RepairDevices /> {/* throws stack error */}
         <Footer />
      </>
   );
};

export default page;
