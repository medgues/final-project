import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const EditProductForm = () => {
  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const { fetch } = useFetch();
  const { id } = useParams();
  const navigate = useNavigate();

  const handelSubmit = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const product = { title, img, postedBy: user.username };
    const url = `/api/products/${id}`; //add the id

    const res = await fetch({ url, data: product, method: "patch", user });
    navigate(`/${user.username}`);
  };

  return (
    <div className="h-4/6 w-1/3 p-4 bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8">
      {/* <div> {error && <p className="text-rose-600">{error}</p>}</div> */}
      <div className="space-y-6" action="#">
        <h5 className="text-xl font-medium text-gray-900 ">Edit Design</h5>
        <div>
          <label
            htmlFor="title"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="dragon t-shirt"
            required=""
          />
        </div>
        <div>
          <label
            htmlFor="img"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Image
          </label>
          <input
            type="text"
            name="img"
            id="img"
            value={img}
            onChange={(e) => setImg(e.target.value)}
            placeholder="img"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            required=""
          />
        </div>

        <div className="flex text-sm font-medium text-gray-500 ">
          <button
            // disabled={isLoading}
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
            onClick={handelSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
export default EditProductForm;
