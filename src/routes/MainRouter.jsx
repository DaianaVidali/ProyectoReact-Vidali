import React from 'react'
import{BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "../pages/Home"
import Item from "../pages/Item"
import Category from "../pages/Category"
import NavBarComponent from '../components/NavBarComponent/NavBarComponent'

const MainRouter = () => {
  return (
    <BrowserRouter>
     <NavBarComponent/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Item/:id" element={<Item/>} />
        <Route path="/Category/:id" element={<Category/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default MainRouter