import React from "react";
import { Link } from "react-router-dom";

const Menubar = () => {
  return (
    <div style={{display:"flex"}}>
      <div>
        <h1>WAlMART Shop </h1>
      </div>
      <div>
        <ul style={{ display: "flex", margin: "20px" }}>
          <Link to="/home">
            <li style={{ margin: "20px", listStyle: "none" }}>Home</li>
          </Link>
          <Link to="/about">
            <li style={{ margin: "20px", listStyle: "none" }}>About</li>
          </Link>
          <Link to="/menubar">
            <li style={{ margin: "20px", listStyle: "none" }}>
              Service Center{" "}
            </li>
          </Link>
          <Link to="sign">
            <li style={{ margin: "20px", listStyle: "none" }}>Sign In</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Menubar;
