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
<Section darkMode={darkMode} title={"Maxi Zeballos"} text={"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa  2aaaaaa aaaaa aaaaa aaaaaaa"} textEnd={true} background={"venyto1"}/>
<Section darkMode={darkMode} title={"Maxi Zeballos"} text={"aaaaaaaaaaaaaaaaaaaaaaa  2aaaaaa aaaaa aaaaa aaaaaaaaaaaaaaaaaaa"} textEnd={false} background={"negrasq2"}/>
<Section darkMode={darkMode} title={"Maxi Zeballos"} text={"aaaaaaaaaaaaaaaa  2aaaaaa aaaaa aaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaa"} textEnd={true} background={"negradl2"}/>
<Section darkMode={darkMode} title={"Maxi Zeballos"} text={"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa   jjj  jk aaaaaaaaaaaaaa"} textEnd={false} background={"gonchobp2"}/>
<Section darkMode={darkMode} title={"Maxi Zeballos"} text={"a  2aaaaaa aaaaa aaaaa a  2aaaaaa aaaaa aaaaa aaaaaaaaaaaaaaaaaa"} textEnd={true} background={"venyto2"}/>
</>
  )
}

export default App
