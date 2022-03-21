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
const Contents = styled.p`
position: relative;
left: 50%;
transform: translateX(-50%);
margin-top: 40px;
margin-bottom: 40px;
padding: 20px;
width: 512px;
height: 200px;
border: 1px solid #2980b9;
border-radius: 50px;
word-break: break-all;
`
const Ambassador = () => {
    return (
        <AmbassadorVideo>
        <AmbassadorSubject>홍보대사를 시작하게 된 계기</AmbassadorSubject>
        <Contents> asd</Contents>
            <AmbassadorSubject id='1'>홍보대사 캠퍼스투어</AmbassadorSubject>
            <ReactPlayer
            className="first"
            url="https://youtu.be/BJz966rn1Qs" 
            controls 
            // playing={true}
            >
            </ReactPlayer>
            <AmbassadorSubject id='2'>방구석 꽃놀이</AmbassadorSubject>
            <ReactPlayer
            className="first"
            url="https://youtu.be/4MkRFRlha_A" 
            controls 
            >
            </ReactPlayer>
            <AmbassadorSubject id='3'>푸르미의 모든 것</AmbassadorSubject>
            <ReactPlayer
            className="first"
            url="https://youtu.be/JoI-qMZbgKk" 
            controls 
            >
            </ReactPlayer>
            <AmbassadorSubject id='4'>푸른의 하루</AmbassadorSubject>
            <ReactPlayer
            className="first"
            url="https://youtu.be/L5Ma080Rh08" 
            controls 
            >
            </ReactPlayer>
        </AmbassadorVideo>
    );
};

export default Ambassador;