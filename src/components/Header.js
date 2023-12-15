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
    <div className="flex justify-between bg-orange-100 shadow">
      <div className="logo-container">
        <img className="w-28" src={LOGO_URL}></img>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">{onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4 font-medium hover:bg-orange-600 hover:text-white">
            <Link to={"/"}>Products</Link>
          </li>
          <li className="px-4 font-medium hover:bg-orange-600 hover:text-white">
            <Link to="/food-order">Food Items</Link>
          </li>
          <li className="px-4 font-medium hover:bg-orange-600 hover:text-white">
            <Link to={"/profile"}>Profiles</Link>
          </li>
          <li className="px-4 font-medium hover:bg-orange-600 hover:text-white">
            <Link to={"/contact"}>Contact</Link>
          </li>
          {/* <li className="px-4 font-medium hover:bg-orange-600 hover:text-white">
            Profile
          </li> */}
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
