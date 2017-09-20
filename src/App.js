import Alert from './Alert';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navbar from './Navbar';
import React, { Component } from 'react';
import Services from './Services';
import Sieds from 'sieds';

const store = new Sieds({signUp: {}, alert: {}, logIn: {}, loggedIn: false, newPassword: null});
new Services(store);

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