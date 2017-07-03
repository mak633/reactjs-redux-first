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
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import reducer from './reducers';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
store.subscribe(() => {
   console.log('subscribe', store.getState());
});


function renderApp() {
  ReactDOM.render(
    <HashRouter>
      <Provider store={store}>
        <Switch>
          <MuiThemeProvider>
          <div className='App'>
              <Route exact path='/' component={App}/>
          </div>
          </MuiThemeProvider>
        </Switch>
      </Provider>
    </HashRouter>,
      document.getElementById('mount-point')
  );
}
renderApp();
