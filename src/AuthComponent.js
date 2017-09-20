import TextField from 'material-ui/TextField';
import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class AuthComponent extends Component {

  onSubmitClick = () => {
    this.props.store.set(this.props.eventOnSubmit, {'user': this.refs.email.getValue(), 'password': this.refs.password.getValue()})
  } 

  render() {
    return (
      <div className="row">
        <div className="col-xs-12 center">
          <div className="control-group">
            <TextField hintText="Email" ref="email" floatingLabelText="Email"/><br />
            <TextField hintText="Password"  ref="password" floatingLabelText="Password" type="password" /><br />
          </div>
          <RaisedButton label="Send" onClick={this.onSubmitClick} />
        </div>
      </div>
    );
  }
}

export default AuthComponent;