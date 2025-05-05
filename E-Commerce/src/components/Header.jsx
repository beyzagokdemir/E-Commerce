import React from "react";
import "../css/Header.css";
import { CiShoppingBasket } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { FaRegMoon } from "react-icons/fa";

function Header() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div className="flex-row">
        <img className="logo" src="./src/imges/images.png" alt="" />
        <p className="logo-text">Ticaret A.Ş</p>
      </div>

      <div className="flex-row">
        <input
          className="search-input"
          type="text"
          placeholder="Bir şeyler ara"
        />
        <div>
          <CiLight className="icon" />
          {/* <FaRegMoon className="icon" /> */}
          <CiShoppingBasket className="icon" />
        </div>
      </div>
    </div>
  );
}

export default Header;
