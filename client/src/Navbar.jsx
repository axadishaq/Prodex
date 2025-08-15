import { useState } from "react";
import {
   Home,
   ListOrdered,
   Star,
   Flag,
   BarChart2,
   ShoppingCart,
   Calendar,
   Bell,
   Settings,
   CreditCard,
   Shield,
   ChevronLeft,
   MoreHorizontal,
} from "lucide-react";

export default function ExpandableSidebar() {
   const [isExpanded, setIsExpanded] = useState(false);
   const [activeSection, setActiveSection] = useState("home");

   const mainMenuItems = [
      { id: "home", icon: <Home size={30} />, label: "Accueil" },
      { id: "news", icon: <ListOrdered size={30} />, label: "Actualité" },
      { id: "star", icon: <Star size={30} />, label: "Star" },
   ];

   const discoveryMenuItems = [
      { id: "event", icon: <Flag size={30} />, label: "Event" },
      { id: "stats", icon: <BarChart2 size={30} />, label: "Statistiques" },
      { id: "shop", icon: <ShoppingCart size={30} />, label: "Boutique" },
      { id: "calendar", icon: <Calendar size={30} />, label: "Calendrier" },
   ];

   const accountMenuItems = [
      { id: "notifications", icon: <Bell size={30} />, label: "Notification" },
      { id: "settings", icon: <Settings size={30} />, label: "Paramètres" },
   ];

   const handleMouseEnter = () => {
      setIsExpanded(true);
   };

   const handleMouseLeave = () => {
      setIsExpanded(false);
   };

   return (
      <div className="flex h-full bg-gradient-to-br from-green-300 via-orange-100 to-red-300">
         {/* Sidebar */}
         <div
            className={`relative h-full transition-all duration-300 ease-in-out px-2 bg-opacity-30 backdrop-blur-md rounded-r-2xl shadow-lg hover:shadow-xl ${
               isExpanded ? "w-64" : "w-18"
            }`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            {/* Top menu button */}
            <div className="p-4 flex justify-between items-center">
               <div className="text-2xl font-semibold border-l-4  p-2 rounded-full hover:text-teal-600 transition-all cursor-pointer">
                  A
                  <span
                     className={` whitespace-nowrap transition-opacity duration-300 ${
                        isExpanded ? "opacity-100" : "opacity-0"
                     }`}>
                     sad
                  </span>
               </div>
               <div
                  className={`p-2 rounded-full hover:text-teal-600 transition-all cursor-pointer text-xs ${
                     isExpanded ? "opacity-100" : "opacity-0"
                  }`}>
                  see you!
               </div>
            </div>

            <div className="border-b border-gray-500 mx-3"></div>

            {/* Main Menu */}
            <nav className="mt-4">
               {mainMenuItems.map((item) => (
                  <button
                     key={item.id}
                     onClick={() => setActiveSection(item.id)}
                     className={`flex items-center w-full px-4 py-3 text-left transition-all rounded-lg ${
                        activeSection === item.id
                           ? "text-black font-semibold bg-white bg-opacity-30 shadow-sm"
                           : "text-gray-600 hover:bg-white hover:bg-opacity-30 hover:backdrop-blur-sm"
                     }`}>
                     <span className="inline-flex items-center justify-center w-6">
                        {item.icon}
                     </span>
                     <span
                        className={`ml-4 whitespace-nowrap transition-opacity duration-300 ${
                           isExpanded ? "opacity-100" : "opacity-0"
                        }`}>
                        {item.label}
                     </span>
                  </button>
               ))}
            </nav>

            <div className="border-b border-gray-500 mx-3 my-2"></div>

            {/* Discovery Section */}
            <div
               className={`mt-2 mb-1 px-4 text-gray-500 text-xs font-medium transition-opacity duration-300 ${
                  isExpanded ? "opacity-100" : "opacity-0"
               }`}>
               Discover
            </div>
            <nav>
               {discoveryMenuItems.map((item) => (
                  <button
                     key={item.id}
                     onClick={() => setActiveSection(item.id)}
                     className={`flex items-center w-full px-4 py-3 text-left transition-all rounded-lg ${
                        activeSection === item.id
                           ? "text-black font-semibold bg-white bg-opacity-30 shadow-sm"
                           : "text-gray-600 hover:bg-white hover:bg-opacity-30 hover:backdrop-blur-sm"
                     }`}>
                     <span className="inline-flex items-center justify-center w-6">
                        {item.icon}
                     </span>
                     <span
                        className={`ml-4 whitespace-nowrap transition-opacity duration-300 ${
                           isExpanded ? "opacity-100" : "opacity-0"
                        }`}>
                        {item.label}
                     </span>
                  </button>
               ))}
            </nav>

            <div className="border-b border-gray-500 mx-3 my-2"></div>

            {/* Account Section */}
            <div
               className={`mt-2 mb-1 px-4 text-gray-500 text-xs font-medium transition-opacity duration-300 ${
                  isExpanded ? "opacity-100" : "opacity-0"
               }`}>
               Account
            </div>
            <nav>
               {accountMenuItems.map((item) => (
                  <button
                     key={item.id}
                     onClick={() => setActiveSection(item.id)}
                     className={`flex items-center w-full px-4 py-3 text-left transition-all rounded-lg ${
                        activeSection === item.id
                           ? "text-black font-semibold bg-white bg-opacity-30 shadow-sm"
                           : "text-gray-600 hover:bg-white hover:bg-opacity-30 hover:backdrop-blur-sm"
                     }`}>
                     <span className="inline-flex items-center justify-center w-6">
                        {item.icon}
                     </span>
                     <span
                        className={`ml-4 whitespace-nowrap transition-opacity duration-300 ${
                           isExpanded ? "opacity-100" : "opacity-0"
                        }`}>
                        {item.label}
                     </span>
                  </button>
               ))}
            </nav>
         </div>

         {/* Main Content */}
         <div className="flex-grow p-6">
            <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 h-full">
               <h1 className="text-2xl font-bold text-gray-800 mb-4">
                  {mainMenuItems.find((item) => item.id === activeSection)
                     ?.label ||
                     discoveryMenuItems.find(
                        (item) => item.id === activeSection
                     )?.label ||
                     accountMenuItems.find((item) => item.id === activeSection)
                        ?.label}
               </h1>
               <p className="text-gray-600">
                  Contenu de la page {activeSection}
               </p>
            </div>
         </div>
      </div>
   );
}
