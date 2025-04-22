import { NavLink } from "react-router";
import { useContext, useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {
        console.log("User logged out");
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });
  };

  return (
    <section className="fixed top-0 right-0 w-full z-20 bg-blue-50 shadow-md">
      <div className="flex justify-between items-center min-h-17 px-5 py-3">
        {/* Logo */}
        <NavLink to="/">
          <h1 className="cursor-pointer text-blue-950 text-xl md:text-2xl font-bold italic uppercase [text-shadow:_-6px_5px_18px_rgba(231,231,231,0.90)]">
            ASM Coffee Shop
          </h1>
        </NavLink>

        {/* Nav Items */}
        <ul
          className={`absolute duration-500 ${
            open ? "top-16 right-0" : "-right-[300px] top-16"
          } p-5 lg:p-0 rounded-bl-md bg-blue-50 lg:static lg:flex flex flex-col lg:flex-row gap-y-2.5 lg:gap-6 text-[18px] text-blue-950 font-semibold`}
        >
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "border-b-orange-500 border-b-2" : ""
              }
            >
              Home
            </NavLink>
          </li>

          {/* Routes only for logged-in users */}
          {user ? (
            <>
              <li>
                <NavLink
                  to="/add_coffee"
                  className={({ isActive }) =>
                    isActive ? "border-b-orange-500 border-b-2" : ""
                  }
                >
                  Add Coffee
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/users"
                  className={({ isActive }) =>
                    isActive ? "border-b-orange-500 border-b-2" : ""
                  }
                >
                  Users
                </NavLink>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="hover:text-orange-500 transition-colors duration-200"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              {/* Only for non-logged-in users */}
              <li>
                <NavLink
                  to="/signin"
                  className={({ isActive }) =>
                    isActive ? "border-b-orange-500 border-b-2" : ""
                  }
                >
                  Sign-In
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/signup"
                  className={({ isActive }) =>
                    isActive ? "border-b-orange-500 border-b-2" : ""
                  }
                >
                  Sign-Up
                </NavLink>
              </li>
            </>
          )}
        </ul>

        {/* Mobile device Toggle Button */}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="lg:hidden cursor-pointer z-10"
        >
          {open ? (
            <MdClose className="text-2xl text-blue-950" />
          ) : (
            <MdMenu className="text-2xl text-blue-950" />
          )}
        </button>
      </div>
    </section>
  );
};

export default Navbar;
