import React from 'react'
import './App.css'
import { MainLayout } from './layout'
import { Timer } from './labs/timer'
import {
  WordleContextProvider,
  initialGameState,
  gameReducer,
} from './labs/wordle'

function App() {
  return (
    <MainLayout showToolbar={false}>
      <div className="App">
        <header className="App-header">
          <WordleContextProvider>Wordle</WordleContextProvider>
        </header>
      </div>
    </MainLayout>
  )
}

export default App
