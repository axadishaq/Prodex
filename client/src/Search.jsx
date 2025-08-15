import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router";

export const Search = () => {
   const [keyword, setKeyword] = useState("");
   const [data, setData] = useState([]);

   const SearchProduct = async () => {
      try {
         if (keyword) {
            let res = await axios.get(
               `http://localhost:4500/search/key/${keyword}`
            );
            setData(res.data);
         }
      } catch (error) {
         console.log(error);
      }
   };
   useEffect(() => {
      SearchProduct();
   }, [keyword]);

   return (
      <>
         <div className="w-full flex  justify-center items-center">
            <input
               placeholder="Search..."
               onChange={(e) => setKeyword(e.target.value)}
               className="w-3xl m-20 p-4 border border-blue-900 rounded-lg item-center"
            />
         </div>
         <div className="flex flex-wrap gap-10 justify-center items-center">
            {data.map((product, i) => (
               <div
                  key={i}
                  className="  w-96 p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                  <img
                     src={product.image || "/vite.svg"}
                     onError={(e) => {
                        e.target.onerror = null; // Prevent infinite loop
                        e.target.src = "/vite.svg"; // default image
                     }}
                     alt="Product"
                     className="w-full h-48 object-contain rounded-t-lg"
                  />
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-blue-900 dark:text-white">
                     {product.title}
                  </h5>
                  <p className="font-normal text-blue-700 dark:text-blue-400">
                     {product.description}
                  </p>
                  <p className="font-normal text-blue-700 dark:text-blue-400">
                     {product.category}
                  </p>
                  <p className="font-normal text-blue-700 dark:text-blue-400">
                     {product.price}
                  </p>
                  <div className="flex space-x-4">
                     <Link
                        to={`/fetch/${product._id}`}
                        className=" px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                        See Details
                     </Link>
                  </div>
               </div>
            ))}
         </div>
      </>
   );
};
