// Library Imports
import React from 'react';
import {FaGithub, FaLinkedin, FaStackOverflow, FaEnvelope, FaFilePdf, FaCode} from 'react-icons/fa';
import Typist from 'react-typist';
import { FadeIn, Bounce } from "animate-components";
import ParticlesBg from 'particles-bg';
// Files
import json from './Projects.json';
// Stylesheets
import './App.css';

class App extends React.Component{ 
  constructor(props){
    super(props);
  }

  render(){
    let particles = true;
    let spinner = false;
    let showImage = true;
    let h = (window.innerHeight > 0) ? window.innerHeight : window.screen.height;
    let w = (window.innerWidth > 0) ? window.innerWidth : window.screen.width;
    var ua = navigator.userAgent.toLowerCase(); 
    if (ua.indexOf('safari') != -1) { 
      if (ua.indexOf('chrome') > -1) {
        particles = true;
      } else {
        particles = false;
      }
    }

    if(w <= 700){
      particles = false;
    }

    if(h <= 780){
      spinner = false;
    }

    return (
      <main>
        {particles ? <ParticlesBg type="cobweb" num={40} color="123abc" bg={true} style={{height: h, width: w}}/> : null}
        <div className="center">
          <div className="title">
            <FadeIn>
            <Typist cursor={{show: false, hiddenWhenDone: true}}>
                <div style={{fontSize: "48px"}}>Gavin Gosling</div>
                <Typist.Delay ms={500} />
                <div style={{fontSize: "30px", marginBottom: "0.5vh"}}>Software Engineer</div>
            </Typist>
            </FadeIn>
          </div>
          <Bounce>
          <FadeIn>
          <nav>
            <a className="icon" aria-label="Linkedin" href="https://www.linkedin.com/in/gavin-gosling-cs/" target="_blank" data-hint="LinkedIn" rel="noreferrer">
              <FaLinkedin size={40}/>
            </a>
            <a className="icon" aria-label="Github" href="https://github.com/Grandient" target="_blank" data-hint="Github" rel="noreferrer">
              <FaGithub size={40}/>
            </a>
            <a className="icon" aria-label="E-mail" href="mailto:gavin.gosling1@gmail.com" target="_blank" data-hint="E-mail" rel="noreferrer">
              <FaEnvelope size={40}/>
            </a>
            <a className="icon" aria-label="Stack Overflow" href="https://stackoverflow.com/users/12733306/" target="_blank" data-hint="Stack Overflow" rel="noreferrer">
              <FaStackOverflow size={40}/>
            </a>
            <a className="icon" aria-label="CV" href="./data/Gavin_Gosling_Resume.pdf" data-hint="PDF" rel="noreferrer">
              <FaFilePdf size={40}/>
            </a>
          </nav>
          </FadeIn>
          </Bounce>
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
        <Projects showImage={showImage}/>
      </main>
    );
  }
}

function Projects(props){
  let showImage = props.showImage;
  return (
    <section className="projects">
      {json.map((project, key) => 
        <div className="project">
          <div className="message" key={key}>
            <div className="flex-col">
              <div style={{fontSize:"32px", marginBottom: "1vh", textAlign:"left"}}>
                {project.name}
                <a className="icon" aria-label="Github" href={project.github} target="_blank" data-hint="Github" rel="noreferrer">
                  <FaGithub size={32}/>
                </a>
                {project.deployment != null ? 
                <a className="icon" aria-label="Deployment" href={project.deployment} target="_blank" data-hint="Deployment" rel="noreferrer">
                  <FaCode size={32}/>
                </a>
                : null}
              </div>
            </div>
            <div className="flex-row upper-proj">
              {showImage ? <img src={project.image} className="image" alt="Project"/> : null}
              <div className="flex-col lower-proj">
                  <div className="flex-text description">{project.description}</div>
                  <div className="flex-text libraries"><span style={{fontWeight: 'bold'}}>Language:</span>{project.language}</div>
                  <div className="flex-text libraries"><span style={{fontWeight: 'bold'}}>Libraries:</span>{project.libraries}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}


export default App;
