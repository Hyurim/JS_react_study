import React from 'react';
import { Accordion } from 'react-bootstrap'; 
import './vueProject.scss';
import styled from 'styled-components';
import { accordionData } from './FAQ_List';

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

const VueProject = () => {
    return (
        <div id='VueProjectAll'>
                <Title>주제</Title>
                <Content>주제 내용</Content>
            <Expression>
            <p className='expression'>웹페이지 만의 장점 </p>
            <p>웹페이지 만의 장점 내용 </p>
            </Expression>
            <div id='activityAndPartTime'>
            <p className='activity'>
                담당 역할
                <p style={{fontSize:"15px"}}> 역할 내용 </p>
                </p>
            <p className='activity'>
                느낀점
            <p style={{fontSize:"15px"}}> 느낀점 내용 </p>
                </p>
            </div>
        {accordionData.map(({ no, title, content, img }) => (
          <Accordion defaultActiveKey="1" id='accordion'>
  <Accordion.Item eventKey={no} >
    <Accordion.Header className='title'>{title}</Accordion.Header>
    <Accordion.Body className='content'>
        {content}
        {img}
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
        ))} 
    
        </div>
    );
};

export default VueProject;