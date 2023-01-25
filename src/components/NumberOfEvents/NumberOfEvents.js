import React, { Component } from "react";
import { ErrorAlert } from "../Alert/Alert";

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
    errorText: "",
  };

  handleInputChanged = (event) => {
    const inputValue = parseInt(event.target.value);
    if (isNaN(inputValue)) {
      this.setState({
        NumberOfEvents: 1,
        errorText: "Please, pick a number between 1 and 100",
      });
    }

    if (inputValue < 1 || inputValue > 100) {
      console.log("Pick a number between 1 and 100");
      this.setState({
        errorText: "Pick a number between 1 and 100",
      });
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
      <div className="NumberOfEvents">
        <label htmlFor="number">Pick a Number between 1 and 100</label>
        <input
          id="number"
          type="number"
          className="eventCountInput"
          value={numberOfEvents}
          onChange={(event) => {
            this.handleInputChanged(event);
          }}
        />
        <ErrorAlert text={this.state.errorText} />
      </div>
    );
  }
}
NumberOfEvents.defaultProps = {
  defaultNumberOfEvents: 32,
};

export default NumberOfEvents;
