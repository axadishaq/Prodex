import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";

// export const AddProduct = () => {
//    const navigate = useNavigate();

//    const [title, setTitle] = useState("");
//    const [description, setDescription] = useState("");
//    const [price, setPrice] = useState("");
//    const [category, setCategory] = useState("");
//    const [subcategory, setSubcategory] = useState("");
//    const [image, setImage] = useState(null);

//    const handleSubmit = async (e) => {
//       e.preventDefault();
//       const formData = new FormData();
//       formData.append("title", title);
//       formData.append("description", description);
//       formData.append("price", price);
//       formData.append("category", category);
//       formData.append("subcategory", subcategory);
//       formData.append("image", image);

//       try {
//          const result = await axios.post(
//             "http://localhost:4500/upload",
//             formData,
//             {
//                headers: {
//                   "Content-Type": "multipart/form-data",
//                },
//             }
//          );
//          console.log(result);
//          alert("Product added successfully");
//          navigate("/products");
//       } catch (error) {
//          console.error("Error uploading product:", error);
//          alert("Error uploading product");
//       }
//    };
//    return (
//       <>
//          <div className="max-w-xl mx-auto mt-10 p-8 rounded-2xl shadow-lg">
//             <h1 className="text-3xl font-bold text-blue-900 mb-6 text-center">
//                Add Product
//             </h1>
//             <form action="" onSubmit={handleSubmit} className="space-y-4">
//                <input
//                   value={title}
//                   type="text"
//                   name="title"
//                   placeholder="Enter product title"
//                   onChange={(e) => setTitle(e.target.value)}
//                   className="w-full border border-blue-900 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                />
//                <input
//                   value={description}
//                   type="text"
//                   name="description"
//                   placeholder="Enter product description"
//                   onChange={(e) => setDescription(e.target.value)}
//                   className="w-full border border-blue-900 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                />
//                <input
//                   value={price}
//                   type="number"
//                   name="price"
//                   placeholder="Enter product price"
//                   onChange={(e) => setPrice(e.target.value)}
//                   className="w-full border border-blue-900 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                />
//                <input
//                   value={category}
//                   type="text"
//                   name="category"
//                   placeholder="Enter product category"
//                   onChange={(e) => setCategory(e.target.value)}
//                   className="w-full border border-blue-900 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                />
//                <input
//                   value={subcategory}
//                   type="text"
//                   name="subcategory"
//                   placeholder="Enter product subcategory"
//                   onChange={(e) => setSubcategory(e.target.value)}
//                   className="w-full border border-blue-900 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                />
//                <input
//                   type="file"
//                   name="image"
//                   placeholder="Upload product image"
//                   onChange={(e) => setImage(e.target.files[0])}
//                   className="w-full border border-blue-900 rounded-lg p-4 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-900 file:text-white hover:file:bg-blue-800"
//                />
//                <button
//                   type="submit"
//                   className="w-full bg-blue-900 text-white rounded-lg p-4 mt-2 hover:bg-blue-800 hover:border transition-colors duration-200">
//                   Add Product
//                </button>
//             </form>
//          </div>
//       </>
//    );
// };
export const AddProduct = () => {
   const navigate = useNavigate();
   const [product, setProduct] = useState({
      title: "",
      description: "",
      price: "",
      category: "",
      subcategory: "",
      image: null,
   });
   const handleChange = (e) => {
      setProduct((prev) => {
         return {
            ...prev,
            [e.target.name]:
               e.target.type === "file" ? e.target.files[0] : e.target.value,
         };
      });
   };
   const handleSubmit = async (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append("title", product.title);
      formData.append("description", product.description);
      formData.append("price", product.price);
      formData.append("category", product.category);
      formData.append("subcategory", product.subcategory);
      formData.append("image", product.image);
      try {
         const result = await axios.post(
            "http://localhost:4500/upload",
            formData,
            {
               headers: {
                  "Content-Type": "multipart/form-data",
               },
            }
         );
         console.log(result);
         alert("Product added successfully");
         navigate("/products");
      } catch (error) {
         console.error("Error uploading product:", error);
         alert("Error uploading product");
      }
   };
   return (
      <div className="max-w-xl mx-auto mt-10 p-8 rounded-2xl shadow-lg">
         <h1 className="text-3xl font-bold text-blue-900 mb-6 text-center">
            Add Product
         </h1>
         <form action="" onSubmit={handleSubmit} className="space-y-4">
            <input
               value={product.title}
               type="text"
               name="title"
               placeholder="Enter product title"
               onChange={handleChange}
               className="w-full border border-blue-900 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
               value={product.description}
               type="text"
               name="description"
               placeholder="Enter product description"
               onChange={handleChange}
               className="w-full border border-blue-900 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
               value={product.price}
               type="number"
               name="price"
               placeholder="Enter product price"
               onChange={handleChange}
               className="w-full border border-blue-900 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
               value={product.category}
               type="text"
               name="category"
               placeholder="Enter product category"
               onChange={handleChange}
               className="w-full border border-blue-900 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
               value={product.subcategory}
               type="text"
               name="subcategory"
               placeholder="Enter product subcategory"
               onChange={handleChange}
               className="w-full border border-blue-900 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
               type="file"
               name="image"
               placeholder="Upload product image"
               onChange={handleChange}
               className="w-full border border-blue-900 rounded-lg p-4 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-900 file:text-white hover:file:bg-blue-800"
            />
            <button
               type="submit"
               className="w-full bg-blue-900 text-white rounded-lg p-4 mt-2 hover:bg-blue-800 hover:border transition-colors duration-200">
               Add Product
            </button>
         </form>
      </div>
   );
};


