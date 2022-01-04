import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Media from 'react-media'
import styles from './Intro.module.scss'

const Intro = ({ text }) => {
  const { ref, inView } = useInView({
    threshold: 0.85,
  })

  const containerClasses = `${styles.intro} content`

  return (
    <motion.section
      ref={ref}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{
        duration: 1,
        ease: 'easeOut',
      }}
      className={containerClasses}
    >
      <div className="content__inner">
        <span className={styles.eyebrow}>Eyebrow</span>
        {/* TODO: enable background texture for desktop */}
        <Media queries={{ small: { maxWidth: 768 } }}>
          {(matches) =>
            matches.small ? (
              <p className={styles['intro__text']}>{text}</p>
            ) : (
              <motion.p
                className={styles['intro__text']}
                animate={{
                  backgroundPositionX: ['15%', '95%'],
                  backgroundPositionY: ['10%', '60%'],
                }}
                transition={{
                  repeat: Infinity,
                  repeatType: 'reverse',
                  duration: 20,
                }}
              >
                {text}
              </motion.p>
            )
          }
        </Media>
      </div>
    </motion.section>
  )
}

export default Intro
