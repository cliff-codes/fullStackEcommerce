import React from 'react'

const CategoryCard = ({name, backgroundImage}) => {
  return (

    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "24px",
      margin: "16px 0",
      padding: "8px 16px",
      transition: "all .3s ease",
      ":hover" : {
        border: "1px solid red"
      }
    }}>
        <div style = {{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center"
        }}>
            
        </div>
        <div>
          {name}
        </div>
    </div>
  )
}

export default CategoryCard