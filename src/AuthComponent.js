import TextField from 'material-ui/TextField';
import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class AuthComponent extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-xs-12 center">
          <div className="control-group">
            <TextField hintText="Email" floatingLabelText="Email"/><br />
            <TextField hintText="Password" floatingLabelText="Password" type="password" /><br />
          </div>
          <RaisedButton label="Send" />
        </div>
      </div>
    );
  }
}

export default AuthComponent;