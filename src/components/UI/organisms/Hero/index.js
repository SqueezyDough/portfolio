import Image from 'next/image'
import { motion, useViewportScroll, useTransform } from 'framer-motion'
import styles from './Hero.module.scss'
import ScrollIndicator from '@/UI/molecules/ScrollIndicator'

const Hero = ({ title, background }) => {
  const words = title.split(' ')
  const { scrollYProgress } = useViewportScroll()
  const slideRight = (index) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useTransform(scrollYProgress, (value) => value * index, [0, 100])
  }

  return (
    <section className={styles.hero}>
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, paddingLeft: i * 15 }}
            style={{ x: slideRight(i * 2) }}
            transition={{
              ease: 'easeInOut',
              type: 'spring',
            }}
          >
            {word}
          </motion.span>
        ))}
      </motion.h1>
      {background && (
        <div className={styles['background-container']}>
          <Image
            className={styles['background-container__image']}
            src={background.url}
            alt={background.alt}
            width={background.dimensions.width}
            height={background.dimensions.height}
          />
        </div>
      )}
      <ScrollIndicator />
    </section>
  )
}

export default Hero
