import React from 'react';
import styled from 'styled-components';
import Ambassador from './Ambassador';
import Side from './Side';

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
                <Ambassador />
                <Side />
            </MainContents>
        </Main>
    );
};

export default AmbassadorMain;