import React from 'react'

const CategoryCard = ({name, backgroundImage}) => {
  return (

    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }}>
        <div style = {{
            width: "100px",
            height: "100px",
            border: "1px solid red",
            borderRadius: "50%",
            backgroundImage: `{url(${backgroundImage})}`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
        }}>
            
        </div>
        <div>
          {name}
        </div>
    </div>
  )
}

export default CategoryCard