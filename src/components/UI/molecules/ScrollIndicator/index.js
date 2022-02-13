import { motion } from 'framer-motion'
import ScrollIcon from '@/UI/atoms/ScrollIcon'
import useWindowOffset from '@/hooks/useWindowOffset'
import styles from './ScrollIndicator.module.scss'

const ScrollIndicator = ({ label = 'scroll' }) => {
  const offset = useWindowOffset()

  return (
    <motion.div animate={offset > 0 ? { opacity: 0 } : { opacity: 1 }}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 10 }}
      >
        <span className={styles.label}>{label}</span>

        <ScrollIcon />
      </motion.div>
    </motion.div>
  )
}

export default ScrollIndicator
