export type Action = 
{ type: 'NEW_GAME' } |
{ type: 'GUESS_WORD', word: string } |
{ type: 'SET_WORD' } |
{ type: 'RESET_GAME'}

export type Dispatch = (action: Action) => void

export interface GameState {
  word: string
  attempts: []
}
