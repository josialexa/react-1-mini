import React from 'react';
import logo from './logo.svg';
import './App.css';
import { tsConstructorType } from '@babel/types';

function App() {
  constructor() {
    super()
    this.state = {
      friends: [],
      picture: '',
      name: ''
    }
  }

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
  );
}

export default App;
