import React, { Component } from 'react';
import './App.css';
import MyKonami from './mykonami'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import { isMobile } from 'mobile-device-detect';
import ReactPlayer from 'react-player'
import { Button, ButtonGroup, Col } from 'reactstrap';
import video1 from './caps/mel1.webm'
import video2 from './caps/mel2.webm'
import video3 from './caps/mel3.webm'
import video4 from './caps/mel4.webm'

let caparray = [video1, video2, video3, video4]

class Video extends Component {
    constructor(props) {
        super(props);
        this.state = {
            video: caparray[0]
        };
    }

    changecap(select) {
        this.setState({
            video: caparray[select]
        })
    }

    render() {
        if (isMobile) {
            return (
                <div className="App">
                    <header className="App-header">
                        <div className="tittles">
                            Maruruk’s <br />
                            Everyday  <br />
                            Life
                  </div>
                        <p />
                        <ButtonGroup>
                            <Button size="lg" color="primary" onClick={() => this.changecap(0)} >C1</Button>
                            <Button size="lg" color="primary" onClick={() => this.changecap(1)} >C2</Button>
                            <Button size="lg" color="primary" onClick={() => this.changecap(2)} >C3</Button>
                            <Button size="lg" color="primary" onClick={() => this.changecap(3)} >C4</Button>
                        </ButtonGroup>
                        <p />
                        <p />
                        <ReactPlayer
                            className='react-player'
                            url={this.state.video}
                            width='100%'
                            height='100%'
                            controls={true}
                        />
                        <p />
                        <div className="myText-m">
                            Full Stack Dev | Hacker | Maker
                  </div>
                  <p />
                        <p />
                        <div className="block">
                            <a
                                className="App-link-m"
                                href="https://github.com/altaga"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <GitHubIcon style={{ fontSize: "40px" }} />
                            </a>
                            <a
                                className="App-link-m"
                                href="https://www.linkedin.com/in/victor-alonso-altamirano-izquierdo-311437137/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <LinkedInIcon style={{ fontSize: "60px" }} />
                            </a>
                            <a
                                className="App-link-m"
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
                        <MyKonami />
                    </header>
                </div>
            );
        }
        else {
            return (
                <div className="App">
                    <header className="App-header">
                        <p />
                        <div className="myTittle">
                            Maruruk’s Everyday Life
                  </div>
                        <p />
                        <Col>
                            <ButtonGroup>
                                <Button size="lg" color="primary" onClick={() => this.changecap(0)} >Cap 1</Button>
                                <Button size="lg" color="primary" onClick={() => this.changecap(1)} >Cap 2</Button>
                                <Button size="lg" color="primary" onClick={() => this.changecap(2)} >Cap 3</Button>
                                <Button size="lg" color="primary" onClick={() => this.changecap(3)} >Cap 4</Button>
                            </ButtonGroup>
                        </Col>
                        <p />
                        <p />
                        <Col className="container">
                            <ReactPlayer
                                className='react-player'
                                url={this.state.video}
                                width='70%'
                                height='70%'
                                controls={true}
                            />
                        </Col>
                        <Col className="myText">
                            Full Stack Dev | Hacker | Maker
                  </Col>
                        <p />

                        <Col>
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
                            <MyKonami />
                        </Col>
                    </header>
                </div>
            );
        }
    }
}

export default Video;
