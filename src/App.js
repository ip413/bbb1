import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavbarUI from './NavbarUI';
import React, { Component } from 'react';

const theme = getMuiTheme();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={theme}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <NavbarUI />
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;