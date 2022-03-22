import React from 'react';
import ReactPlayer from 'react-player/youtube';
import styled from 'styled-components';
import Accordion from '../../../Accordion.js';
import { accordionData } from './AmbassadorImageList.js';

const AmbassadorVideo = styled.div`
position: absolute;
left: 50%;
transform: translateX(-50%);
.videoMargin{
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
const Img = styled.div`

.accordion-title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-weight: bold;
    cursor: pointer;
    background-color: #f9f9f9;

    &:hover {
      background-color: #f1f1f1;
    }
    padding: 1rem;
  }
  .accordion-content {
    padding: 1rem;
    white-space: pre-wrap;
  }`
const Ambassador = () => {
    return (
        <AmbassadorVideo>
        <Subject id='1'>홍보대사를 시작하게 된 계기</Subject>
        <Contents> asd</Contents>
        <Subject id='2'>홍보대사를 하면서 느낀점</Subject>
        <Contents> asd</Contents>
            <Subject id='3'>홍보대사 캠퍼스투어</Subject>
            <ReactPlayer
            className="videoMargin"
            url="https://youtu.be/BJz966rn1Qs" 
            controls 
            volume={null}
            // playing={true}
            >
            </ReactPlayer>
            <Subject id='4'>방구석 꽃놀이</Subject>
            <ReactPlayer
            className="videoMargin"
            url="https://youtu.be/4MkRFRlha_A" 
            controls 
            volume={null}
            >
            </ReactPlayer>
            <Subject id='5'>푸르미의 모든 것</Subject>
            <ReactPlayer
            className="videoMargin"
            url="https://youtu.be/JoI-qMZbgKk" 
            controls 
            volume={null}
            >
            </ReactPlayer>
            <Subject id='6'>푸른의 하루</Subject>
            <ReactPlayer
            className="videoMargin"
            url="https://youtu.be/L5Ma080Rh08" 
            controls 
            volume={null}
            >
            </ReactPlayer>
            
        <Img id='7'>
            {accordionData.map(({ title, content, img }) => (
            <Accordion title={title} content={content} img={img} />
            ))}
        </Img>
        </AmbassadorVideo>
    );
};

export default Ambassador;