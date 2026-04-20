import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Student from './components/Student'

function App() {
  return (
    <div className="container">
      <h1>Student Information</h1>

      <div className="card-container">
        <Student name="Rahul Sharma" course="Computer Science" marks={85} />
        <Student name="Anita Verma" course="Information Technology" marks={82} />
        <Student name="Rohan Gupta" course="Electronics" marks={78} />
      </div>
    </div>
  )
}

export default App;