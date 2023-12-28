import React, { useState } from 'react'
import Nav from '../components/layout/Nav'
import VideoView from '../components/video/VideoView'
import Aside from '../components/layout/Aside'

const Video = () => {
    const [matches, setMatches] = useState([]);

    return (
        <>
            <Nav />
            <VideoView />
            <Aside matches={matches} setMatches={setMatches} />
        </>
    )
}

export default Video