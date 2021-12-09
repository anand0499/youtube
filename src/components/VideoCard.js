import { Avatar } from '@material-ui/core'
import React from 'react'
import "./VideoCard.css";
function VideoCard({image,title,channel,views,timestamp,channelImage}) {
    return (
        <div className="VideoCard">
            {/* <h2>Anand</h2> */}
            <img className="VideoCard-thumbnail" src={image} alt="" />
            <div className="VideoCard-info">
            <Avatar className="VideoCard-avatar" alt={channel} src={channelImage}/>
            <div className="VideoCard-text">
                <h4>{title}</h4>
                <p>{channel}</p>
                <p>{views}.{timestamp}</p>
            </div>
            </div>
        </div>
    )
}

export default VideoCard
