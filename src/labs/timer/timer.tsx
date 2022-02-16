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
  const { displayFormat = 'hh:mm:ss', children } = props
  const { time, start, pause, reset } = useTimer()
  
  const formatTime = (time: Time) => {
    // TODO: Use display format to return formatted time
    return `${time.hours.toString().padStart(2, '0')}:${time.minutes.toString().padStart(2, '0')}:${time.seconds.toString().padStart(2, '0')}`
  }

  return (
    <>
      <TimeDisplay>{formatTime(time)}</TimeDisplay>
    </>
  )
} 
