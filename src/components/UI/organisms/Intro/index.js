import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import styles from './Intro.module.scss'

const Intro = ({ text }) => {
  const { ref, inView } = useInView({
    threshold: 1,
  })

  return (
    <motion.div
      ref={ref}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{
        duration: 1,
      }}
      className={styles.intro}
    >
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
