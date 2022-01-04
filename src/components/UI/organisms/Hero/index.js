import { motion, useViewportScroll, useTransform } from 'framer-motion'
import styles from './Hero.module.scss'
import ScrollIndicator from '@/UI/molecules/ScrollIndicator'
import ImageCanvas from '@/UI/molecules/ImageCanvas'
import ParallaxContainer from '@/UI/molecules/ParallaxContainer'

const Hero = ({ title, images }) => {
  const words = title.split(' ')
  const { scrollYProgress } = useViewportScroll()

  const multiplyScrollHeight = (index) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useTransform(scrollYProgress, (value) => value * index)
  }

  return (
    <section className={styles.hero}>
      <div className="content__inner">
        <motion.h1
          className={styles.title}
          transition={{
            staggerChildren: 0.3,
            delayChildren: 1,
          }}
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              className={styles['title__word']}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, paddingLeft: i * 15 }}
              style={{ x: multiplyScrollHeight(i * 40) }}
              transition={{
                ease: 'easeOut',
              }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>
      </div>

      {images && (
        <motion.div
          initial={{ opacity: 0, zIndex: -1 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: 'easeOut',
            duration: 1,
          }}
        >
          <div className={styles.parallax}>
            <ParallaxContainer>
              <div className={styles['background-container']}>
                <ImageCanvas className={styles['background-container__image']} source={images} />
              </div>
            </ParallaxContainer>
          </div>
        </motion.div>
      )}

      <div className="content__inner">
        <ScrollIndicator />
      </div>
    </section>
  )
}

export default Hero
