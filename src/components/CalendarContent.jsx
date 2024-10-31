import React from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./CalendarContent.scss";

import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

const localizer = momentLocalizer(moment);

export default function CalendarContent() {
  return (
    <div>
      <Calendar
        className="calendar-container"
        localizer={localizer}
        startAccessor="start"
        endAccessor="end"
        style={{ margin: `50px` }}
      />
    </div>
  );
}
