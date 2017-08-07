import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Link, Switch } from 'react-router-dom'

import './App.css';
import '../../react-toolbox/theme.css';
import theme from '../../react-toolbox/theme.js';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import PermAppBar from './PermAppBar.js';
import Main from '../Main';
import Office from '../Office';

const NoMatch = () => <h2></h2>

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <ThemeProvider theme={theme}>
            <div className="App">
              <PermAppBar/>
          {/* <section> */}
              {/* <AlertPopup /> */}
              <Switch>
                 {/* <Route exact path="/" component={Home} /> */}
                <Route path="/Office" component={Office} />
                {/* <Route path="/getting-started" component={GettingStarted} />
                <Route path="/recover-password" component={RecoverPassword} />
                <Route path="/dashboard" component={Dashboard}/>
                <Route exact path="/apis" component={Apis}/>
                <Route path="/apis/:apiId" component={ApiDetails}/>  */}
                <Route component={NoMatch}/>
              </Switch>
          {/* </section> */}
            </div>
      </ThemeProvider>
    </BrowserRouter>
    );
  }
}

export default App;
