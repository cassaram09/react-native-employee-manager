import React, { Component } from 'react';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';
import Router from './router';

class App extends Component<{}> {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCZrIcQT46gho5UbCcB3vl9eqfgtsXsbjE',
      authDomain: 'manager-29eca.firebaseapp.com',
      databaseURL: 'https://manager-29eca.firebaseio.com',
      projectId: 'manager-29eca',
      storageBucket: 'manager-29eca.appspot.com',
      messagingSenderId: '826260576741'
    });
  }

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Router />
      </Provider>
    );
  }
}

export default App;
