import React from 'react'
import CartSvg from './CartSvg'
import { Box } from '@mui/material'


const CartAndUserSection = () => {

  const wrapperStyle = {
    display: "flex",
    gap: "30px",
    alignItems: "center"
  }

  return (
    <div style={wrapperStyle}>
        <CartSvg/>
        <Box>
           <Box sx = {{
                width: "40px",
                height: "40px",
                background: "#ccc",
                borderRadius: "50%"
           }}>
              
            </Box> 
        </Box>
    </div>
  )
}

export default CartAndUserSection