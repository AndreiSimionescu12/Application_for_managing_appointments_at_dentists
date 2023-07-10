import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Calendar1.css";

export const Calendar1 = () => {
 
  const timeIntervals = [    { label: '09:00 - 10:00', value: '09:00-10:00' },    { label: '10:00 - 11:00', value: '10:00-11:00' },    { label: '11:00 - 12:00', value: '11:00-12:00' },    { label: '12:00 - 13:00', value: '12:00-13:00' },    { label: '13:00 - 14:00', value: '13:00-14:00' },    { label: '14:00 - 15:00', value: '14:00-15:00' },    { label: '15:00 - 16:00', value: '15:00-16:00' },    { label: '16:00 - 17:00', value: '16:00-17:00' },    { label: '17:00 - 18:00', value: '17:00-18:00' },  ];

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [availableTimes, setAvailableTimes] = useState(timeIntervals);
  const [appointments, setAppointments] = useState([]);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedInterval, setSelectedInterval] = useState(null);

  function handleTimeSelect(time) {
    setSelectedTime(time.value);
    setSelectedInterval(time);
  }

  function handleScheduleAppointment() {
    const dateTime = `${formatDate(selectedDate)} ${selectedTime}`;
    const updatedAppointments = [...appointments, { dateTime }];
    setAppointments(updatedAppointments);
    localStorage.setItem('appointments', JSON.stringify(updatedAppointments));
    setSelectedTime(null); // Resetați timpul selectat după programarea cu succes

    const updatedAvailableTimes = availableTimes.filter((t) => t.value !== selectedInterval.value);
    setAvailableTimes(updatedAvailableTimes);
    setSelectedInterval(null);
  }

  useEffect(() => {
    const savedAppointments = JSON.parse(localStorage.getItem('appointments')) || [];
    setAppointments(savedAppointments);
  }, []);

  useEffect(() => {
    const updatedAvailableTimes = timeIntervals.filter((time) => {
      const date = formatDate(selectedDate);
      const dateTime = `${date} ${time.value}`;
      return !appointments.some((appointment) => appointment.dateTime === dateTime);
    });
    setAvailableTimes(updatedAvailableTimes);
  }, [selectedDate, appointments]);

  function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  function handleDateChange(date) {
    setSelectedDate(date);
  }

  return (
    <div>
    <h1>{selectedDate.toLocaleDateString()}</h1>
    <Calendar
      minDate={new Date()}
      maxDate={new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)}
      onChange={handleDateChange}
      value={selectedDate}
    />
    <h2>Intervale disponibile:</h2>
    <div className="interval-orar">
      {availableTimes.map((time) => (
        <button id="buton-timp" key={time.value} onClick={() => handleTimeSelect(time)} className={selectedTime === time.value ? 'selected' : ''}>{time.label}</button>
      ))}
    </div>
    {/* {selectedTime && (
      <button onClick={handleScheduleAppointment}>Schedule appointment</button>
    )} */}
    <button className="buton-programare" onClick={handleScheduleAppointment}>Programeaza-te</button>
    
  </div>
  );
};

