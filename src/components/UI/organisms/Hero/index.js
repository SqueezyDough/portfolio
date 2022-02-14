import { motion, useAnimation } from 'framer-motion'
import _ from 'lodash'
import ParallaxContainer from '@/UI/molecules/ParallaxContainer'
import ImageDistorted from '@/UI/molecules/ImageDistorted'
import Spheres from '@/UI/molecules/Spheres'
import Footer from './components/Footer/index'
import styles from './Hero.module.scss'

const Hero = ({ heading, images }) => {
  const words = _.split(heading, ' ')

  const childVariants = {
    show: {
      y: 0,
    },
    hidden: { y: '200%' },
  }

  const shadowAnimation = useAnimation()

  const onAnimationComplete = (next, animation) => {
    next.start(animation)
  }

  return (
    <section className={styles.container}>
      <motion.div
        className={styles.canvas}
        animate={{
          y: [400, 0, 0, 0],
          clipPath: ['circle(0%)', 'circle(20%)', 'circle(20%)', 'circle(100%)'],
        }}
        transition={{ duration: 3.2, delay: 0.75, times: [0, 0.3, 0.7, 1] }}
        onAnimationComplete={() => onAnimationComplete(shadowAnimation, { opacity: 1 })}
      >
        <ImageDistorted image={images[0]} />
      </motion.div>

      <motion.div
        className={styles.spheresContainer}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8, duration: 2 }}
      >
        <Spheres className={styles.spheres} texture={images[1]} />
      </motion.div>

      <motion.div
        className={styles.canvasShadow}
        initial={{ opacity: 0 }}
        animate={shadowAnimation}
      />

      <ParallaxContainer inputRange={500} outputRange={-100}>
        <motion.h1 className={styles.title} initial={{ y: 50 }} animate={{ y: 0 }}>
          {words.map((word, i) => (
            <div key={i} className={styles.wordWrapper}>
              <motion.span
                className={styles.word}
                initial="hidden"
                animate="show"
                variants={childVariants}
                transition={{ delay: i * 0.1, duration: 1 }}
              >
                {word}
              </motion.span>
            </div>
          ))}
        </motion.h1>
      </ParallaxContainer>

      <Footer />
    </section>
  )
}

export default Hero
