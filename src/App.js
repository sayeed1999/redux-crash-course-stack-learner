import React, { Component } from 'react'
import './App.css';
import { Provider } from 'react-redux'
import store from './store' //when a file name is index.js, filename mention korar proyojon porena


// Redux has its own state management system like react has
// But react state and redux state are different
// React states are the component's state
// Redux state is the application state :) 

// How will we divide state between redux & react:-
// React will be responsible for only the view layer!
// Redux will be responsible for only the data layer!

// So How will react communicate with redux since react and redux are two different libraries!!
// ""React-Redux"" library !!!
// "React-Redux" will act as the bridge between "React" & "Redux"!

// We have to create a project structure for redux!! // HM Nayem bhai <3

// reducer chhara toh store create kora shomvob na
// reducer gulo dispatch hobe actions er upor vitti kore

import Count from './components/Count'
import Control from './components/Control'

class App extends Component {
  
  render() {

    return <Provider store={ store }>
        <div className="App">
          <h1>React-Redux | Stack Learner</h1>
          <Count />
          <Control />
        </div>
    </Provider>
  }
}

export default  App;
// Provider is the 'react-redux', App is the 'react', store is the 'react'

// Concepts:-

// Store => will hold all of our application data/state
// Reducer => a function which returns a specific amount of state or data to store
// Actions => any event that occurs, mouse click, loading page...
// Dispatch
// Subscriber
