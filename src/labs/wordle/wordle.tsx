import React, {
  useReducer,
  useContext,
  createContext,
  ReactNode,
  Reducer,
  useEffect,
} from 'react'
import { GameBoard, GameRow, GameTile } from './components'
import { useQuery } from 'react-query'
import words from './words.json'

export type AttemptProps = {
  children: ReactNode
}

type WordleGameState = {
  randomWord: string
  gameStatus: GameStatus
  attempts: AttemptState[]
}

type Action =
  | { type: 'START_GAME'; word: string }
  | { type: 'ATTEMPT_WORD'; attempt: string }
  | { type: 'RESET_GAME'; gameState: WordleGameState }

type GameStatus = 'win' | 'lose' | 'start' | 'playing'

export type AttemptState = {
  attemptedWord: string
  attemptedWordStatus: [
    AttemptedLetter,
    AttemptedLetter,
    AttemptedLetter,
    AttemptedLetter,
    AttemptedLetter
  ]
}

export type SquareStatus = 'correct' | 'inWord' | 'notInWord' | 'blank'

export type AttemptedLetter = {
  letter: string
  state: SquareStatus
}

export const initialGameState: WordleGameState = {
  randomWord: '',
  gameStatus: 'start',
  attempts: [],
}

const GameStateContext = createContext<WordleGameState>(initialGameState)

type Dispatch = (action: Action) => void

const GameDispatchContext = React.createContext<Dispatch | undefined>(undefined)

export const wordleGameReducer: Reducer<WordleGameState, Action> = (
  state: WordleGameState,
  action: Action
) => {
  switch (action.type) {
    case 'START_GAME':
      return { ...state, randomWord: action.word }
    case 'ATTEMPT_WORD':
      return { ...state, attempt: action.attempt }
    case 'RESET_GAME':
      return { ...state, gameState: action.gameState }
  }
}

export const WordleGameProvider = ({ children }: AttemptProps) => {
  const [gameState, dispatch] = useReducer(wordleGameReducer, initialGameState)

  return (
    <GameStateContext.Provider value={gameState}>
      <GameDispatchContext.Provider value={dispatch}>
        {children}
      </GameDispatchContext.Provider>
    </GameStateContext.Provider>
  )
}

export const useWordleState = () => {
  return useContext(GameStateContext)
}

export const useWordleDispatch = () => {
  return useContext(GameDispatchContext)
}

const wordList = words
const randomWord = wordList[1]
const row = [1, 2, 3, 4, 5]

export const WordleLab: React.VFC<AttemptProps> = () => {
  const attempts = useWordleState().attempts
  const dispatch = useWordleDispatch

  return (
    <GameBoard>
      <GameRow>
        <GameTile />
        <GameTile />
        <GameTile letter="r" state="inWord" />
        <GameTile letter="c" state="notInWord" />
        <GameTile letter="t" />
      </GameRow>
    </GameBoard>
  )
}
