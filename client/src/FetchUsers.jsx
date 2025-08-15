import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router";

export const FetchUsers = () => {
   const [users, setUsers] = useState([]);

   const FetchUsers = async () => {
      try {
         const { data } = await axios.get(`http://localhost:4500/users`);
         setUsers(data);
      } catch (error) {
         console.log(error);
      }
   };
   const handleDelete = async (userId) => {
      try {
         alert("Are you sure you want to delete this user?");
         // eslint-disable-next-line no-unused-expressions

         await axios.delete(`http://localhost:4500/deleteuser/${userId}`);
         FetchUsers();
      } catch (error) {
         console.log(error);
      }
   };
   useEffect(() => {
      FetchUsers();
   }, []);

   return (
      <>
         <div className="  flex gap-10 flex-wrap justify-center items-center">
            {users.map((user) => (
               <div
                  key={user._id}
                  className="w-75 p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                  <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                     {user.name}
                  </h5>

                  <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                     {user.email}
                  </p>
                  <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                     {user.password}
                  </p>
                  <p className="mb-3 font-normal text-gray-50 dark:text-gray-50">
                     $ {user.phone}
                  </p>
                  <div className="flex space-x-4">
                     <Link
                        to={`/users/${user._id}`}
                        className=" px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                        See Details
                     </Link>
                     <button
                        onClick={() => {
                           const confirmDelete = window.confirm(
                              "Are you sure you want to delete this user?"
                           );
                           if (confirmDelete) {
                              // Call your delete API or function
                              handleDelete(user._id);
                           }
                        }}
                        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-800">
                        Delete
                     </button>
                  </div>
               </div>
            ))}
         </div>
      </>
   );
};
