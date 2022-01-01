import ScrollIcon from '@/UI/atoms/ScrollIcon'
import styles from './ScrollIndicator.module.scss'

const ScrollIndicator = ({ label = 'scroll' }) => {
  return (
    <div className={styles.container}>
      <span className={styles.label}>{label}</span>

      <ScrollIcon />
    </div>
  )
}

export default ScrollIndicator
