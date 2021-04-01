import React, { lazy, Suspense } from 'react';
import logo from './img.svg';
import './App.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import { isMobile } from 'mobile-device-detect';
const MyKonami = lazy(() => import('./mykonami'));

const renderLoader = () => <p>Loading</p>;

function Main() {
  if (isMobile) {
    return (
      <div className="App">
        <header className="App-header">
          <img style={{ height: "40vh" }} src={logo} className="App-logo" alt="logo" />
          <div className="myTittle-m">
            Hello, I'm Altaga!
          </div>
          <div className="myText-m">
            Full Stack Dev | Hacker | Maker
          </div>
          <p />
          <div className="block">
            <a
              className="App-link-m"
              aria-label="Github"
              href="https://github.com/altaga"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon style={{ fontSize: "40px" }} />
            </a>
            <a
              className="App-link-m"
              aria-label="LinkedIn"
              href="https://www.linkedin.com/in/victor-alonso-altamirano-izquierdo-311437137/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon style={{ fontSize: "60px" }} />
            </a>
            <a
              className="App-link-m"
              href="https://twitter.com/Victor_Alta"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon style={{ fontSize: "60px" }} />
            </a>
          </div>
          <p >
            <img className="Image" src="https://hitwebcounter.com/counter/counter.php?page=7547790&style=0024&nbdigits=6&type=page&initCount=0" title="Web Counter" Alt="counter free" border="0" />
          </p>
          <Suspense fallback={renderLoader()}>
            <MyKonami />
          </Suspense>
        </header>
      </div>
    );
  }
  else {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="myTittle">
            Hello, I'm Altaga!
          </div>
          <div className="myText">
            Full Stack Dev | Hacker | Maker
          </div>
          <p />
          <div className="block">
            <a
              className="App-link"
              href="https://github.com/altaga"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon style={{ fontSize: "40px" }} />
            </a>
            <a
              className="App-link"
              href="https://www.linkedin.com/in/victor-alonso-altamirano-izquierdo-311437137/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon style={{ fontSize: "60px" }} />
            </a>
            <a
              className="App-link"
              href="https://twitter.com/Victor_Alta"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon style={{ fontSize: "60px" }} />
            </a>
          </div>
          <p >
            <img className="Image" src="https://hitwebcounter.com/counter/counter.php?page=7547790&style=0024&nbdigits=6&type=page&initCount=0" title="Web Counter" Alt="counter free" border="0" />
          </p>
          <Suspense fallback={renderLoader()}>
            <MyKonami />
          </Suspense>
        </header>
      </div>
    );
  }

}

export default Main;
