import { useState } from 'react'
import Navbar from '../components/Navbar'

function App() {
  const [darkMode, setDarkMode] = useState(true)

  const toggleDarkMode=()=>{
    setDarkMode(!darkMode)
  }

  return (
<>
<Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
</>
  )
}

export default App
