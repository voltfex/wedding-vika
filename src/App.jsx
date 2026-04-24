import './App.css'
import {MobileInvitationFrame} from './components/layout/MobileInvitationFrame'
import {VideoIntroSection} from './components/sections/VideoIntroSection'
import {LoveStorySection} from './components/sections/LoveStorySection'
import {TimelineSection} from './components/sections/TimelineSection'
import {DressCodeSection} from './components/sections/DressCodeSection'
import {DetailsSection} from './components/sections/DetailsSection'
import {RsvpSection} from './components/sections/RsvpSection'
import {ClosingSection} from './components/sections/ClosingSection'
import {invitationContent} from './data/invitationContent'
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
            <LoveStorySection story={invitationContent.storyBlock}/>
            <TimelineSection schedule={invitationContent.schedule} event={invitationContent.event}/>
            <DressCodeSection dressCode={invitationContent.dressCode}/>
            <DetailsSection details={invitationContent.details}/>
            <RsvpSection rsvp={invitationContent.rsvp}/>
            <ClosingSection/>
        </MobileInvitationFrame>
    )
}

export default App
