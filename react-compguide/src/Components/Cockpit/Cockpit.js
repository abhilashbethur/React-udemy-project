import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    const xclasses = [];
    if (props.persons.length<=2){
      xclasses.push('red');
    }
    if(props.persons.length<=1){
      xclasses.push('bold');
    }

    let msg = 'This is working!';
    if (props.persons.length == 0){
      msg = 'This shit ain\'t working';
    }
    
    
    let btnClass='';
    if (props.showPersons){
        btnClass=classes.style;
    }

    return(
        <div className={classes.Cockpit}>
            <h1>I'm a React App</h1>
          <p>Welcome</p>
          <p className={xclasses.join(' ')}>{msg}</p>
          <button onClick={props.clicked} className={btnClass}>Toggle Persons</button>
        </div>
        
    );
}

export default cockpit;