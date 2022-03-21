import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { sideListData } from './SideList';

const Movement = styled.div`
width: 10%;
position: fixed;
right: 5rem;
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