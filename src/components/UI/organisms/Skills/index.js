import Image from 'next/image'
import { motion } from 'framer-motion'
import ParallaxContainer from '@/UI/molecules/ParallaxContainer'
import VideoBackground from '@/UI/molecules/VideoBackground'
import styles from './Skills.module.scss'

const Skills = ({ image }) => {
  return (
    <motion.section className={styles.container}>
      <ParallaxContainer inputRange={2400} outputRange={300}>
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

      <VideoBackground url="/assets/media/Mercury-12_dark swirls.mp4" />

      <ParallaxContainer inputRange={2400} outputRange={500}>
        <div className={`${styles.skills} content`}>
          <div className={`${styles['skills__inner']} content__inner`}>
            <h2 className={styles['skills__heading']}>
              <span>Skills</span>
              <span>Skills</span>
              <span>Skills</span>
            </h2>
            <ul className={styles['skills__list']}>
              <li>React</li>
              <li>Next.js</li>
              <li>Javascript</li>
              <li>GSAP</li>
              <li>Framer Motion</li>
              <li>Animation</li>
              <li>Progressive Web Apps</li>
              <li>HTML</li>
              <li>SCSS</li>
              <li>GraphQL</li>
            </ul>
          </div>
        </div>
      </ParallaxContainer>

      <div className={styles['container__shadow']}></div>
    </motion.section>
  )
}

export default Skills
