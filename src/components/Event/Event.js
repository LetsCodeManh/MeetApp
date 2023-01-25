import moment from "moment";
import React, { Component } from "react";
import { WarningAlert } from "../Alert/Alert";

class Event extends Component {
  state = {
    isExpanded: false,
    warningText: "",
  };

  toggleExpand = () => {
    this.setState((prevState) => ({
      isExpanded: !prevState.isExpanded,
    }));
  };

  componentDidMount() {
    const { event } = this.props;
    const eventStartDate = moment(event.start.dateTime);
    const currentDate = moment();

    if (eventStartDate.isBefore(currentDate)) {
      this.setState({
        warningText: "This event has already started",
      });
    }
  }

  render() {
    const { event } = this.props;
    const { isExpanded } = this.state;
    return (
      <li className="eventData">
        <div className={`event ${isExpanded ? "expanded" : "collapsed"}`}>
          <div className="basic-info">
            <h2 className="summary">{event.summary}</h2>
            <p className="location">{event.location}</p>
            <p className="startDate">
              {moment(event.start.dateTime).format("MMMM Do YYYY, h:mm a")}
            </p>
            <WarningAlert text={this.state.warningText} />
          </div>
          {isExpanded && (
            <div>
              <p className="description">{event.description}</p>
            </div>
          )}
          <div className="expand-collapse-buttons">
            <button onClick={() => this.toggleExpand()}>
              {isExpanded ? "Collapse" : "Expand"}
            </button>
          </div>
        </div>
      </li>
    );
  }
}

export default Event;
