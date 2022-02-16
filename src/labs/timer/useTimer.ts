/* eslint-disable @typescript-eslint/no-empty-function */
import { useState, useEffect } from 'react'
import { Time, UseTimer } from './types'
import useInterval from './useInterval'

const initialTime: Time = {
  seconds: 0,
  minutes: 0,
  hours: 0,
}

export const useTimer = (): UseTimer => {
  const [time, setTime] = useState<Time>(initialTime)
  const [ticks, setTicks] = useState(0)
  const [isTicking, setTicking] = useState(false)

  useInterval(() => {
    if (isTicking) {
      setTicks(ticks + 1)
      console.log(ticks)
    }
  })

  useEffect(() => {
    const hours = ~~(ticks / 3600)
    const minutes = ~~((ticks % 3600) / 60)
    const seconds = ~~(ticks % 60)

    setTime({hours, minutes, seconds})
  }, [ticks])

  const start = () => { if (!isTicking) { setTicking(true) } }
  const pause = () => { setTicking(false) }
  const reset = () => {
    setTicks(0)
    setTicking(false)
  }

  return {
    time,
    isTicking,
    start,
    pause,
    reset,
  }
}
