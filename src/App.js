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

  render() {

    return (

      <div>
        <label>Picture:
          <input

          />
        </label>

        <label>Name:
          <input

          />
        </label>

        <button>Add Friend</button>
      </div>
    )
  }
}

export default App;
