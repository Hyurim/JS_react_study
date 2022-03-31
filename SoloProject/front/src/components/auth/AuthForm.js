import styled from "styled-components";
import { Link } from "react-router-dom";
import UseColor from "../../lib/styles/UseColor";
import Button from "../common/Button";

/* 회원 가입 폼 또는 로그인 폼 */

const AuthFormBlock = styled.div`
h3 {
    margin: 0;
    color: ${UseColor.Cyan[6]};
    margin-bottom: 1rem;
}
`;

// input styling

const StyledInput = styled.input`
font-size: 15px;
border: none;
border-bottom: 1px solid ${UseColor.Cyan[3]};
padding-bottom: 0.5rem;
outline: none;
width: 100%;
&:focus{
    color: $oc-teal-7;
    border-bottom: 1px solid ${UseColor.Cyan[5]};
}
& + & {
    margin-top: 1rem;
}
`;

// 폼 하단에 로그인 혹은 회원 가입 링크 보여줌.

const Footer = styled.div`
margin-top: 2rem;
text-align: right;
a { 
    color: ${UseColor.Indigo[5]};
    text-decoration: none;
    &:hover {
        color: ${UseColor.Indigo[9]};
    }
}
`;

const ButtonMargin = styled(Button)`
margin-top: 1rem;`

const textMap = {
    login: '로그인',
    register: '회원가입',
};

// 에러 보여주는 곳
const ErrorMessage = styled.div`
color: red;
text-align: center;
font-size: 0.875rem;
margin-top: 1rem;
`;


const AuthForm = ({ type, form, onChange, onSubmit, error }) => {
    const text = textMap[type];
    return (
        <AuthFormBlock>
            <h3>{text}</h3>
            <form onSubmit={onSubmit}>
                <StyledInput 
                autoComplete="username" 
                name="username" 
                placeholder="아이디" 
                onChange={onChange}
                value={form.username}
                />
                <StyledInput 
                autoComplete="new-password"
                name="password"
                placeholder="비밀번호"
                type="password"
                onChange={onChange}
                value={form.password}
                />
                {type === 'register' && (
                <StyledInput 
                autoComplete="new-password"
                name="passwordConfirm"
                placeholder="비밀번호 확인"
                type="password"
                onChange={onChange}
                value={form.passwordConfirm}
                />
                )}
                {error && <ErrorMessage>{error}</ErrorMessage>}
                <ButtonMargin Indigo fullWidth> {text}
                </ButtonMargin>
            </form>
            <Footer>
                {type === 'login' ? (
                <Link to="/register">회원가입</Link>
                ) : (
                    <Link to="/login">로그인</Link>
                )}
            </Footer>
        </AuthFormBlock>
    );
};

export default AuthForm;