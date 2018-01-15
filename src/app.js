import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';

class App extends Component<{}> {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyCZrIcQT46gho5UbCcB3vl9eqfgtsXsbjE",
      authDomain: "manager-29eca.firebaseapp.com",
      databaseURL: "https://manager-29eca.firebaseio.com",
      projectId: "manager-29eca",
      storageBucket: "manager-29eca.appspot.com",
      messagingSenderId: "826260576741"
    });
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>Hello</Text>
        </View>
      </Provider>
    );
  }
}

export default App;
