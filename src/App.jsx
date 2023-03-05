import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../src/components/Navbar'
import './App.css'
import AsesoriasScreen from './pages/AsesoriasScreen'
import HomeScreen from './pages/HomeScreen'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomeScreen/>}/>
        <Route path="/asesorias" element={<AsesoriasScreen/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
