import React, { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
/*
// Create a Date object
const currentDate = new Date();

// Extract date components
const year = currentDate.getFullYear();
const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-indexed
const day = currentDate.getDate().toString().padStart(2, '0');

// Create the YYYY-MM-DD formatted string
const date = `${year}-${month}-${day}`;

// Get the date for tomorrow
const newDate = new Date(currentDate);
newDate.setDate(currentDate.getDate() + 1);

// Extract date components for tomorrow
const tomorrowYear = newDate.getFullYear();
const tomorrowMonth = (newDate.getMonth() + 1).toString().padStart(2, '0');
const tomorrowDay = newDate.getDate().toString().padStart(2, '0');

// Create the YYYY-MM-DD formatted string for tomorrow
const tomorrowDate = `${tomorrowYear}-${tomorrowMonth}-${tomorrowDay}`;




//this data for each day
const tennisData = [{
    "_id": {
      "$oid": "6530744add5cccae185124ee"
    },
    "date": date,
    "court": [
      {
        "courtNumber": 1,
        "slots": [
          {
            "startTime": "06:00",
            "endTime": "07:00",
            "isBooked": true,
            "Booker": "65306c31f10be79aff7212e4"
          },
          {
            "startTime": "07:00",
            "endTime": "08:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "08:00",
            "endTime": "09:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "09:00",
            "endTime": "10:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "10:00",
            "endTime": "11:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "11:00",
            "endTime": "12:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "12:00",
            "endTime": "13:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "13:00",
            "endTime": "14:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "14:00",
            "endTime": "15:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "15:00",
            "endTime": "16:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "16:00",
            "endTime": "17:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "17:00",
            "endTime": "18:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "18:00",
            "endTime": "19:00",
            "isBooked": false
          },
          {
            "startTime": "19:00",
            "endTime": "20:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "20:00",
            "endTime": "21:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "21:00",
            "endTime": "22:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "22:00",
            "endTime": "23:00",
            "isBooked": true,
            "Booker": ""
          }
        ]
      },
      {
        "courtNumber": 2,
        "slots": [
          {
            "startTime": "06:00",
            "endTime": "07:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "07:00",
            "endTime": "08:00",
            "isBooked": true,
            "Booker": "1"
          },
          {
            "startTime": "08:00",
            "endTime": "09:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "09:00",
            "endTime": "10:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "10:00",
            "endTime": "11:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "11:00",
            "endTime": "12:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "12:00",
            "endTime": "13:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "13:00",
            "endTime": "14:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "14:00",
            "endTime": "15:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "15:00",
            "endTime": "16:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "16:00",
            "endTime": "17:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "17:00",
            "endTime": "18:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "18:00",
            "endTime": "19:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "19:00",
            "endTime": "20:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "20:00",
            "endTime": "21:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "21:00",
            "endTime": "22:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "22:00",
            "endTime": "23:00",
            "isBooked": false,
            "Booker": ""
          }
        ]
      },
      {
        "courtNumber": 3,
        "slots": [
          {
            "startTime": "06:00",
            "endTime": "07:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "07:00",
            "endTime": "08:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "08:00",
            "endTime": "09:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "09:00",
            "endTime": "10:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "10:00",
            "endTime": "11:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "11:00",
            "endTime": "12:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "12:00",
            "endTime": "13:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "13:00",
            "endTime": "14:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "14:00",
            "endTime": "15:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "15:00",
            "endTime": "16:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "16:00",
            "endTime": "17:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "17:00",
            "endTime": "18:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "18:00",
            "endTime": "19:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "19:00",
            "endTime": "20:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "20:00",
            "endTime": "21:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "21:00",
            "endTime": "22:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "22:00",
            "endTime": "23:00",
            "isBooked": false,
            "Booker": ""
          }
        ]
      },
      {
        "courtNumber": 4,
        "slots": [
          {
            "startTime": "06:00",
            "endTime": "07:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "07:00",
            "endTime": "08:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "08:00",
            "endTime": "09:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "09:00",
            "endTime": "10:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "10:00",
            "endTime": "11:00",
            "isBooked": true,
            "Booker": "65306c31f10be79aff7212e4"
          },
          {
            "startTime": "11:00",
            "endTime": "12:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "12:00",
            "endTime": "13:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "13:00",
            "endTime": "14:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "14:00",
            "endTime": "15:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "15:00",
            "endTime": "16:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "16:00",
            "endTime": "17:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "17:00",
            "endTime": "18:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "18:00",
            "endTime": "19:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "19:00",
            "endTime": "20:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "20:00",
            "endTime": "21:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "21:00",
            "endTime": "22:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "22:00",
            "endTime": "23:00",
            "isBooked": false,
            "Booker": ""
          }
        ]
      },
      {
        "courtNumber": 5,
        "slots": [
          {
            "startTime": "06:00",
            "endTime": "07:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "07:00",
            "endTime": "08:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "08:00",
            "endTime": "09:00",
            "isBooked": true,
            "Booker": "65309e41fcbe89fdb94cc59c"
          },
          {
            "startTime": "09:00",
            "endTime": "10:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "10:00",
            "endTime": "11:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "11:00",
            "endTime": "12:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "12:00",
            "endTime": "13:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "13:00",
            "endTime": "14:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "14:00",
            "endTime": "15:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "15:00",
            "endTime": "16:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "16:00",
            "endTime": "17:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "17:00",
            "endTime": "18:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "18:00",
            "endTime": "19:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "19:00",
            "endTime": "20:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "20:00",
            "endTime": "21:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "21:00",
            "endTime": "22:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "22:00",
            "endTime": "23:00",
            "isBooked": false,
            "Booker": ""
          }
        ]
      }
    ]
  },
  {
    "_id": {
      "$oid": "6530744add5cccae185124ee"
    },
    "date": tomorrowDate,
    "court": [
      {
        "courtNumber": 1,
        "slots": [
          {
            "startTime": "06:00",
            "endTime": "07:00",
            "isBooked": false,
            "Booker": "65306c31f10be79aff7212e4"
          },
          {
            "startTime": "07:00",
            "endTime": "08:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "08:00",
            "endTime": "09:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "09:00",
            "endTime": "10:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "10:00",
            "endTime": "11:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "11:00",
            "endTime": "12:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "12:00",
            "endTime": "13:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "13:00",
            "endTime": "14:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "14:00",
            "endTime": "15:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "15:00",
            "endTime": "16:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "16:00",
            "endTime": "17:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "17:00",
            "endTime": "18:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "18:00",
            "endTime": "19:00",
            "isBooked": false
          },
          {
            "startTime": "19:00",
            "endTime": "20:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "20:00",
            "endTime": "21:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "21:00",
            "endTime": "22:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "22:00",
            "endTime": "23:00",
            "isBooked": false,
            "Booker": ""
          }
        ]
      },
      {
        "courtNumber": 2,
        "slots": [
          {
            "startTime": "06:00",
            "endTime": "07:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "07:00",
            "endTime": "08:00",
            "isBooked": false,
            "Booker": "1"
          },
          {
            "startTime": "08:00",
            "endTime": "09:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "09:00",
            "endTime": "10:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "10:00",
            "endTime": "11:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "11:00",
            "endTime": "12:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "12:00",
            "endTime": "13:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "13:00",
            "endTime": "14:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "14:00",
            "endTime": "15:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "15:00",
            "endTime": "16:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "16:00",
            "endTime": "17:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "17:00",
            "endTime": "18:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "18:00",
            "endTime": "19:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "19:00",
            "endTime": "20:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "20:00",
            "endTime": "21:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "21:00",
            "endTime": "22:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "22:00",
            "endTime": "23:00",
            "isBooked": false,
            "Booker": ""
          }
        ]
      },
      {
        "courtNumber": 3,
        "slots": [
          {
            "startTime": "06:00",
            "endTime": "07:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "07:00",
            "endTime": "08:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "08:00",
            "endTime": "09:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "09:00",
            "endTime": "10:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "10:00",
            "endTime": "11:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "11:00",
            "endTime": "12:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "12:00",
            "endTime": "13:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "13:00",
            "endTime": "14:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "14:00",
            "endTime": "15:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "15:00",
            "endTime": "16:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "16:00",
            "endTime": "17:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "17:00",
            "endTime": "18:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "18:00",
            "endTime": "19:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "19:00",
            "endTime": "20:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "20:00",
            "endTime": "21:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "21:00",
            "endTime": "22:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "22:00",
            "endTime": "23:00",
            "isBooked": false,
            "Booker": ""
          }
        ]
      },
      {
        "courtNumber": 4,
        "slots": [
          {
            "startTime": "06:00",
            "endTime": "07:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "07:00",
            "endTime": "08:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "08:00",
            "endTime": "09:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "09:00",
            "endTime": "10:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "10:00",
            "endTime": "11:00",
            "isBooked": false,
            "Booker": "65306c31f10be79aff7212e4"
          },
          {
            "startTime": "11:00",
            "endTime": "12:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "12:00",
            "endTime": "13:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "13:00",
            "endTime": "14:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "14:00",
            "endTime": "15:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "15:00",
            "endTime": "16:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "16:00",
            "endTime": "17:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "17:00",
            "endTime": "18:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "18:00",
            "endTime": "19:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "19:00",
            "endTime": "20:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "20:00",
            "endTime": "21:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "21:00",
            "endTime": "22:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "22:00",
            "endTime": "23:00",
            "isBooked": false,
            "Booker": ""
          }
        ]
      },
      {
        "courtNumber": 5,
        "slots": [
          {
            "startTime": "06:00",
            "endTime": "07:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "07:00",
            "endTime": "08:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "08:00",
            "endTime": "09:00",
            "isBooked": false,
            "Booker": "65309e41fcbe89fdb94cc59c"
          },
          {
            "startTime": "09:00",
            "endTime": "10:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "10:00",
            "endTime": "11:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "11:00",
            "endTime": "12:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "12:00",
            "endTime": "13:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "13:00",
            "endTime": "14:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "14:00",
            "endTime": "15:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "15:00",
            "endTime": "16:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "16:00",
            "endTime": "17:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "17:00",
            "endTime": "18:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "18:00",
            "endTime": "19:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "19:00",
            "endTime": "20:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "20:00",
            "endTime": "21:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "21:00",
            "endTime": "22:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "22:00",
            "endTime": "23:00",
            "isBooked": false,
            "Booker": ""
          }
        ]
      }
    ]
  }
]

const tableTennisData = [{
    "_id": {
      "$oid": "652df489dd5cccae185124c5"
    },
    "date": date,
    "court": [
      {
        "courtNumber": 1,
        "slots": [
          {
            "startTime": "06:00",
            "endTime": "07:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "07:00",
            "endTime": "08:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "08:00",
            "endTime": "09:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "09:00",
            "endTime": "10:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "10:00",
            "endTime": "11:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "11:00",
            "endTime": "12:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "12:00",
            "endTime": "13:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "13:00",
            "endTime": "14:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "14:00",
            "endTime": "15:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "15:00",
            "endTime": "16:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "16:00",
            "endTime": "17:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "17:00",
            "endTime": "18:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "18:00",
            "endTime": "19:00",
            "isBooked": true
          },
          {
            "startTime": "19:00",
            "endTime": "20:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "20:00",
            "endTime": "21:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "21:00",
            "endTime": "22:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "22:00",
            "endTime": "23:00",
            "isBooked": false,
            "Booker": ""
          }
        ]
      },
      {
        "courtNumber": 2,
        "slots": [
          {
            "startTime": "06:00",
            "endTime": "07:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "07:00",
            "endTime": "08:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "08:00",
            "endTime": "09:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "09:00",
            "endTime": "10:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "10:00",
            "endTime": "11:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "11:00",
            "endTime": "12:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "12:00",
            "endTime": "13:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "13:00",
            "endTime": "14:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "14:00",
            "endTime": "15:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "15:00",
            "endTime": "16:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "16:00",
            "endTime": "17:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "17:00",
            "endTime": "18:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "18:00",
            "endTime": "19:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "19:00",
            "endTime": "20:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "20:00",
            "endTime": "21:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "21:00",
            "endTime": "22:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "22:00",
            "endTime": "23:00",
            "isBooked": false,
            "Booker": ""
          }
        ]
      },
      {
        "courtNumber": 3,
        "slots": [
          {
            "startTime": "06:00",
            "endTime": "07:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "07:00",
            "endTime": "08:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "08:00",
            "endTime": "09:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "09:00",
            "endTime": "10:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "10:00",
            "endTime": "11:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "11:00",
            "endTime": "12:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "12:00",
            "endTime": "13:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "13:00",
            "endTime": "14:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "14:00",
            "endTime": "15:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "15:00",
            "endTime": "16:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "16:00",
            "endTime": "17:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "17:00",
            "endTime": "18:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "18:00",
            "endTime": "19:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "19:00",
            "endTime": "20:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "20:00",
            "endTime": "21:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "21:00",
            "endTime": "22:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "22:00",
            "endTime": "23:00",
            "isBooked": false,
            "Booker": ""
          }
        ]
      }
    ]
  },
  {
    "_id": {
      "$oid": "652df489dd5cccae185124c5"
    },
    "date": tomorrowDate,
    "court": [
      {
        "courtNumber": 1,
        "slots": [
          {
            "startTime": "06:00",
            "endTime": "07:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "07:00",
            "endTime": "08:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "08:00",
            "endTime": "09:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "09:00",
            "endTime": "10:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "10:00",
            "endTime": "11:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "11:00",
            "endTime": "12:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "12:00",
            "endTime": "13:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "13:00",
            "endTime": "14:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "14:00",
            "endTime": "15:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "15:00",
            "endTime": "16:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "16:00",
            "endTime": "17:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "17:00",
            "endTime": "18:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "18:00",
            "endTime": "19:00",
            "isBooked": false
          },
          {
            "startTime": "19:00",
            "endTime": "20:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "20:00",
            "endTime": "21:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "21:00",
            "endTime": "22:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "22:00",
            "endTime": "23:00",
            "isBooked": false,
            "Booker": ""
          }
        ]
      },
      {
        "courtNumber": 2,
        "slots": [
          {
            "startTime": "06:00",
            "endTime": "07:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "07:00",
            "endTime": "08:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "08:00",
            "endTime": "09:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "09:00",
            "endTime": "10:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "10:00",
            "endTime": "11:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "11:00",
            "endTime": "12:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "12:00",
            "endTime": "13:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "13:00",
            "endTime": "14:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "14:00",
            "endTime": "15:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "15:00",
            "endTime": "16:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "16:00",
            "endTime": "17:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "17:00",
            "endTime": "18:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "18:00",
            "endTime": "19:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "19:00",
            "endTime": "20:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "20:00",
            "endTime": "21:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "21:00",
            "endTime": "22:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "22:00",
            "endTime": "23:00",
            "isBooked": false,
            "Booker": ""
          }
        ]
      },
      {
        "courtNumber": 3,
        "slots": [
          {
            "startTime": "06:00",
            "endTime": "07:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "07:00",
            "endTime": "08:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "08:00",
            "endTime": "09:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "09:00",
            "endTime": "10:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "10:00",
            "endTime": "11:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "11:00",
            "endTime": "12:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "12:00",
            "endTime": "13:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "13:00",
            "endTime": "14:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "14:00",
            "endTime": "15:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "15:00",
            "endTime": "16:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "16:00",
            "endTime": "17:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "17:00",
            "endTime": "18:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "18:00",
            "endTime": "19:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "19:00",
            "endTime": "20:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "20:00",
            "endTime": "21:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "21:00",
            "endTime": "22:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "22:00",
            "endTime": "23:00",
            "isBooked": false,
            "Booker": ""
          }
        ]
      }
    ]
  }
]

const badmintonData = [{
    "_id": {
      "$oid": "653076e6dd5cccae185124f1"
    },
    "date": date,
    "court": [
      {
        "courtNumber": 1,
        "slots": [
          {
            "startTime": "06:00",
            "endTime": "07:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "07:00",
            "endTime": "08:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "08:00",
            "endTime": "09:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "09:00",
            "endTime": "10:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "10:00",
            "endTime": "11:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "11:00",
            "endTime": "12:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "12:00",
            "endTime": "13:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "13:00",
            "endTime": "14:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "14:00",
            "endTime": "15:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "15:00",
            "endTime": "16:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "16:00",
            "endTime": "17:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "17:00",
            "endTime": "18:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "18:00",
            "endTime": "19:00",
            "isBooked": true
          },
          {
            "startTime": "19:00",
            "endTime": "20:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "20:00",
            "endTime": "21:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "21:00",
            "endTime": "22:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "22:00",
            "endTime": "23:00",
            "isBooked": false,
            "Booker": ""
          }
        ]
      },
      {
        "courtNumber": 2,
        "slots": [
          {
            "startTime": "06:00",
            "endTime": "07:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "07:00",
            "endTime": "08:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "08:00",
            "endTime": "09:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "09:00",
            "endTime": "10:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "10:00",
            "endTime": "11:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "11:00",
            "endTime": "12:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "12:00",
            "endTime": "13:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "13:00",
            "endTime": "14:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "14:00",
            "endTime": "15:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "15:00",
            "endTime": "16:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "16:00",
            "endTime": "17:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "17:00",
            "endTime": "18:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "18:00",
            "endTime": "19:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "19:00",
            "endTime": "20:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "20:00",
            "endTime": "21:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "21:00",
            "endTime": "22:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "22:00",
            "endTime": "23:00",
            "isBooked": false,
            "Booker": ""
          }
        ]
      },
      {
        "courtNumber": 3,
        "slots": [
          {
            "startTime": "06:00",
            "endTime": "07:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "07:00",
            "endTime": "08:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "08:00",
            "endTime": "09:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "09:00",
            "endTime": "10:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "10:00",
            "endTime": "11:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "11:00",
            "endTime": "12:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "12:00",
            "endTime": "13:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "13:00",
            "endTime": "14:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "14:00",
            "endTime": "15:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "15:00",
            "endTime": "16:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "16:00",
            "endTime": "17:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "17:00",
            "endTime": "18:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "18:00",
            "endTime": "19:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "19:00",
            "endTime": "20:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "20:00",
            "endTime": "21:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "21:00",
            "endTime": "22:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "22:00",
            "endTime": "23:00",
            "isBooked": false,
            "Booker": ""
          }
        ]
      },
      {
        "courtNumber": 4,
        "slots": [
          {
            "startTime": "06:00",
            "endTime": "07:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "07:00",
            "endTime": "08:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "08:00",
            "endTime": "09:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "09:00",
            "endTime": "10:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "10:00",
            "endTime": "11:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "11:00",
            "endTime": "12:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "12:00",
            "endTime": "13:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "13:00",
            "endTime": "14:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "14:00",
            "endTime": "15:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "15:00",
            "endTime": "16:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "16:00",
            "endTime": "17:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "17:00",
            "endTime": "18:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "18:00",
            "endTime": "19:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "19:00",
            "endTime": "20:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "20:00",
            "endTime": "21:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "21:00",
            "endTime": "22:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "22:00",
            "endTime": "23:00",
            "isBooked": false,
            "Booker": ""
          }
        ]
      },
      {
        "courtNumber": 5,
        "slots": [
          {
            "startTime": "06:00",
            "endTime": "07:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "07:00",
            "endTime": "08:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "08:00",
            "endTime": "09:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "09:00",
            "endTime": "10:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "10:00",
            "endTime": "11:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "11:00",
            "endTime": "12:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "12:00",
            "endTime": "13:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "13:00",
            "endTime": "14:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "14:00",
            "endTime": "15:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "15:00",
            "endTime": "16:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "16:00",
            "endTime": "17:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "17:00",
            "endTime": "18:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "18:00",
            "endTime": "19:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "19:00",
            "endTime": "20:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "20:00",
            "endTime": "21:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "21:00",
            "endTime": "22:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "22:00",
            "endTime": "23:00",
            "isBooked": false,
            "Booker": ""
          }
        ]
      },
      {
        "courtNumber": 6,
        "slots": [
          {
            "startTime": "06:00",
            "endTime": "07:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "07:00",
            "endTime": "08:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "08:00",
            "endTime": "09:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "09:00",
            "endTime": "10:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "10:00",
            "endTime": "11:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "11:00",
            "endTime": "12:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "12:00",
            "endTime": "13:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "13:00",
            "endTime": "14:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "14:00",
            "endTime": "15:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "15:00",
            "endTime": "16:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "16:00",
            "endTime": "17:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "17:00",
            "endTime": "18:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "18:00",
            "endTime": "19:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "19:00",
            "endTime": "20:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "20:00",
            "endTime": "21:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "21:00",
            "endTime": "22:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "22:00",
            "endTime": "23:00",
            "isBooked": false,
            "Booker": ""
          }
        ]
      }
    ]
  },
  {
    "_id": {
      "$oid": "653076e6dd5cccae185124f1"
    },
    "date": tomorrowDate,
    "court": [
      {
        "courtNumber": 1,
        "slots": [
          {
            "startTime": "06:00",
            "endTime": "07:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "07:00",
            "endTime": "08:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "08:00",
            "endTime": "09:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "09:00",
            "endTime": "10:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "10:00",
            "endTime": "11:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "11:00",
            "endTime": "12:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "12:00",
            "endTime": "13:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "13:00",
            "endTime": "14:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "14:00",
            "endTime": "15:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "15:00",
            "endTime": "16:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "16:00",
            "endTime": "17:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "17:00",
            "endTime": "18:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "18:00",
            "endTime": "19:00",
            "isBooked": false
          },
          {
            "startTime": "19:00",
            "endTime": "20:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "20:00",
            "endTime": "21:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "21:00",
            "endTime": "22:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "22:00",
            "endTime": "23:00",
            "isBooked": false,
            "Booker": ""
          }
        ]
      },
      {
        "courtNumber": 2,
        "slots": [
          {
            "startTime": "06:00",
            "endTime": "07:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "07:00",
            "endTime": "08:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "08:00",
            "endTime": "09:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "09:00",
            "endTime": "10:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "10:00",
            "endTime": "11:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "11:00",
            "endTime": "12:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "12:00",
            "endTime": "13:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "13:00",
            "endTime": "14:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "14:00",
            "endTime": "15:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "15:00",
            "endTime": "16:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "16:00",
            "endTime": "17:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "17:00",
            "endTime": "18:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "18:00",
            "endTime": "19:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "19:00",
            "endTime": "20:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "20:00",
            "endTime": "21:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "21:00",
            "endTime": "22:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "22:00",
            "endTime": "23:00",
            "isBooked": false,
            "Booker": ""
          }
        ]
      },
      {
        "courtNumber": 3,
        "slots": [
          {
            "startTime": "06:00",
            "endTime": "07:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "07:00",
            "endTime": "08:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "08:00",
            "endTime": "09:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "09:00",
            "endTime": "10:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "10:00",
            "endTime": "11:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "11:00",
            "endTime": "12:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "12:00",
            "endTime": "13:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "13:00",
            "endTime": "14:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "14:00",
            "endTime": "15:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "15:00",
            "endTime": "16:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "16:00",
            "endTime": "17:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "17:00",
            "endTime": "18:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "18:00",
            "endTime": "19:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "19:00",
            "endTime": "20:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "20:00",
            "endTime": "21:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "21:00",
            "endTime": "22:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "22:00",
            "endTime": "23:00",
            "isBooked": false,
            "Booker": ""
          }
        ]
      },
      {
        "courtNumber": 4,
        "slots": [
          {
            "startTime": "06:00",
            "endTime": "07:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "07:00",
            "endTime": "08:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "08:00",
            "endTime": "09:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "09:00",
            "endTime": "10:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "10:00",
            "endTime": "11:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "11:00",
            "endTime": "12:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "12:00",
            "endTime": "13:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "13:00",
            "endTime": "14:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "14:00",
            "endTime": "15:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "15:00",
            "endTime": "16:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "16:00",
            "endTime": "17:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "17:00",
            "endTime": "18:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "18:00",
            "endTime": "19:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "19:00",
            "endTime": "20:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "20:00",
            "endTime": "21:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "21:00",
            "endTime": "22:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "22:00",
            "endTime": "23:00",
            "isBooked": false,
            "Booker": ""
          }
        ]
      },
      {
        "courtNumber": 5,
        "slots": [
          {
            "startTime": "06:00",
            "endTime": "07:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "07:00",
            "endTime": "08:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "08:00",
            "endTime": "09:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "09:00",
            "endTime": "10:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "10:00",
            "endTime": "11:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "11:00",
            "endTime": "12:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "12:00",
            "endTime": "13:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "13:00",
            "endTime": "14:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "14:00",
            "endTime": "15:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "15:00",
            "endTime": "16:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "16:00",
            "endTime": "17:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "17:00",
            "endTime": "18:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "18:00",
            "endTime": "19:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "19:00",
            "endTime": "20:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "20:00",
            "endTime": "21:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "21:00",
            "endTime": "22:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "22:00",
            "endTime": "23:00",
            "isBooked": false,
            "Booker": ""
          }
        ]
      },
      {
        "courtNumber": 6,
        "slots": [
          {
            "startTime": "06:00",
            "endTime": "07:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "07:00",
            "endTime": "08:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "08:00",
            "endTime": "09:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "09:00",
            "endTime": "10:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "10:00",
            "endTime": "11:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "11:00",
            "endTime": "12:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "12:00",
            "endTime": "13:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "13:00",
            "endTime": "14:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "14:00",
            "endTime": "15:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "15:00",
            "endTime": "16:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "16:00",
            "endTime": "17:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "17:00",
            "endTime": "18:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "18:00",
            "endTime": "19:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "19:00",
            "endTime": "20:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "20:00",
            "endTime": "21:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "21:00",
            "endTime": "22:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "22:00",
            "endTime": "23:00",
            "isBooked": false,
            "Booker": ""
          }
        ]
      }
    ]
  }
]

const yogaData = [{
    "_id": {
      "$oid": "652df47add5cccae185124c3"
    },
    "date": date,
    "court": [
      {
        "courtNumber": 1,
        "slots": [
          {
            "startTime": "06:00",
            "endTime": "07:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "07:00",
            "endTime": "08:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "08:00",
            "endTime": "09:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "09:00",
            "endTime": "10:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "10:00",
            "endTime": "11:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "11:00",
            "endTime": "12:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "12:00",
            "endTime": "13:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "13:00",
            "endTime": "14:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "14:00",
            "endTime": "15:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "15:00",
            "endTime": "16:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "16:00",
            "endTime": "17:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "17:00",
            "endTime": "18:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "18:00",
            "endTime": "19:00",
            "isBooked": false
          },
          {
            "startTime": "19:00",
            "endTime": "20:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "20:00",
            "endTime": "21:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "21:00",
            "endTime": "22:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "22:00",
            "endTime": "23:00",
            "isBooked": false,
            "Booker": ""
          }
        ]
      },
      {
        "courtNumber": 2,
        "slots": [
          {
            "startTime": "06:00",
            "endTime": "07:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "07:00",
            "endTime": "08:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "08:00",
            "endTime": "09:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "09:00",
            "endTime": "10:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "10:00",
            "endTime": "11:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "11:00",
            "endTime": "12:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "12:00",
            "endTime": "13:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "13:00",
            "endTime": "14:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "14:00",
            "endTime": "15:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "15:00",
            "endTime": "16:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "16:00",
            "endTime": "17:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "17:00",
            "endTime": "18:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "18:00",
            "endTime": "19:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "19:00",
            "endTime": "20:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "20:00",
            "endTime": "21:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "21:00",
            "endTime": "22:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "22:00",
            "endTime": "23:00",
            "isBooked": false,
            "Booker": ""
          }
        ]
      }
    ]
  },
  {
    "_id": {
      "$oid": "652df47add5cccae185124c3"
    },
    "date": tomorrowDate,
    "court": [
      {
        "courtNumber": 1,
        "slots": [
          {
            "startTime": "06:00",
            "endTime": "07:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "07:00",
            "endTime": "08:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "08:00",
            "endTime": "09:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "09:00",
            "endTime": "10:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "10:00",
            "endTime": "11:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "11:00",
            "endTime": "12:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "12:00",
            "endTime": "13:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "13:00",
            "endTime": "14:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "14:00",
            "endTime": "15:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "15:00",
            "endTime": "16:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "16:00",
            "endTime": "17:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "17:00",
            "endTime": "18:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "18:00",
            "endTime": "19:00",
            "isBooked": false
          },
          {
            "startTime": "19:00",
            "endTime": "20:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "20:00",
            "endTime": "21:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "21:00",
            "endTime": "22:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "22:00",
            "endTime": "23:00",
            "isBooked": false,
            "Booker": ""
          }
        ]
      },
      {
        "courtNumber": 2,
        "slots": [
          {
            "startTime": "06:00",
            "endTime": "07:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "07:00",
            "endTime": "08:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "08:00",
            "endTime": "09:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "09:00",
            "endTime": "10:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "10:00",
            "endTime": "11:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "11:00",
            "endTime": "12:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "12:00",
            "endTime": "13:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "13:00",
            "endTime": "14:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "14:00",
            "endTime": "15:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "15:00",
            "endTime": "16:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "16:00",
            "endTime": "17:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "17:00",
            "endTime": "18:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "18:00",
            "endTime": "19:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "19:00",
            "endTime": "20:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "20:00",
            "endTime": "21:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "21:00",
            "endTime": "22:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "22:00",
            "endTime": "23:00",
            "isBooked": false,
            "Booker": ""
          }
        ]
      }
    ]
  }
]

const aerobicData = [{
    "_id": {
      "$oid": "652d8134dd5cccae185124bd"
    },
    "date": date,
    "court": [
      {
        "courtNumber": 1,
        "slots": [
          {
            "startTime": "06:00",
            "endTime": "07:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "07:00",
            "endTime": "08:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "08:00",
            "endTime": "09:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "09:00",
            "endTime": "10:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "10:00",
            "endTime": "11:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "11:00",
            "endTime": "12:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "12:00",
            "endTime": "13:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "13:00",
            "endTime": "14:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "14:00",
            "endTime": "15:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "15:00",
            "endTime": "16:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "16:00",
            "endTime": "17:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "17:00",
            "endTime": "18:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "18:00",
            "endTime": "19:00",
            "isBooked": true
          },
          {
            "startTime": "19:00",
            "endTime": "20:00",
            "isBooked": true,
            "Booker": ""
          },
          {
            "startTime": "20:00",
            "endTime": "21:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "21:00",
            "endTime": "22:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "22:00",
            "endTime": "23:00",
            "isBooked": false,
            "Booker": ""
          }
        ]
      }
    ]
  },
  {
    "_id": {
      "$oid": "652d8134dd5cccae185124bd"
    },
    "date": tomorrowDate,
    "court": [
      {
        "courtNumber": 1,
        "slots": [
          {
            "startTime": "06:00",
            "endTime": "07:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "07:00",
            "endTime": "08:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "08:00",
            "endTime": "09:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "09:00",
            "endTime": "10:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "10:00",
            "endTime": "11:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "11:00",
            "endTime": "12:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "12:00",
            "endTime": "13:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "13:00",
            "endTime": "14:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "14:00",
            "endTime": "15:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "15:00",
            "endTime": "16:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "16:00",
            "endTime": "17:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "17:00",
            "endTime": "18:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "18:00",
            "endTime": "19:00",
            "isBooked": false
          },
          {
            "startTime": "19:00",
            "endTime": "20:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "20:00",
            "endTime": "21:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "21:00",
            "endTime": "22:00",
            "isBooked": false,
            "Booker": ""
          },
          {
            "startTime": "22:00",
            "endTime": "23:00",
            "isBooked": false,
            "Booker": ""
          }
        ]
      }
    ]
  }
]
*/




const bookedStyle = 'border border-slate-100 bg-gray-200 text-red-400/80'
const availableStyle = 'border border-slate-100 bg-lime-400 '
const baseURL = 'http://localhost:3000'
  const BookingTable = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedSport, setSelectedSport] = useState('tennis');
    const [bookingData, setBookingData] = useState(null);
  
    // const getSelectedData = () => {
    //   switch (selectedSport) {
    //     case 'tennis':
    //       return tennisData;
    //     case 'table-tennis':
    //       return tableTennisData;
    //     case 'badminton':
    //       return badmintonData;
    //     case 'yoga':
    //       return yogaData;
    //     case 'aerobic':
    //       return aerobicData;
    //     default:
    //       return [];
    //   }
    // };
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
  