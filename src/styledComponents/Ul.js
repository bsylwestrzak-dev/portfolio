import styled from 'styled-components';

const Ul = styled.ul`
    display: flex;
    flex-direction: ${({ direction }) => direction};
    justify-content: center;
    align-items: center;
    padding:0px;
    
    > * {
        list-style: none;
        padding: ${({ padding }) => padding};
        transition: .25s;
    }
    .scrollLinkClass:hover{
        color: ${({ theme }) => theme.main};
        cursor: pointer;

    }
`;

export default Ul;



