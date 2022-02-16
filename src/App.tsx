import React from 'react'
import './App.css'
import { MainLayout } from './layout'
import { Timer } from './labs/timer'

function App() {
  return (
    <MainLayout showToolbar={false}>
      <div className="App">
        <header className="App-header">
          <Timer></Timer>
        </header>
      </div>
    </MainLayout>
  )
}

export default App
