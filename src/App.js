import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = { content: '' };

    this.copyText = this.copyText.bind(this);
  }

  render() {
    return (
      <div>
        <h1>Un repetidor</h1>
        <input type="text" placeholder="Empieza a escribir algo" onChange={this.copyText} />
    <p className="repeater">{this.state.content}</p>
      </div>
    );
  }

  copyText(event) {
    let text = event.target.value;
    this.setState({ content: text });
  }
}

export default App;
