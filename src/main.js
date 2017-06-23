import ReactDOM from 'react-dom';
import React from 'react';
import {
  HashRouter,
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from 'react-router-dom';
import App from './App.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { createStore } from 'redux';

function playlist(state = [], action){
  if(action.type === "ADD_TRACK"){
    return [
      ...state,
      action.payload
    ]
  }
  return state;
}

const store = createStore(playlist);
store.subscribe(() => {
   console.log('subscribe', store.getState());
});
store.dispatch({ type: "ADD_TRACK", payload: "Smells"});
store.dispatch({ type: "ADD_TRACK", payload: "Funny"});

function renderApp() {
  ReactDOM.render(
    <HashRouter>
      <Switch>
        <MuiThemeProvider>
        <div className='App'>
            <Route exact path='/' component={App}/>
        </div>
        </MuiThemeProvider>
      </Switch>
    </HashRouter>,
      document.getElementById('mount-point')
  );
}
