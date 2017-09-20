import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React, { Component } from 'react';
import Sieds from 'sieds';
import SignUp from './SignUp';
import Tab from 'material-ui/Tabs/Tab';
import Tabs from 'material-ui/Tabs/Tabs';
import Services from './Services';

const theme = getMuiTheme();
const store = new Sieds({'signup': {}});
const services = new Services(store);
// store.set({'signup': {}});

class App extends Component {
  constructor(props) {
    super(props);
    // console.log("xx", store.get())
    console.log("xx", store.get())

    store.addListener('signup', (value) => {console.log('signup', value, store.get())})
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={theme}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <Tabs>
                <Tab label="Sign up"><SignUp store={store} /></Tab>
                <Tab label="Log in"></Tab>
                <Tab label="Change Password"></Tab>
                <Tab label="Log out" className="danger-background"></Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;