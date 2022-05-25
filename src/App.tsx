import React, { Component, useState } from 'react';
import './App.css';
import SpotifyWebApi from 'spotify-web-api-js';
import SongBox from './components/SongBox/SongBox';
import SpotifyComponent from './components/SpotifyComponent/SpotifyComponent';
import TitleBar from './components/TitleBar/TitleBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import SpotifyPage from './pages/SpotifyPage/SpotifyPage';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import AboutPage from './pages/AboutPage/AboutPage';
import ContactPage from './pages/ContactPage/ContactPage';

const client_id = process.env.REACT_APP_CLIENT_ID!;
const client_secret = process.env.REACT_APP_CLIENT_SECRET!;
const refresh_token = process.env.REACT_APP_REFRESH_TOKEN!;




class App extends Component {
 

  render() {
    return (
      <Router>
        <TitleBar/>
        <div id="content">
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/spotify" element={<SpotifyPage/>}/>
            <Route path="/projects" element={<ProjectsPage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/contact" element={<ContactPage/>}/>
          </Routes>
        </div>
      </Router>
    );
  }

 
}

export default App;
