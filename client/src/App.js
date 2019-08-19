import React from 'react';
import './App.css';
import FileUploader from "./components/FileUploader"


class App extends React.Component {

  constructor(props){
    super(props); 
    this.state = {
      connected: null, 
      adb_response: null, 
      selectedFile: null
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
         
            SerialPort /dev/ttyAMA0: {
              itsConnected
            }

        <button onClick={this.fetchAdbCommand}>Test adb command</button>
         {commandString}
        <FileUploader />



        </header>
        
      </div>
    );
  }
 
}

export default App;
