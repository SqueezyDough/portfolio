import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import styles from './Intro.module.scss'

const Intro = ({ text }) => {
  const { ref, inView } = useInView({
    threshold: 0.85,
  })

  return (
    <motion.section
      ref={ref}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{
        duration: 1,
        ease: 'easeOut',
      }}
      className={styles.intro}
    >
      {/* TODO: enable background texture for desktop */}
      <motion.p
        className={styles['intro__text']}
        // animate={{
        //   backgroundPositionX: ['15%', '55%'],
        //   backgroundPositionY: ['50%', '55%'],
        // }}
        // transition={{
        //   repeat: Infinity,
        //   repeatType: 'reverse',
        //   duration: 25,
        // }}
      >
        {text}
      </motion.p>
    </motion.section>
  )
}

export default Intro
