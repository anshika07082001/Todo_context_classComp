import { Box } from "@mui/system";
import React, { useEffect } from "react";
import HomeIcon from "@mui/icons-material/Home";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import useContextHook from "../customHook/useContextHook";

const Navbar = () => {
  const context = useContextHook();

  let navigate = useNavigate();

  // useEffect(() => {
  //   if (Object.keys(context).length > 0) {
  //     navigate("/");
  //   }
  // }, [context]);

// function checks whether user login or not if yes then navigates to profile page
  const profileHandler=()=>{
    if(Object.keys(context.login).length>0){
      navigate('/profile')
    }
  }
// function checks whether user login or not if yes then navigates to settings page
  const settingsHandler=()=>{
    if(Object.keys(context.login).length>0){
      navigate('/settings')
    }
  }

  return (
    <Box sx={{ background: "whiteSmoke", flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Link to="/" className="navbar__links">
            <HomeIcon fontSize="large" />
          </Link>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, marginLeft: "10px" }}
          >
            QUOTES
          </Typography>
          <Link to="/signup" className="navbar__links">
            SignUp / Login
          </Link>&nbsp;&nbsp;&nbsp;&nbsp;
          <Button sx={{color:'white'}} onClick={profileHandler}>Profile</Button>&nbsp;&nbsp;
          <Button sx={{color:'white'}} onClick={settingsHandler}>Settings</Button>
          {/* <Button variant='outlined' sx={{color:'white'}}>Profile</Button>
          <Button variant="outlined" sx={{color:'white'}}>Settings</Button> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
