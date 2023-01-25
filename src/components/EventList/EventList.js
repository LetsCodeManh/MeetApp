import React, { Component } from "react";
import Event from "../Event/Event";

class EventList extends Component {
  render() {
    const { events, eventCount } = this.props;

    return (
      <ul className="EventList">
        {(eventCount ? events.slice(0, eventCount) : events).map((event) => (
          <Event key={event.id} event={event} />
        ))}
      </ul>
    );
  }
}

export default EventList;
