import React, { Component } from "react";

class EventList extends Component {
  render() {
    const { events } = this.props;
    return (
      <ul className="EventList">
        {events.map((event) => (
          <Event event={event} />
        ))}
      </ul>
    );
  }
}

export default EventList;
