import React, { useState,Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';


const app = props => {
  const [personState, setpersonState] = useState({
    persons: [
            { name:"Mark", age:"28"},
            { name:"Manu", age:"29"},
            { name:"Stephanie", age:"26"}
          ]
        });

        const switchHandler = ()=> {
          //       //console.log("was clicked");
                setpersonState ({
                  persons: [
                    { name:"Maxi", age:"28"},
                    { name:"Manu", age:"29"},
                    { name:"Stephanie", age:"23"}
                  ]
                })
              }

  return (
      <div className="App">
        <h1>I'm a React App</h1>
        <p>Welcome</p>
        <button onClick={switchHandler}>Switch Name</button>
        <Person name={personState.persons[0].name} age={personState.persons[0].age}/>
        <Person name={personState.persons[1].name} age={personState.persons[1].age}/>
        <Person name={personState.persons[2].name} age={personState.persons[2].age}/>
      </div>
    );
  
}

class App extends Component {
  state = {
    persons: [
      { name:"Mark", age:"28"},
      { name:"Manu", age:"29"},
      { name:"Stephanie", age:"26"}
    ],
    showPersons: false
  }
  
deletePersonsHandler = (Index) => {
 // const persons = this.state.persons.slice();
 const persons = [...this.state.persons]; 
 persons.splice(Index,1);
  this.setState({persons: persons});
}

    nameChange = (event) => {
      this.setState({
        persons: [
          { name:"Max", age:"28"},
          { name:event.target.value, age:"29"},
          { name:"Stephanie", age:"23"}
        ]
      })
    }

    togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow});
    }
  
    render() {
      const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px'
      };

      let persons = null;

      if (this.state.showPersons){
        persons = (
          <div>
          {this.state.persons.map((person,index) => {
            return <Person 
            click={() => this.deletePersonsHandler(index)}
            name={person.name} age={person.age} />
          })}
          </div>
        )
      }

      return (
        <div className="App">
          <h1>I'm a React App</h1>
          <p>Welcome</p>
          <button onClick={this.togglePersonsHandler} style={style}>Toggle Persons</button>
          {persons}
            
        </div>
      );
    }
  }

export default App;
