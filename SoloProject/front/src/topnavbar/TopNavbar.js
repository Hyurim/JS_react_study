import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavDropdown } from 'react-bootstrap';
import './topNavbar.scss'
const Topnavbar = () => {

    const [project, setProjectShow] = useState(false);
    const [show, setShow] = useState(false);

    const projectShowDropdown = (e)=>{
        setProjectShow(!show);
    }
    const projectHideDropdown = e => {
        setProjectShow(false);
    }    
    const showDropdown = (e)=>{
        setShow(!show);
    }
    const hideDropdown = e => {
        setShow(false);
    }
    const[ismanager,setismanager]=useState();
    const [isLogin,setIslogin]=useState();
    const m_name=sessionStorage.getItem('m_name');
    const Logout=()=>{
        localStorage.clear();
        sessionStorage.clear();
        setIslogin(false);
      console.log(setIslogin);
      alert('로그아웃');
    }
    useEffect(()=>{
      if(sessionStorage.getItem('m_name')===null &&localStorage.getItem('m_name')===null){
        setIslogin(false); setismanager(false);
      }else if(sessionStorage.getItem('m_name')==='manager'){
        setIslogin(true);
        setismanager(true);
      }
      else{setIslogin(true);}
    },[isLogin]);

    return (
        <div id='mainTopNavber'>
            <div>
                <p>
                <Link to="/" id='mainTitle' >
                    JongHyeon's Blog
                </Link>
                </p>
                {(!isLogin)?
                <div id='loginAndRegister'>
                    <Link to="/login" className='LoginAndLogout'>
                        로그인 
                    </Link>| 
                    <Link to="/Register" className='RegisterAndMyPage'>
                        회원가입
                    </Link>
                </div>
                :
                <div id='loginAndRegister'>
                <Link to="/" className='LoginAndLogout' onClick={Logout}>
                    로그아웃
                </Link>| 
                    {(!ismanager)?
                <Link to={`/myPageBoard/${m_name}`} className='RegisterAndMyPage' style={{ textDecoration: 'none'}}>
                    마이페이지
                </Link>:<></>
                    }
                </div>
                }
            </div>
                <div id='navbarMain'>
                    <nav id='topNav'>
                        <NavDropdown
                        title="프로젝트" 
                        show={project}
                        onMouseEnter={projectShowDropdown} 
                        onMouseLeave={projectHideDropdown}
                        id="Dropdown"
                        className="dropdown"
                        >
                            <NavDropdown.Item href="/Vue">
                                Vue
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/React">
                                React
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/introduce" className='introduce'>자기소개서</Nav.Link>
                        <NavDropdown
                        title="대외활동"   /* id="collasible-nav-dropdown" */ 
                        show={show}
                        onMouseEnter={showDropdown} 
                        onMouseLeave={hideDropdown}
                        id="Dropdown"
                        className="dropdown" zindex={1}
                            >
                            <NavDropdown.Item href="/ambassador">
                                홍보대사
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/educationalDonation">
                                대학생교육기부단
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/majorDonation">
                                전공나래단
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/activityVideo">
                                영상
                            </NavDropdown.Item>
                           </NavDropdown> 
                        <Nav.Link href="#QnA" className='qna'>질문 게시판</Nav.Link>   
                    </nav>
                </div>
            </div>    
        );
    };


export default Topnavbar;