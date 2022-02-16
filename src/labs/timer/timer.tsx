import { styled } from '@mui/material'
import React from 'react'
import { useTimer } from '.'
import { Time } from './types'

export type TimerProps = {
  displayFormat?: string
}

const TimeDisplay = styled('div')({
  background: '#282c34',
})

export const Timer: React.FC<TimerProps> = (props) => {
  const { time, start, pause, reset } = useTimer()
  
  const formatTime = (time: Time) => {
    return `${time.hours.toString().padStart(2, '0')}:${time.minutes.toString().padStart(2, '0')}:${time.seconds.toString().padStart(2, '0')}`
  }

  return (
    <>
      <TimeDisplay>
        <h1>Timer</h1>
        {formatTime(time)}
        <br/>
        <button onClick={() => start()}>Start</button>
        <button onClick={() => pause()}>Pause</button>
        <button onClick={() => reset()}>Reset</button>
      </TimeDisplay>
    </>
  )
} 
