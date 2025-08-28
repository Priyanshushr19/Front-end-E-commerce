
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import cart_icon from './cart_icon.png';
import { ShopContext } from "../Context/ShopContext"; // ✅ Import context

function Navbar() {
  const { totalItems } = useContext(ShopContext); // ✅ Get cart item count
  const itemCount = totalItems(); // optional: store in variable

  return (
    <div className="flex justify-around items-center p-4 shadow">
      <div className="flex items-center">
        <img className="w-18"
          src="https://raw.githubusercontent.com/lifetimecoding/E-commerce-reactjs/refs/heads/main/frontend/src/assets/logo.webp"
          alt="Logo"
        />
        <h4 className="text-4xl font-bold m-4">Swaybuy</h4>
      </div>

      <ul className="flex gap-10 font-medium text-2xl text-gray-500">
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? 'text-green-500 font-semibold' : 'text-gray-600'}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/Men" className={({ isActive }) => isActive ? 'text-green-500 font-semibold' : 'text-gray-600'}>
            Men
          </NavLink>
        </li>
        <li>
          <NavLink to="/Women" className={({ isActive }) => isActive ? 'text-green-500 font-semibold' : 'text-gray-600'}>
            Women
          </NavLink>
        </li>
        <li>
          <NavLink to="/Kids" className={({ isActive }) => isActive ? 'text-green-500 font-semibold' : 'text-gray-600'}>
            Kids
          </NavLink>
        </li>
      </ul>

      <div className="flex relative items-center">
        <NavLink to="/Login">
          <button className="border-2 mx-5 px-12 py-2 rounded-full text-gray-500 cursor-pointer font-bold">
            Login
          </button>
        </NavLink>

        <div className="relative">
          <NavLink to="/cart">
            <img className="w-12 cursor-pointer" src={cart_icon} alt="Cart" />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {itemCount}
              </span>
            )}
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
