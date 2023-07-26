import { Container, Box } from '@mui/material'
import React from 'react'
import ShowcaseBanner from '../components/ShowcaseBanner'
import CategoriesSection from '../components/CategoriesSection'


const Home = () => {

  const homeRootStyle = {
    marginTop: "16px",
    flex: "1",
    width: "100%",
    maxWidth: "100vw",
    boxSizing: "border-box",
    position: "relative"
  }

  return (
    <div style={homeRootStyle} className='Home'>
      <ShowcaseBanner/>
      {/* <Container sx={{
          border: "1px solid red"
      }}>
      </Container> */}
        <CategoriesSection/>
      {/* <div>
      </div> */}
    </div>
  )
}

export default Home