import { motion } from 'framer-motion'
import ScrollIcon from '@/UI/atoms/ScrollIcon'
import styles from './ScrollIndicator.module.scss'

const ScrollIndicator = ({ label = 'scroll' }) => {
  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 5 }}
    >
      <span className={styles.label}>{label}</span>

      <ScrollIcon />
    </motion.div>
  )
}

export default ScrollIndicator
