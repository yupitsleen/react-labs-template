import { Box, Button, Typography } from '@mui/material'

import React from 'react'
import { useTimer } from '.'
import { Time } from './types'
import logo from '../../logo.svg'

export type TimerProps = {
  displayFormat?: string
}

const TimeDisplay: React.FC = (props) => {
  const { children } = props
  return (
    <>
      <Typography variant="body1" sx={{ fontSize: '48px' }}>
        {children}
      </Typography>
    </>
  )
}

const TimerLogo: React.VFC = () => {
  return (
    <>
      <img src={logo} className="App-logo" alt="logo" />
    </>
  )
}

export const Timer: React.VFC<TimerProps> = (props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { displayFormat = 'hh:mm:ss' } = props
  const { time, isActive, start, pause, reset } = useTimer()

  const formatTime = ({ hours, minutes, seconds }: Time) => {
    const formattedParts = [hours, minutes, seconds].map((unit) =>
      String(unit).padStart(2, '0')
    )

    return formattedParts.join(':')
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center',
      }}
    >
      <TimerLogo></TimerLogo>
      <TimeDisplay>{formatTime(time)}</TimeDisplay>
      <Box sx={{ display: 'flex' }}>
        {isActive ? (
          <Button variant="text" onClick={() => pause()}>
            Pause
          </Button>
        ) : (
          <Button variant="text" onClick={() => start()}>
            Start
          </Button>
        )}

        <Button variant="text" onClick={() => reset()}>
          Reset
        </Button>
      </Box>
    </Box>
  )
}
