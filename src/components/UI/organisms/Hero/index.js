import Image from 'next/image'
import { motion } from 'framer-motion'
import styles from './Hero.module.scss'

const Hero = ({ title, background }) => {
  const words = title.split(' ')

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
            animate={{ x: i * 15, opacity: 1 }}
            transition={{
              ease: 'easeOut',
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
    </section>
  )
}

export default Hero
