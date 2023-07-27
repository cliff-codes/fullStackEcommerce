// import React from 'react'
// import { Box } from '@mui/material'
// import CategoryCard from './CategoryCard'

// //----------------importing images for card -------------//


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

        import Men from '../assets/images/men.jpg'
        import Women from '../assets/images/Women.jpg'
        import Electronics from '../assets/images/electronics.jpg'
        import Jewellery from '../assets/images/jewellery.jpg'
        import { Link } from 'react-router-dom'

const CategoriesSection = () => {
    const sectionStyle = {
        maxWidth: "100%", 
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxSizing: "border-box",  
        flexWrap: "wrap"
    }

    const cardStyle = {
        width: "100%",
        display: "flex",
        justifyContent: "space-around"
    }
  return (
    <div style={sectionStyle}>
        <div style = {{
            fontWeight: "bold",
            fontSize: "20px",
            marginTop: "32px"
        }}>Categories</div>
        <div style={cardStyle}>
            <Link to= '/categoryItems' style={{
                color: "black",
                textDecoration: "none"
            }}>
                <CategoryCard name={"Men"} backgroundImage={Men}/>
            </Link>
            <Link to = '/categoryItems' style={{
                color: "black",
                textDecoration: "none"
            }}>
                <CategoryCard name={"Women"} backgroundImage={Women}/>
            </Link>
            <Link to = "/categoryItmes" style={{
                color: "black",
                textDecoration: "none"
            }}>
                <CategoryCard name={"Jewellery"} backgroundImage={Jewellery}/>
            </Link>
            <Link to="/categoryItems" style={{
                color: "black",
                textDecoration: "none"
            }}>
                <CategoryCard name={"Electronics"} backgroundImage={Electronics}/>
            </Link>
        </div>
    </div>
  )
}

export default CategoriesSection