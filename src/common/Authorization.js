import TextField from 'material-ui/TextField';
import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class Authorization extends Component {
  state = {
    email: '',
    password: ''
  }

  constructor(props) {
    super(props);
    this.props.store.addListener('alert', this.onAlertSet);
  }

  onAlertSet = (alert) => {
    if(alert.type === 'success' && alert.action === this.props.eventOnSubmit) {
      this.clearFormValues();
    }
  }

  clearFormValues() {
    this.setState({email:'', password: ''});
  }

  onSubmitClick = () => {
    console.log("click", this.props.eventOnSubmit)
    this.props.store.set(this.props.eventOnSubmit, {'email': this.refs.email.getValue(), 'password': this.refs.password.getValue()})
  } 

  render() {
    return (
      <div className="row">
        <div className="col-xs-12 center">
          <div className="control-group">
            <TextField hintText="Email" ref="email"
              onChange={(e) => {this.setState({'email': e.target.value})}}
              value={this.state.email}
              floatingLabelText="Email"/><br />
            <TextField hintText="Password" ref="password"
              onChange={(e) => {this.setState({'password': e.target.value})}}
              value={this.state.password}
              floatingLabelText="Password"
              type="password" /><br />
          </div>
          <RaisedButton label="Send" onClick={this.onSubmitClick} />
        </div>
      </div>
    );
  }
}

export default Authorization;