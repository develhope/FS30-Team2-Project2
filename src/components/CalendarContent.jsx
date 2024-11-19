import React, { useEffect, useState } from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./CalendarContent.css";
import useCardsApi from "./useCardsApi";

import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";

const localizer = momentLocalizer(moment);

export default function CalendarContent() {
  const [view, setView] = useState(Views.WORK_WEEK);
  const [events, setEvents] = useState([]);

  const { cards } = useCardsApi();

  useEffect(() => {
    if (cards && cards.length > 0) {
      const formattedEvents = cards.map((event) => {
        console.log(new Date(event.date).getDate());
        const date = new Date(event.date);
        const year = date.getFullYear();
        const month = date.getMonth();
        const day = date.getDate();
        const hours = date.getHours();
        const minute = date.getMinutes();

        const newDate = new Date(year, month, day, hours, minute);
        return {
          title: event.titleIt,
          start: newDate,
          end: new Date(new Date(event.date).getTime() + 60 * 60 * 1000),
        };
      });
      setEvents(formattedEvents);
    }
  }, [cards]);

  const handleOnChangeView = (selectedView) => {
    setView(selectedView);
  };

  const handleSelectSlot = ({ start, end }) => {
    console.log("evento selezionato: ", start, end);
  };

  return (
    <div style={{ height: `500px` }}>
      <Calendar
        className="calendar-content"
        localizer={localizer}
        events={events}
        view={view}
        views={["work_week", "day", "month"]}
        onView={handleOnChangeView}
        startAccessor="start"
        endAccessor="end"
        selectable
        onSelectSlot={handleSelectSlot}
      />
    </div>
  );
}
