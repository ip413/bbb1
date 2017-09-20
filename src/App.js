import Alert from './components/top/Alert';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navbar from './components/top/Navbar';
import React, { Component } from 'react';
import Auth from './services/Auth';
import Sieds from 'sieds';

const store = new Sieds({signUp: {}, alert: {}, logIn: {}, loggedIn: false, newPassword: null});
new Auth(store);

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <Navbar store={store} />
              <Alert store={store} />
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;