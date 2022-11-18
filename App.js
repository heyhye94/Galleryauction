import React, { useState } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  renderMatches
} from "react-router-dom";

import {
  IconButton
} from '@mui/material';


import LandingPage from "./components/views/LandingPage/LandingPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import ArtPage from "./components/views/ArtPage/ArtPage";
import ArtistPage from "./components/views/ArtistPage/ArtistPage";
import AboutPage from "./components/views/AboutPage/AboutPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";
import RegisterPage2 from "./components/views/RegisterPage2/RegisterPage2";
import SearchIcon from '@mui/icons-material/Search';




function Backdrop() {
  return <div className="backdrop" ></div>
}




function Header() {

  let [modal, setModal] = useState(false);


  function openHandler() {
    setModal(true);
  }

  function closeModalHandler() {
    setModal(false);
  }

  const handleClick = (e) => {
    e.stopPropagation();
  }

  function SearchLayer() {
    return <div className="searchlayer" onClick={closeModalHandler}>
      <div className="searchform">
        <div onClick={handleClick}>
          <form>
            <input type="text" className="searchbox" placeholder="Search..."></input>
          </form>
          <div class="line"></div>
        </div>
      </div >
    </div >
  }




  return <header className="header">
    <div><a href="/" className="logo">THE SARX</a></div>
    <div><a href="/" className="logo2">|</a></div>
    <div><a href="/" className="logo3">gallery</a></div>
    <div><a href="/ArtPage" className="art">ART</a></div>
    <div><a href="/ArtistPage" className="artist">ARTIST</a></div>
    <div><a href="/AboutPage" className="about">ABOUT</a></div>
    <div className="search"><IconButton aria-label="search" onClick={openHandler}>
      <SearchIcon className="searchicon" fontSize="large" /></IconButton>
    </div>  {modal && <SearchLayer />}
    {modal && <Backdrop />}
    <div className="login"><Login></Login></div>
  </header >
}


function Login(props) {
  return <login>
    <a href="/LoginPage" className="login">{props.title}Login</a>
  </login>
}

function Footer() {
  return <div className="footer">
    CONTACT US&nbsp;&nbsp; | &nbsp;&nbsp;WNGPDMS3@NAVER.COM
  </div>
}



function App() {
  return (
    <div>
      <div>
        <Header></Header>
      </div>

      <Router>

        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>

        <Routes>
          <Route path="/ArtPage" element={<ArtPage />} />
        </Routes>

        <Routes>
          <Route path="/ArtistPage" element={<ArtistPage />} />
        </Routes>

        <Routes>
          <Route path="/AboutPage" element={<AboutPage />} />
        </Routes>

        <Routes>
          <Route path="/LoginPage" element={<LoginPage />} />
        </Routes>

        <Routes>
          <Route path="/RegisterPage" element={<RegisterPage />} />
        </Routes>

        <Routes>
          <Route path="/RegisterPage2" element={<RegisterPage2 />} />
        </Routes>

      </Router>

      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}


export default App;
