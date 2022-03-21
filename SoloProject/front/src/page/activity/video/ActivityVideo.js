import React from 'react';
import ReactPlayer from 'react-player/youtube';
import styled from 'styled-components';

const VideoPlay = styled.div`
justify-content: center;
text-align: center;
overflow: hidden;
width: 800px; // 2560(QHD), 1920(FHD), 1680, 1440
height: 1500px; // 하단 네비바도 만들어야 할 듯.
margin: 0px auto;
margin-top: 40px;
`;
const VideoSecond = styled.div`

margin-top: 40px;
`;


const activityVideo = () => {
    return (
        <VideoPlay>
            <ReactPlayer 
            url="https://youtu.be/OgeQG_OuMZY" 
            width="800px" 
            height="500px" 
            controls 
            /* playing={true} */ 
            />
            <VideoSecond>
                <ReactPlayer 
                url="https://youtu.be/j16feBYoSbY" 
                width="800px" 
                height="500px" 
                controls 
                />
            </VideoSecond>
        </VideoPlay>
    );
};

export default activityVideo;