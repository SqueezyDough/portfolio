import Link from 'next/link'
import { motion } from 'framer-motion'
import styles from './Header.module.scss'

const Header = ({ text }) => {
  const classes = `${styles.header} content__inner`

  return (
    <header className="content">
      <motion.nav
        className={classes}
        initial={{ y: -120 }}
        animate={{ y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <Link href="/">
          <a className={styles.logo}>{text}</a>
        </Link>
      </motion.nav>
    </header>
  )
}

export default Header
