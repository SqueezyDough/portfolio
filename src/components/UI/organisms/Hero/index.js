import { motion } from 'framer-motion'
import _ from 'lodash'
// import { Canvas, useFrame } from '@react-three/fiber'
import ParallaxContainer from '@/UI/molecules/ParallaxContainer'
import ImageDistorted from '@/UI/molecules/ImageDistorted'
import Spheres from '@/UI/molecules/Spheres'
import styles from './Hero.module.scss'
// import ScrollIndicator from '@/UI/molecules/ScrollIndicator'

// import { easeOutSine } from '@/ease'

const Hero = ({ title, images }) => {
  const words = _.split(title, ' ')

  return (
    <section className={styles.hero}>
      <motion.div
        className={styles.spheresContainer}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <Spheres className={styles.spheres} texture={images[1]} />
      </motion.div>

      <ParallaxContainer inputRange={500} outputRange={-75}>
        <motion.h1 className={styles.title}>
          {words.map((word, i) => (
            <div key={i} className={styles.wordWrapper}>
              <motion.span className={styles.word} initial={{ y: 200 }} animate={{ y: 0 }}>
                {word}
              </motion.span>
            </div>
          ))}
        </motion.h1>
      </ParallaxContainer>

      <div className={styles.canvas}>
        <ImageDistorted image={images[0]} />
      </div>

      {/* <footer className={styles.footer}>
        <ScrollIndicator />
        <nav>
          <h3>
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
      </footer> */}
    </section>
  )
}

export default Hero
