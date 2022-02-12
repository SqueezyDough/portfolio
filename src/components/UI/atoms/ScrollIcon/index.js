import { motion } from 'framer-motion'
import styles from './ScrollIcon.module.scss'

const ScrollIcon = () => {
  return (
    <div className={styles['indicator']}>
      <div className={styles.indicatorLine}></div>
      <motion.div
        className={styles.indicatorScroll}
        animate={{ y: [-10, 6, 6], scale: [0, 1, 0] }}
        transition={{ repeat: Infinity, repeatDelay: 1.5, duration: 3 }}
      ></motion.div>
    </div>
  )
}

export default ScrollIcon
