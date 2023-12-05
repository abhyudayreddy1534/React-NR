import { LOGO_URL } from "../utils/Constants";
import { useState } from "react";

export const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Order</li>
          <li>About</li>
          <li>Contact</li>
          <li>Profile</li>
          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              const newBtnName = btnName === "Log out" ? "Login" : "Log out";
              setBtnName(newBtnName);
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
