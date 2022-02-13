import { motion } from 'framer-motion'
import styles from './Footer.module.scss'
import ScrollIndicator from '@/UI/molecules/ScrollIndicator'
import useWindowOffset from '@/hooks/useWindowOffset'

const Footer = () => {
  const offset = useWindowOffset()

  const containerVariants = {
    show: {
      opacity: 1,
      transition: {
        delay: 1,
        duration: 2,
        staggerChildren: 0.1,
        delayChildren: 1,
        type: 'spring',
        damping: 10,
        stiffness: 100,
      },
    },
    hidden: { opacity: 0 },
  }

  const childVariants = {
    show: {
      y: 0,
    },
    hidden: { y: '200%' },
  }

  return (
    <motion.footer className={styles.footer} animate={offset > 0 ? { opacity: 0 } : { opacity: 1 }}>
      <div className={styles.footerContent}>
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
      </div>

      <ScrollIndicator />
    </motion.footer>
  )
}

export default Footer
