import React, { Component } from 'react';
import Person from './Person/Person'
import './App.css';

class App extends Component {
  state = {
    persons: [
      {id: 'id1', name: 'Ammi', age: 30},
      {id: 'id2', name: 'Reddy', age: 31},
      {id: 'id3', name: 'Kovvuri', age: 32}
    ],
    showPersons: true
  };

  onChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => person.id === id);
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons:persons});
  }
  switchHandler = (newValue) => {
     this.setState({
       persons: [
        {name: newValue, age: 30},
        {name: 'Reddy', age: 31},
        {name: 'Kovvuri', age: 32}
       ],
       otherState: 'Other value2'
     });
  }
  toggleHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }
  deletePerson = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({persons: persons});
  }
  render() {
    let persons = null;
    if(this.state.showPersons) {
      persons = (
        <div> 
          {
            this.state.persons.map((person, index) => {
              return <Person 
              name={person.name} 
              age={person.age}
              key={index}
              change={(event) => this.onChangeHandler(event, person.id)}
              click={this.deletePerson.bind(this, index)}/>
            })
          }
          {/* <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
          <Person click={this.switchHandler.bind(this, 'KAR')} name={this.state.persons[1].name} age={this.state.persons[1].age}>Hobbies: Swimming</Person>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age}
            change={this.onChangeHandler} /> */}
        </div>
      )
    }
    return (
      <div className="App">
          <h1>Practising reactjs</h1>
          <button onClick={this.toggleHandler}>Switch name</button>
          {persons}         
      </div>
    );
  }
}

// using hook, Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.
// const app = () => {
//   const [personsState, setPersonsState] = useState({
//     persons: [
//       { name: 'Ammi', age: 30 },
//       { name: 'Reddy', age: 31 },
//       { name: 'Kovvuri', age: 32 }
//     ]
//   });

//   const [otherState, setOtherState] = useState('some other value');
//   console.log(personsState, otherState);

//   const switchNameHandler = () => {
//     setPersonsState({
//       persons: [
//        {name: 'Ammi Reddy', age: 30},
//        {name: 'Reddy', age: 31},
//        {name: 'Kovvuri', age: 32}
//       ]
//     });
//  }

//    return (
//      <div className="App">
//          <h1>Practising reactjs</h1>
//          <button onClick={switchNameHandler}>Switch name</button>
//          <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
//          <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>Hobbies: Swimming</Person>
//          <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
//      </div>
//    ); 
// }

export default App;
