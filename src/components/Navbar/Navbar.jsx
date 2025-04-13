import { NavLink } from "react-router";
import { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="fixed top-0 right-0 w-full  z-20 bg-blue-50">
      <div className="flex relative justify-between min-h-17 px-5 items-center shadow-lg">
        <NavLink to="/">
          <h1 className="cursor-pointer text-blue-950 md:text-2xl font-bold italic uppercase [text-shadow:_-6px_5px_18px_rgba(231,231,231,0.90)] ">
            Coffee shop
          </h1>
        </NavLink>
        <ul
          className={`absolute duration-500 ${
            open ? "top-16 right-0" : "-right-[300px] top-16"
          } p-5 lg:p-0 rounded-bl-md bg-blue-50 lg:static lg:flex flex flex-col lg:flex-row gap-y-2.5 lg:gap-6 text-[20px] text-blue-950 font-bold color-1 cursor-pointer `}
        >
          <li>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? " border-b-orange-500 border-b-2"
                  : ""
              }
              to="/"
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "border-b-orange-500 border-b-2"
                  : ""
              }
              to="/add_coffee"
            >
              Add Coffee
            </NavLink>
          </li>

          <li>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "border-b-orange-500 border-b-2"
                  : ""
              }
              to="/users"
            >
              Users
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "border-b-orange-500 border-b-2"
                  : ""
              }
              to="/signin"
            >
              sign-In
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "border-b-orange-500 border-b-2"
                  : ""
              }
              to="/signup"
            >
              Sign-Up
            </NavLink>
          </li>
        </ul>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="lg:hidden cursor-pointer z-10 "
        >
          {open ? (
            <MdClose className="text-2xl z-20 lg:hidden hover:cursor-pointer text-blue-950"></MdClose>
          ) : (
            <MdMenu className="text-2xl z-20 text-blue-950 hover:cursor-pointer lg:hidden "></MdMenu>
          )}
        </button>
      </div>
    </section>
  );
};

export default Navbar;
