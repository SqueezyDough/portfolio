import { motion } from 'framer-motion'
import styles from './ScrollIcon.module.scss'

const ScrollIcon = () => {
  return (
    <motion.div
      className={styles.indicator}
      initial={{ y: 0 }}
      animate={{ y: [-6, 6, 6], opacity: [0, 1, 0] }}
      transition={{ repeat: Infinity, repeatDelay: 1.5, duration: 3 }}
    >
      <div className={styles['indicator__inner']}>
        <div className={styles['indicator__wheel']}></div>
        <motion.div
          className={styles['indicator__scroll']}
          animate={{ y: [0, 0, 6, 6], opacity: [0, 1, 1, 0] }}
          transition={{ repeat: Infinity, repeatDelay: 1.5, duration: 3 }}
        ></motion.div>
      </div>
    </motion.div>
  )
}

export default ScrollIcon
