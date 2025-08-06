import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Pages/Header'
import Carousel from './Pages/Carousel'
import About from './Pages/About'
import OurPrograms from './Pages/OurPrograms'
import Stats from './Pages/Stats'
import Stories from './Pages/Stories'
function App() {
  

  return (
    <>
     <Header/>
     <Carousel/>
     <About/>
     <OurPrograms/>
     <Stats/>
     <Stories/>
    </>
  )
}

export default App
