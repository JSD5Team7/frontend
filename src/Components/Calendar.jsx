import React, { useState } from 'react';

// Example data in the new format
const data = [
    {date: '2023-10-06', time: '06:00 - 07:00', status: true },
    {date: '2023-10-06', time: '07:00 - 08:00', status: false },
    {date: '2023-10-06', time: '08:00 - 09:00', status: true },
    {date: '2023-10-06', time: '10:00 - 11:00', status: false },
    {date: '2023-10-06', time: '11:00 - 12:00', status: true },
    {date: '2023-10-06', time: '12:00 - 13:00', status: true },
    {date: '2023-10-06', time: '13:00 - 14:00', status: false },
    {date: '2023-10-06', time: '14:00 - 15:00', status: true },
    {date: '2023-10-06', time: '15:00 - 16:00', status: false },
    //2023-10-07
    {date: '2023-10-07', time: '06:00 - 07:00', status: false },
    {date: '2023-10-07', time: '07:00 - 08:00', status: false },
    {date: '2023-10-07', time: '08:00 - 09:00', status: false },
    {date: '2023-10-07', time: '10:00 - 11:00', status: false },
    {date: '2023-10-07', time: '11:00 - 12:00', status: true },
    {date: '2023-10-07', time: '12:00 - 13:00', status: true },
    {date: '2023-10-07', time: '13:00 - 14:00', status: false },
    {date: '2023-10-07', time: '14:00 - 15:00', status: true },
    {date: '2023-10-07', time: '15:00 - 16:00', status: false },
  ];

// Style Type Sport
const typeStyle = 'p-1 border border-red-400 rounded-lg bg-red-400 hover:bg-red-700 hover:border-red-700 hover:text-white cursor-pointer'

const Calendar = () => {

    const [selectedDate, setSelectedDate] = useState(new Date());
    const [availableTimeSlots, setAvailableTimeSlots] = useState([]);
  
    const today = new Date().toISOString().split('T')[0];
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowFormatted = tomorrow.toISOString().split('T')[0];
  
    const handleDateChange = (date) => {
      setSelectedDate(new Date(date));
  
      // Filter data for the selected date
      const slotsForDate = data.filter((slot) => slot.date === date);
      setAvailableTimeSlots(slotsForDate);
    };
  
    return (
      <div className='w-full bg-white mt-10 p-5 flex flex-col justify-center gap-3'>
        <h1 className='text-2xl mb-5'>Checking an available time for booking</h1>
        <div className="choose-type flex gap-3 items-center">
          <h2>Select Type:</h2>
          <ul className='flex list-none gap-3 items-center'>
            <li className={typeStyle}>Aerobic</li>
            <li className={typeStyle}>Badminton</li>
            <li className={typeStyle}>Table Tennis</li>
            <li className={typeStyle}>Tennis</li>
            <li className={typeStyle}>Yoga</li>
          </ul>
        </div>
        <div>
          <label>Select Date:</label>
          <input
            type="date"
            value={selectedDate.toISOString().split('T')[0]}
            min={today}
            max={tomorrowFormatted}
            onChange={(e) => handleDateChange(e.target.value)}
          />
        </div>
        <div>
          <h2>Available Time:</h2>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Time Slot</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {availableTimeSlots.map((timeSlot, index) => (
                <tr key={index}>
                  <td>{timeSlot.date}</td>
                  <td>{timeSlot.time}</td>
                  <td className={timeSlot.status ? 'green' : 'red'}>{timeSlot.status ? 'Available' : 'Unavailable'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

export default Calendar;