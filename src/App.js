import React, { Component } from 'react';
import Person from './Person/Person'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>Practising reactjs</h1>
          <Person name="Ammi" age="30"/>
          <Person name="Reddy" age="31">Hobbies: Swimming</Person>
          <Person name="Kovvuri" age="32"/>
      </div>
    );
  }
}

export default App;
