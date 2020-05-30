import React, { useState, useEffect } from 'react';
import '../assets/styles/components/Cameras.scss'
import image from '../assets/images/Recorder.png'
import AppModal from './AppModal'

const Cameras = () => {
    const [strcamera, setStrcamera] = useState([])
    const camera = () => {
        fetch('api/stream')
        .then(res => res.json())
        .then(data => setStrcamera(data))
    }
    camera() 
    useEffect(() => {
      
    })
    const getIdCamera = (name) => {
        window.open(`http://localhost:8080/api/stream/camera/${name}`, "_blank", "location=no,toolbar=yes,scrollbars=yes,resizable=yes,top=200,left=500,width=800,height=430");
    }
    return (
        <div className="container">
            <AppModal />
            <div className="containerCamera">
                 { strcamera.map(x => (
                (<div key={ x._id }>
                    <h3>{ x.name }</h3>
                    <img src={ image } alt={ x.streamUrl } title={ x.streamUrl } onClick={()=> getIdCamera(x.name)}  />
                </div>)
                )) }
            </div>
        </div>
    )
}
export default Cameras