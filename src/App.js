import Alert from './Alert';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navbar from './Navbar';
import React, { Component } from 'react';
import Services from './Services';
import Sieds from 'sieds';

const theme = getMuiTheme();
const store = new Sieds({signUp: {}, alert: {}, logIn: {}, loggedIn: false, newPassword: null});
const services = new Services(store);

class App extends Component {
  constructor(props) {
    super(props);
    // console.log("xx", store.get())
    // console.log("xx", store.get())

    store.addListener('signUp', (value) => {console.log('signUp', value, store.get())})
    store.addListener('loggedIn', () => {this.forceUpdate()}); // showing menu for logged user
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={theme}>
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