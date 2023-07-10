import React, { useState } from 'react'
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';

export const CalendarProgramare = () => {

    const [value,onChange]=useState(new Date());

  return (
    <div>
      <Calendar onChange={onChange} value={value} minDate={new Date()} maxDate={new Date(2023, 11, 31)}/>
    </div>
  )
}

