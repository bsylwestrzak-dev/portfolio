import React from 'react';
import Wrapper from '../../styledComponents/Wrapper';
import Header from '../../styledComponents/Header';
import Paragraph from '../../styledComponents/Paragraph';
import Button from '../../styledComponents//Button';
import Img from '../../styledComponents/Img';

const Welcome = () => {
    return (
        <Wrapper direction='row' justify='space-between' align='center' className='welcome' padding='75px 0px 0px 0px' width='100%'> 
            <Wrapper direction='column' className='welcome_text' >
                <Header size='1.2em' weight='400'>Hi! I am</Header>
                <Header padding='5px 0px 0px 0px' size='1.2em' weight='300' color={({theme}) => theme.main}>Bartek Sylwestrzak</Header>
                <Paragraph  color={({ theme }) => theme.grey}  padding='10px 0px 0px 0px' size='0.9em'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</Paragraph>
                <Wrapper>
                    <Button size='12px' padding='15px 20px'>Contact Me</Button>
                </Wrapper>
            </Wrapper>
                <Img width='300px' src={process.env.PUBLIC_URL + "/main.png"} className='welcome_img'/>
        </Wrapper>
    )
}

export default Welcome;