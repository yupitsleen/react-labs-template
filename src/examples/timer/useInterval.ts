import { useEffect, useRef } from 'react'
type CounterCallback = () => void
export default function useCounter(callback: CounterCallback, delay = 1000) {
  const callbacRef = useRef<CounterCallback>()

  // update callback function with current render callback that has access to latest props and state
  useEffect(() => {
    callbacRef.current = callback
  })

  useEffect(() => {
    if (!delay) {
      throw 'delay can not be empty'
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      return () => {}
    }

    const interval = setInterval(() => {
      callbacRef.current && callbacRef.current()
    }, delay)
    return () => clearInterval(interval)
  }, [delay])
}
