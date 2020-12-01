import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
// import UserInput from './UserInput/UserInput';
// import UserOutput from './UserOutput/UserOutput';

class App extends Component {
 /**********************this was for assignment starts**************************/
  // state= {
  //   userName:'ABCD'
  // }
  /**********************this was for assignment end**************************/
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    /* this is for conditional display of div starts */
    showPersons: false
    /* this is for conditional display of div ends*/
  }

  // switchNameHandler = (newName) => {
  //   // console.log('Was clicked!');
  //   // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
  //   this.setState( {
  //     persons: [
  //       { name: newName, age: 28 },
  //       { name: 'Manu', age: 29 },
  //       { name: 'Stephanie', age: 27 }
  //     ]
  //   } )
  // }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 26 }
      ]
    } )
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
 /**********************this was for assignment starts**************************/
// usernameChangedHandler = (event) => {
// this.setState({
//   userName:event.target.value
// });
// }
 /**********************this was for assignment ends*******************************/

  render () {
    const style = {
      backgroundColor: 'white',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer'
    };
     /**********************handling hide show via javascript way starts**************************/
  var persons = null;
  if (this.state.showPersons) {
   persons = (
    <div>
      {this.state.persons.map((person,index) => { // passing person and index as parameter to the function
        return <Person 
        name={person.name} 
        age={person.age}
        click={this.deletePersonhandler.bind(this,index)}/>
      })}
    {/* <Person 
      name={this.state.persons[0].name} 
      age={this.state.persons[0].age} />
    <Person 
      name={this.state.persons[1].name} 
      age={this.state.persons[1].age}
      click={this.switchNameHandler.bind(this, 'Max!')}
      changed={this.nameChangedHandler} >My Hobbies: Racing</Person>
    <Person 
      name={this.state.persons[2].name} 
      age={this.state.persons[2].age} /> */}
      </div>
   );
  }
   /******************************handling hide show via javascript way ends**************************/

    return (
      /**********************this was for previous modules starts**************************/
      // <div className="App">
      //   <h1>Hi, I'm a React App</h1>
      //   <p>This is really working!</p>
      //   <button 
      //   style={style}
      //   onClick={() => this.switchNameHandler('Maximilian!!')}>Switch Name</button>
      //   <Person 
      //     name={this.state.persons[0].name} 
      //     age={this.state.persons[0].age} />
      //   <Person 
      //     name={this.state.persons[1].name} 
      //     age={this.state.persons[1].age}
      //     click={this.switchNameHandler.bind(this, 'Max!')}
      //     changed={this.nameChangedHandler} >My Hobbies: Racing</Person>
      //   <Person 
      //     name={this.state.persons[2].name} 
      //     age={this.state.persons[2].age} />
      // </div>
 /**********************this was for previous modules ends*********************************/

  /**********************this was for displaying div conditionally starts***************/
    //   <div className="App">
    //   <h1>Hi, I'm a React App</h1>
    //   <p>This is really working!</p>
    //   <button 
    //   style={style}
    //   onClick={this.togglePersonHandler}>Switch Name</button>
    //    { this.state.showPersons ? 
    //   <div>
    //   <Person 
    //     name={this.state.persons[0].name} 
    //     age={this.state.persons[0].age} />
    //   <Person 
    //     name={this.state.persons[1].name} 
    //     age={this.state.persons[1].age}
    //     click={this.switchNameHandler.bind(this, 'Max!')}
    //     changed={this.nameChangedHandler} >My Hobbies: Racing</Person>
    //   <Person 
    //     name={this.state.persons[2].name} 
    //     age={this.state.persons[2].age} />
    //     </div> : null
    // }
    // </div>
  /**********************this was for displaying div conditionally ends***************/

 /**********************this was for assignment starts**************************/
      // <div className="App">
      //   <UserInput changed={this.usernameChangedHandler}
      //   currentName = {this.state.userName}/>
      //   <UserOutput userName={this.state.userName}/>
      // </div>
 /**********************this was for assignment ends**************************/

  /**********************handling hide show via javascript way starts**************************/
      <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <button 
      style={style}
      onClick={this.togglePersonHandler}>Switch Name</button>
      {persons}
    </div>
   /**********************handling hide show via javascript way ends**************************/
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
