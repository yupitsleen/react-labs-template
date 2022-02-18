import { Box, Typography } from "@mui/material"
import React from "react"
import { GameBoard, GameTile, GameRow } from '../../labs/wordle/components'

export type Props = {
  allowRetry?: boolean
}

interface Guess {
  word: string[]
}

export const WordleLab: React.VFC<Props> = () => {
  return (
    <GameBoard>
      <GameRow>
        <GameTile letter="r" />
        <GameTile letter="e" state="match" />
        <GameTile letter="a" state="miss" />
        <GameTile letter="c" state="present" />
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
