import React from 'react'
import { Box } from '@mui/material'
import CategoryCard from './CategoryCard'

//----------------importing images for card -------------//
import Men from '../assets/images/men.jpg'
import Women from '../assets/images/Women.jpg'
import Electronics from '../assets/images/electronics.jpg'
import Jewellery from '../assets/images/jewellery.jpg'


const CategoriesSection = () => {

    const categoryWrapper = {
        maxWidth: "100%",
        boxSizing: "border-box",
        marginBottom: "32px",
        overflow: "hidden"
    }

    const titleStyle = {
        fontSize: "18px",
        margin: "32px 0 8px 0",
        fontWeight: "bold",
        textAlign: "center"
    }

    const boxSectionStyle = {
        display: "flex",
        justifyContent: "center"
    }

  return (
    <div style={categoryWrapper}>
        <Box sx={titleStyle}>Product Categories</Box>
        <Box sx={boxSectionStyle}>
            <CategoryCard bgImg={Men} cardName={"Men Clothing"} />
            {/* <CategoryCard bgImg={Women} cardName={"Women Clothing"} /> */}
            {/* <CategoryCard bgImg={Electronics} cardName={"Electronics"} /> */}
            {/* <CategoryCard bgImg={Jewellery} cardName={"Jewellery"} />  */}
        </Box>
    </div>
  )
}

export default CategoriesSection