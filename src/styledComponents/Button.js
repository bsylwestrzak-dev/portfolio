import styled from "styled-components";

const Button = styled.a`
    background-color: ${({ theme }) => theme.main};
    border: none;
    padding: ${({ padding }) => padding};
    border-radius: 30px;
    margin-top: 20px;
    font-weight: bold;
    font-size: ${({ size }) => size};
    color: ${({ theme }) => theme.white};
    box-shadow: 0px 7px 15px ${({ theme }) => theme.main};
    cursor: pointer;
    text-decoration: none;
`;

export default Button;
