import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TennisBookingApp = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedSport, setSelectedSport] = useState('tennis');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/bookings'); // Adjust the URL accordingly
        const data = response.data;

        const filtered = data.filter(item => {
          const itemDate = new Date(item.date);
          return (
            itemDate.getDate() === selectedDate.getDate() &&
            itemDate.getMonth() === selectedDate.getMonth() &&
            itemDate.getFullYear() === selectedDate.getFullYear() &&
            item.court.some(court =>
              court.slots.some(slot => slot.isBooked && slot.Booker.toLowerCase() === selectedSport.toLowerCase())
            )
          );
        });

        setFilteredData(filtered);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [selectedDate, selectedSport]);

  const handleDateChange = newDate => {
    setSelectedDate(newDate);
  };

  const handleSportChange = newSport => {
    setSelectedSport(newSport);
  };

  const getTableData = sportType => {
    return filteredData
      .filter(item =>
        item.court.some(court =>
          court.slots.some(slot => slot.isBooked && slot.Booker.toLowerCase() === sportType.toLowerCase())
        )
      )
      .map(item => (
        <table key={`${item.date}-${sportType}`}>
          <thead>
            <tr>
              <th>Date</th>
              <th>Start Time</th>
              <th>End Time</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {item.court
              .filter(court =>
                court.slots.some(slot => slot.isBooked && slot.Booker.toLowerCase() === sportType.toLowerCase())
              )
              .map(court =>
                court.slots.map(slot => (
                  <tr key={`${item.date}-${court.courtNumber}-${slot.startTime}`}>
                    <td>{item.date}</td>
                    <td>{slot.startTime}</td>
                    <td>{slot.endTime}</td>
                    <td>{slot.isBooked ? 'Booked' : 'Available'}</td>
                  </tr>
                ))
              )}
          </tbody>
        </table>
      ));
  };

  return (
    <div>
      <div>
        <label>Select Date:</label>
        <input
          type="date"
          value={selectedDate.toISOString().split('T')[0]}
          onChange={e => handleDateChange(new Date(e.target.value))}
          min={new Date().toISOString().split('T')[0]}
          max={new Date(selectedDate.getTime() + 24 * 60 * 60 * 1000).toISOString().split('T')[0]}
        />
      </div>

      <div>
        <label>Select Sport:</label>
        <select value={selectedSport} onChange={e => handleSportChange(e.target.value)}>
          <option value="tennis">Tennis</option>
          <option value="table tennis">Table Tennis</option>
          <option value="badminton">Badminton</option>
          <option value="yoga">Yoga</option>
          <option value="aerobic">Aerobic</option>
        </select>
      </div>

      {getTableData(selectedSport)}
    </div>
  );
};

export default TennisBookingApp;
