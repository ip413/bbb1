import AuthComponent from './AuthComponent';
import React, { Component } from 'react';


class SignUp extends Component {

  componentDidMount() {
    console.log(this, this.props.store)
  }

  render() {
    return (
      <div>
        <AuthComponent eventOnSubmit={'signup'} store={this.props.store} />
      </div>
    );
  }
}

export default SignUp;