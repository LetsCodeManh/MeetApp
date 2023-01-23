import React, { Component } from "react";

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
  };

  handleInputChanged = (event) => {
    const inputValue = parseInt(event.target.value);
    if (inputValue < 1 || inputValue > 100) {
      console.log("Pick a number betwwen 1 and 100");
    } else {
      this.setState({
        numberOfEvents: inputValue,
      });

      this.props.updateEventCount(inputValue);
    }
  };

  render() {
    const { numberOfEvents } = this.state;

    return (
      <div>
        <input
          type="number"
          className="eventCountInput"
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
  defaultNumberOfEvents: 32,
};

export default NumberOfEvents;
