import { motion } from 'framer-motion'
import styles from './ScrollIndicator.module.scss'

const ScrollIndicator = ({ label = 'scroll' }) => {
  return (
    <div className={styles.container}>
      <span className={styles.label}>{label}</span>
      <motion.div
        className={styles.indicator}
        initial={{ y: 0 }}
        animate={{ y: [-6, 6, 6], opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, repeatDelay: 0.5, duration: 3 }}
      >
        <div className={styles['indicator__inner']}>
          <div className={styles['indicator__wheel']}></div>
          <motion.div
            className={styles['indicator__scroll']}
            animate={{ y: [0, 0, 6, 6], opacity: [0, 1, 1, 0] }}
            transition={{ repeat: Infinity, repeatDelay: 0.5, duration: 3 }}
          ></motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default ScrollIndicator
