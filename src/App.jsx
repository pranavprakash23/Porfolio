import { useState } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col'>
      <Header/>
      <Home/>
      <About/>
      <Skills/>
      <Contact/>
      {/* <Footer/> */}
    </div>
  )
}

export default App
