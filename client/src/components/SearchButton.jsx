import React from 'react'
import { Button } from '@mui/material'


const SearchButton = () => {
  return (
    <div>
        <Button  sx={{
            textTransform: "capitalize",
            background: "#343434",
            color: "#fff",
            width: "88px",
            height: "40px",
            ":hover" : {
                background: "#222222"
            }
        }}>Search</Button>
    </div>
  )
}

export default SearchButton