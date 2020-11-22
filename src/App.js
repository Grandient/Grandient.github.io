// Library Imports
import React from 'react';
import {FaGithub, FaLinkedin, FaStackOverflow, FaEnvelope, FaFilePdf, FaCode, FaFileVideo} from 'react-icons/fa';
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
    let arr = new Array(Object.keys(json).length);
    arr = arr.fill(false);
    this.state = {
      videos: arr
    }
  }

  updateMap = (index) => {
    let vid = this.state.videos;
    vid[index] = !vid[index];
    this.setState({videos:vid});
  }

  render(){
    let particles = true;
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
        <Projects showImage={showImage} videos={this.state.videos} updateMap={this.updateMap}/>
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
                {project.video != null ? 
                <a className="icon" aria-label="Deployment" onClick={() => props.updateMap(project.index)} target="_blank" data-hint="Deployment" rel="noreferrer">
                  <FaFileVideo size={32}/>
                </a>
                : null}
              </div>
            </div>
            <div className="flex-row upper-proj">
              {showImage && !props.videos[project.index] ? <img src={require(project.image)} className="image" alt="Project" onClick={() => props.updateMap(project.index)}/> : null}
              {props.videos[project.index] ? <video width="100%" src={project.video} onClick={() => props.updateMap(project.index)} className="image" alt="Video" autoplay="" controls="" loop="" muted=""/> : null}
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
/*

    {
        "index": 3,
        "name": "TicTacToe Framework",
        "description": "A client-server architecture using WebSockets to host multiple different rooms of tictactoe. Uses Pixijs to add lighting uses WebGL to represent the game.",
        "github": "https://github.com/Grandient/tictactoe-socketio-pixijs",
        "deployment": null,
        "language": "Javascript",
        "libraries": "React, Pixi,js, Socket.io",
        "image": "images/tictactoe.webp"
    },
    {
        "index": 4,
        "name": "Color Lab",
        "description": "A puzzle game that tests the player's ability to mix subtractive and additive colors, as well color harmonies.",
        "github": "https://github.com/Grandient/Color-Theory",
        "deployment": null,
        "language": "C#",
        "libraries": "Unity.",
        "image": "images/colorlab.webp"
    },
    {
        "index": 5,
        "name": "Weather Owl",
        "description": "An application that allow ones to check the weather as well an analyze the weather situation.",
        "github": "https://github.com/Grandient/WeatherApp",
        "deployment": null,
        "language": "Java",
        "libraries": "MPAndroidChart, OpenWeatherMap.",
        "image": "images/wowl.webp"
    }
*/