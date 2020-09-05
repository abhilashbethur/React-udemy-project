import React, { useState,Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import Validation from './asst2/Validation'
import Char from './Char/Char';


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
      { id: '1',name:"Mark", age:"28"},
      { id: '2',name:"Manu", age:"29"},
      { id: '3',name:"Stephanie", age:"26"}
    ],
    showPersons: false,
    userInput: ''
  }
  
  userInputhandler = (event) => {
    this.setState({userInput:event.target.value});
  }

deletePersonsHandler = (Index) => {
 // const persons = this.state.persons.slice();
 const persons = [...this.state.persons]; 
 persons.splice(Index,1);
  this.setState({persons: persons});
}

deleteCharHandler = (index) => {
  const text = this.state.userInput.split('');
  text.splice(index,1);
  const updatedText= text.join('');
  this.setState({userInput: updatedText});
}

    nameChange = (event, id) => {
      const personIndex = this.state.persons.findIndex(p => {
        return p.id ===id;
      });
      const person = {
        ...this.state.persons[personIndex]
      };

      person.name = event.target.value;

      const persons = [...this.state.persons];
      persons[personIndex] = person;


      this.setState({
        persons: persons})
    }

    togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow});
    }
  
    render() {
const charList = this.state.userInput.split('').map((ch,index) => {
  return <Char character={ch} key={index}
  clicked={() => this.deleteCharHandler(index)}
  />;
});

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
            name={person.name} age={person.age}
            key={person.id} 
            changed={(event) => this.nameChange(event, person.id)}/>
          })}
          </div>
        )
      }

      return (
        <div className="App">
          <h1>I'm a React App</h1>
          <p>Welcome</p>
          <button onClick={this.togglePersonsHandler} style={style}>Toggle Persons</button>
          {persons}<br/>
          <input type="text" onChange={this.userInputhandler} value={this.state.userInput}  />
            <p>{this.state.userInput}</p>
            <Validation inputLength={this.state.userInput.length}/>
            {charList}
        </div>
      );
    }
  }

export default App;
