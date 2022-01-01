import Link from 'next/link'
import styles from './Header.module.scss'

const Header = ({ title }) => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a className={styles['header__logo']}>{title}</a>
      </Link>
    </header>
  )
}

export default Header
