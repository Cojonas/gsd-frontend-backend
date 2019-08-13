import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {


  constructor(props){
    super(props); 
    this.state = {
      connected: null
    }
  }

  componentDidMount(){
    fetch("http://localhost:5000/ports")
    .then(response => response.json()).then(data => this.setState(data))
  }

  render() {
    let itsConnected;
    if (this.state.connected === null){
      itsConnected = <p>Checking.... please wait!</p>

    }
    else if (this.state.connected){
      itsConnected = <p>It's connected!</p>
    } else {
      itsConnected = <p>Not connected:(</p>
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
         
            SerialPort /dev/ttyAMA0: {
              itsConnected
            }
         
        </header>
      </div>
    );
  }
 
}

export default App;
