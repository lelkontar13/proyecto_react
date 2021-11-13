import React, { Component } from "react";

export class FeedbackMessage extends Component {
  render() {
    return <div>{this.props.mensaje}</div>;
  }
}

export default FeedbackMessage;
