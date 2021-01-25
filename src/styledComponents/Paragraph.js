import styled from "styled-components";

const Paragraph = styled.p`
    margin:0;
    color: ${({ color }) => color};
    font-size: ${({ size }) => size};
    padding: ${({ padding }) => padding};
`;

export default Paragraph;