import React from 'react';
import '../assets/styles/components/Cameras.scss'
import image from '../assets/images/Recorder.png'

const Cameras = () => {
    const camera = () => {
        window.open('http://localhost:4200/api/stream', "_blank", "location=no,toolbar=yes,scrollbars=yes,resizable=yes,top=200,left=500,width=800,height=430");
    }
    return (
        <div className="containerCamera" onClick={camera}>
            <h3>House Camera</h3>
            <img src={ image } alt="Camera" />
            <h4>Live</h4>
        </div>
    )
}
export default Cameras