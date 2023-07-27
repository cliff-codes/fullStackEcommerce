import React from 'react'
import { Link } from 'react-router-dom'

const formatProductName = (name) => {
    if(name.length > 16){
        const formattedName = `${name.slice(0,16)}...`
        return formattedName
    }else return name
}


const ProductCard = ({product}) => {
    const {image, title, price}  = product
  return (
    <Link to= "/details" style={{color: "black", textDecoration: "none"}}>
        <div style={{
        width: "250px",
        margin: "16px 0"
    }}>
        <div className='imgWrapper' style={{
            width: "100%",
            height: "300px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
            boxSizing: "border-box"
        }}>
            <div className='img' style={{
                maxWidth : "100px",
                height: "180px",
                position: "relative"
            }}>
                <img src={`${image}`} width="100%" height= "100%"/>
            </div>
            <div style={{textAlign: "center"}}>{formatProductName(title)}</div>
            <div style={{textAlign: "center", fontWeight: 600}}>{`$${price}`}</div>
            </div>
        </div>
    </Link>
  )
}

export default ProductCard