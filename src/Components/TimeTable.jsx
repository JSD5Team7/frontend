import React, { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const bookedStyle = 'border border-slate-100 bg-gray-200 text-red-400/80'
const availableStyle = 'border border-slate-100 bg-lime-400 '
const baseURL = import.meta.env.VITE_BACKEND_URL;
  const BookingTable = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedSport, setSelectedSport] = useState('tennis');
    const [bookingData, setBookingData] = useState(null);
  
    const fetchData = async () => {
      const apiUrl = `${baseURL}/${selectedSport}Court/${selectedDate.toISOString().split('T')[0]}`;
      
      try {
        const response = await axios.get(apiUrl);
        const data = response.data;
  
        // Update state with the fetched data
        setBookingData(data);
      } catch (error) {
        console.error(`Error fetching ${selectedSport} data:`, error);
        
      }
    };
  
    useEffect(() => {
      // Fetch data when component mounts or when selectedSport or selectedDate changes
      fetchData();
    }, [selectedSport, selectedDate]);
   
    const handleDateChange = (date) => {
      setSelectedDate(date);
    };
  
    const handleSportChange = (sport) => {
      setSelectedSport(sport);
    };
  
    return (
      <div className='bg-slate-700 p-10 mt-12 mb-12 rounded-xl shadow-black shadow-md'>
        <h2 className='text-center text-lime-300 font-bold text-3xl mb-5'>Time Table for Booking</h2>
        <div className='bg-lime-300 w-fit p-2 rounded-md mb-3 hover:bg-lime-400 '>
          <label>Select Date: </label>
          <input type="date" className='bg-transparent' value={selectedDate.toISOString().split('T')[0]} onChange={(e) => handleDateChange(new Date(e.target.value))} min={new Date().toISOString().split('T')[0]} max={new Date(new Date().getTime() + 86400000).toISOString().split('T')[0]} />
        </div>
  
        <div className='bg-lime-300 w-fit p-2 rounded-md mb-5 hover:bg-lime-400 '>
          <label>Selcet Type: </label>
          <select className='bg-transparent active:ring-transparent ' value={selectedSport} onChange={(e) => handleSportChange(e.target.value)}>
            <option value="tennis">Tennis</option>
            <option value="tabletennis">Table Tennis</option>
            <option value="badminton">Badminton</option>
            <option value="yoga">Yoga</option>
            <option value="aerobic">Aerobic</option>
          </select>
        </div>
  
        <table className='bg-white w-full text-center border border-slate-100'>
          <thead>
            <tr className='h-10'>
              <th className='bg-lime-400'>Time</th>
              <th className='bg-gray-300'>Court 1</th>
              <th className='bg-gray-300'>Court 2</th>
              <th className='bg-gray-300'>Court 3</th>
              <th className='bg-gray-300'>Court 4</th>
              <th className='bg-gray-300'>Court 5</th>
              <th className='bg-gray-300'>Court 6</th>
            </tr>
          </thead>
          <tbody>
            {bookingData && bookingData.length > 0 && bookingData[0].slots.map(slot => (
              <tr key={slot.startTime} className='h-8'>
                <td className='bg-gray-300 border border-slate-100'>{`${slot.startTime} - ${slot.endTime}`}</td>
                {bookingData.map(court => (
                  <td className={court.slots.find(s => s.startTime === slot.startTime).isBooked ? bookedStyle : availableStyle} 
                  key={`${court.courtNumber}-${slot.startTime}`} 
                  id={`status-court${court.courtNumber}`}>
                    {court.slots.find(s => s.startTime === slot.startTime).isBooked ? 'Booked' : 'Available'}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <Link to={'/booking'}><button className='my-5 rounded-full w-[150px] text-lg font-semibold bg-lime-300 border-2 border-lime-300 hover:bg-lime-400 p-2'>Get Start</button></Link>
      </div>
    );
  };
  
  export default BookingTable;
  