import { Link } from 'react-router-dom';
import React, { useState } from "react";
import history from '../History';
import h1 from '../images/h4.png';
import logo from '../images/logo.jpg';
import HdrAutoIcon from '@mui/icons-material/HdrAuto';
import { createTheme, ThemeProvider } from '@mui/material/styles';


import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import DrawerComp from "./Drawer";
import { height } from '@mui/system';

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  fontSize: 25,
  textColor:"white",
  textDecoration: 'none',
  color:"white"
};
const theme = createTheme({
  palette: {
    neutral: {
      
      contrastText: '#fff',
    },
  },
});

 

const Navbar = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);
  const myStyle1=
  {
    backgroundImage: `url(${h1})` , 
    
  };
  return (
    <nav className='navbar'>
     <React.Fragment>
      <AppBar sx={myStyle1}>
        <Toolbar>
          <HdrAutoIcon sx={{ transform: "scale(2)" }} />
          {isMatch ? (
            <>
              <Typography sx={{ fontSize: "2rem", paddingLeft: "10%" }}>
                PDF STORE
              </Typography>
              <DrawerComp />
            </>
          ) : (
            <>
              <Typography sx={{ fontSize: "30px", paddingLeft: "10%" }}>
                Aditya Engineering College (Autonomous)
              </Typography>

              <Tabs
                sx={{ marginLeft: "auto" ,marginTop:'12px'}}
                indicatorColor="red"
                textColor="white"
                value={value}
                aria-label="secondary tabs example"
                onChange={(e, value) => setValue(value)}
                >

                    <Link style={{textDecoration: 'none',color:"white"}}to="/">
                      <ThemeProvider theme={theme}>
                        <Button  sx={{ marginLeft: "10px",color:"neutral" }} variant="outline">
                          HOME
                        </Button>
                      </ThemeProvider>
                    </Link> 
                    <Link style={{textDecoration: 'none',color:"white"}}to="/About"><Button sx={{ marginLeft: "10px" }} variant="outline">
                      ABOUT
                    </Button>
                    </Link> <Link style={{textDecoration: 'none',color:"white"}}to="/Products"><Button sx={{ marginLeft: "10px" }} variant="outline">
                      CONTACT
                    </Button>
                    </Link> 
              
              </Tabs>
              <Link style={{textDecoration: 'none',color:"white"}}to="/Login"><Button sx={{ marginLeft: "10px" }} variant="contained">
                Sign In
              </Button>
              </Link> 
              <Link style={{textDecoration: 'none',color:"white"}}to="/Signup"><Button sx={{ marginLeft: "10px" }} variant="contained">
                SignUp
              </Button>
              </Link> 
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
    </nav>
  );
};
export default Navbar;
{/* <React.Fragment>
      <AppBar sx={{ background: "#FD752C" }}>
        <Toolbar>
          <AccountBalanceIcon sx={{ transform: "scale(2)" }} />
          {isMatch ? (
            <>
              <Typography sx={{ fontSize: "2rem", paddingLeft: "10%" }}>
                PDF STORE
              </Typography>
              <DrawerComp />
            </>
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: "auto" }}
                indicatorColor="secondary"
                textColor="blue"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
              <Link to="/"><Tab label="Home" ></Tab></Link>
              <Link to="/about"><Tab label="About" ></Tab></Link>
              <Link to="/products"><Tab label="Products" ></Tab></Link>
              </Tabs>
              <Button sx={{ marginLeft: "auto" }} variant="contained">
                Login
              </Button>
              <Button sx={{ marginLeft: "10px" }} variant="contained">
                SignUp
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment> */}