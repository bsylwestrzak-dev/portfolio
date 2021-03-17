import React from 'react';
import Wrapper from '../../styledComponents/Wrapper';
import Header from '../../styledComponents/Header';
import Img from '../../styledComponents/Img';
import Paragraph from '../../styledComponents/Paragraph';
import Button from '../../styledComponents//Button';

const Project = () => {
    return (
        <Wrapper id="projects" flexresponsive padding='70px 0px 0px 0px' direction='column' justify='center' width='100%'>
            <Header padding='10px 0px 30px 0px' weight='900' size='1.5em'>PROJECTS</Header>
            <Wrapper className='flexresponsive' direction='column'>
            <Img width='50vw' maxwidth='700px' minwidth='250px'src={process.env.PUBLIC_URL + "/project.png"} />
                <Wrapper direction='column' justify='center' align='center' width='100%'>
                    <Header size='1.2em' weight='400' padding='10px 0px'>Weather App</Header>
                    <Paragraph color={({ theme }) => theme.grey}  size='1em'>Checking weather solution in a clean, user friendly web application. Technologies used during development were React/Redux, Node/Express among with database MongoDB.</Paragraph>
                    <Button target="_blank" href='https://github.com/bsylwestrzak-dev/weatherapp' size='12px' padding='15px 20px'>Git Hub</Button>
                </Wrapper>
            </Wrapper>
        </Wrapper>
        
    )
}

export default Project;