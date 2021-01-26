import React, { useState, useEffect } from 'react';
import {FaGithub, FaLinkedin, FaStackOverflow, FaEnvelope, FaFilePdf, FaFileVideo} from 'react-icons/fa';
import {IoIosBrowsers} from 'react-icons/io';
import {VscRunAll} from  "react-icons/vsc";

// Techonlogy
import react from './app/React.png';
import mongodb from './app/Mongodb.png';
import prometheus from './app/Prometheus.png';
import grafana from './app/Grafana.jpg';
import redux from './app/Redux.svg';
import postgres from './app/postgres.svg';
import airflow from './app/airflow.png';
import grpc from './app/grpc.png';
import semanticui from './app/semanticui.png'

// Experience 
import ontariotech from './app/OntarioTech.png';
import ESL from './app/ESL.jpg';
import flitex from './app/Flitex.png';

// Projects
import passchecker from './app/Passcheckerlogo.png'
import repositoryviewr from './app/repositoryviewrlogo.png'
import badlion from './app/badlion-logo.png'

import './App.css';

let projects = [
  { name: "PassChecker", 
    path: passchecker, 
    description: "A react application made for checking password strength and validity based on Dropbox's zxcvbn.",
    deployment: "http://gavingosling.me/PassChecker/",
    link: "https://github.com/Grandient/PassChecker",
    type: "Project",
    video: "https://gavingosling.me/data/PassChecker.webm",
    technologies: [{image:react, link: "https://reactjs.org/"}, {image: semanticui, link:"https://semantic-ui.com/"}]
  },
  { name: "RepositoryViewr", 
    path: repositoryviewr,
    description: "A react application that will gives an overview of any repository. An interactive table and chart views to help users understand what happens on each commit.",
    deployment: "http://gavingosling.me/RepositoryViewr/",
    link: "https://github.com/Grandient/RepositoryViewr",
    type: "Project",
    video: "https://gavingosling.me/data/repoviewer.webm",
    technologies: [{image: react, link: "https://reactjs.org/"}]
  },
  { name: "Badlion.net",
    path: badlion,
    description: "The Badlion Client is the largest community driven Minecraft client that provides better FPS, Optifine support, over 50+ mods, client anticheat, and is free!",
    deployment: "https://badlion.net",
    link: "private",
    type: "Project",
    video: "none",
    technologies: [{image: react, link: "https://reactjs.org/"}, {image: redux, link: "https://redux.js.org/"},  {image:grpc, link:"https://grpc.io/"}]
  }
]

let experience = [
  { name: "ESL", 
    path: ESL,
    description: "ESL is an esports organizer and production company that produces video game competitions worldwide. ESL is the world's largest esports company, and the oldest that is still operational.",
    link: "https://www.eslgaming.com/",
    type: "Experience",
    technologies: [{image:react, link: "https://reactjs.org/"}, {image: redux, link: "https://redux.js.org/"}, {image:grpc, link:"https://grpc.io/"}]
  },
  {name: "Ontario Tech University", 
   path: ontariotech,
   description: "The University of Ontario Institute of Technology, corporately branded as Ontario Tech University or Ontario Tech, is a public research university located in Oshawa, Ontario, Canada.",
   link: "https://ontariotechu.ca/",
   type: "Experience",
   technologies: [{image: react, link: "https://reactjs.org/"}, {image: mongodb, link: "https://www.mongodb.com/"},{image: postgres, link: "https://www.postgresql.org/"} ]
  },
  {name: "FliteX", 
   path: flitex,
   description: "An aviation startup that provides 4d Trajectory optimizations and finanical services for airlines.",
   link: "https://flitex.net/",
   type: "Experience",
   technologies: [{image:react, link: "https://reactjs.org/"}, {image: mongodb, link: "https://www.mongodb.com/"}, {image: grafana, link: "https://grafana.com/grafana/"}, 
   {image: prometheus, link: "https://prometheus.io/"}, {image: postgres, link: "https://www.postgresql.org/"}, {image: airflow, link:"https://airflow.apache.org/"}]
  }
]

let technology = [
  {name: "React", 
   path: react,
   description: "React is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.",
   link: "https://reactjs.org/",
   type: "Tech"
  },
  {name: "MongoDB", 
   path: mongodb,
   description: "MongoDB is a cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. ",
   link: "https://www.mongodb.com/",
   type: "Tech"
  },
  {name: "Prometheus", 
   path: prometheus,
   description: "An open-source monitoring system with a dimensional data model, flexible query language, efficient time series database and modern alerting approach.",
   link: "https://prometheus.io/",
   type: "Tech"
  },
  {name: "Grafana", 
   path: grafana,
   description: "Grafana is a multi-platform open source analytics and interactive visualization web application. It provides charts, graphs, and alerts for the web when connected to supported data sources.",
   link: "https://grafana.com/grafana/",
   type: "Tech"
  },
  {name: "Redux", 
   path: redux,
   description: "A predictable state container for JavaScript apps.",
   link: "https://redux.js.org/",
   type: "Tech"
  },
  {name: "Postgres", 
   path: postgres,
   description: "PostgreSQL is a free and open-source relational database management system emphasizing extensibility and SQL compliance.",
   link: "https://www.postgresql.org/",
   type: "Tech"
  },
  {name: "Airflow",
   path: airflow,
   description: "Platform created by the community to programmatically author, schedule and monitor workflows.",
   link: "https://airflow.apache.org/",
   type: "Tech"
  },
  {name: "gRPC",
   path: grpc,
   description: "gRPC is an open source remote procedure call system initially developed at Google in 2015.",
   link: "https://grpc.io/",
   type: "Tech"
  }
]

