import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import { tsConstructorType } from '@babel/types';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      friends: [],
      picture: '',
      name: ''
    }
  }

  updatePicture(value) {
    this.setState({
      picture: value
    })
  }

  updateName(value) {
    this.setState({
      name: value
    })
  }

  render() {

    return (

      <div>
        <label>Picture:
          <input
            onChange={e => this.updatePicture(e.target.value)}
            value={this.state.picture}
          />
        </label>

        <label>Name:
          <input
            onChange={e => this.updateName(e.target.value)}
            value={this.state.name}
          />
        </label>

        <button>Add Friend</button>
      </div>
    )
  }
}

export default App;
