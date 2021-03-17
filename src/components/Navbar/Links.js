import React from 'react';
import Ul from '../../styledComponents/Ul';
import ScrollLink from './ScrollLink';

const Links = ({ className, direction, padding }) => {
    return (
        <Ul className={className} direction={direction} padding={padding}>
            <ScrollLink location="home" text='Home' />
            <ScrollLink location="aboutme" text="About me" />
            <ScrollLink location="skillset" text="Skill set" />
            <ScrollLink location="projects" text="Projects" />
            <ScrollLink location="passions" text="Passions" />
            <ScrollLink location="contact" text="Contact" />
        </Ul>
    )
}

export default Links;