import React, { Component } from "react";

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: this.props.defaultNumberOfEvents || 32,
  };

  handleInputChanged = (event) => {
    const inputValue = event.target.value;
    this.setState({
      numberOfEvents: inputValue,
    });
  };

  render() {
    const { numberOfEvents } = this.state;

    return (
      <div>
        <input
          type="number"
          value={numberOfEvents}
          onChange={(event) => {
            this.handleInputChanged(event);
          }}
        />
      </div>
    );
  }
}
NumberOfEvents.defaultProps = {
  defaultNumberOfEvents: 32
}

export default NumberOfEvents;
