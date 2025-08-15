import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

export const SingleUserDetail = () => {
   const [user, setUser] = useState(null);

   const { id } = useParams();

   const fetchSingleUser = async () => {
      try {
         const { data } = await axios.get(`http://localhost:4500/users/${id}`);
         setUser(data);
      } catch (error) {
         console.log(error);
      }
   };
   useEffect(() => {
      fetchSingleUser();
   }, []);

   return (
      <div>
         {user ? (
            <>
               <div className=" m-auto block max-w-2/3 p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                     {user.name}
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                     {user.email}
                  </p>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                     {user.password}
                  </p>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                     {user.phone}
                  </p>
               </div>
            </>
         ) : (
            <p>loading...</p>
         )}
      </div>
   );
};
