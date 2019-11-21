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

  addFriend() {
    const {friends, picture, name} = this.state;

    let newFriends = friends.slice();
    newFriends.push({picture, name});

    this.setState({
      friends: newFriends,
      picture: '',
      name: ''
    })
  }

  render() {

  const friends = this.state.friends.map((v, i) => (
    <div key={`friend-${i}-${v.name}`}>
      <img width="100px" src={v.picture} />
      <span>{v.name}</span>
    </div>)
  )
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

        <button
          onClick={() => this.addFriend()}
        >Add Friend</button>
        {friends}
      </div>
    )
  }
}

export default App;
