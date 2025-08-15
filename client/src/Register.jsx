import axios from "axios";
import React from "react";
import { useState } from "react";

export const Register = () => {
   const [user, setUser] = useState({
      name: "",
      email: "",
      password: "",
      phone: "",
   });
   const handleChange = (e) => {
      setUser((prev) => {
         return { ...prev, [e.target.name]: e.target.value };
      });
   };
   const handleSubmit = async () => {
      console.log(user);
      let data = await axios.post("http://localhost:4500/register", {
         ...user,
      });
      console.log(data);
   };
   return (
      <>
         <div className="text-center m-20">
            <h1 className="text-3xl font-bold">Register</h1>
            <br />
            <input
               type="text"
               name="name"
               placeholder="username"
               onChange={handleChange}
               className="border border-blue-900 rounded-lg p-4"
            />
            <br />
            <input
               type="email"
               name="email"
               placeholder="email"
               onChange={handleChange}
               className="border border-blue-900 rounded-lg p-4"
            />
            <br />
            <input
               type="password"
               name="password"
               placeholder="password"
               onChange={handleChange}
               className="border border-blue-900 rounded-lg p-4"
            />
            <br />
            <input
               type="phone"
               name="phone"
               placeholder="phone"
               onChange={handleChange}
               className="border border-blue-900 rounded-lg p-4"
            />
            <br />
            <br />
            <button
               onClick={handleSubmit}
               className="border border-blue-900 rounded-lg p-4">
               Register
            </button>
         </div>
      </>
   );
};