/*
    
*/

function App() {
  const [click, setClick] = useState(false)

  return (
    <div>
       <div className="overflow">
        <div className="overflow">
          <div className="app-stars"></div>
        </div>
        <div className="overflow">
          <div className="app-nova"></div>
        </div>
      </div>
      {click ? 
        <div onClick={(e) => click ? setClick(!click) : null} className="info-modal">
          <div className="modal-content">
            <div className="modal-header">Information Modal</div>
            <div className="modal-body">This is my personal website. 
              Here I have listed the some of the technologies I've worked with. I have also included various
              employment experiences and projects that I have created. 
              In this modal I will add some tools I have found helpful as well as extra goodies that will change how this site looks. 
              I hope you enjoy! (You can click anywhere to close this.)
            </div>
          </div>
        </div> : 
        <div></div>
      }
      <div className='night app'>
        <Header/>
        <InformationModal click={click} setClick={setClick}/>
        <MainContainer/>
        <div></div>
        <Footer/>
      </div>
    </div>
  );
}

function Header(props:any){
  return (
    <div className="header">
      <div className="item-name">Gavin Gosling</div>
    </div>
  )
}

function Footer(props:any){
  return (
    <div className="footer">
        <nav className="icon-container">
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
            <a className="icon" aria-label="CV" href="https://gavingosling.me/data/Gavin_Gosling_Resume.pdf" data-hint="PDF" rel="noreferrer">
              <FaFilePdf size={40}/>
            </a>
          </nav>
    </div>
  )
}

function MainContainer(props:any){
  const [click, setClick] = useState("Projects")

  return (
    <div className="main-container"> 
      <div className="main-options">
        <div onClick={() => setClick("Projects")} className={click === "Projects" ? "container-option selected" : "container-option"}>Projects</div>
        <div onClick={() => setClick("Experience")} className={click === "Experience" ? "container-option selected" : "container-option"}>Experience</div>
        <div onClick={() =>  setClick("Technology")} className={click === "Technology" ? "container-option selected" : "container-option"}>Technology</div>
      </div>
      <div className="sub-container">
        {click === "Projects" ? <ContainerOption options={projects}/> : null}
        {click === "Experience" ? <ContainerOption options={experience}/> : null}
        {click === "Technology" ? <ContainerOption options={technology}/> : null}
      </div>
    </div>
  )

}

function ContainerOption(props: any){
  const [click, setClick] = useState(props.options[0].name)

  return (
    <div>
      <div className="sub-options">
        {props.options.map((option: {name: string, path: string}) => {
          return <div onClick={() => setClick(option.name)} className={click === option.name ? "subcontainer-option selected" : "subcontainer-option"}><img src={option.path} alt={option.name} className={click === option.name ? "subcontainer-image selected" : "subcontainer-image"}/></div>
        })}
      </div>
      <div className="item-container">
        {props.options.map((option: {name: string, path: string}) => {
          return <div>{click === option.name ? <ItemContainer item={option}/> : null}</div>
        })}
      </div>
   </div>
  )
}

function InformationModal(props: any){
  return (
      <div>
          <div onClick={() => props.setClick(!props.click)} className="info-modal-button">Information</div> 
      </div>
    )
}

function ItemContainer(props: any){
  return (
  <div>
    <div className="flex-row">
      <div className="item-name">Title: </div>
      <div>{props.item.name}</div>
    </div>
    <div className="flex-row">
      <div className="item-name">Description: </div>
      <div>{props.item.description}</div>
    </div>
    <div>
      <div className="item-name">Material: </div>
      {props.item.type === "Project" && props.item.link && props.item.link != "private" ?
          <a className="icon" aria-label="Github" href={props.item.link} target="_blank" data-hint="Github" rel="noreferrer">
          <FaGithub size={40}/> Github
      </a>
      : null
      }
      {props.item.type === "Experience" ?
          <a className="icon" aria-label="Employer Link" href={props.item.link} target="_blank" data-hint="Github" rel="noreferrer">
          <IoIosBrowsers size={40}/> Employer Link
      </a>
      : null
      }
      {props.item.type === "Tech" ?
          <a className="icon" aria-label="Tech Link" href={props.item.link} target="_blank" data-hint="Github" rel="noreferrer">
          <IoIosBrowsers size={40}/> Tech Link
      </a>
      : null
      }
      {props.item.type === "Project" ?
          <a className="icon" aria-label="Tech Link" href={props.item.deployment} target="_blank" data-hint="Github" rel="noreferrer">
          <VscRunAll size={40}/> Deployment
      </a>
      : null
      }
      {props.item.type === "Project" && props.item.video && props.item.video != "none" ?
          <a className="icon" aria-label="Tech Link" href={props.item.video} target="_blank" data-hint="Github" rel="noreferrer">
          <FaFileVideo size={40}/> Video
      </a>
      : null
      }
        {(props.item.type === "Project" || props.item.type === "Experience") ? <div className="tech-name">Technologies: </div> : null}
        {(props.item.type === "Project" || props.item.type === "Experience") && (props.item.technologies != []) ?
          <div className="tech-row">
          {props.item.technologies.map((tech:any) => {
            return <a aria-label="Tech Link" href={tech.link} target="_blank" data-hint="Github" rel="noreferrer">
              <img alt={tech.image} src={tech.image} className="tech-img"/>
            </a>
          })}
          </div>
        : null
        }
    </div>
  </div>
  )
}



export default App;
