import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: "AIzaSyASTDd_KsOqpr85qBCv2Mhj10vb4hTIy6c",
            authDomain: "manager-3e68f.firebaseapp.com",
            databaseURL: "https://manager-3e68f.firebaseio.com",
            projectId: "manager-3e68f",
            storageBucket: "manager-3e68f.appspot.com",
            messagingSenderId: "1066670625293"
          };

          firebase.initializeApp(config);
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