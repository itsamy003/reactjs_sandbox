import React, { useState } from 'react';
import Person from './Person/Person'
import './App.css';

// class App extends Component {
//   state = {
//     persons: [
//       {name: 'Ammi', age: 30},
//       {name: 'Reddy', age: 31},
//       {name: 'Kovvuri', age: 32}
//     ]
//   };

//   switchHandler = () => {
//      this.setState({
//        persons: [
//         {name: 'Ammi Reddy', age: 30},
//         {name: 'Reddy', age: 31},
//         {name: 'Kovvuri', age: 32}
//        ],
//        otherState: 'Other value'
//      });
//   }
//   render() {
//     return (
//       <div className="App">
//           <h1>Practising reactjs</h1>
//           <button onClick={this.switchHandler}>Switch name</button>
//           <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
//           <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>Hobbies: Swimming</Person>
//           <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
//       </div>
//     );
//   }
// }

// using hook, Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.
const app = () => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Ammi', age: 30 },
      { name: 'Reddy', age: 31 },
      { name: 'Kovvuri', age: 32 }
    ]
  });

  const [otherState, setOtherState] = useState('some other value');
  console.log(personsState, otherState);

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
       {name: 'Ammi Reddy', age: 30},
       {name: 'Reddy', age: 31},
       {name: 'Kovvuri', age: 32}
      ]
    });
 }

   return (
     <div className="App">
         <h1>Practising reactjs</h1>
         <button onClick={switchNameHandler}>Switch name</button>
         <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
         <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>Hobbies: Swimming</Person>
         <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
     </div>
   ); 
}

export default app;
