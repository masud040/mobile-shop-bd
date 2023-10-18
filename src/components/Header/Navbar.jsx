import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout()
      .then(() => {
        toast.success("Logout Success");
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="md:flex items-center justify-between w-[90%] mx-auto py-3">
      <Toaster />
      <div className="flex items-center justify-center gap-8">
        <h1 className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent text-2xl font-bold bg-clip-text">
          TechShopBD
        </h1>
        <img
          className="w-28 h-10"
          src="https://i.ibb.co/k8NC0vY/logo.png"
          alt=""
        />
      </div>

      <div className="flex items-center justify-between gap-5">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "p-1 rounded-md bg-rose-200 text-green-600 underline"
              : "p-1"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/addProduct"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "p-1 rounded-md bg-rose-200 text-green-600 underline"
              : "p-1"
          }
        >
          Add Product
        </NavLink>
        <NavLink
          to="/myCart"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "p-1 rounded-md bg-rose-200 text-green-600 underline"
              : "p-1"
          }
        >
          My Cart
        </NavLink>
        {user ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user.photoURL} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow dropdown-content  bg-gray-100 rounded-box  space-y-2"
            >
              <li>
                <a>{user?.email}</a>
              </li>
              <li
                onClick={handleLogout}
                className="
              bg-rose-300 rounded-md px-3"
              >
                <a>Logout</a>
              </li>
            </ul>
          </div>
        ) : (
          <NavLink
            to="/login"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "p-1 rounded-md bg-rose-200 text-green-600 underline"
                : "p-1"
            }
          >
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
