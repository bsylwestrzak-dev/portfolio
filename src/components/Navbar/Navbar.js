import React from "react";
import Wrapper from "../../styledComponents//Wrapper";
import Header from "../../styledComponents/Header";
import Img from "../../styledComponents/Img";
import Button from "../../styledComponents/Button";
import Paragraph from "../../styledComponents/Paragraph";

const Navbar = () => {
  return (
    <>
      <Wrapper navbar direction="row" justify="space-between" align="center" width='100%' position='fixed' padding='0.4em 0.8em' margin='0' bgColor={({ theme }) => theme.white} >
        <Wrapper direction='column'>
          <Paragraph color={({ theme }) => theme.main} size='0.7em'>FullStack JS Developer</Paragraph>
          <Header size='1em' color={({ theme }) => theme.blue}>Bartek Sylwestrzak</Header>
        </Wrapper>
        <Img src={process.env.PUBLIC_URL + "/hamburger.png"} />
      </Wrapper>
    </>
  );
};

export default Navbar;
