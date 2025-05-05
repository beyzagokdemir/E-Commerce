import React from "react";
import "../css/Header.css";

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

      <div>
        <input
          className="search-input"
          type="text"
          placeholder="Bir şeyler ara"
        />
      </div>
    </div>
  );
}

export default Header;
