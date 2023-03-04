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
<Section textEnd={false} background={"negra1"}/>
<Section textEnd={true} background={"negradl2"}/>
<Section textEnd={false} background={"venyto2"}/>
<Section textEnd={true} background={"goncho1"}/>
</>
  )
}

export default App
