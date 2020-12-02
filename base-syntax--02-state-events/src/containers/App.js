import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
class App extends Component {

  state = {
    persons: [
      { id: '1234', name: 'Max', age: 28 },
      { id: '5678', name: 'Manu', age: 29 },
      { id: '9737', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangedHandler = (event,id) => {
    const personIndexOnChange = this.state.persons.findIndex ((person) => {
      return person.id === id;
    });
    const personObject = {...this.state.persons[personIndexOnChange]}; // getting the person object with index = personIndexOnChange without mutating the actual data

    personObject.name = event.target.value;
    /*instead of creating a copy of changed object and modifying it and then
    assigning it back to the copied array what we can do is that we can first 
    create a copy of the persons array and then modify it using below code
    personArray[personIndexOnChange].name = event.target.value */

    const personArray = [...this.state.persons];
    personArray[personIndexOnChange] = personObject;
    // console.log(personArray);
    this.setState( {persons:personArray} )
  }
togglePersonHandler = () => {
const doesShow = this.state.showPersons;
this.setState({showPersons: !doesShow});
}

deletePersonhandler = (personIndex) => {
// const duplicatePersons = this.state.persons; // reference to original persons defined in state object so we will use slice function
//const duplicatePersons = this.state.persons.slice(); // here we are using slice so that duplicatePerson doesnot point back to original value 
const duplicatePersons = [...this.state.persons]; // this is es6 approach that is using spread operator to get the objects of the array and not the actual array itself
duplicatePersons.splice(personIndex,1); // modifying this duplicate array but what splice does is it mutates actual data
this.setState({
persons:duplicatePersons //assigning value of the modified array in setstate method setstate is update DOM
});
}
 

  render () {
   
     /**********************handling hide show via javascript way starts**************************/
  var persons = null;
  // let buttonClass=[classes.Button]; // we can have let buttonClass='' if we wrap it around App in our css
  if (this.state.showPersons) {
   persons = (
      <Persons persons={this.state.persons}
      clicked = {this.deletePersonhandler}
      changed= {this.nameChangedHandler}/>
   );
   
  }
  /* use npm update react react-dom if we get any error like :
'TypeError: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createContext is not a function'*/

   /******************************handling hide show via javascript way ends**************************/
    
    return (
      <div className={classes.App}>
      <Cockpit persons={this.state.persons}
      showPersons={this.state.showPersons}
      clicked={this.togglePersonHandler}/>
     
      {persons}
    </div>
 
   /**********************handling hide show via javascript way ends**************************/
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}
export default App; 
/*export default Radium(App); // component wrapping our component with some additional functionalities
use npm install --save styled-components to use styled-components for css.
to use styled-components we need to remove all the changes done for radium.*/