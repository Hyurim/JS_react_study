import styled from "styled-components";
import Responsive from "./Responsive";
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import Button from "./Button";


const HeaderBlock = styled.div`
position: fixed;
width: 100%;
background-color: #2980b9;
padding: 10px 5px 0 0;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
`;

const Wrapper = styled(Responsive)`
height: 4rem;
display: flex;
align-items: center;
justify-content: space-between; /* 사이 간격 최대 */
.logo{
    font-size: 1.125rem;
    font-weight: 800;
    letter-spacing: 2px;
    text-decoration: none;
    font-size: 30px;
    font-weight: bold;
    color: white;
}
    #topNav {
      //네비바
      justify-content: space-evenly;
      text-align: center;
      margin-left: 20px;
      display: flex;
      .textColor {
        text-decoration: none;
        color: white;
      }
      .introduce {
        text-decoration: none;
        color: white;
      }
      .qna {
        text-decoration: none;
        color: white;
      }
      #Dropdown {
        color: white;
        text-decoration: none;
      }
      .dropbtn {
        border: none;
        padding: 16px;
        font-size: 16px;
        color: white;
        border-color: none;
        background-color: #998380;
      }
      .dropdown:hover {
        position: relative;
        display: inline-block;
      }
      .dropdown-content {
        display: none;
        position: relative;
        z-index: 100;
        color: black;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        min-width: 150px;
      }

      .dropdown-content Link {
        text-decoration: none;
        display: block;
        padding: 0px;
      }

      .dropdown-content Link :hover {
        background: #ff1111;
        color: red;
      }
      .dropdown:hover .dropbtn {
        background: #008000;
      }
      .dropdown:hover .dropdown-content {
        display: block;
        z-index: 100;
      }
    }
`;

const LoginSpace = styled.div`

float: right;
    font-size: 15px;
    font-weight: bold;
    color: white;
`

const FormLink = styled(Link)`
text-decoration: none;
color: white;
font-weight: normal;
    margin-right: 30px;
`

const UserInfo = styled.div`
font-weight: 800px;
margin-right: 1rem;
`
// 헤더가 fixed로 되어 있기 때문에 페이지의 콘텐츠가 4rem 아래에 나타나도록 해주는 컴포넌트

const Spacer = styled.div`
height: 4rem;
`;

const NavLink = styled(Nav.Link)`
text-decoration: none;
color: white;
&:hover {
    color: black;
}
`



const Header = ({ user }) => {
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
    }/* 
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
},[isLogin]); */

    return (
        <>
            <HeaderBlock>
                <Wrapper>
                    <Link to="/" className="logo" >
                    JongHyeon's Blog
                    </Link>
                    
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
                        <NavLink href="/introduce">자기소개서</NavLink>
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
                        <NavLink href="/QuestionList" >질문 게시판</NavLink>   
                        <NavLink href="/Newskill">새로운 스킬 시도 공간</NavLink>   
                    </nav>
                    {user ? (
                    <LoginSpace>
                        <UserInfo>
                            <UserInfo>{user.username}</UserInfo>
                            <Button>로그아웃</Button>
                        </UserInfo>
                    </LoginSpace> ) : (
                        <LoginSpace>
                            <Button to="/login"> 로그인</Button>
                        </LoginSpace>
                    )}
                    {/* 
                    {(!isLogin)?
                <LoginSpace>
                    <FormLink to="/login" >
                        로그인 
                    </FormLink>
                    <FormLink to="/Register" >
                        회원가입
                    </FormLink>
                </LoginSpace>
                :
                <LoginSpace>
                <FormLink to="/"  onClick={Logout}>
                    로그아웃
                </FormLink>
                    {(!ismanager)?
                <FormLink to={`/myPageBoard/${m_name}`} style={{ textDecoration: 'none'}}>
                    마이페이지
                </FormLink>:<></>
                    }
                </LoginSpace>
                } */}
                </Wrapper>          
            </HeaderBlock>
            <Spacer />
        </>
    );
};

export default Header;