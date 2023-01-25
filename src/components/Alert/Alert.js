import React, { Component } from "react";

class Alert extends Component {
  constructor(props) {
    super(props);
    this.color = null;
  }

  getStyle = () => {
    return {
      color: this.color,
      position: this.position,
      top: this.top,
      left: this.left,
      right: this.right,
      paddingInline: this.paddingInline,
    };
  };

  render() {
    return (
      <div className="Alert">
        <p style={this.getStyle()}>{this.props.text}</p>
      </div>
    );
  }
}

class InfoAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = "blue";
    this.position = "absolute";
    this.top = "-3rem";
    this.left = 0;
    this.right = 0;
    this.paddingInline = "2rem";
  }
}

class ErrorAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = "red";
    this.position = "absolute";
    this.top = "3rem";
    this.left = 0;
    this.right = 0;
    this.paddingInline = "2rem";
  }
}

class WarningAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = "orange";
  }
}

export default Alert;
export { InfoAlert, ErrorAlert, WarningAlert };
