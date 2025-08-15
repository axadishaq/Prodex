import axios from "axios";
import React, { useState } from "react";

export const NewUser = () => {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [phone, setPhone] = useState("");
   const handleSubmit = async () => {
      console.log(name, email, password, phone);
      let data = await axios.post("http://localhost:4500/register", {
         name,
         email,
         password,
         phone,
      });
      console.log(data);
   };
   return (
      <>
         <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            id=""
            placeholder="name"
         />
         <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id=""
            placeholder="email"
         />
         <input
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            id=""
            placeholder="phone"
         />
         <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id=""
            placeholder="password"
         />
         <button onClick={handleSubmit}>Register</button>
      </>
   );
};
