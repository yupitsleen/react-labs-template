import React from 'react'
import './App.css'
import { MainLayout } from './layout'
import { Timer } from './labs/timer'
import {
  WordleContextProvider,
  initialGameState,
  gameReducer,
  WordleLab,
} from './labs/wordle'

function App() {
  return (
    <MainLayout showToolbar={false}>
      <div className="App">
        <header className="App-header">
          Wordle
          <WordleLab>
            <WordleContextProvider>Wordle</WordleContextProvider>
          </WordleLab>
        </header>
      </div>
    </MainLayout>
  )
}

export default App
