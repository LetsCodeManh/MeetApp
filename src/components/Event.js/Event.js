import React, { Component } from "react";

class Event extends Component {
  state = {
    isExpanded: false,
  };

  toggleExpand = () => {
    this.setState((prevState) => ({
      isExpanded: !prevState.isExpanded,
    }));
  };

  render() {
    const { event } = this.props;
    const { isExpanded } = this.state;
    return (
      <li>
        <div className={`event ${isExpanded ? "expanded" : "collapsed"}`}>
          <div className="basic-info">
            <h2>{event.summary}</h2>
            <p>{event.location}</p>
          </div>
          {isExpanded && (
            <div>
              <p>Date: {event.date}</p>
              <p>{event.description}</p>
            </div>
          )}
          <div className="expand-collapse-buttons">
            <button className={`${isExpanded ? "expanded-button" : "collapsed-button"}`} onClick={this.toggleExpand}>
              {isExpanded ? "Collapse" : "Expand"}
            </button>
          </div>
        </div>
      </li>
    );
  }
}

export default Event;
