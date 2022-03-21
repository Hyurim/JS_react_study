import React from 'react';
import ReactPlayer from 'react-player/youtube';
import styled from 'styled-components';

const VideoPlay = styled.div`
position: absolute;
left: 50%;
transform: translateX(-50%);
.first{
    margin-bottom: 40px;
}
`;


const activityVideo = () => {
    return (
        <VideoPlay>
            <ReactPlayer 
            className="first"
            url="https://youtu.be/OgeQG_OuMZY"  
            controls 
            playing={true}
            />
            <ReactPlayer 
            url="https://youtu.be/j16feBYoSbY" 
            controls 
            /> 
        </VideoPlay>
    );
};

export default activityVideo;