import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const AddProductForm = () => {
  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [description, setDescription] = useState("");
  const { fetch } = useFetch();
  const navigate = useNavigate();

  const handelSubmit = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const product = { title, img, postedBy: user.username, description };
    const url = "/api/products/";
    fetch({ url, data: product, method: "post", user });
    navigate(`/${user.username}`);
  };

  return (
    <>
      {/* <div className="  hover:cursor-pointer flex flex-col justify-center items-center h-96 sm:w-1/3 w-4/5 bg-white m-2 rounded-md">
        <div className="w-4/5 p-4 my-2 max-w-sm h-full bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8">
          <div> {error && <p className="text-rose-600">{error}</p>}</div>
          <div className="space-y-6" action="#">
            <h5 className="text-xl font-medium text-gray-900 ">
              add new Design
            </h5>
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
                
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div> */}
      <div className="header py-1 flex flex-col justify-center gap-1 items-center bg-slate-600">
        <div className="flex justify-evenly gap-1">
          <input
            style={{ marginLeft: 15, minWidth: 130, maxWidth: 300 }}
            type="text"
            placeholder="title"
            className="input input-bordered input-xs w-full max-w-xs"
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            style={{ marginLeft: 15, minWidth: 130, maxWidth: 300 }}
            type="text"
            placeholder="upload image"
            className="input input-bordered input-xs w-full max-w-xs"
            onChange={(e) => setImg(e.target.value)}
          />
          {/* <input
            type="file"
            className="file-input file-input-bordered file-input-xs w-full max-w-xs"
          /> */}
          <button className="btn btn-primary btn-xs " onClick={handelSubmit}>
            submit
          </button>
        </div>
        <input
          style={{ marginLeft: 15, minWidth: 130, maxWidth: 520 }}
          type="text"
          placeholder="description"
          className="input input-bordered input-xs w-full max-w-xs"
          onChange={(e) => setDescription(e.target.value)}
        />

        <div className="badge badge-warning py-3  justify-centerflex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current flex-shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          <span>
            Carful! your design extension must be `.png` with transparent
            background
          </span>
        </div>
      </div>
    </>
  );
};
export default AddProductForm;
