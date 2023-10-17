import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between w-[90%] mx-auto py-3">
      <div className="flex items-center g">
        <h1 className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent text-2xl font-bold bg-clip-text">
          TechShopBD
        </h1>
        <img
          className="w-28 h-10"
          src="https://i.ibb.co/k8NC0vY/logo.png"
          alt=""
        />
      </div>
      <div className="flex items-center gap-5">
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
      </div>
    </div>
  );
};

export default Navbar;
