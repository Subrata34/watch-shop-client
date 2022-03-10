import { Button, Input, TextField } from "@mui/material";
import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Menubar from "../MenuBar/Menubar";

const EntryProducts = () => {
  const [products, setProducts] = useState("");
  const [price, setPrice] = useState("");
  const [discription, setDiscription] = useState("");
  const [image, setImage] = useState(null);
  const handleSubmit = e => {
    e.preventDefault()
    if (!image) {
      return;
    }
    const formData = new FormData();
    formData.append('products', products);
    formData.append('price', price);
    formData.append('discrption', discription);
    formData.append('image', image);
    fetch("http://localhost:5000/products", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div>
      <Menubar></Menubar>
      <div>
        <h1>Please Entry</h1>
        <form action="">
          <TextField
            label="Name"
            type="name"
            style={{ width: "40%" }}
            onChange={(e) => setProducts(e.target.value)}
            variant="standard"
          />
          <br />
          <TextField
            label="Price"
            type="number"
            style={{ width: "40%" }}
            onChange={(e) => setPrice(e.target.value)}
            variant="standard"
          />
          <br />
          <TextField
            label="Discription"
            type="text"
            style={{ width: "40%" }}
            onChange={(e) => setDiscription(e.target.value)}
            variant="standard"
          />
          <br />
          <Input
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
          />
          <br />
          <Button
            variant="contained"
            style={{ width: "40%" }}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default EntryProducts;
