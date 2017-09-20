import AuthComponent from './AuthComponent';
import React, { Component } from 'react';

class SignUp extends Component {
  render() {
    return (
      <div><AuthComponent eventOnSubmit={'signUp'} store={this.props.store} /></div>
    );
  }
}

export default SignUp;