import { motion } from 'framer-motion'
import _ from 'lodash'
// import { Canvas, useFrame } from '@react-three/fiber'
import ParallaxContainer from '@/UI/molecules/ParallaxContainer'
import ImageDistorted from '@/UI/molecules/ImageDistorted'
import Spheres from '@/UI/molecules/Spheres'
import styles from './Hero.module.scss'
import ScrollIndicator from '@/UI/molecules/ScrollIndicator'

const Hero = ({ title, images }) => {
  const words = _.split(title, ' ')

  return (
    <section className={styles.container}>
      <motion.div
        className={styles.canvas}
        animate={{
          y: [400, 0, 0, 0],
          clipPath: ['circle(0%)', 'circle(20%)', 'circle(100%)'],
        }}
        transition={{ duration: 5, delay: 1, timings: [0, 0.2, 0.9, 1] }}
      >
        <ImageDistorted image={images[0]} />
      </motion.div>

      <motion.div
        className={styles.spheresContainer}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5 }}
      >
        <Spheres className={styles.spheres} texture={images[1]} />
      </motion.div>

      <ParallaxContainer inputRange={500} outputRange={-100}>
        <motion.h1 className={styles.title} animate={{ y: [50, 0] }}>
          {words.map((word, i) => (
            <div key={i} className={styles.wordWrapper}>
              <motion.span
                className={styles.word}
                animate={{ y: [200, 0] }}
                transition={{ delay: i * 0.5 }}
              >
                {word}
              </motion.span>
            </div>
          ))}
        </motion.h1>
      </ParallaxContainer>

      <footer className={styles.footer}>
        <ScrollIndicator />
        <nav className={styles.footerContent}>
          <h3 className={styles.footerTitle}>
            <span>Designed & developer By</span>
            <span>leroyvanbiljouw</span>
          </h3>
          <ul>
            <li>
              <a>Github</a>
              <a>LinkedIn</a>
            </li>
          </ul>
        </nav>
      </footer>
    </section>
  )
}

export default Hero
