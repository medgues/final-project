import React, { useContext } from "react";
import { Auth } from "../contexts/Auth";
import { ProductsContext } from "../contexts/ProductsContext";
import { useFetch } from "../hooks/useFetch";
import useProducts from "../hooks/useProducts";
import bg from "../../src/assets/shirt.svg";

export default function PopupModel({ product, showModal, setShowModal }) {
  const { fetch } = useFetch();
  const { user } = useContext(Auth);
  const { fetchData } = useProducts();

  const handelDeletDesign = async () => {
    await fetch({
      url: `api/products/${product.id}`,
      method: "delete",
      user,
    });
    //fetch and update global state with new list without the deleted product
    const url = `/api/products/${user.username}`;
    const method = "getProfile";
    fetchData({ url, method, user, data: {} });
    setShowModal(false);
  };
  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-2  max-w-xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex  p-2 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Delete a Design Perminantly
                  </h3>
                </div>
                {/*body*/}
                <div className="relative px-3 flex w-full justify-center items-center">
                  <p className="my-4 w-2/6   text-slate-500 text-lg leading-relaxed">
                    this action will delete your design perminantly, and you
                    wont be able to retrive it again
                  </p>

                  <div className="relative hover:cursor-pointer flex flex-row items-center h-auto sm:w-2/3 w-1/2 bg-slate-300 m-2 rounded-md">
                    <div className="relative">
                      <img
                        src={product.img}
                        alt=""
                        className=" top-10 absolute scale-40"
                      />
                      <img
                        src={bg}
                        alt=""
                        className=" w-full h-44 object-cover overflow-hidden rounded-md"
                      />
                    </div>
                    <div className="flex w-full  justify-start">
                      <div className=" p-2 h-fit self-start">
                        <p>{product.title}</p>
                        <p>by : {product.postedBy}</p>
                        <p className="mt-1">
                          <span>200 DA</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-2 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-emerald-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Non
                  </button>
                  <button
                    className="bg-red-600 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handelDeletDesign}
                  >
                    Delete!
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
