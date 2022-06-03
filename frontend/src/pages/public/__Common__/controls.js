import React from 'react';

export default class Controls extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  updateMessage(event) {
      console.log('xxx');
    this.props.updateMessage(event.target.value);
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.message}
          onChange={this.updateMessage.bind(this)}
        />
      </div>
    );
  }
}