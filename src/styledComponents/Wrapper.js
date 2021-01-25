import styled from 'styled-components';

const Wrapper = styled.div`
    display:flex;
    flex-direction: ${({ direction }) => direction};
    justify-content: ${({ justify }) => justify};
    align-items: ${({ align }) => align};
    width: ${({ width }) => width};
    padding: ${({ padding }) => padding};
    position: ${({ position }) => position};
    background-color: ${({ bgColor }) => bgColor};
    margin: ${({ margin }) => margin};
    ${({ particles }) => particles && `
        position: fixed;
        top:0;
        left:0;
        right:0;
        bottom:0;
        z-index: -1;
        opacity: 0.7;
        filter: blur(3.5rem);
    `}
    ${({ navbar }) => navbar && `
       box-shadow: 0 0 4px 2px #eceef0;
       padding: 0.8em 1.6em;
       top:0;
       left:0;
       right:0;
    `}
    ${({ skill_procent_outside }) => skill_procent_outside && `
        border-radius:30px;
        border-radius-left: 30px;
        height: 10px;
        background-color: #fff;
        box-shadow: 0 0 4px 2px #eceef0;
        width:100%;
    `}
    ${({ skill_procent_inside }) => skill_procent_inside && `
        background: linear-gradient(90deg, rgba(226,65,204,1) 0%, rgba(181,138,248,1) 100%);
        width: ${({ width }) => width};
        animation-name: example;
        animation-duration: 4s;
    `}
    @keyframes example {
        from {width: 0%}
    } 
`;
  
export default Wrapper;