import { IconChevronDown } from "@tabler/icons-react";
import React from "react";

const Navbar = () => {
   return (
      <nav className="flex items-center justify-between p-4 containers">
         <div className="flex items-center">
            <img src="logo.jpg" alt="Logo" className="w-28" />
         </div>
         <div className="flex space-x-12 items-center">
            <div className="relative group">
               <button className="flex items-center">
                  Claims
                  <IconChevronDown size={20} />
               </button>
               <div className="absolute left-0 hidden group-hover:block  shadow-lg">
                  <ul className="p-2">
                     <li>
                        <a href="#" className="block px-4 py-2  ">
                           Sub-item 1
                        </a>
                     </li>
                     <li>
                        <a href="#" className="block px-4 py-2 ">
                           Sub-item 2
                        </a>
                     </li>
                  </ul>
               </div>
            </div>
            <div className="relative group">
               <button className="flex items-center">
                  Get tech support
                  <IconChevronDown size={20} />
               </button>
            
               <div className="absolute left-0 hidden group-hover:block  shadow-lg">
                  <ul className="p-2">
                     <li>
                        <a href="#" className="block px-4 py-2  ">
                           Sub-item 1
                        </a>
                     </li>
                     <li>
                        <a href="#" className="block px-4 py-2 ">
                           Sub-item 2
                        </a>
                     </li>
                  </ul>
               </div>
            </div>
            <div className="relative group">
               <button className="flex items-center">
                  Repair a device
                  <IconChevronDown size={20} />
               </button>

               <div className="absolute left-0 hidden group-hover:block shadow-lg">
                  <ul className="p-2">
                     <li>
                        <a href="#" className="block px-4 py-2 ">
                           Sub-item 1
                        </a>
                     </li>
                     <li>
                        <a href="#" className="block px-4 py-2">
                           Sub-item 2
                        </a>
                     </li>
                  </ul>
               </div>
            </div>
            <div className="relative group">
               <button className="flex items-center">
                  Protection plans
                  <IconChevronDown size={20} />
               </button>
               <div className="absolute left-0 hidden group-hover:block  shadow-lg">
                  <ul className="p-2">
                     <li>
                        <a href="#" className="block px-4 py-2">
                           Sub-item 1
                        </a>
                     </li>
                     <li>
                        <a href="#" className="block px-4 py-2">
                           Sub-item 2
                        </a>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
         <button className="bg-teal-600 text-white px-4 py-2 rounded-lg">Statements</button>
      </nav>
   );
};

export default Navbar;
