import React from 'react'
import logo from './logo.svg'
import './App.css'
import { MainLayout } from './layout'
import { Timer } from './labs/timer'

function App() {
  return (
    <MainLayout showToolbar={false}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Timer></Timer>
        </header>
      </div>
    </MainLayout>
  )
}

export default App
