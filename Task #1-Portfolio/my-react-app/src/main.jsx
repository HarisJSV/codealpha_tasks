window.alert("Note:This portfolio is incomplete...this is not my best work. But due to the time constraint, this is all I could produce.")
import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import Nav from './Nav';
import Name from './Name';
import About from './About';
import Pro from './Pro';
import ContactForm from './Contactform';
import pro from "/pro.png";
import wapp from "/wapp.png"
ReactDOM.render(
  <div className='container'>
    <Nav />
    <div className="center">
      <Name />
      <About />
      <Pro img={pro} name={"02. My Projects --------"} h1={"Featured Project"} h2={"Social media clone(Incomplete)"} p1={"A minimal, dark blue theme for VS Code, Sublime Text, Atom,"} p2={"iTerm, and more. Available on Visual Studio Marketplace,"} p3={"Package Control, Atom Package Manager, and npm."}/>
      <Pro img={wapp} h1={"Featured Project"} h2={"GPT integrated WeatherApp"} p1={"A weather-app built with WeatherAPI"} p2={"Designed using TailwindCSS, Webflow GPT integration"} p3={"Created with a free credit OpenAPI(3 month period)."}/>
    </div>
    <ContactForm />
  </div>,
  document.getElementById("root")
);
