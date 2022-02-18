import React, {
  useReducer,
  useContext,
  createContext,
  useCallback,
  useState,
  ReactNode,
  Reducer,
} from 'react'
import { GameBoard, GameRow, GameTile } from './components'

type AttemptProps = {
  children: React.ReactNode
}

type WordleGameState = {
  randomWord: string
  gameStatus: GameStatus
  attemptState: AttemptState
}

type Action =
  | { type: 'START_GAME'; gameState: WordleGameState }
  | {
      type: 'ATTEMPT_WORD'
      gameState: WordleGameState
    }
  | { type: 'RESET_GAME'; gameState: WordleGameState }

type GameStatus = 'win' | 'lose' | 'start' | 'playing'

type AttemptState = {
  attemptedWord: string
  attemptedWordStatus: WordStatus
  isSubmitted: boolean
}

type SquareStatus = 'correct' | 'in word' | 'notInWord' | 'blank' | 'attempt'
type WordStatus = [
  SquareStatus,
  SquareStatus,
  SquareStatus,
  SquareStatus,
  SquareStatus
]

export const initialGameState: WordleGameState = {
  randomWord: '',
  gameStatus: 'start',
  attemptState: {
    attemptedWord: '',
    attemptedWordStatus: ['blank', 'blank', 'blank', 'blank', 'blank'],
    isSubmitted: false,
  },
}

const WordleContext = React.createContext<WordleGameState>(initialGameState)

type Dispatch = (action: Action) => void

const WordleDispatchContext = React.createContext<Dispatch | undefined>(
  undefined
)

export const gameReducer: Reducer<WordleGameState, Action> = (
  state: WordleGameState,
  action: Action
) => {
  switch (action.type) {
    case 'START_GAME':
      return { ...state, gameState: action.gameState }
    case 'ATTEMPT_WORD':
      return { ...state, gameState: action.gameState }
    case 'RESET_GAME':
      return { ...state, gameState: action.gameState }
  }
}

export const WordleContextProvider = ({ children }: AttemptProps) => {
  const [gameState, dispatch] = useReducer(gameReducer, initialGameState)

  return (
    <WordleContext.Provider value={gameState}>
      <WordleDispatchContext.Provider value={dispatch}>
        {children}
      </WordleDispatchContext.Provider>
    </WordleContext.Provider>
  )
}

const useWordle = () => useContext(WordleContext)
