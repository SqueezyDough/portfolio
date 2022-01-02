import { motion } from 'framer-motion'
import styles from './Intro.module.scss'

const Intro = ({ text }) => {
  return (
    <motion.div className={styles.intro}>
      <motion.p
        className={styles['intro__text']}
        animate={{
          backgroundPositionX: ['15%', '55%'],
          backgroundPositionY: ['50%', '55%'],
        }}
        transition={{
          repeat: Infinity,
          repeatType: 'reverse',
          duration: 25,
        }}
      >
        {text}
      </motion.p>
    </motion.div>
  )
}

export default Intro
