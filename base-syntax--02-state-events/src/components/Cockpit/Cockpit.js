import React from 'react';
import classes from './Cockpit.css';

const cockpit = ( props ) =>  {
    const assignedClasses = [classes.blue];
    const buttonClass=[classes.Button]; 
    if (props.showPersons) {
        buttonClass.push(classes.Red);
    }
    if (props.persons.length <=2) {
      assignedClasses.push(classes.red);
    }
    if (props.persons.length <=1) {
      assignedClasses.push(classes.bold);
    }
   return (
    <div className={classes.Cockpit}>
    <h1>Hi, I'm a React App</h1>
    <p className={assignedClasses.join(' ')}>This is really working!</p>
    <button className={buttonClass.join(' ')}
    onClick={props.clicked}>Switch Name</button> 
    </div>
  ); 
};
    
   

export default cockpit;