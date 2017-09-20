import React, {Component} from 'react';
import Tab from 'material-ui/Tabs/Tab';
import Tabs from 'material-ui/Tabs/Tabs';

class NavbarUi extends Component {
  render() {
    return (
      <div>
        <Tabs>
          <Tab label="Sign up"></Tab>
          <Tab label="Log in"></Tab>
          <Tab label="Change Password"></Tab>
          <Tab label="Log out" className="danger-background"></Tab>
        </Tabs>
      </div>
    );
  }
}

export default NavbarUi;