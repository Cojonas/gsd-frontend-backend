import React from 'react';
import logo from './logo.svg';
import './App.css';

import Dropzone from 'react-dropzone'


class App extends React.Component {


  constructor(props){
    super(props); 
    this.state = {
      connected: null, 
      adb_response: null
    }
    this.fetchAdbCommand = this.fetchAdbCommand.bind(this)
  }

  componentDidMount(){
    fetch("http://localhost:5000/ports")
    .then(response => response.json()).then(data => this.setState(data))
  }

  fetchAdbCommand(){
    fetch("http://localhost:5000/commands/adb")
      .then(response=> response.json()).then(data => this.setState({adb_response: data}))
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

    let commandString = ""
    if (this.state.adb_response){
      commandString = "" + this.state.adb_response.ok
      if (this.state.adb_response.stdout){
        commandString += this.state.adb_response.stdout
      }
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
         
            SerialPort /dev/ttyAMA0: {
              itsConnected
            }

        <button onClick={this.fetchAdbCommand}>Test adb command</button>
         {commandString}


         <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
  {({getRootProps, getInputProps}) => (
    <section>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
    </section>
  )}
</Dropzone>


        </header>
        
      </div>
    );
  }
 
}

export default App;
