import { LOGO_URL } from "../utils/Constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

export const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  // const [status, setStatus] = useState("online");
  const onlineStatus = useOnlineStatus();
  const status = onlineStatus ? "online" : "offline";
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li className={status}>{onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>Order</li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
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
