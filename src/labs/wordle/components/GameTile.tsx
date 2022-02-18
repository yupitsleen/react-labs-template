import React from 'react'
import { Box, SxProps } from '@mui/system'

export type TileState = 'empty' | 'match' | 'miss' | 'present'

type Props = {
  letter?: string
  state?: TileState
}

type StyleStateMap = {
  [state in TileState]: SxProps
}

const tileStateOverrides: StyleStateMap = {
  match: {
    borderColor: 'success.main',
    backgroundColor: 'success.main',
  },
  miss: {
    borderColor: 'grey.700',
    backgroundColor: 'grey.700',
  },
  empty: {
    borderColor: 'grey.700',
  },
  present: {
    borderColor: '#c9b458',
    backgroundColor: '#c9b458',
  },
}

export const GameTile: React.VFC<Props> = (props) => {
  const { letter, state = letter?.length ? 'miss' : 'empty' } = props
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
