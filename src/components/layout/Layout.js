import React, {Component} from 'react';

export default class Layout extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Layout
        {this.props.children}
      </div>
    )
  }
}
