export interface Time {
  seconds: number
  minutes: number
  hours: number
}

export interface UseTimer {
  time: Time
  isActive: boolean
  pause: () => void
  start: () => void
  reset: () => void
}
