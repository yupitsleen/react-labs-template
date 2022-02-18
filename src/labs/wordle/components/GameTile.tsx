import React from 'react'
import { Box, SxProps } from '@mui/system'
import { SquareStatus } from '../wordle'

type Props = {
  letter?: string
  state?: SquareStatus
}

type StyleStateMap = {
  [state in SquareStatus]: SxProps
}

const tileStateOverrides: StyleStateMap = {
  correct: {
    borderColor: 'success.main',
    backgroundColor: 'success.main',
  },
  notInWord: {
    borderColor: 'grey.700',
    backgroundColor: 'grey.700',
  },
  blank: {
    borderColor: 'grey.700',
  },
  inWord: {
    borderColor: '#c9b458',
    backgroundColor: '#c9b458',
  },
}

export const GameTile: React.VFC<Props> = (props) => {
  const { letter, state = letter?.length ? 'notInWord' : 'blank' } = props
  const styleOverrides: SxProps = tileStateOverrides[state] ?? {}
  return (
    <Box
      sx={{
        color: '#fff',
        flex: 'none',
        textTransform: 'uppercase',
        margin: '8px',
        width: 64,
        height: 64,
        border: 2,
        borderColor: 'grey.700',
        fontSize: 32,
        lineHeight: '64px',
        ...styleOverrides,
      }}
    >
      {letter}
    </Box>
  )
}
