import React from 'react';
import Controls from './controls';

export default class Display extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: ""
    }
  }

  updateMessage(message) {
    this.setState({
      message: message
    });
  }

  render() {
    return (
      <div>
        {this.state.message}
        <hr/>
        <Controls
          message={this.state.message}
          updateMessage={this.updateMessage.bind(this)}
        />
      </div>
    );
  }
}