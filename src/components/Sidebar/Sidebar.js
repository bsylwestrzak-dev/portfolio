import React, {useRef} from 'react';
import Wrapper from '../../styledComponents/Wrapper';
import Img from '../../styledComponents/Img';
import Links from '../Navbar/Links';
import { useSelector } from 'react-redux';
import GsapManager from '../../utitiles/Gsap';
import { useDispatch } from 'react-redux';
import {SET_SIDEBAR} from '../../action/index'; 

const Sidebar = () => {
    const sidebar = useSelector(state => state.sidebar);
    const wrapper = useRef(null);
    GsapManager.animate(wrapper, { transformOrigin: "50% 50%" }, "ScaleAnimation", sidebar)
    const dispatch = useDispatch()
    const closeSidebar = () => {
      dispatch(SET_SIDEBAR(false))
    }
    return (
        <div ref={wrapper}>
            <Wrapper className='sidebar' bgColor={({ theme }) => theme.blue} sidebar position='absolute'>
                <Img onClick={closeSidebar} close src={process.env.PUBLIC_URL + 'close.png'}/>
                <Links direction='column' padding='20px 0px'/>
            </Wrapper>
        </div>
    )
}

export default Sidebar;