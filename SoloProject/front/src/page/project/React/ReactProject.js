import React from 'react';
import '../project.scss';
import styled from 'styled-components';

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
const Activity = styled.p`

display: flex;
  margin: 0 auto;
  margin-top: 30px;
  justify-content: space-evenly;
  .Part{
    padding: 20px;
    width: 512px;
    height: 200px;
    border: 1px solid #2980b9;
    border-radius: 50px;
    font-size: 25px;
    font-weight: bold;
    word-break: break-all;
  }
`
const PartContent = styled.p`
font-size: 15px;
margin-top: 10px;
`
const ReactProject = () => {
    return (
        <div id='ProjectAll'>
            <Title id='1'>주제</Title>
            <Content>주제 내용</Content>
            <Expression id='2'>
                <p className='expression'>웹페이지 만의 장점 </p>
                <p>웹페이지 만의 장점 내용 </p>
            </Expression>
            <Content>
            <Activity id='3'>
                <p className='Part'>
                    담당 역할
                    <PartContent> 역할 내용  </PartContent>
                </p>
                <p className='Part'>
                    느낀점
                    <PartContent> 느낀점 내용 </PartContent>
                </p>
            </Activity>
            </Content>
            <Title id='4'>일정</Title>
            {/* <Content><img src={schedule} alt='schedule' /></Content> */}
            
            <Title id='5'>E-R 다이어그램</Title>
            <Content></Content>
            <Title id='6'>액티비티 다이어그램</Title>
            <Content></Content>
            <Title id='7'>SQL</Title>
            <Content></Content>
            <Title id='8'>만든 페이지 및 코드</Title>
            <Content></Content>
            
        </div>
    );
};

export default ReactProject;