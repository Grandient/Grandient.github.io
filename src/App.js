// Library Imports
import React from 'react';
import {FaGithub, FaLinkedin, FaStackOverflow, FaEnvelope, FaFilePdf, FaCode} from 'react-icons/fa';
import Typist from 'react-typist';
import {Divider, Message,Image} from 'semantic-ui-react';
import { FadeIn, Bounce } from "animate-components";
import 'semantic-ui-css/semantic.min.css';
import ParticlesBg from 'particles-bg';
import MouseParticles from "react-mouse-particles";
import RingLoader from "react-spinners/RingLoader";
// Files
import json from './Projects.json';
// Stylesheets
import './App.css';

class App extends React.Component{ 
  constructor(props){
    super(props);
  }

  onLinkHover = () => {

  }

  render(){
    let particles = true;
    let h = document.height;
    var ua = navigator.userAgent.toLowerCase(); 
    if (ua.indexOf('safari') != -1) { 
      if (ua.indexOf('chrome') > -1) {
        particles = true;
      } else {
        particles = false;
      }
    }
    return (
      <div>
        {particles ? <ParticlesBg type="cobweb" num={100} color="123abc" bg={true} style={{height: h}}/> : null}
        <MouseParticles g={1} color="random" cull="col,image-wrapper"/>
        <div className="center">
          <div className="title">
            <FadeIn>
            <Typist cursor={{show: false, hiddenWhenDone: true}}>
                <div style={{fontSize: "48px"}}>Gavin Gosling</div>
                <Typist.Delay ms={500} />
                <br/>
                <div style={{fontSize: "30px"}}>Software Engineer</div>
            </Typist>
            </FadeIn>
          </div>
          <Divider/>
          <Bounce>
          <FadeIn>
          <div>
            <a className="icon" href="https://www.linkedin.com/in/gavin-gosling-cs/" target="_blank" data-hint="LinkedIn">
              <FaLinkedin size={40}/>
            </a>
            <a className="icon" href="https://github.com/Grandient" target="_blank" data-hint="Github">
              <FaGithub size={40}/>
            </a>
            <a className="icon" href="mailto:gavin.gosling1@gmail.com" target="_blank" data-hint="E-mail">
              <FaEnvelope size={40}/>
            </a>
            <a className="icon" href="https://stackoverflow.com/users/12733306/" target="_blank" data-hint="Stack Overflow">
              <FaStackOverflow size={40}/>
            </a>
            <a className="icon" href="./data/GavinGosling_CV.pdf" data-hint="PDF">
              <FaFilePdf size={40}/>
            </a>
          </div>
          </FadeIn>
          </Bounce>
          <RingLoader
            size={150}
            color={"#123abc"}
            loading={true}
            className="ring"
          />
        </div>
        <div className="header-project">
          <div className="title">
              <FadeIn>
              <Typist cursor={{show: false, hiddenWhenDone: true}}>
                  <div style={{fontSize: "36px"}}>Projects</div>
              </Typist>
              </FadeIn>
            </div>
          </div>
        <Projects/>
      </div>
    );
  }
}

function Projects(){
  return (
    <div className="projects">
      {json.map((project, key) => 
        <div className="project">
          <Message key={key}>
            <div className="flex-col">
              <div style={{fontSize:"32px", marginBottom: "1vh", textAlign:"left"}}>
                {project.name}
                <a className="icon" href={project.github} target="_blank" data-hint="Github">
                  <FaGithub size={32}/>
                </a>
                {project.deployment != null ? 
                <a className="icon" href={project.deployment} target="_blank" data-hint="Github">
                  <FaCode size={32}/>
                </a>
                : null}
              </div>
            </div>
            <div className="flex-row upper-proj">
              <Image src={project.image} size="small"/>
              <div className="flex-col lower-proj">
                <div className="flex-text description">{project.description}</div>
                <div className="flex-text libraries">{project.libraries}</div>
              </div>
            </div>
          </Message>
        </div>
      )}
    </div>
  )
}


export default App;
