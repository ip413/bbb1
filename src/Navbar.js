import React, {Component} from 'react';
import Tab from 'material-ui/Tabs/Tab';
import Tabs from 'material-ui/Tabs/Tabs';
import Passwords from './common/Passwords';
import Authorization from './common/Authorization';

class Navbar extends Component {
  render() {
    return (
      <div>
        <Tabs>
          {!this.props.store.get('loggedIn') &&
            <Tab label="Sign up"><Authorization eventOnSubmit={'signUp'} store={this.props.store} /></Tab>
          }
          {!this.props.store.get('loggedIn') &&
            <Tab label="Log in"><Authorization eventOnSubmit={'logIn'} store={this.props.store} /></Tab>
          }
          {this.props.store.get('loggedIn') &&
            <Tab label="Change password"><Passwords eventOnSubmit={'newPassword'} store={this.props.store} /></Tab>
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