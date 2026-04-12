import './App.css'
import { MobileInvitationFrame } from './components/layout/MobileInvitationFrame'
import { VideoIntroSection } from './components/sections/VideoIntroSection'
import { LoveStorySection } from './components/sections/LoveStorySection'
import { invitationContent } from './data/invitationContent'
import introVideoMp4 from './assets/video.mp4'
import introVideoMov from './assets/video.MOV'
import introMusic from './assets/music.mp3'

function App() {
  return (
    <MobileInvitationFrame>
      <VideoIntroSection
        videoSrc={introVideoMp4}
        fallbackVideoSrc={introVideoMov}
        musicSrc={introMusic}
      />
      <LoveStorySection story={invitationContent.storyBlock} />
    </MobileInvitationFrame>
  )
}

export default App
