import { useViewportScroll, motion, useTransform } from 'framer-motion'

const ParallaxContainer = ({ children }) => {
  const { scrollY } = useViewportScroll()
  const y = useTransform(scrollY, [0, 800], [0, 200])

  return <motion.div style={{ y: y }}>{children}</motion.div>
}

export default ParallaxContainer
