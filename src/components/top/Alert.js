import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

export default class Alert extends React.Component {

  state = {
    open: false,
  };

  constructor(props) {
    super(props);
    this.props.store.addListener('alert', this.onAlertSet);
  }

  onAlertSet = () => {
    this.setState({open: true});
  }

  onAlertClose = () => {
    this.setState({open: false});
  };

  getTitle() {
    switch(this.props.store.get('alert').type) {
      case 'error':
        return 'Error';
      case 'success':
        return 'Success';
      default:
        return '';
    }
  }

  render() {
    const actions = [
      <FlatButton label="OK"primary={true} keyboardFocused={true} onClick={this.onAlertClose} />,
    ];

    return (
      <div>
        <Dialog
          className={this.props.store.get('alert').title === 'Error' ? 'danger-background' : ''}
          title={this.getTitle()}
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.onAlertClose}
        >
          {this.props.store.get('alert').message}
        </Dialog>
      </div>
    );
  }
}