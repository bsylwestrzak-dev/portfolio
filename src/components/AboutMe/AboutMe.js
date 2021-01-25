import React from 'react';
import Wrapper from '../../styledComponents/Wrapper';
import Header from '../../styledComponents/Header';
import Img from '../../styledComponents/Img';
import Paragraph from '../../styledComponents/Paragraph';
const AboutMe = () => {
    return (
        <Wrapper padding='70px 0px 10px 0px' direction='column' justify='center' width='100%'>
            <Header padding='10px 0px' weight='900' size='1.5em'>WHO I AM</Header>
            <Wrapper direction='column' justify='center' align='center' width='100%'>
                <Img width='50vw' maxwidth='700px' minwidth='210px' src={process.env.PUBLIC_URL + "/aboutme.png"} />
                <Header size='1.3em' weight='400'>Bartek Sylwestrzak</Header>
                <Paragraph color={({ theme }) => theme.grey}  padding='10px 30px' size='1em'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</Paragraph>
            </Wrapper>
        </Wrapper>
    )
}

export default AboutMe;