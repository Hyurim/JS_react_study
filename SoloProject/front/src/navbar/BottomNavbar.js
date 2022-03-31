import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
 import './MainBottomNavber.scss';


const MainNevber = () => {

    return (
        <div className='bottomNavber'>
            <nav >
                <div >
                    <div id='bottomExpand'>
                        <div id='bottomContainer'>
                        <p>
                          <p id='link1'> 
                            <Link to='/notice' class="nav-link active link-light" style={{ textDecoration: 'none'}} >수정 사항</Link> &nbsp;&nbsp;
                            <Link to='/faq' class="nav-link link-light" style={{ textDecoration: 'none'}}></Link>
                          </p>
                        </p>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
        );
    };


export default MainNevber;