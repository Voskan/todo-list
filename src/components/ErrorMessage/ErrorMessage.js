import { Component } from "react";

import './error-message.css'

export default class ErrorMessage extends Component {

  render() {
    const { message, type } = this.props;

    const style = {};

    switch (type) {
      case "error": style.backgroundColor = '#e99a9a'; break;
      case "info": style.backgroundColor = '#6bd4f7'; break;
      default: style.backgroundColor = '#eee'; break;
    }

    return (
      <div className="message-alert" style={style}>{message}</div>
    )
  }
}