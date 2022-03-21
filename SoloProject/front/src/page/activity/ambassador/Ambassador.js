import React from 'react';
import ReactPlayer from 'react-player/youtube';
import styled from 'styled-components';

const AmbassadorVideo = styled.div`
position: absolute;
left: 50%;
transform: translateX(-50%);
.first{
    margin-top: 40px;
    margin-bottom: 40px;
}
`;
const AmbassadorSubject = styled.p`
font-size: 25px;
font-weight: bold;
text-align: center;
`;

const Ambassador = () => {
    return (
        <AmbassadorVideo>
            <AmbassadorSubject>홍보대사 캠퍼스투어</AmbassadorSubject>
            <ReactPlayer
            className="first"
            url="https://youtu.be/BJz966rn1Qs" 
            controls 
            // playing={true}
            >
            </ReactPlayer>
        </AmbassadorVideo>
    );
};

export default Ambassador;