import React from 'react';
import styled from 'styled-components';
import Side from '../Side';
import VueProject from './VueProject';

const Main = styled.div`
margin: 3rem 5rem;
`

const MainContents = styled.div`
width: 100%;
display: flex;
`

const AmbassadorMain = () => {
    return (
        <Main>
            <MainContents>
                <VueProject />
                <Side />
            </MainContents>
        </Main>
    );
};

export default AmbassadorMain;