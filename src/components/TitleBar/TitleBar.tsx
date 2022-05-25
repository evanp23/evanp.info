import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import './TitleBar.css';

export default class TitleBar extends React.Component{
  render(){
    return(
      <div id="titleBarDiv">
          <Link to={'/'}>
            <div id="homeButtonDiv" className="titleBarButton">
              <p id="homeButtonText" className="titleBarButtonText">Home</p>
            </div>
          </Link>
          <Link to={'/projects'}>
            <div id="projectsButtonDiv" className="titleBarButton">
              <p id="projectsButtonText" className="titleBarButtonText">Projects</p>
            </div>
          </Link>
          <Link to={'/spotify'}>
            <div id="spotifyButtonDiv" className="titleBarButton">
              <p id="spotifyButtonText" className="titleBarButtonText">Spotify</p>
            </div>
          </Link>
          <Link to={'/about'}>
            <div id="aboutButtonDiv" className="titleBarButton">
              <p id="aboutButtonText" className="titleBarButtonText">About</p>
            </div>
          </Link>
          <Link to={'/contact'}>
            <div id="contactButtonDiv" className="titleBarButton">
              <p id="contactButtonText" className="titleBarButtonText">Contact</p>
            </div>
          </Link>
        </div>
    );
  }
}