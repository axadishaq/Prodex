import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Register } from "./Register";
import { NewUser } from "./NewUser";
import { Fetch } from "./Fetch";
import { SingleProductDetail } from "./SingleProductDetail";
import { SingleUserDetail } from "./SingleUserDetail";
import { FetchUsers } from "./FetchUsers";
import { Search } from "./Search";
import { AddProduct } from "./AddProduct";
import Navbar from "./Navbar";

function App() {
   const [count, setCount] = useState(0);

   return (
      <>
         {/* <NewUser/> */}

         <BrowserRouter>
            <Navbar />
            <Routes>
               <Route
                  path="/"
                  element={
                     <div className="flex flex-col items-center min-h-screen ">
                        <div className="m-20 flex gap-4 justify-center">
                           <Link
                              to={"/register"}
                              className="p-6 rounded-xl border border-b-cyan-500">
                              Register
                           </Link>
                           <Link
                              to={"/upload"}
                              className="p-6 rounded-xl border border-b-cyan-500">
                              Add Product
                           </Link>
                           <Link
                              to={"/products"}
                              className="p-6 rounded-xl border border-b-cyan-500">
                              Fetch Products
                           </Link>
                           <Link
                              to={"/users"}
                              className="p-6 rounded-xl border border-b-cyan-500">
                              Fetch Users
                           </Link>
                        </div>
                        <div className="flex flex-wrap h-auto gap-4 justify-center">
                           <h1>Shanaya !</h1>
                           <Search />
                        </div>
                     </div>
                  }></Route>
               <Route path="/register" element={<Register />}></Route>
               <Route path="/upload" element={<AddProduct />}></Route>
               <Route path="/products" element={<Fetch />}></Route>
               <Route
                  path="/fetch/:id"
                  element={<SingleProductDetail />}></Route>
               <Route path="/users" element={<FetchUsers />}></Route>
               <Route path="/users/:id" element={<SingleUserDetail />}></Route>
            </Routes>
         </BrowserRouter>
      </>
   );
}

export default App;
