import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import ParallaxContainer from '@/UI/molecules/ParallaxContainer'
import styles from './Skills.module.scss'

const Skills = ({ image }) => {
  const videoRef = useRef(null)
  const { containerRef, inView } = useInView({
    threshold: 0.85,
  })

  useEffect(() => {
    const video = videoRef.current
    if (!video.paused && !inView) {
      video.pause()
    } else {
      video.play()
    }
  }, [inView])

  return (
    <motion.section className={styles.container} ref={containerRef}>
      <ParallaxContainer inputRange={3500} outputRange={500}>
        <div className={styles.planetary}>
          <Image
            className={styles['planetary__image']}
            src={image.url}
            alt={image.title}
            width={image.dimensions.width}
            height={image.dimensions.height}
          />
        </div>
      </ParallaxContainer>
      <div className={`${styles.skills} content__inner`}>
        <h2>Skills</h2>
        <ul>
          <li>React</li>
          <li>React</li>
          <li>React</li>
          <li>React</li>
          <li>React</li>
        </ul>
      </div>
      <div className={styles.video}>
        <video className={styles['video__inner']} loop muted ref={videoRef}>
          <source src="/assets/media/Mercury-12_dark swirls.mp4" type="video/mp4" />
        </video>
      </div>
      <div className={styles['container__shadow']}></div>
    </motion.section>
  )
}

export default Skills
