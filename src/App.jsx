import { useState } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Qualification from './components/Qualification';


function App() {

  return (
    <Router>
      <Header/>
      <Home />
      <About />
      <Skills />
      <Qualification/>
      <Contact />
      <Footer/>
    </Router>
  )
}

export default App
