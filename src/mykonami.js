import * as React from 'react';
import Konami from 'react-konami-code';
import Confetti from 'react-confetti'
import yay from "./yay.mp3"
import Sound from "react-sound"
import {Link} from "react-router-dom"

const width = window.innerWidth
const height = window.innerHeight

class MyKonami extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      yaystatus:Sound.status.STOP
    };
  }

  easterEgg = () => {
    this.setState(
      { yaystatus:Sound.status.PLAYING }
    )
  }

  render() {
    return (
      <Konami action={this.easterEgg}>
        <Sound
          url={yay}
          playStatus={this.state.yaystatus}
          playFromPosition={1000 /* in milliseconds */}
        />
        <Confetti
          width={width}
          height={height}
        />
        <a href="https://github.com/altaga/altaga.github.io">Webpage Source Code</a>
        <p />
        <Link to="/made-in-abyss">Video Test</Link>
      </Konami>
    )
  }
}

export default MyKonami