import React from "react";

const Footer = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          marginLeft: "60px",
          marginRight: "60px",
          marginTop: "-120px",
          borderTop: "-120px",
          paddingTop: "-120px",
        }}
      >
        <div style={{ margin: "120px" }}>
          <h1>Address :</h1>
          <h3>Dhaka,Bangladesh</h3>
        </div>
        <div style={{ margin: "120px" }}>
          <h3>Home</h3>
          <h3>Contact </h3>
          <h3>Services</h3>
          <h3>Products</h3>
          <h3>communication</h3>
        </div>
        <div style={{ margin: "120px" }}>
          <h2>Contact Us:</h2>
          <h3>Email:contact@email.com</h3>
          <h3>Phone: 0130555852</h3>
          <h3>
            <i class="fa-brands fa-facebook"></i>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
