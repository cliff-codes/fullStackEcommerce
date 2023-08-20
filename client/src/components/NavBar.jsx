import React from 'react'
import {Box, Container} from '@mui/material'


//-------------file imports -----------------
import LogoSvg from './LogoSvg'
import SearchBar from './SearchBar'
import CartAndUserSection from './CartAndUserSection'

const NavBar = () => { 

    const navStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
    }

    const navShadowStyle = {
      // boxShadow: " 0px 2px 3px 0px rgba(0,0,0,0.4)"
    }

  return (
    <Box sx = {navShadowStyle}>
      <Container sx={navStyle}>
        <LogoSvg/>
        <SearchBar/>
        <CartAndUserSection/>
      </Container>
    </Box>
  )
}

export default NavBar