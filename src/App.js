import logo from './logo.svg';
import './App.css';
import react, { useState, Component } from 'react';
import styled from 'styled-components';

const HoverColor = styled.p`
	:hover {
		color: #5618E6;
		cursor: pointer;
	}
`

class MouseoverEffect extends Component {
   constructor() {
     super();
     this.state = { text : 'Chris J Corbin' }
   }
   //set the text
   onMouseover (e) {
     this.setState({text : '01000011 01101000 01110010 01101001 01110011 00100000 01001010 00100000 01000011 01101111 01110010 01100010 01101001 01101110'})
   }
   //clear the text
   onMouseout (e) {
     this.setState({text : 'Chris J Corbin'})
   }
   render () {
      const {text} = this.state;
      return (
        <div
          onMouseEnter={this.onMouseover.bind(this)}
          onMouseLeave={this.onMouseout.bind(this)}>{text}</div>
      )
   }
}

class NameMouseoverEffect extends Component {
   constructor() {
     super();
     this.state = { text : '' }
   }
   //set the text
   onMouseover (e) {
     this.setState({text : ''})
   }
   //clear the text
   onMouseout (e) {
     this.setState({text : ''})
   }
   render () {
      const {text} = this.state;
      return (
        <div
          onMouseEnter={this.onMouseover.bind(this)}
          onMouseLeave={this.onMouseout.bind(this)}>{text}</div>
      )
   }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
        <HoverColor>
        <MouseoverEffect />
        </HoverColor>
        </p>
        <p>
        <NameMouseoverEffect />
        </p>
        <p>
        Powered by React <img src={logo} className="App-logo" alt="logo" />
        </p>
      </header>
    </div>
  );
}

export default App;
