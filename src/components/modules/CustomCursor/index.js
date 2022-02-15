import { useEffect, useContext } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { MouseContext } from '@/context/mouseContext'
// import { isTouchDevice } from '@/utils/helpers'
import styles from './CustomCursor.module.scss'

const outlineVariants = {
  hovered: { scale: 0 },
  initial: {
    scale: 1,
    x: '-50%',
    y: '-50%',
  },
}

const dotVariants = {
  hovered: {
    scale: 4,
  },
  initial: {
    scale: 1,
    x: '-50%',
    y: '-50%',
  },
}

const dotSpringConfig = { damping: 35, stiffness: 400 }
const outlineSpringConfig = { damping: 50, stiffness: 300 }

const CustomCursor = () => {
  const { cursorState } = useContext(MouseContext)

  const dotX = useMotionValue(-100),
    dotY = useMotionValue(-100),
    outlineX = useMotionValue(-100),
    outlineY = useMotionValue(-100)

  const dotXSpring = useSpring(dotX, dotSpringConfig)
  const dotYSpring = useSpring(dotY, dotSpringConfig)

  const outlineXSpring = useSpring(outlineX, outlineSpringConfig)
  const outlineYSpring = useSpring(outlineY, outlineSpringConfig)

  useEffect(() => {
    addEventListeners()

    return () => {
      removeEventListeners()
    }
  })

  //   if (isTouchDevice()) return

  const moveDot = (e) => {
    dotX.set(e.pageX)
    dotY.set(e.pageY)
  }

  const moveOutline = (e) => {
    outlineX.set(e.pageX)
    outlineY.set(e.pageY)
  }

  const addEventListeners = () => {
    window.addEventListener('mousemove', moveDot)
    window.addEventListener('mousemove', moveOutline)
  }

  const removeEventListeners = () => {
    window.removeEventListener('mousemove', moveDot)
    window.removeEventListener('mousemove', moveOutline)
  }

  return (
    <>
      <motion.div
        className={styles.outline}
        variants={outlineVariants}
        animate={[cursorState === 'hovered' ? cursorState : 'initial']}
        style={{
          left: outlineXSpring,
          top: outlineYSpring,
        }}
      ></motion.div>
      <motion.div
        className={styles.dot}
        variants={dotVariants}
        animate={[cursorState === 'hovered' ? cursorState : 'initial']}
        style={{
          left: dotXSpring,
          top: dotYSpring,
        }}
      ></motion.div>
    </>
  )
}

export default CustomCursor
