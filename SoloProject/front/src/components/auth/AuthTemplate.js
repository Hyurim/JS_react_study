import { Link } from "react-router-dom";
import styled from "styled-components";
import UseColor from "../../lib/styles/UseColor";

/* 
회원가입 / 로그인 페이지의 레이아웃을 담당.
*/

// 화면 전체
const AuthTemplateBlock = styled.div`
position: absolute;
left: 0;
top: 0;
bottom: 0;
right: 0;/* 
background: ${UseColor.Cyan[1]}; */
// flex로 내부 내용 중앙 정렬 시킴.
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

// Form 공간
const Box = styled.div`
.logo-area{
    display: block;
    padding-bottom: 2rem;
    text-align: center;
    font-weight: bold;
    letter-spacing: 2px;
}
box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
padding: 2rem;
width: 360px;
background: white;
border-radius: 3px;
`

const AuthTemplate = ({ children }) => {
    return (
        <AuthTemplateBlock>
            <Box>
            <div className="logo-area">
                <Link to ="/">Blog</Link>
            </div>
            {children}
            </Box>
        </AuthTemplateBlock>
    );
};

export default AuthTemplate;