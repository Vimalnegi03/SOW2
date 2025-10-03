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
import Footer from './Pages/Footer'
import FullStories from './Pages/FullStories'
import {Routes,Route} from 'react-router-dom'
import Visits from './Pages/Visits'
import SkillsOnWheelsStoryPage from './Pages/SkillOnWheelsStoryPage'
import OurStoryPage from './Pages/OurStoryPage'
function App() {
  

  return (
    <>
     <Header/>
     <Routes>
     <Route path="/" element={<Carousel/>}/>
      <Route element={<FullStories/>} path="/stories"/>
     <Route element={<Visits/>} path="/visits"/>
     <Route element={<SkillsOnWheelsStoryPage/>} path="/skills-on-wheels-story"/>
     <Route element={<OurStoryPage/>} path="/our-story"/>
     </Routes>
     <Footer/> 
    </>
  )
}

export default App
