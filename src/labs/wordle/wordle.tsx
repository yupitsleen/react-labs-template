import React, {
  useReducer,
  useContext,
  createContext,
  ReactNode,
  Reducer,
} from 'react'
import { GameBoard, GameRow, GameTile } from './components'
import { useQuery } from 'react-query'

type AttemptProps = {
  children: ReactNode
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

export type SquareStatus = 'correct' | 'inWord' | 'notInWord' | 'blank'

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

const WordleContext = createContext<WordleGameState>(initialGameState)

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

export const useWordleContextState = () => {
  return useContext(WordleContext)
}

export const useWordleDispatchState = () => {
  return useContext(WordleDispatchContext)
}

export const WordleLab: React.VFC<AttemptProps> = () => {
  return (
    <GameBoard>
      <GameRow>
        <GameTile word="r" />
        <GameTile word="e" state="correct" />
        <GameTile word="a" state="notInWord" />
        <GameTile word="c" state="inWord" />
        <GameTile word="t" />
      </GameRow>
      <GameRow>
        <GameTile />
        <GameTile />
        <GameTile />
        <GameTile />
        <GameTile />
      </GameRow>
      <GameRow>
        <GameTile />
        <GameTile />
        <GameTile />
        <GameTile />
        <GameTile />
      </GameRow>
      <GameRow>
        <GameTile />
        <GameTile />
        <GameTile />
        <GameTile />
        <GameTile />
      </GameRow>
      <GameRow>
        <GameTile />
        <GameTile />
        <GameTile />
        <GameTile />
        <GameTile />
      </GameRow>
    </GameBoard>
  )
}
