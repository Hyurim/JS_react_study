import React from 'react';
import Accordion from '../../../Accordion';
import '../project.scss';
import styled from 'styled-components';
import { accordionData } from './VueList.js';

/* css 부분 */
const Title = styled.div`
// 주제
margin-top: 30px;
font-size: 25px;
font-weight: bold;
`
const Content = styled.div`
//주제 내용
margin-top: 30px;
font-size: 20px;
`
const Expression = styled.div`
margin: 0 auto;
    margin-top: 30px;
    width: 512px;
    border: 1px solid #2980b9;
    border-radius: 150px;
`
const PartContent = styled.p`
font-size: 15px;
margin-top: 10px;
` 

const VueProject = () => {


    return (
        <div id='VueProjectAll'>
            <Title>주제</Title>
            <Content>주제 내용</Content>
            <Expression>
                <p className='expression'>웹페이지 만의 장점 </p>
                <p>웹페이지 만의 장점 내용 </p>
            </Expression>
            <div id='partAndTakeaway'>
                <p className='activity'>
                    담당 역할
                    <PartContent> 역할 내용  </PartContent>
                </p>
                <p className='activity'>
                    느낀점
                    <PartContent> 느낀점 내용 </PartContent>
                </p>
            </div>
            <div id='accordion'>
                {accordionData.map(({ title, content, img }) => (
                <Accordion title={title} content={content} img={img} />
                ))}
            </div>
        </div>
    );
};

export default VueProject;
