import { AppBar, styled, Toolbar, Typography,Box, InputBase,Badge, Avatar, Menu, MenuItem } from '@mui/material'
import {Mail, Notifications, Pets} from '@mui/icons-material'

import React, { useState } from 'react'

const StyledToolbar = styled(Toolbar)({
  display:"flex",
  justifyContent:"space-between"
})

const Search = styled("div")(({theme})=>({
  backgroundColor:"white",
  padding: "0 10px",
  borderRadius:theme.shape.borderRadius,
  width:"40%"
}))
const Icons = styled(Box)(({theme})=>({
  display:"none",
  gap:" 20px",
  alignItems:"center",
  [theme.breakpoints.up("sm")]:{
    display:"flex"
  }
}))

const UserBox = styled(Box)(({theme})=>({
  display:"flex",
  gap:" 10px",
  alignItems:"center",
  [theme.breakpoints.up("sm")]:{
    display:"none"
  }
}))
const Navbar = () => {

  const [open, setOpen] = useState(false)
  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography variant='h6' sx={{display:{xs:"none", sm:"block"}}}>_Z</Typography>
        <Pets sx={{display:{xs:"block", sm:"none"}}}/>
        <Search><InputBase placeholder="Search...." /></Search>
        <Icons>
        <Badge badgeContent={4} color="error">
          <Mail />
        </Badge>
        <Badge badgeContent={4} color="error">
          <Notifications />
        </Badge>
        <Avatar src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" sx={{width:30, height:30}} onClick={e=>setOpen(true)}/>
        </Icons>
        <UserBox>
        <Avatar src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" sx={{width:30, height:30}} onClick={e=>setOpen(true)}/>
          <Typography variant='span'>Rohil</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar