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
  attempts: AttemptState[]
}

type Action =
  | { type: 'START_GAME'; word: string }
  | { type: 'ATTEMPT_WORD'; attempt: string }
  | { type: 'RESET_GAME'; gameState: WordleGameState }

type GameStatus = 'win' | 'lose' | 'start' | 'playing'

type AttemptState = {
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

type AttemptedLetter = {
  letter: string
  state: SquareStatus
}

export const initialGameState: WordleGameState = {
  randomWord: '',
  gameStatus: 'start',
  attempts: [],
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
      return { ...state, randomWord: action.word }
    case 'ATTEMPT_WORD':
      return { ...state, attempt: action.attempt }
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
        <GameTile />
        <GameTile />
        <GameTile letter="string" state={} />
        <GameTile letter="c" state="inWord" />
        <GameTile letter="t" />
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
