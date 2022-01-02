import { useState, useEffect } from 'react'

const useWindowOffset = () => {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset)
    }
  }, [])

  return offset
}

export default useWindowOffset
