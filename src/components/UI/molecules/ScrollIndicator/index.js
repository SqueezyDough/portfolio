import { motion } from 'framer-motion'
import ScrollIcon from '@/UI/atoms/ScrollIcon'
import { isTouchDevice } from '@/utils/helpers'

import styles from './ScrollIndicator.module.scss'

const ScrollIndicator = () => {
  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 6 }}
    >
      {isTouchDevice() ? (
        <span className={styles.label}>Swipe</span>
      ) : (
        <span className={styles.label}>Scroll</span>
      )}

      <ScrollIcon />
    </motion.div>
  )
}

export default ScrollIndicator
