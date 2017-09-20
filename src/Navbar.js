import Authorization from './common/Authorization';
import Passwords from './common/Passwords';
import React, {Component} from 'react';
import Tab from 'material-ui/Tabs/Tab';
import Tabs from 'material-ui/Tabs/Tabs';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.props.store.addListener('loggedIn', () => {this.forceUpdate()});
  }

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
            <Tab label="Log out" className="danger-background" onActive={() => {this.props.store.set('logOut', true)}}></Tab>
          }
        </Tabs>
      </div>
    );
  }
}

export default Navbar;