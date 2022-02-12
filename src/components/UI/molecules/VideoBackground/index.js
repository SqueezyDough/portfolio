import { useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import styles from './VideoBackground.module.scss'

const VideoBackground = ({ url }) => {
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
    <div ref={containerRef} className={styles.video}>
      <video className={styles['video__inner']} loop muted ref={videoRef}>
        <source src={url} type="video/mp4" />
      </video>

      <div className={styles['video__shadow']}></div>
    </div>
  )
}

export default VideoBackground
