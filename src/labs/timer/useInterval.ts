import { useEffect, useRef } from 'react'


function useInterval(callback: () => void, delay = 1000) {
    const savedCallBack = useRef(callback)

    //remember latest callback when it changes
    useEffect(() => {
        savedCallBack.current = callback
    }, [callback])

    //interval set up
    useEffect(() => {
        if (!delay && delay !== 0) {
            return
        }
        const interval = setInterval(() => savedCallBack.current(), delay)
        
        return () => clearInterval(interval)
    }, [delay])
}

export default useInterval
