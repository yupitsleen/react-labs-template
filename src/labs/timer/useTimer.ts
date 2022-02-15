/* eslint-disable @typescript-eslint/no-empty-function */
import { useState } from 'react'
import { Time, UseTimer } from './types'

const initialTime: Time = {
  seconds: 0,
  minutes: 0,
  hours: 0,
}

export const useTimer = (): UseTimer => {
  const [time, setTime] = useState<Time>(initialTime)

  const pause = () => {}
  const start = () => {}
  const reset = () => {}

  return {
    time,
    pause,
    start,
    reset,
  }
}
