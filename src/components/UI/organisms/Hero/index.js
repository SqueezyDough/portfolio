import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
// import { Canvas, useFrame } from '@react-three/fiber'
import ImageDistorted from '@/UI/molecules/ImageDistorted'
import Spheres from '@/UI/molecules/Spheres'
import styles from './Hero.module.scss'
// import ScrollIndicator from '@/UI/molecules/ScrollIndicator'
// import ParallaxContainer from '@/UI/molecules/ParallaxContainer'
import { easeOutSine } from '@/ease'

const Hero = ({ title, images }) => {
  const slideInAnimation = useAnimation()

  const words = title.split(' ')

  console.log(words)

  const initialHeadingPositions = {
    0: { y: -50 },
    1: { y: -50 },
    2: { y: 50 },
  }

  useEffect(() => {
    slideInAnimation.start((i) => slideIn(i))
  }, [slideInAnimation])

  const slideIn = (i) => {
    return {
      x: i === 2 ? -200 : 0,
      letterSpacing: 0.2,
      transition: { delay: 0.3, duration: 1.5, ease: easeOutSine },
    }
  }

  return (
    <section className={styles.hero}>
      {/* <ParallaxContainer inputRange={1400} outputRange={300}> */}

      <div className={styles.spheresContainer}>
        <Spheres className={styles.spheres} texture={images[1]} />
      </div>

      {/* </ParallaxContainer> */}

      <h1 className={styles.title}>
        {words.map((word, i) => (
          <motion.div
            key={i}
            className={styles.titleInner}
            // custom={i}
            initial={initialHeadingPositions[i]}
            // animate={slideInAnimation}
          >
            {word}
          </motion.div>
        ))}

        <div className={styles.canvas}>
          <ImageDistorted image={images[0]} />
        </div>
      </h1>

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
