import styled from 'styled-components';

const Img = styled.img`
    object-fit: contain;
    width: ${({ width }) => width};
    max-width: ${({ maxwidth }) => maxwidth};
    min-width: ${({ minwidth }) => minwidth};
    margin: ${({ margin }) => margin};
    ${({ contact }) => contact && `
        position: absolute;
        z-index: -1;
        right:-40%;
        top:5;
    `}
`;

export default Img;