import React, { useContext } from "react";
import { useStateValue } from "../stateProvider";
import { useNavigate, Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { Auth } from "../contexts/Auth";
import { ProductsContext } from "../contexts/ProductsContext";

function MainHeader() {
  // const [{ user, basket }, dispatch] = useStateValue();
  // const user = JSON.parse(localStorage.getItem("user"));
  const { user } = useContext(Auth);

  const { logOut } = useLogout();

  const navigate = useNavigate();

  const handelUserClick = (username) => {
    navigate(`/${username}`);
  };

  const handleLogout = () => {
    logOut();
  };

  return (
    <header className=" bg-blue-400 header">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link to={"/"} className="btn btn-ghost normal-case text-xl">
            POD
          </Link>
          {/* <a>POD</a> */}
        </div>
        {!user && (
          <div className="btn-group gap-1">
            <Link to={"/login"}>
              <button className="btn btn-secondary btn-xs m-x1">login</button>
            </Link>
            <Link to={"/signup"}>
              <button className="btn btn-primary btn-xs m-x1">Signup</button>
            </Link>
          </div>
        )}
        {user && (
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge badge-sm indicator-item">8</span>
                </div>
              </label>
              <div
                tabIndex={0}
                className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
              >
                <div className="card-body">
                  <span className="font-bold text-lg">8 Items</span>
                  <span className="text-info">Subtotal: $999</span>
                  <div className="card-actions">
                    <button className="btn btn-primary btn-block">
                      View cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://placeimg.com/80/80/people" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a
                    className="justify-between"
                    onClick={() => handelUserClick(user.username)}
                  >
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <Link to="/createproduct">
                    <button href="/creatproduct">Upload Design</button>
                  </Link>
                </li>
                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

{
  /* <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
  <div className="flex-1 md:flex md:items-center md:gap-12">
    <Link className="block text-white no-underline font-sans" to={"/"}>
      <span className="sr-only">Home</span>
      <h1 className="text-3xl font-sans">ShopKart.</h1>
    </Link>
  </div>

  <div className={"flex items-center md:gap-8 "}>
    <nav className=" sm-block mr-6" aria-labelledby="header-navigation">
      <h2 className="sr-only" id="header-navigation">
        Header navigation
      </h2>

      <ul className="flex items-center gap-6 text-sm">
        <li>
          <Link
            className="text-white transition hover:text-gray-500/75 nav-item"
            to={"/"}
          >
            Products
          </Link>
        </li>
      </ul>
    </nav>

    <div className="flex items-center gap-2">
      <div className="sm:gap-4 sm:flex">
        <a
          className="px-5 py-2.5 text-sm font-medium text-white bg-teal-600 rounded-md shadow cursor-pointer"
          onClick={handleLogout}
        >
          {user == null ? "Login" : "Logout"}
        </a>
      </div>
    </div>
    <Link to="/checkout" className="header__link">
      <div className="relative w-6 h-10">
        {/* Shopping Basket Icon */
}
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-5 w-5 absolute top-3 right-2"
//           viewBox="0 0 20 20"
//           fill="currentColor"
//         >
//           <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
//         </svg>
//         {/* Number of items in the basket */}
//         <span className="bg-red-500 text-xs w-3 text-center rounded-full absolute top-0 right-0">
//           {basket?.length}
//         </span>
//       </div>
//     </Link>
//   </div>
// </div>
// </div> */}

export default MainHeader;
