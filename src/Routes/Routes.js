import React from 'react'
import { Routes,Route } from 'react-router-dom'
import MainPage from '../Pages/MainPage'
import NotFoundPage from '../Pages/NotFoundPage'
import Projects from '../Components/Projects/Projects'
import Contact from '../Components/Contact/Contact'
import About from '../Components/About/About'
import Header from '../Components/Header/Header'
import Services from '../Components/Services/Services'

export default function AppRoutes() {
  return (
    <>
<Routes>
<Route element={ <MainPage />}>
<Route path='/' element={ <Header/> }/>
<Route path='projects' element={ <Projects />}/>
<Route path='services' element={ <Services />}/>
<Route path='contact' element={ <Contact />}/>
<Route path='aboutUs' element={ <About />}/>
</Route>
<Route path='*' element={ <NotFoundPage />}/>
</Routes>


    </>
  )
}
