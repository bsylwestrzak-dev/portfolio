import styled from 'styled-components';

const Header = styled.h1`
    color: ${({ color }) => color};
    margin:0;
    font-size: ${({ size }) => size};
    white-space: nowrap;
    font-weight: ${({ weight }) => weight};
    padding: ${({ padding }) => padding};
    line-height: ${({ line }) => line};
`
export default Header;