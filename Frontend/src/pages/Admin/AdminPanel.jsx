import React, { useEffect, useState } from "react";
import NavBar from "../../Compoents/NavBar";
import { FaCloudUploadAlt } from "react-icons/fa";
import uploadImage from "../../Helper/UploadImg";
import axios from "axios";
import { Link } from "react-router-dom";

const AdminPanel = () => {
  const [menu, setMenu] = useState(false);
  const [data, setData] = useState({
    productName: "",
    category: "",
    productImage: [],
    description: "",
    price: "",
    sellingPrice: "",
  });
  const [products, setProducts] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUploadProduct = async (e) => {
    const file = e.target.files[0];
    const uploadImageCloudinary = await uploadImage(file);
    setData((prev) => ({
      ...prev,
      productImage: [...prev.productImage, uploadImageCloudinary.url],
    }));
  };

  const fetchData = async () => {
    try {
      const res = await axios.get("/api/product/products");
      setProducts(res.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/product/products", data, {
        headers: {
          "content-type": "application/json",
        },
      });
      if (res.status === 200) {
        alert("Product successfully added");
        fetchData();
        setMenu(false); // Close the modal after adding product
        setData({
          productName: "",
          category: "",
          productImage: [],
          description: "",
          price: "",
          sellingPrice: "",
        }); // Reset form
      }
    } catch (error) {
      console.error(error);
    }
  };

  

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`/api/product/product/${id}`);
      if (res.status === 200) {
        alert("Product successfully deleted");
        fetchData();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <NavBar />
      <div className="container mx-auto pt-8 flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-bold">Admin Panel</h1>
          <button
            className="text-white bg-blue-700
            hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
            onClick={() => setMenu(true)}
          >
            Add Product
          </button>
        </div>
        <button
          type="button"
          className="bg-black text-white w-40 py-3 items-center px-4 mb-4"
        >
          Product List
        </button>
      </div>
      {menu && (
        <div
          id="crud-modal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed inset-0 z-50 flex justify-center items-center w-full h-full overflow-y-auto bg-black bg-opacity-50"
        >
          <div className="relative p-4 w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Create New Product
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={() => setMenu(false)}
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <form className="p-4 md:p-5" onSubmit={handleSubmit}>
                <div className="grid gap-4 mb-4 grid-cols-2">
                  <div className="col-span-2">
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="productName"
                      id="productName"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Type product name"
                      required
                      value={data.productName}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="col-span-2 sm:col-span-1">
                    <label
                      htmlFor="price"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Price
                    </label>
                    <input
                      type="number"
                      name="price"
                      id="price"
                      value={data.price}
                      onChange={handleInputChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="$2999"
                      required
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label
                      htmlFor="sellingPrice"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Selling Price
                    </label>
                    <input
                      type="number"
                      name="sellingPrice"
                      value={data.sellingPrice}
                      onChange={handleInputChange}
                      id="sellingPrice"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="$2999"
                      required
                    />
                  </div>

                  <div className="col-span-2">
                    <label
                      htmlFor="description"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Product Description
                    </label>
                    <textarea
                      id="description"
                      rows="4"
                      name="description"
                      value={data.description}
                      onChange={handleInputChange}
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Write product description here"
                    ></textarea>
                  </div>
                  <div className="col-span-2">
                    <label
                      htmlFor="productCategory"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Product Category
                    </label>
                    <select
                      id="category"
                      value={data.category}
                      name="category"
                      onChange={handleInputChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    >
                      <option value="" disabled>
                        Select category
                      </option>
                      <option value="Bedroom">Bedroom</option>
                      <option value="Living Room">Living Room</option>
                      <option value="Set Out">Set Out</option>
                    </select>
                  </div>
                  <div className="col-span-2">
                    <label
                      htmlFor="productImage"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Upload Product Image
                    </label>
                    <div className="w-full flex items-center justify-center">
                      <label
                        htmlFor="dropzone-file"
                        className="flex flex-col items-center justify-center w-full h-20 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                      >
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <FaCloudUploadAlt />
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            Upload product image
                          </p>
                        </div>
                        <input
                          id="dropzone-file"
                          type="file"
                          name="productImage"
                          onChange={handleUploadProduct}
                          className="hidden"
                          multiple
                        />
                      </label>
                    </div>
                    {data.productImage.length > 0 ? (
                      <div className="flex items-center gap-2 mt-2">
                        {data.productImage.map((imgUrl, index) => (
                          <div className="relative group" key={index}>
                            <img
                              src={imgUrl}
                              alt={`Product ${index}`}
                              width={80}
                              height={80}
                              className="bg-slate-100 border cursor-pointer"
                            />
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-red-600 text-xs">
                        *Please upload product image
                      </p>
                    )}
                  </div>
                </div>
                <button
                  type="submit"
                  className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add Product
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg p-6">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Name
              </th>
              <th scope="col" className="py-3 px-6">
                image
              </th>
              <th scope="col" className="py-3 px-6">
                Price
              </th>
              <th scope="col" className="py-3 px-6">
                Selling Price
              </th>
              <th scope="col" className="py-3 px-6">
                Category
              </th>
              <th scope="col" className="py-3 px-6">
                Description
              </th>
              <th scope="col" className="py-3 px-6">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 ? (
              products.map((product, index) => (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {product.productName}
                  </th>
                  <td className="py-4 px-6">
                    <img src={product.productImage[0]} className="w-10 h-10 object-contain" alt="" />
                    </td>
                  <td className="py-4 px-6">{product.price}</td>
                  <td className="py-4 px-6">{product.sellingPrice}</td>
                  <td className="py-4 px-6">{product.category}</td>
                  <td className="py-4 px-6">{product.description}</td>
                  <td className="py-4 px-6 flex items-center gap-2">
                    <Link to={`/admin/edit/${product._id}` }
                      type="button"
                      className="text-white inline-flex items-center bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-2 py-2 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                      
                    >
                      Edit
                    </Link>
                    <button
                      type="button"
                      className="text-white inline-flex items-center bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-2 py-2 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                      onClick={() => handleDelete(product._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="6"
                  className="text-center py-4 px-6 text-gray-500 dark:text-gray-400"
                >
                  No products available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPanel;
