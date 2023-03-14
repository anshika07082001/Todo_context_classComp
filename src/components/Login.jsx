import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useContextHook from "../customHook/useContextHook";
import Navbar from "./Navbar";

const Login = (props) => {
  let navigate = useNavigate();
  const context =useContextHook()
  console.log(context)
  
  const [loginInps, setLoginInps] = useState([
    { label: "Enter Your Email", type: "email", value: "" },
    { label: "Enter Password", type: "password", value: "" },
  ]);

  const loginInpHandler = (obj, e) => {
    loginInps.map((item) => {
      if (item.label === obj.label) {
        item.value = e.target.value;
      }
    });
    setLoginInps([...loginInps]);
  };

  const loginHandler = (e) => {
    e.preventDefault();
    let cond = (ele) => ele.email === loginInps[0].value && ele.pwd===loginInps[1].value;
    let user = props.sign.find(cond);
    console.log(user)
    if (user === undefined) {
      alert("User Not found");
    } else {
      context.setLogin(user)
      navigate("/profile");
    }
  };
  return (
    <>
      <Navbar />
      <Box
        sx={{
          paddingTop: "80px",
          margin: "auto",
          textAlign: "center",
          width: "60%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "80%",
            margin: "auto",
            border: "1px solid grey",
            padding: "20px",
            borderRadius: "10px",
            gap: "20px",
          }}
        >
          <form className="login__form" onSubmit={loginHandler}>
            {loginInps.map((item, i) => {
              return (
                <TextField
                  key={i}
                  variant="outlined"
                  type={item.type}
                  value={item.value}
                  label={item.label}
                  onChange={(e) => loginInpHandler(item, e)}
                />
              );
            })}
            <Typography>
              Don't have an Account&nbsp;
              <Link to="/signup">Sign Up</Link>
            </Typography>
            <Button variant="contained" type="submit">
              Log In
            </Button>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default Login;
