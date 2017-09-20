import RaisedButton from 'material-ui/RaisedButton';
import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

class Passwords extends Component {
  state = {
    password1: '',
    password2: ''
  }

  constructor(props) {
    super(props);
    this.props.store.addListener('alert', this.onAlertSet);
  }

  onAlertSet = (alert) => {
    if (alert.action === this.props.eventOnSubmit) {
      this.clearFormValues();
    }
  }

  clearFormValues() {
    this.setState({password1:'', password2: ''});
  }

  onSubmitClick = () => {
    if (this.state.password1 === this.state.password2 && this.state.password1 === '') {
      return this.props.store.set('alert', {type: 'error', message: 'Password can\'t be empty' });
    }

    if (this.state.password1 !== this.state.password2) {
      return this.props.store.set('alert', {type: 'error', message: 'Passwords should be the same' });
    }

    if (this.state.password1 === this.state.password2) {
      this.props.store.set(this.props.eventOnSubmit, this.state.password1);
    }
  }

  componentWillUnmount() {
    this.props.store.removeListener('alert', this.onAlertSet);
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-12 center">
            <div className="control-group">
              <TextField hintText="Password" ref="password1"
                onChange={(e) => {this.setState({'password1': e.target.value})}}
                value={this.state.password1}
                floatingLabelText="Password"
                type="password" /><br />
              <TextField hintText="Repeat password" ref="password2"
                onChange={(e) => {this.setState({'password2': e.target.value})}}
                value={this.state.password2}
                floatingLabelText="Repeat password"
                type="password" /><br />
            </div>
            <RaisedButton label="Send" onClick={this.onSubmitClick} />
          </div>
        </div>
      </div>
    );
  }
}

export default Passwords;