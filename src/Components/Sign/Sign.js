import { Button, TextField } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Menubar from "../MenuBar/Menubar";

const Sign = () => {
  return (
    <div>
      <Menubar></Menubar>
      <h1>Please Sign In</h1>
      <form action="">
        <TextField
          label="Email"
          type="email"
          style={{ width: "40%" }}
          variant="standard"
        />
        <br />
        <TextField
          label="Password"
          type="password"
          style={{ width: "40%" }}
          variant="standard"
        />
        <br />
        <Button variant="contained">Sign In</Button>
      </form>
        <Link to="/signUp"> <Button variant="contained">Please Sign Up ?</Button></Link>
      <Footer></Footer>
    </div>
  );
};

export default Sign;
