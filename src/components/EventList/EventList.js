import React, { Component } from "react";
import Event from "../Event.js/Event";

class EventList extends Component {
  render() {
    const { events } = this.props;

    return (
      <ul className="EventList">
        {events.map((event) => (
          <Event key={event.id} event={event} />
        ))}
      </ul>
    );
  }
}

export default EventList;
