import React from 'react';
import { Link } from "react-scroll";

const ScrollLink = ({location, text}) => {
    return (
        <Link
            className='scrollLinkClass'
            activeClass="active"
            to={location}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
        >{text}</Link>
    )
}

export default ScrollLink;