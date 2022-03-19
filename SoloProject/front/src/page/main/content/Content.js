/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './content.scss'
import photo from './image/JongHyeon.jpg';
import github from './image/github.png';
import instagram from './image/instagram.png';
import mail from './image/mail.png'
import { Link } from 'react-router-dom'; 
const Content = () => {
    return (
        <div id='mainContentAll'>
            <div id='photo'>
                <img src={photo} className='myPicture'/> 
                <p>이름</p>
                <p className='oneLineIntroduction'>나를 표현하는 한 문장</p>
            </div>
            <div>
                <a href='https://github.com/Hyurim'>
                <img src={github} className='image'/>
                </a>
                <a href='https://www.instagram.com/woody_96.11.06/'>
                <img src={instagram} className='image'/>
                </a>
                <Link to='kyo2301@naver.com'>
                <img src={mail} className='image' />
                </Link>
            </div>
            <div id='expressionArea'>
            <p className='expression'>나를 표현하는 글1 </p>
            <p>표현하는 글 내용 </p>
            </div>
            <div id='expressionArea'>
            <p className='expression'>기술 스택</p>
            <p>기술 내용 </p>
            </div>
            <div id='activityAndPartTime'>
            <p className='activity'>
                대외활동
                <p style={{fontSize:"15px"}}> 내용 </p>
                </p>
            
            <p className='activity'>
                아르바이트
            <p style={{fontSize:"15px"}}> 내용 </p>
                </p>
            </div>
        </div>
    );
};

export default Content;