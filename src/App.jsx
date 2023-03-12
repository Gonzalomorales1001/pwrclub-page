import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../src/components/Navbar'
import './App.css'
import Footer from './components/Footer'
import AsesoriasScreen from './pages/AsesoriasScreen'
import CalculatorsScreen from './pages/CalculatorsScreen'
import HomeScreen from './pages/HomeScreen'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomeScreen/>}/>
        <Route path="/asesorias" element={<AsesoriasScreen/>}/>
        <Route path="/calculadoras" element={<CalculatorsScreen/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
