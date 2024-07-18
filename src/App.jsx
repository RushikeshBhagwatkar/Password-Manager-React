import { useState } from 'react'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import './App.css'
import Manager from './components/Manager'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <div>
    <Manager/>
    </div>
    
    <Footer/>
      
    </>
  )
}

export default App
