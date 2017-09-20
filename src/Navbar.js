import React, {Component} from 'react';
import Tab from 'material-ui/Tabs/Tab';
import Tabs from 'material-ui/Tabs/Tabs';
import SignUp from './SignUp';
import LogIn from './LogIn';

class Navbar extends Component {
  render() {
    return (
      <div>
        <Tabs>
          <Tab label="Sign up"><SignUp store={this.props.store} /></Tab>
          <Tab label="Log in"><LogIn store={this.props.store} /></Tab>
          {this.props.store.get('loggedIn') &&
          <Tab label="Change Password"></Tab>
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