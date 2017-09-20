import AuthComponent from './AuthComponent';
import React, { Component } from 'react';

class LogIn extends Component {
  render() {
    return (
      <div><AuthComponent eventOnSubmit={'logIn'} store={this.props.store} /></div>
    );
  }
}

export default LogIn;