// import React from 'react'
// import { Box } from '@mui/material'
// import CategoryCard from './CategoryCard'

// //----------------importing images for card -------------//
// import Men from '../assets/images/men.jpg'
// import Women from '../assets/images/Women.jpg'
// import Electronics from '../assets/images/electronics.jpg'
// import Jewellery from '../assets/images/jewellery.jpg'


// const CategoriesSection = () => {

//     const categoryWrapper = {
//         // maxWidth: "100%",
//         boxSizing: "border-box",
//         marginBottom: "32px",
//         overflow: "hidden",
//         height: "250px"
//     }

//     const titleStyle = {
//         fontSize: "18px",
//         margin: "32px 0 8px 0",
//         fontWeight: "bold",
//         textAlign: "center"
//     }

//     const boxSectionStyle = {
//         display: "flex",
//         justifyContent: "center",
//         border: "1px solid red",
//         boxSizing: "border-box"
//     }

//   return (
//     <div style={categoryWrapper}>
//         <Box sx={titleStyle}>Product Categories</Box>
        
//         <div style={boxSectionStyle}>
//             <CategoryCard bgImg={Men} cardName={"Men Clothing"} />
//             <CategoryCard bgImg={Women} cardName={"Women Clothing"} />
//             <CategoryCard bgImg={Electronics} cardName={"Electronics"} />
//             <CategoryCard bgImg={Jewellery} cardName={"Jewellery"} /> 
//         </div>
//     </div>
//   )
// }

// export default CategoriesSection

import React from 'react'
import CategoryCard from './CategoryCard'

const CategoriesSection = () => {
    const sectionStyle = {
        border: "1px solid red",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxSizing: "border-box",   
        position: "relative"
    }

    const cardStyle = {
        width: "100%",
        display: "flex",
        justifyContent :"space-around"
    }
  return (
    <div style={sectionStyle}>
        <div>Categories</div>
        <div style={cardStyle}>
            <CategoryCard/>
            <CategoryCard/>
            <CategoryCard/>
            <CategoryCard/>
        </div>
    </div>
  )
}

export default CategoriesSection