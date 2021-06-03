import React, {Component} from 'react';
import ReactPlayer from 'react-player';
import styles from './css/interview.module.scss';

export default class Interview extends Component{

    render(){
        return(
            <div className={`${styles.grid}`}>
                <div className={`${styles.content}`}>
                    <p>Just like how the story of the book goes, the process in writing it was also a journey. Hear about it from the author himself. Click the play button and learn more.</p>
                    <div className={`buttons`}>
                        <a href="https://drive.google.com/file/d/0B7c5i0P23QdnTGN5bDBmVHFDMTA/view" target="_blank" rel="noreferrer noopener" className={`btn`}>Cut Version</a><br />
                        <a href="https://www.youtube.com/watch?v=FHjLHNzZP8w" target="_blank" rel="noreferrer noopener" className={`btn`}>Other interview</a>
                    </div>
                </div>
                <ReactPlayer url='https://www.youtube.com/watch?v=wOaUijkO9t8' width="100%" height="400px" controls={true}/>
            </div>
        )
    }
}