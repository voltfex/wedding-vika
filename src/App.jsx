import './App.css'
import { MobileInvitationFrame } from './components/layout/MobileInvitationFrame'
import { VideoIntroSection } from './components/sections/VideoIntroSection'
import { EventDetailsSection } from './components/sections/EventDetailsSection'
import { TimelineSection } from './components/sections/TimelineSection'
import { RsvpSection } from './components/sections/RsvpSection'
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
      <EventDetailsSection event={invitationContent.event} />
      <TimelineSection schedule={invitationContent.schedule} />
      <RsvpSection rsvp={invitationContent.rsvp} />
    </MobileInvitationFrame>
  )
}

export default App
