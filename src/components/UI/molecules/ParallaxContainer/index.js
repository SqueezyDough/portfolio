import { useViewportScroll, motion, useTransform } from 'framer-motion'

const ParallaxContainer = ({ children, className, inputRange = 500, outputRange = 200 }) => {
  const { scrollY } = useViewportScroll()
  const y = useTransform(scrollY, [0, inputRange], [0, outputRange])

  return (
    <motion.div className={className} style={{ y: y }}>
      {children}
    </motion.div>
  )
}

export default ParallaxContainer
