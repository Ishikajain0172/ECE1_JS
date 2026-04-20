import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Student from './components/Student'

function App() {

  return (
    <>
      <Student name="Ishika Jain" age={19} />
    </>
  )
}

export default App
