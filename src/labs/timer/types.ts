export interface Time {
  seconds: number
  minutes: number
  hours: number
}

export interface UseTimer {
  time: Time
  isTicking: boolean
  pause: () => void
  start: () => void
  reset: () => void
}
