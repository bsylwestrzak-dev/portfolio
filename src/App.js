import React from "react";
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
import Particles from 'react-particles-js';
import Blur from "./components/Blur/Blur";

const App = () => {

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={colors}>
        <Navbar />
        <Wrapper direction='column' align='center' padding='2rem'>
        <Blur />
          
          <Welcome />
          <Particles
            className='particles' 
            params={{
              "particles": {
                "number": {
                  "value": 4,
                  "density": {
                    "enable": true,
                    "value_area": 500
                  }
                },
                "color": {
                  "value": ["#e358eb", "#8be3f9", "#83479f", "#b59eee", "#072142"]
                },
                "shape": {
                  "type": ['square', 'polygon', 'circle'],
                  "stroke": {
                    "width": 0,
                    "color": "#ffffff"
                  },
                  "polygon": {
                    "nb_sides": 6
                  },
                  
                },
                "opacity": {
                  "value": 0.4,
                  "random": false,
                  "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                  }
                },
                "size": {
                  "value": 15,
                  "random": false,
                  "anim": {
                    "enable": true,
                    "speed": 1,
                    "size_min": 60,
                    "sync": false
                  }
                },
                "line_linked": {
                  "enable": false,
                  "distance": 600,
                  "color": "#000000",
                  "opacity": 0.1,
                  "width": 2
                },
                "move": {
                  "enable": true,
                  "speed": .5 ,
                  "direction": "top",
                  "random": true,
                  "straight": false,
                  "out_mode": "out",
                  "bounce": true,
                  "attract": {
                    "enable": true,
                    "rotateX": 600,
                    "rotateY": 1200
                  }
                }
              },
              "interactivity": {
                "detect_on": "canvas",
                "events": {
                  "onhover": {
                    "enable": true,
                    "mode": "repulse"
                  },
                  "onclick": {
                    "enable": true,
                    "mode": "push"
                  },
                  "resize": true
                },
                "modes": {
                  "grab": {
                    "distance": 800,
                    "line_linked": {
                      "opacity": 1
                    }
                  },
                  "bubble": {
                    "distance": 800,
                    "size": 80,
                    "duration": 2,
                    "opacity": 0.8,
                    "speed": 3
                  },
                  "repulse": {
                    "distance": 400,
                    "duration": 0.4
                  },
                  "push": {
                    "particles_nb": 4
                  },
                  "remove": {
                    "particles_nb": 2
                  }
                }
              },
              "retina_detect": true
            }
          } 
        / >
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
