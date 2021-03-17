import React from 'react';
import Wrapper from '../../styledComponents/Wrapper';
import Header from '../../styledComponents/Header';
import Paragraph from '../../styledComponents/Paragraph';
import Button from '../../styledComponents//Button';
import Img from '../../styledComponents/Img';
import Typing from 'react-typing-animation';

const Welcome = () => {
    return (
        
        <Wrapper id="home" direction='row' justify='space-between' align='center' className='welcome' padding='75px 0px 0px 0px' width='100%'> 
            <Wrapper direction='column' className='welcome_text' >
                <Header line='80%' size='5vw' weight='400'>Hi! I am</Header>
                <Header size='5vw' weight='300' color={({theme}) => theme.main}>Bartek Sylwestrzak</Header>
                <Paragraph  color={({ theme }) => theme.grey}  padding='10px 0px 0px 0px' size='0.9em'>I’m a FullStack JS Developer from Poland. I design and code beautifully simple things, and I love what I do. I am available for freelance.</Paragraph>
                <Wrapper>
                    <Button href="mailto:bartek.s.work@gmail.com" size='12px' padding='15px 20px'>Contact Me</Button>
                </Wrapper>
            </Wrapper>
                <Img width='50vw' maxwidth='700px' minwidth='250px'src={process.env.PUBLIC_URL + "/main.png"} className='welcome_img'/>
        </Wrapper>
    )
}

export default Welcome;