import { useEffect, useRef, useState } from 'react'

export function VideoIntroSection({ videoSrc, fallbackVideoSrc, musicSrc }) {
  const [isActivated, setIsActivated] = useState(false)
  const audioRef = useRef(null)
  const videoRef = useRef(null)

  useEffect(() => {
    const videoElement = videoRef.current
    if (!videoElement) {
      return
    }

    videoElement.defaultMuted = true
    videoElement.muted = true

    const tryPlayVideo = async () => {
      try {
        await videoElement.play()
      } catch {
        // Some mobile policies can still block autoplay (e.g. power-saving mode).
      }
    }

    void tryPlayVideo()

    videoElement.addEventListener('loadeddata', tryPlayVideo)

    return () => {
      videoElement.removeEventListener('loadeddata', tryPlayVideo)
    }
  }, [])

  const handleActivateMusic = async () => {
    if (isActivated) {
      return
    }

    const audioElement = audioRef.current
    if (!audioElement) {
      return
    }

    try {
      audioElement.currentTime = 0
      await audioElement.play()
      setIsActivated(true)
    } catch {
      // Playback can still fail for some browser policies.
    }
  }

  return (
    <section className="video-intro" aria-label="Видеоприглашение">
      <video
        {...{ 'webkit-playsinline': 'true', 'x5-playsinline': 'true' }}
        ref={videoRef}
        className="video-intro__media"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src={videoSrc} type="video/mp4" />
        {fallbackVideoSrc ? (
          <source src={fallbackVideoSrc} type="video/quicktime" />
        ) : null}
      </video>
      <audio ref={audioRef} src={musicSrc} preload="auto" loop />

      <div className="video-intro__overlay" aria-hidden="true" />

      <div className="video-intro__content">
        <h1 className="video-intro__title">ПРИГЛАШЕНИЕ НА СВАДЬБУ</h1>
        <button
          type="button"
          className="video-intro__trigger"
          onClick={handleActivateMusic}
          disabled={isActivated}
        >
          {isActivated ? 'листай вниз' : 'нажми здесь'}
        </button>
        <span className="video-intro__line" aria-hidden="true" />
      </div>
    </section>
  )
}
