import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { sideListData } from './SideList';

const Movement = styled.div`
text-align: center;
width: 10%;
position: fixed;
right: 30px;
margin-top: 80px;
background-color: #2980b9;
div{
    display: flex;
    flex-direction: column;
}
`
const StyleLink = styled(Link)`
text-decoration: none;
color: white;
margin-bottom: 10px;
font-size: 15px;
`
const Side = () => {
    return (
        <Movement>
            <div>
        {sideListData.map(({ no, title}) => (
          <StyleLink to={no} spy={true}>
              <span>{title}</span> 
          </StyleLink>
        ))}
            </div>
        </Movement>
        );
};

export default Side;