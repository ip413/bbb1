import React, {Component} from 'react';
import Tab from 'material-ui/Tabs/Tab';
import Tabs from 'material-ui/Tabs/Tabs';
// import SignUp from './SignUp';
import LogIn from './LogIn';
import ChangePassword from './ChangePassword';
import AuthComponent from './AuthComponent';

class Navbar extends Component {
  render() {
    return (
      <div>
        <Tabs>
          <Tab label="Sign up"><AuthComponent eventOnSubmit={'signUp'} store={this.props.store} /></Tab>
          <Tab label="Log in"><AuthComponent eventOnSubmit={'logIn'} store={this.props.store} /></Tab>
          {this.props.store.get('loggedIn') && 
          <Tab label="Change password"><ChangePassword eventOnSubmit={'newPassword'} store={this.props.store} /></Tab>
          }
          {this.props.store.get('loggedIn') &&
          <Tab label="Log out" className="danger-background"></Tab>
          }
        </Tabs>
      </div>
    );
  }
}

export default Navbar;