import { Container, Box } from '@mui/material'
import React from 'react'
import ShowcaseBanner from '../components/ShowcaseBanner'
import CategoriesSection from '../components/CategoriesSection'


const Home = () => {

  const homeRootStyle = {
    marginTop: "16px",
    flex: "1"
  }

  return (
    <div style={homeRootStyle} className='Home'>
      <ShowcaseBanner/>
      <Container>
        <CategoriesSection/>
      </Container>
    </div>
  )
}

export default Home