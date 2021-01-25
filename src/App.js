import React from "react";
import Particles from 'react-particles-js';
import GlobalStyle from "./themes/global";
import { ThemeProvider } from "styled-components";
import colors from "./themes/colors";
import Wrapper from "./styledComponents/Wrapper";
import Navbar from "./components/Navbar/Navbar";
import Welcome from "./components/Welcome/Welcome";
import AboutMe from "./components/AboutMe/AboutMe";
import Project from "./components/Project/Project";
import Passion from "./components/Passion/Passion";
import Contact from "./components/Contact/Contact";
import Skill from "./components/Skill/Skill";
import Img from './styledComponents/Img';
import Blur from "./styledComponents/Blur";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={colors}>
      <Wrapper particles>
        <Particles params={{

          "particles": {
            "number": {
              "value": 3,
              "density": {
                "enable": false,
                "value_area": 50
              }
            },
            "color": {
              "value": ["#d5aefe","#40D0F0"]
            },
            "shape": {
              "type": "circle",
              "stroke": {
                "width": 0,
                "color": "#b6b2b2"
              }
            },
            "opacity": {
              "value": 1,
              "random": false,
              "anim": {
                "enable": true,
                "speed": 0.1,
                "opacity_min": 0.85,
                "sync": false
              }
            },
            "size": {
              "value": 80,
              "random": true,
              "anim": {
                "enable": true,
                "speed": 2,
                "size_min": 40,
                "sync": true
              }
            },
            "line_linked": {
              "enable": true,
              "distance": 150,
              "color": "#c8c8c8",
              "opacity": 0.4,
              "width": 1
            },
            "move": {
              "enable": true,
              "speed": 2.12,
              "direction": "none",
              "random": true,
              "straight": false,
              "out_mode": "bounce",
              "bounce": false,
              "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
              }
            }
          },
          "retina_detect": true

        }}/>
      </Wrapper>
        <Navbar />
        <Wrapper direction='column' align='center' padding='2rem'>
          <Blur color='#86e2fb' padding='100px' top='0' left='-50%'/>
          <Welcome />
          <AboutMe />
          <Skill />
          <Project />
          <Passion />
          <Contact />
        </Wrapper>
      </ThemeProvider>
    </>
  );
};

export default App;
