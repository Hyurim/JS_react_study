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
            <p>나를 표현하는 글 </p>
            <p>표현하는 글 내용 내용</p>
        </div>
    );
};

export default Content;