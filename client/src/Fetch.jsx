import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";

export const Fetch = () => {
   const [products, setProducts] = useState([]);

   const fetchProduct = async () => {
      let { data } = await axios.get("http://localhost:4500/fetch");
      setProducts(data);
   };

   const handleDelete = async (productId) => {
      try {
         await axios.delete(`http://localhost:4500/delete/${productId}`);
         fetchProduct();
         alert("Product deleted successfully");
      } catch (error) {
         console.log(error);
      }
   };
   useEffect(() => {
      fetchProduct();
   }, []);

   return (
      <div className="  flex gap-10 flex-wrap justify-center items-center">
         {products.map((product) => (
            <div
               key={product._id}
               className="w-76 p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
               <img
                  src={product.image || "/vite.svg"}
                  onError={(e) => {
                     e.target.onerror = null; // Prevent infinite loop
                     e.target.src = "/vite.svg"; // default image
                  }}
                  className="w-full h-48 object-contain rounded-t-lg"
               />
               <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {product.title}
               </h5>

               <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                  {product.description}
               </p>
               <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                  {product.category}
               </p>
               <p className="mb-3 font-normal text-gray-50 dark:text-gray-50">
                  $ {product.price}
               </p>
               <div className="flex space-x-4">
                  <Link
                     to={`/fetch/${product._id}`}
                     className=" px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                     See Details
                  </Link>
                  <br />
                  <button
                     onClick={() => handleDelete(product._id)}
                     className=" font-medium border border-red-600 items-center p-2 rounded-lg text-red-600 hover:underline">
                     Delete
                  </button>
               </div>
            </div>
         ))}
      </div>
   );
};
