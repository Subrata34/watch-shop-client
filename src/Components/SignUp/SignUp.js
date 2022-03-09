import { Button, TextField } from '@mui/material'
import React from 'react'
import Footer from '../Footer/Footer'
import Menubar from '../MenuBar/Menubar'

const SignUp = () => {
  return (
    <div>
        <Menubar></Menubar>
        <h1>Please Sign Up</h1>
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
        <TextField
          label="Retype Password"
          type="password"
          style={{ width: "40%" }}
          variant="standard"
        />
        <br />
        <Button variant="contained" style={{ width: "40%" }}>Sign Up</Button>
      </form>
      <Footer></Footer>

    </div>
  )
}

export default SignUp