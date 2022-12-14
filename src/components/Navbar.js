import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { logOut } from '../helpers/firebase';

export default function NavBar() {
  const {currentUser} = useContext(AuthContext);
  const navigate = useNavigate()
  // const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    
    if(e.target.innerText === "Profile"){
        console.log(e.target.innerText)
        navigate("/profile")
    }else if(e.target.innerText === "NewBlog"){
        navigate("/newblog")
    } else if(e.target.innerText === "Login"){
        navigate("/login")
        
    } else if(e.target.innerText === "Logout"){
      logOut()
        navigate("/")
        
    } else if(e.target.innerText === "Register") {
        navigate("/register")
    } else if(e.target.innerText === "About") {
        navigate("/about")
    }

  };

  return (
    <Box sx={{ flexGrow: 1 }} >
     
      <AppBar position="static" style={{cursor:"pointer"}} sx={{backgroundColor:"darkslategray"}}>
        <Toolbar>
            <Typography variant="h6" color="inherit" sx={{ flexGrow: 3,textAlign:"left"}} style={{marginLeft:"0px"}} onClick={()=>navigate("/")} >
              Erhan TEZER Blog's
            </Typography>
          
          {currentUser ? (
            <Typography variant="h6" component="div" sx={{ flexGrow: 1,textAlign:"end",paddingRight:"1rem"}} > 
            {currentUser?.displayName.toUpperCase()}
          </Typography>):
          (<Typography variant="h6" component="div" sx={{ flexGrow: 1,textAlign:"end",paddingRight:"1rem" }}>
          Guest
        </Typography>)}
          
            <div>

              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
                sx={{ flexGrow: 1,bgcolor:"white",color:"black",fontSize:40,width:"55px",height:"55px",marginLeft:"2px",'&:hover': {
                  backgroundColor: 'black',
                  color:"white",
                  opacity: [0.9, 0.8, 0.7],
                } }}
              >
                {currentUser ? currentUser.displayName[0].toUpperCase():<AccountCircle sx={{fontSize:55,width:"8vh",height:"8vh",color: "darkslategray"}}/> }
              </IconButton>
              {currentUser ? (<Menu
              
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={(e)=>handleClose(e)}>
                    Profile
                </MenuItem>
                <MenuItem onClick={(e)=>handleClose(e)}>NewBlog</MenuItem>
                <MenuItem onClick={(e)=>handleClose(e)}>About</MenuItem>
                <MenuItem onClick={(e)=>handleClose(e)}>Logout</MenuItem>
                
              </Menu>):(<Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={(e)=>handleClose(e)}>
                   Login
                </MenuItem>
                <MenuItem onClick={(e)=>handleClose(e)}>Register</MenuItem>
                <MenuItem onClick={(e)=>handleClose(e)}>About</MenuItem>
              </Menu>)}
              
            </div>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
