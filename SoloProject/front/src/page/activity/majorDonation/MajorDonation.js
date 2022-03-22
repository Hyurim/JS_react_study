import React from 'react';
import styled from 'styled-components';

const AmbassadorVideo = styled.div`
*{
    margin: 0; 
    padding: 0;
}
margin: 0 auto;
margin-top: 10px;
.first{
    margin-top: 40px;
    margin-bottom: 40px;
}
`;
const Subject = styled.p`
font-size: 25px;
font-weight: bold;
text-align: center;
`;
const Contents = styled.p`
position: relative;
left: 50%;
transform: translateX(-50%);
margin-top: 40px;
margin-bottom: 40px;
padding: 20px;
width: 512px;
height: 200px;
border: 1px solid #2980b9;
border-radius: 50px;
word-break: break-all;
`

const Ima = styled.div`
width: 1024px;
overflow: hidden;
margin: 0 auto;
`
const MajorDonation = () => {

    return (
        <AmbassadorVideo>
            <Subject>대학생 교육 기부단</Subject>
            <Contents> asd</Contents>
            <Ima>
            <img src={require('./Image/Goheung_1.jpg')} alt='Goheung_1' />
            <img src={require('./Image/Goheung_2.jpg')} alt='Goheung_2' />
            <img src={require('./Image/Goheung_3.png')} alt='Goheung_3' />
            <img src={require('./Image/Goheung_4.png')} alt='Goheung_4' />
            <img src={require('./Image/Haenam_1.jpg')} alt='Haenam_1' />
            <img src={require('./Image/Haenam_2.jpg')} alt='Haenam_2' />
            <img src={require('./Image/Jangheung_1.jpg')} alt='Jangheung_1' />
            <img src={require('./Image/Jangheung_2.jpg')} alt='Jangheung_2' />
            <img src={require('./Image/Jangseong_1.jpg')} alt='Jangseong_1' />
            <img src={require('./Image/Jangseong_2.jpg')} alt='Jangseong_2' />
            <img src={require('./Image/Wando_1.jpg')} alt='Wando_1' />
            <img src={require('./Image/Wando_2.jpg')} alt='Wando_2' />
            <img src={require('./Image/Yeongam_1.jpg')} alt='Yeongam_1' />
            <img src={require('./Image/Yeongam_2.jpg')} alt='Yeongam_2' />
            </Ima>
        </AmbassadorVideo>
    );
};

export default MajorDonation;