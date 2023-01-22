import React, { Component } from "react";

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
  };

  handleInputChanged = (event) => {
    const inputValue = event.target.value;
    this.props.updateEvents(null, inputValue);
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

export default NumberOfEvents;
