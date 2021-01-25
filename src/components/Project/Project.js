import React from 'react';
import Wrapper from '../../styledComponents/Wrapper';
import Header from '../../styledComponents/Header';
import Img from '../../styledComponents/Img';
import Paragraph from '../../styledComponents/Paragraph';
import Button from '../../styledComponents//Button';

const Project = () => {
    return (
        <Wrapper padding='70px 0px 0px 0px' direction='column' justify='center' width='100%'>
            <Header padding='10px 0px 30px 0px' weight='900' size='1.5em'>PROJECTS</Header>
            <Wrapper direction='column'>
            <Img width='330px' src={process.env.PUBLIC_URL + "/project.png"} />
                <Wrapper direction='column' justify='center' align='center' width='100%'>
                    <Header size='1.2em' weight='400'>Weather App</Header>
                    <Paragraph color={({ theme }) => theme.grey}  padding='10px 30px' size='1em'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</Paragraph>
                    <Button size='12px' padding='15px 20px'>Git Hub</Button>
                </Wrapper>
            </Wrapper>
        </Wrapper>
        
    )
}

export default Project;