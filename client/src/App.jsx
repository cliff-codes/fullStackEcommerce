//---------------------------module imports ---------
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
//-------------------------end of module imports----


//------------------------file imports -------------
import './App.css'
import ProductDetailsPage from './pages/ProductDetailsPage'
import CartPage from './pages/CartPage'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import CategoryPage from './pages/CategoryPage'
//-------------------------end of file imports-------

function App() {
  return (
    <div className='App'>
      <NavBar/>
      <Router>
        <Routes>
          <Route index element = {<Home/>}/>
          <Route path='/details' element = {<ProductDetailsPage/>} />
          <Route path = '/cart' element = {<CartPage/>}/>
          <Route path = '/categoryItems' element = {<CategoryPage/>}/>
        </Routes>
      </Router>
      <Footer/>
    </div>
  )
}

export default App
