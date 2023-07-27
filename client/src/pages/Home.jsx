import { Container, Box } from '@mui/material'
import React from 'react'
import ShowcaseBanner from '../components/ShowcaseBanner'
import CategoriesSection from '../components/CategoriesSection'
import FeaturedProductsSection from '../components/FeaturedProductsSection'


const Home = () => {

  const homeRootStyle = {
    marginTop: "16px",
    flex: "1",
    width: "100%",
    maxWidth: "100vw",
    boxSizing: "border-box",
    position: "relative"
  }

  const sectionsWrapper = {
    maxWidth: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }

  return (
    <div style={homeRootStyle} className='Home'>
      <ShowcaseBanner/>
      <div style={sectionsWrapper}>
        <Container sx={{
          margin: "16px 0"
        }}>
          <CategoriesSection/>
        </Container>
        <Container>
          <FeaturedProductsSection/>
        </Container>
      </div>
    </div>
  )
}

export default Home