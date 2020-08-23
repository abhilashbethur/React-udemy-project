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
    ]
  }
  
  switchHandler = (newName)=> {
      //console.log("was clicked");
      this.setState({
        persons: [
          { name:newName, age:"28"},
          { name:"Manu", age:"29"},
          { name:"Stephanie", age:"23"}
        ]
      })
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
  
    render() {
      const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px'
      };

      return (
        <div className="App">
          <h1>I'm a React App</h1>
          <p>Welcome</p>
          <button onClick={() => {this.switchHandler("thula")}} style={style}>Switch Name</button>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age}
           changed={this.nameChange}/>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
        </div>
      );
    }
  }

export default App;
