import React, {useRef, useState} from "react";
import Wrapper from "../../styledComponents//Wrapper";
import Header from "../../styledComponents/Header";
import Img from "../../styledComponents/Img";
import Paragraph from "../../styledComponents/Paragraph";
import Sidebar from "../Sidebar/Sidebar";
import Links from "./Links";
import { useDispatch } from 'react-redux';
import {SET_SIDEBAR} from '../../action/index'; 

const Navbar = () => {
  const dispatch = useDispatch()
  const showSidebar = () => {
    dispatch(SET_SIDEBAR(true))
  }
  
  return (
      <Wrapper navbar direction="row" justify="space-between" align="center" width='100%' position='fixed' padding='0.4em 0.8em' margin='0' bgColor={({ theme }) => theme.white} >
        <Wrapper direction='column'>
          <Paragraph color={({ theme }) => theme.main} size='0.7em'>FullStack JS Developer</Paragraph>
          <Header size='1em' color={({ theme }) => theme.blue}>Bartek Sylwestrzak</Header>
        </Wrapper>
        <Img hamburger className='hamburger' onClick={showSidebar} src={process.env.PUBLIC_URL + 'hamburger.png'}/>
        <Sidebar />
        <Links className='navbarClass' direction='row' padding='0px 20px'/>
      </Wrapper>
  );
};

export default Navbar;
