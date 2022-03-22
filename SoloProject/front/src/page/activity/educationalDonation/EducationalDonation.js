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
const Subject = styled.p`
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
const EducationalDonation = () => {
    return (
        <AmbassadorVideo>
            <Subject>대학생 교육 기부단</Subject>
            <Contents> asd</Contents>
            <Subject>대학생 교육 기부단 회의</Subject>
            <ReactPlayer
            className="first"
            url="https://youtu.be/9EV8lNLHaGw" 
            controls 
            volume={null}
            // playing={true}
            ></ReactPlayer>
            <Subject>대학생 교육 기부단 MT</Subject>
            <ReactPlayer
            className="first"
            url="https://youtu.be/OXbSOIAwswc" 
            controls 
            volume={null}
            // playing={true}
            ></ReactPlayer>
            <Subject>쿠키즈</Subject>
            <ReactPlayer
            className="first"
            url="https://youtu.be/grideHwiPLU" 
            controls 
            volume={null}
            // playing={true}
            ></ReactPlayer>
        </AmbassadorVideo>
    );
};

export default EducationalDonation;