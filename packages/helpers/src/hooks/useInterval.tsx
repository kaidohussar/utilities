import React, {useRef, useEffect} from 'react'

export const useInterval = (callback: any, delay: number) => {
    const savedCallback = useRef<any>()

    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback
    }, [callback])

    // Set up the interval.
    useEffect(() => {
        if (delay === null) {
            return () => {}
        }
        const id = setInterval(() => savedCallback.current(), delay)
        return () => clearInterval(id)
    }, [delay])
}
