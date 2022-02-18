import React, {
  useReducer,
  useContext,
  createContext,
  useCallback,
  useState,
  ReactNode,
} from 'react'

type AttemptProps = {
  children: React.ReactNode
}

type GameStatus = 'win' | 'lose' | 'start' | 'playing'
type SquareStatus = 'correct' | 'in word' | 'notInWord' | 'blank' | 'attempt'
type WordStatus = [
  SquareStatus,
  SquareStatus,
  SquareStatus,
  SquareStatus,
  SquareStatus
]

type Action =
  | { type: 'START_GAME'; gameState: WordleGameState }
  | {
      type: 'ATTEMPT_WORD'
      gameState: WordleGameState
    }
  | { type: 'RESET_GAME'; gameState: WordleGameState }

type WordleGameState = {
  randomWord: string
  gameStatus: GameStatus
  attemptState: AttemptState
}

type AttemptState = {
  attemptedWord: string
  attemptedWordStatus: WordStatus
  isSubmitted: boolean
}

type Dispatch = (action: Action) => void

const WordleContext = React.createContext<WordleGameState>({
  randomWord: '',
  gameStatus: 'start',
  attemptState: {
    attemptedWord: '',
    attemptedWordStatus: ['blank', 'blank', 'blank', 'blank', 'blank'],
    isSubmitted: false,
  },
})

const WordleDispatchContext = React.createContext<Dispatch | undefined>(
  undefined
)

const attemptReducer = (state: WordleGameState, action: Action) => {
  switch (action.type) {
    case 'START_GAME':
      return { gameStatus: action.gameState }
    case 'ATTEMPT_WORD':
      return { gameStatus: action.gameState }
    case 'RESET_GAME':
      return { gameStatus: action.gameState }
  }
}

export const WordleContextProvider = ({ children }: AttemptProps) => {
  const [gameState, dispatch] = useReducer(attemptReducer, '', 'START_GAME')

  return (
    <WordleContext.Provider value={gameState}>
      <WordleDispatchContext.Provider value={dispatch}>
        {children}
      </WordleDispatchContext.Provider>
    </WordleContext.Provider>
  )
}
const useWordle = () => useContext(WordleContext)
