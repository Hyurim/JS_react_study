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

const Subject = styled.p`
font-size: 25px;
font-weight: bold;
text-align: center;
`;

const activityVideo = () => {
    return (
        <VideoPlay>
            <Subject> 코로나 캠페인 영상</Subject>
            <ReactPlayer 
            className="first"
            url="https://youtu.be/OgeQG_OuMZY"  
            controls 
            // playing={true}
            />
            <Subject> 광주광역시 캠페인 영상</Subject>
            <ReactPlayer 
            url="https://youtu.be/j16feBYoSbY" 
            controls 
            /> 
            <p style={{fontSize:'15px', color:'gray', textAlign: 'center'}}> 임종헌으로 나오는건 오타입니다. </p>
        </VideoPlay>
    );
};

export default activityVideo;