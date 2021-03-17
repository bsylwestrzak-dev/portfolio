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

    .particles{
        position: fixed;
  width: 100%;
  height: 100%;
  z-index: -100;
  top: 0px;
  left: 0px;
  background-image: url('');
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
    }
    ${({ navbar }) => navbar && `
       box-shadow: 0 0 4px 2px #eceef0;
       padding: 0.8em 1.6em;
       top:0;
       left:0;
       right:0;
       z-index: 992;
    `}
    .hamburger{
        display:none;
    }
    ${({ sidebar }) => sidebar && `
        top:0;
        left:0;
        background-color: ${({ bgColor }) => bgColor};
        color: #ffffff;
        padding:70px;
        height: 100vh;
        visibility:hidden;
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
        transition: 1.5s width;
        transition-delay: .5s;

    `}
    .isNotInViewport .skillbar{
        width: 0 !important;
        transition: 0s !important;
        transition-delay: 0s !important;
    }
    @keyframes example {
        from {width: 0%}
    } 
    @media (min-width: 768px) {
        .flexresponsive{
            display:flex;
            flex-direction:row;
        }
    }
    @media (min-width: 1024px) {
        .alice-carousel__dots, .alice-carousel__next-btn, .alice-carousel__prev-btn{
            display:none;
        }
    }
    @media (max-width: 817px) {
     .hamburger{
         display:block;
     }
     .navbarClass{
         display:none;
     }
    }
    @media (max-width: 600px) {
        .contactresponsive{
            display:flex;
            flex-direction: column;
        }
        .contactimgresponsive{
            width: 100vw;
        }
    }
  
`;

export default Wrapper;