import Link from 'next/link'
import styles from './Header.module.scss'

const Header = ({ title }) => {
  return (
    <header className={styles.header}>
      <nav className="content">
        <Link href="/">
          <a className={styles['header__logo']}>{title}</a>
        </Link>
      </nav>
    </header>
  )
}

export default Header
