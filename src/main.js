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
