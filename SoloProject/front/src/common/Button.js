import styled from "styled-components";
import UseColor from "../lib/styles/UseColor";

const basicButton = styled.button`
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
`;

const Button = props => <basicButton {...props} />;


export default Button;