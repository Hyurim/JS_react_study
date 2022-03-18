import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavDropdown, Container, Navbar } from 'react-bootstrap';
import './topNavbar.scss'
const Topnavber = () => {

    const [project, setProjectShow] = useState(false);

    const projectShowDropdown = (e)=>{
        setProjectShow(!show);
    }
    const projectHideDropdown = e => {
        setProjectShow(false);
    }    
    const [show, setShow] = useState(false);

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
            <div id='logoAndLogin'>
                <p>
                <Link to="/" id='mainTitle' >
                    JongHyeon's Blog
                </Link>
                </p>
            {(!isLogin)?
                <div id='loginAndRegister'>
                    <Link to="/login" className='LoginAndLogout'>
                        로그인 
                    </Link>
                    <Link to="/Register" className='RegisterAndMyPage'>
                        회원가입
                    </Link>
                </div>
                :
                <div id='loginAndRegister'>
                <Link to="/" className='LoginAndLogout' onClick={Logout}>
                    로그아웃
                </Link>
                    {(!ismanager)?
                <Link to={`/myPageBoard/${m_name}`} className='RegisterAndMyPage' style={{ textDecoration: 'none'}}>
                    마이페이지
                </Link>:<></>
                    }
                </div>
                }
                </div>
                <div>
                <Navbar bg="#2980b9" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</div>

                       {/* <Nav id='topNav'>
                         div가 안에 li로 변경. */}
{/*                         <NavDropdown
                        title="프로젝트" 
                        show={project}
                        onMouseEnter={projectShowDropdown} 
                        onMouseLeave={projectHideDropdown}
                        id="Dropdown"
                        className="dropdown" 
                        href="#"
                        >
                            <NavDropdown.Item href="#">
                                Vue
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#">
                                React
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#introduce" className='introduce'>자기소개서</Nav.Link>
                        <NavDropdown
                        title="대외활동" 
                        show={show}
                        onMouseEnter={showDropdown} 
                        onMouseLeave={hideDropdown}
                        id="Dropdown"
                        href="#"
                        >
                            <NavDropdown.Item href="#">
                                홍보대사
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#">
                                대학생교육기부단
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#">
                                전공나래단
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#">
                                영상
                            </NavDropdown.Item>
                        </NavDropdown>     
                        <Link to='#' className='qna'>
                            질문게시판
                        </Link>
                    </Nav> */}
            </div>    
        );
    };


export default Topnavber;