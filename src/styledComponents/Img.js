import styled from 'styled-components';

const Img = styled.img`
    object-fit: contain;
    width: ${({ width }) => width};
    max-width: ${({ maxwidth }) => maxwidth};
    min-width: ${({ minwidth }) => minwidth};
    margin: ${({ margin }) => margin};
    cursor: pointer;
    ${({ close }) => close && `
        position: absolute;
        top:0;
        right:0;
        padding:10px 10px 0 0;
        width: 30px;
    `}
    ${({ hamburger }) => hamburger && `
        position: absolute;
        top:16px;
        right:40px;
    `}
`;

export default Img;