import React from "react";
import Wrapper from '../../styledComponents/Wrapper';
import Header from '../../styledComponents/Header';
import Img from '../../styledComponents/Img';
import Paragraph from '../../styledComponents/Paragraph';
import Button from '../../styledComponents//Button';

const Contact = () => {

  return (
    <Wrapper id="contact" padding="30px 0px 0px 0px" direction="column" justify="center" width="100%">
      <Header padding="30px 0px" weight="900" size="1.5em">
        CONTACT
      </Header>
      <Wrapper className='contactresponsive' direction='row' align='center' justify='space-around'>
        <Wrapper direction='column' justify='center' align='center'>
            <Wrapper direction='row' align='center'>
                <Img width="30px" src={process.env.PUBLIC_URL + "/email.png"} />
                <Paragraph  color={({ theme }) => theme.main} padding='0px 0px 0px 10px'>bartek.s.work@gmail.com</Paragraph>
            </Wrapper>
            <Wrapper>
                <Button href="mailto:bartek.s.work@gmail.com"  size='12px' padding='15px 20px'>Send Email</Button>
            </Wrapper>
        </Wrapper>
        <Img className='contactimgresponsive' contact margin='0px 30px 0px 0px' width='50vw' maxwidth='700px' minwidth='250px' src={process.env.PUBLIC_URL + "/contact.png"} />
      </Wrapper>
    </Wrapper>
  );
};

export default Contact;
