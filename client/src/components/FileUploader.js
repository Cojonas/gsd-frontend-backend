import React from 'react';
import axios from 'axios';

class FileUploader extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            selectedFile: null
        }
        this.onClickHandler = this.onClickHandler.bind(this)
        this.onChangeHandler = this.onChangeHandler.bind(this)
    }
    onChangeHandler(event){
        this.setState({
          selectedFile: event.target.files[0]
        })

      }
    onClickHandler() {
        const data = new FormData() 
        console.log(this.state.selectedFile)
        data.append('file', this.state.selectedFile)
        axios.post("/upload", data, { 
            onUploadProgress: progressEvent => {
                var percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
                console.log(percentCompleted)
            }
        })
        .then(res => { // then print response status
            console.log(res.statusText)
        }).catch(function (error) {
            // handle error
            console.log(error);
          })
    }
    

    render() {
        return        <> 

            <input type="file" name="file" onChange={this.onChangeHandler} />

            <button type="button" onClick={this.onClickHandler}>Upload</button>

    </>

    }
}

export default FileUploader