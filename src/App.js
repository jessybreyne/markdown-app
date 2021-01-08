import './App.css';

import marked from 'marked'

import { Component } from 'react'

import { sampleText } from './sampleText'

class App extends Component {
  state = {
    text : sampleText
  }

  componentDidMount () {
    let text = localStorage.getItem('text')
    if(text){
      this.setState({ text })
    }
  }

  componentDidUpdate () {
    const { text } = this.state
    localStorage.setItem('text', text)
  }

  handleChange = event => {
    const text = event.target.value
    this.setState({ text })
  }

  renderText = text => {
    const __html = marked(text)
    return { __html }
  }

  render () {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <textarea 
              onChange={this.handleChange}
              value={this.state.text}
              name="" 
              id="" 
              rows="35"
              className="form-control"
            >
            </textarea>
          </div>
          <div className="col-sm-6">
            <div dangerouslySetInnerHTML={this.renderText(this.state.text)}></div>
          </div>
        </div>
      </div>
    );
  } 
}

export default App;