
import React from 'react'
import { Link } from 'react-router-dom'


const CategoryCard = ({bgImg, cardName}) => {
    const cardStyle = {
        width: "200px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    }
    return (
        <div style={cardStyle}>
        <Link to={'/categoryItems'} style={{
            textDecoration: "none",
            color: "#343434",
            fontWeight: "400"
        }}>
           <div style={{
        width: "100px",
        height: "100px",
        background: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        borderRadius: "50%"
    }}> 

        </div>
        <div>
            {cardName}
        </div>
        </Link>
    </div>
  )
}

export default CategoryCard