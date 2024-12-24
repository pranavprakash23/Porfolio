import { useState } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col'>
      <Header/>
      <Home/>
      <About/>
      <Skills/>
    </div>
  )
}

export default App
