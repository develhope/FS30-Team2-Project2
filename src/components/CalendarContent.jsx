import React, { useState } from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./CalendarContent.scss";

import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

const localizer = momentLocalizer(moment);

export default function CalendarContent() {
  const [events, setEvents] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [eventDetails, setEventDetails] = useState({});
  const handleSelectSlot = ({ start }) => {
    setEventDetails({ ...eventDetails, start, end: start });
    setShowForm(true);
  };

  const handleChange = (e) => {
    setEventDetails({ ...eventDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEvents([...events, { ...eventDetails }]);
    setEventDetails("");

    setShowForm(false);
  };

  const handleDeleteEvent = (index) => {
    const newEvents = events.filter((item, i) => i !== index);
    setEvents(newEvents);
  };
  return (
    <div>
      <Calendar
        className="calendar-container"
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ margin: `50px` }}
        selectable
        onSelectSlot={handleSelectSlot}
      />
      {showForm && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Titolo evento"
            value={eventDetails.title}
            onChange={handleChange}
            required
          />
          <button type="submit">Aggiungi evento</button>
        </form>
      )}
      <h2>Eventi:</h2>
      <ul>
        {events.map((event, index) => (
          <li key={index}>
            {event.title} - {event.start.toLocaleString()}
            <button onClick={() => handleDeleteEvent(index)}>Elimina</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
