import React from 'react';
import Wrapper from '../../styledComponents/Wrapper';
import Header from '../../styledComponents/Header';
import Img from '../../styledComponents/Img';
import Paragraph from '../../styledComponents/Paragraph';
const AboutMe = () => {
    return (
        <Wrapper id="aboutme" padding='70px 0px 10px 0px' direction='column' justify='center' width='100%'>
            <Header padding='10px 0px' weight='900' size='1.5em'>WHO I AM</Header>
            <Wrapper className='flexresponsive' direction='column' justify='center' align='center' width='100%'>
                <Img width='50vw' maxwidth='700px' minwidth='250px' src={process.env.PUBLIC_URL + "/aboutme.png"} />
                <Wrapper direction='column' justify='center' align='center'>
                    <Header size='1.3em' weight='400' padding='10px 0px'>Bartek Sylwestrzak</Header>
                    <Paragraph color={({ theme }) => theme.grey} size='1em'>My name is Bartek. I am passionate FullStack JS Developer with a engineer degree in computer science. For the past year I have been working on various freelance and personal projects, mostly in technologies such as: React, Node and standard HTML/CSS/JS.</Paragraph>
                </Wrapper>
            </Wrapper>
        </Wrapper>
    )
}

export default AboutMe;