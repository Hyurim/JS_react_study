import Header from "../components/common/Header";
import React, { useState } from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import styled from 'styled-components';

const NavLink = styled(Nav.Link)`
text-decoration: none;
color: white;
&:hover {
    color: black;
}
`

const NavbarMain = styled.div`
background-color: #2980b9;
    padding-top: 15px;
    padding-bottom: 15px;
    font-size: 17px;
    
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

const ListPage = () => {
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
    return (
        <>
            <Header />
                <NavbarMain>
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
                    
                </NavbarMain>
        </>
    );
};

export default ListPage;