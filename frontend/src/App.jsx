import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import Home from './pages/Home'
import About from './pages/about'
import Cart from './pages/cart'
import Collection from './pages/collection'
import Contact from './pages/contact'
import Login from './pages/login'
import Orders from './pages/orders'
import PlaceOrder from './pages/placeorder'
import Product from './pages/product'
  

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer />
      <Navbar />
      <SearchBar />
      <Routes>
       
        <Route path='/' element={<Home/>}/>
        <Route path='/collection' element={<Collection/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/product/:productId' element={<Product/> } />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/place-order' element={<PlaceOrder/>}/>
        <Route path='/orders' element={<Orders/>}/>

      </Routes>
      <Footer />
    </div>
  )
}

export default App