import React from 'react'
import ShowcaseImg from '../assets/images/showcaseImg.jpg'
import { Box } from '@mui/material'

const ShowcaseBanner = () => {
    const bannerStyle = {
        width: "100%",
        height: "400px",
        backgroundImage : `url(${ShowcaseImg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        position: "relative",
        boxSizing: "border-box"
    }

    const bannerOverlay = {
        position: "absolute",
        width: "100%",
        height: "100%",
        background: "#343434",
        opacity: ".4",
        zIndex: "1"
    }

    const showcaseTextStyle = {
        color: "white",
        zIndex: "100",
        width: "100%",
        height: "100%",
        position: "absolute",
        fontWeight: "400",
        fontSize: "22px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }

  return (
    <div style={bannerStyle}>
        <div style = {bannerOverlay} >
        </div>
        <Box sx={showcaseTextStyle}>Get 20% off if you buy in the next 24 hours</Box>
    </div>
  )
}

export default ShowcaseBanner