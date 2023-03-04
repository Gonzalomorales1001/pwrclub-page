import { useState } from 'react'
import Navbar from '../components/Navbar'
import Section from '../components/Section'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(true)

  const toggleDarkMode=()=>{
    setDarkMode(!darkMode)
  }

  return (
<>
<Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
<Section textEnd={true} background={"venyto1"}/>
<Section textEnd={false}/>
<Section textEnd={true}/>
<Section textEnd={false}/>
<Section textEnd={true}/>
</>
  )
}

export default App
