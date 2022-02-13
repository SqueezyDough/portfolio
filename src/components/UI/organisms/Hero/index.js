import { motion } from 'framer-motion'
import _ from 'lodash'
// import { Canvas, useFrame } from '@react-three/fiber'
import ParallaxContainer from '@/UI/molecules/ParallaxContainer'
import ImageDistorted from '@/UI/molecules/ImageDistorted'
import Spheres from '@/UI/molecules/Spheres'
import styles from './Hero.module.scss'
import ScrollIndicator from '@/UI/molecules/ScrollIndicator'

const Hero = ({ heading, images }) => {
  const words = _.split(heading, ' ')

  const containerVariants = {
    show: {
      opacity: 1,
      transition: {
        delay: 4.5,
        duration: 2,
        staggerChildren: 0.1,
        delayChildren: 5.5,
      },
    },
    hidden: { opacity: 0 },
  }

  const childVariants = {
    show: {
      y: 0,
    },
    hidden: { y: '100%' },
  }

  return (
    <section className={styles.container}>
      <motion.div
        className={styles.canvas}
        initial={{ clipPath: 'circle(0%)' }}
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
        <motion.h1 className={styles.title} initial={{ y: 50 }} animate={{ y: 0 }}>
          {words.map((word, i) => (
            <div key={i} className={styles.wordWrapper}>
              <motion.span
                className={styles.word}
                initial="hidden"
                animate="show"
                variants={childVariants}
                transition={{ delay: i * 0.3 }}
              >
                {word}
              </motion.span>
            </div>
          ))}
        </motion.h1>
      </ParallaxContainer>

      <footer className={styles.footer}>
        <ScrollIndicator />

        <motion.div className={styles.footerContent}>
          <motion.h3
            className={styles.footerTitle}
            initial="hidden"
            animate="show"
            variants={containerVariants}
            transition={{ duration: 1 }}
          >
            <motion.span variants={childVariants}>Designed & developed by</motion.span>
            <motion.span variants={childVariants}>© leroyvanbiljouw</motion.span>
          </motion.h3>

          <motion.nav
            className={styles.social}
            initial="hidden"
            animate="show"
            variants={containerVariants}
            transition={{ duration: 1 }}
          >
            <motion.a href="" variants={childVariants}>
              Github
            </motion.a>
            <motion.a href="" variants={childVariants}>
              LinkedIn
            </motion.a>
          </motion.nav>
        </motion.div>
      </footer>
    </section>
  )
}

export default Hero
