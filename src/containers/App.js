import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
class App extends Component {
  state = {
    persons: [
      {id: 'asfa1', name: 'Amr', age: 25},
      {id: 'affw2', name: 'Saad', age: 27},
      {id: 'ajjr3', name: 'hafez', age: 35}
    ],
    showperson: true
  }

  togglePersonHandler = () => {
    this.setState({
      showperson: !this.state.showperson
    })
  }
  renderPerson = () => {
    let persons = null;

    if(this.state.showperson) {
      persons = (
        <ErrorBoundary>
          <Persons
            persons={this.state.persons}
          />
        </ErrorBoundary>
      )
    }
    return persons;
  }
  render() {
    return (
      <div className="App">
        <div>
          <button onClick={this.togglePersonHandler}>Toggle Persons</button>
        </div>
        <div>
          {this.renderPerson()}
       </div>
      </div>
    );
  }
}

export default App;
