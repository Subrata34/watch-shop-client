import { Button, Input, TextField } from "@mui/material";
import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Menubar from "../MenuBar/Menubar";

const EntryProducts = () => {
    const[name,setName]=useState('');
    const[price,setPrice]=useState('');
    const[discription,setDiscription]=useState('');
    const [image,setImage]=useState(null);
  return (
    <div>
      <Menubar></Menubar>
      <div>
        <form action="">
          <TextField
            label="Name"
            type="name"
            style={{ width: "40%" }}
            onClick={e=>setName(e.target.value)}
            variant="standard"
          />
          <br />
          <TextField
            label="Price"
            type="number"
            style={{ width: "40%" }}
            onClick={e=>setPrice(e.target.value)}
            variant="standard"
          />
          <br />
          <TextField
            label="Discription"
            type="text"
            style={{ width: "40%" }}
            onClick={e=>setDiscription(e.target.value)}
            variant="standard"
          />
          <br />
          <Input accept="image/*" onClick={e=>setImage(e.target.files[0])} type="file" />
          <Button
            variant="contained"
            style={{ width: "40%" }}
            onSubmit={handleSubmit}
          ></Button>
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default EntryProducts;
