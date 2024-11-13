import React, { useState } from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./CalendarContent.css";

import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";

const localizer = momentLocalizer(moment);

export default function CalendarContent() {
  const [view, setView] = useState(Views.WORK_WEEK);
  const [events, setEvents] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [eventDetails, setEventDetails] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: "",
    start: new Date(),
    end: new Date(),
  });

  const handleOnChangeView = (selectedView) => {
    setView(selectedView);
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
  const handleSelectSlot = ({ start, end }) => {
    setNewEvent({ ...newEvent, start, end });
    setShowModal(true);
  };
  const handleSaveEvent = () => {
    console.log("event save");
    setEvents([...events, { ...newEvent }]);
    setShowModal(false);
  };

  return (
    <div style={{ height: `500px` }}>
      <Calendar
        className="calendar-content"
        localizer={localizer}
        events={events}
        view={view}
        views={["work_week", "day"]}
        onView={handleOnChangeView}
        startAccessor="start"
        endAccessor="end"
        style={{ margin: `50px` }}
        selectable
        onSelectSlot={handleSelectSlot}
      />
      {showModal && (
        <div className="modal">
          <h2>Create Event</h2>
          <input
            type="text"
            placeholder="Event Title"
            value={newEvent.title}
            onChange={(e) =>
              setNewEvent({ ...newEvent, title: e.target.value })
            }
          />
          <button onClick={handleSaveEvent}>Save Event</button>
          <button onClick={() => setShowModal(false)}>Cancel</button>
        </div>
      )}

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
