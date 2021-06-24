import React, {useState, useEffect} from 'react';
import Music from '../../static/audio.mp3';
import Play from '../../static/play.svg'
import Pause from '../../static/pause.svg'

const Audio = () => {
    
    const [playing, setPlaying] = useState(true);

    const toggle = () => { setPlaying(!playing); }
    
    useEffect(() => {
        const aud = document.getElementById('bgMusic');
        playing ? aud.play() : aud.pause();
      },
      [playing]
    );

    return(
        <>
            <div style={{
                position: 'fixed',
                right: '3%',
                top: '87%',
            }}>
                <audio id="bgMusic" loop autoPlay>
                    <source src={Music} type="audio/mpeg" />
                </audio>
                <button onClick={toggle} style={{height: '75px', width: '75px',  borderRadius: '50%', cursor: 'pointer',}}>
                    <img  src={playing ? Pause : Play} alt={playing ? "Pause" : "Play"} />
                </button>
            
        </div>
        </>
    )
}

export default Audio;