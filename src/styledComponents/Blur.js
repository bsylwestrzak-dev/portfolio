import styled from "styled-components";

const Blur = styled.div`
    position: absolute;
    border-radius: 50%;
    filter: blur(2rem);
    padding: ${({ padding }) => padding};
    background: ${({ color }) => color};
    top: ${({ top }) => top};
    left: ${({ left }) => left};
    right: ${({ right }) => right};
    bottom: ${({ bottom }) => bottom};

`;

export default Blur;