import styled, {css} from "styled-components";
import UseColor from "../../lib/styles/UseColor";

const StyledButton = styled.button`
border: none;
border-radius: 5px;
font-size: 15px;
font-weight: bold;
padding: 0.25rem 1rem;
color: white;
outline: none;
cursor: pointer;

background: ${UseColor.Indigo[4]};
&:hover{
    background: ${UseColor.Indigo[6]};
}

${props =>
props.fullWidth && css`
padding-top: 0.75rem;
padding-bottom: 0.75rem;
width: 100%;
font-size:1.125rem;`}

${props =>
props.Indigo &&
css`
background: ${UseColor.Indigo[5]};
&:hover {
    background: ${UseColor.Indigo[4]};
}
`}
`;

const Button = props => <StyledButton {...props} />;


export default Button;