import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

export const SingleProductDetail = () => {
   const [product, setProduct] = useState(null);

   const { id } = useParams();

   const fetchSingleProduct = async () => {
      try {
         const { data } = await axios.get(`http://localhost:4500/fetch/${id}`);
         setProduct(data);
      } catch (error) {
         console.log(error);
      }
   };
   useEffect(() => {
      fetchSingleProduct();
   }, [id]);

   return (
      <div>
         {product ? (
            <>
               <div className=" m-auto mt-10 block max-w-220 p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                  <img
                     src={product.image || "/vite.svg"}
                     onError={(e) => {
                        e.target.onerror = null; // Prevent infinite loop
                        e.target.src = "/vite.svg"; // default image
                     }}
                     alt="Product"
                     className="w-full h-100 object-contain rounded-t-lg"
                  />
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                     {product.title}
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                     {product.description}
                  </p>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                     {product.category}
                  </p>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                     {product.price}
                  </p>
               </div>
            </>
         ) : (
            <p>loading...</p>
         )}
      </div>
   );
};
