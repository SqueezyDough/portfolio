import Link from 'next/link'
import styles from './Header.module.scss'

const Header = ({ title }) => {
  const classes = `${styles.header} content__inner`

  return (
    <header className="content">
      <nav className={classes}>
        <Link href="/">
          <a className={styles['header__logo']}>{title}</a>
        </Link>
      </nav>
    </header>
  )
}

export default Header
