import React from 'react'
import { AppBar, Box, Input, InputAdornment, Toolbar,Button, Typography, colors } from '@mui/material/';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import logo from "../D.png"
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';
import "../style.css"
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <AppBar  color="transparent" sx={{position :"relative"}}>
      <Toolbar sx={{display:"flex",padding: "0 2rem",justifyContent:"space-between"}}>
        <Box className='margin' >
          <img  height={57} src={logo} alt='###logo###' />
        </Box>
        <Box >
          <Input sx={{border:"2px solid #9e9e9e",borderTopRightRadius:"20%",borderBottomRightRadius:"20%"}}
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
            endAdornment={
              <InputAdornment position="end">
                <Button sx={{borderTopRightRadius:"20%",borderBottomRightRadius:"20%"}} variant="contained">Search</Button>
              </InputAdornment>
            }
          />
        </Box>
        <Box >
          <Toolbar>
            <Box marginRight={3}>
            <AccountCircleOutlinedIcon />
            </Box>
            <Box display={""}>
              <Typography variant='overline'>nikhil chandurkar</Typography>
              <Typography variant='subtitle2' gutterBottom>nikhilchandurkar90@gmail.com</Typography>
            </Box>
          </Toolbar>
        </Box>
        
      </Toolbar>
      <Toolbar  sx={{display:"flex",height:"1rem",padding: "0 2rem",justifyContent:"space-between",backgroundColor:"#ab47bc"}}>
          <Box sx={{display:"flex"}}>
            <Box>
            <Link className='Link' to="/">Home</Link>
            </Box>
              
            <Box>
            <Link className='Link' to="collections">collection</Link>
            </Box>
            <Box>
            <Link className='Link' to="/about">about</Link>
            </Box>
            <Box>
            <Link className='Link' to="/contact">contact us</Link>
            </Box>
          </Box>
          <Box>
            <Link className='Link' to="ca"><AddShoppingCartOutlinedIcon/></Link>
          </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar