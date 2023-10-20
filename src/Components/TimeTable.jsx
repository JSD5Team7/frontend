import React, { useState } from 'react';

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





const bookedStyle = 'border border-slate-100 bg-gray-400 text-slate-300'
const availableStyle = 'border border-slate-100 bg-green-400'

  const BookingTable = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedSport, setSelectedSport] = useState('tennis');
  
    const getSelectedData = () => {
      switch (selectedSport) {
        case 'tennis':
          return tennisData;
        case 'table-tennis':
          return tableTennisData;
        case 'badminton':
          return badmintonData;
        case 'yoga':
          return yogaData;
        case 'aerobic':
          return aerobicData;
        default:
          return [];
      }
    };
  
    const filteredData = getSelectedData().find(entry => entry.date === selectedDate.toISOString().split('T')[0]);
  
    const handleDateChange = (date) => {
      setSelectedDate(date);
    };
  
    const handleSportChange = (sport) => {
      setSelectedSport(sport);
    };
  
    return (
      <div className='bg-white/10 p-10 mt-12 mb-12 rounded-xl'>
        <h2 className='text-center text-3xl'>Time Table for Booking</h2>
        <div className='bg-blue-400 w-fit p-2 rounded-md mb-3'>
          <label>Date: </label>
          <input type="date" className='bg-transparent' value={selectedDate.toISOString().split('T')[0]} onChange={(e) => handleDateChange(new Date(e.target.value))} min={new Date().toISOString().split('T')[0]} max={new Date(new Date().getTime() + 86400000).toISOString().split('T')[0]} />
        </div>
  
        <div className='bg-blue-400 w-fit p-2 rounded-md mb-5 text-red'>
          <label>Sport Type: </label>
          <select className='bg-transparent ' value={selectedSport} onChange={(e) => handleSportChange(e.target.value)}>
            <option value="tennis">Tennis</option>
            <option value="table-tennis">Table Tennis</option>
            <option value="badminton">Badminton</option>
            <option value="yoga">Yoga</option>
            <option value="aerobic">Aerobic</option>
          </select>
        </div>
  
        <table className='bg-gray-400 w-full text-center border border-slate-100'>
          <thead>
            <tr className='h-10'>
              <th className='bg-blue-500'>Time</th>
              <th className='bg-blue-500'>Court 1</th>
              <th className='bg-blue-500'>Court 2</th>
              <th className='bg-blue-500'>Court 3</th>
              <th className='bg-blue-500'>Court 4</th>
              <th className='bg-blue-500'>Court 5</th>
              <th className='bg-blue-500'>Court 6</th>
            </tr>
          </thead>
          <tbody>
            {filteredData && filteredData.court[0].slots.map(slot => (
              <tr key={slot.startTime} className='h-8'>
                <td className='bg-red-300 border border-slate-100'>{`${slot.startTime} - ${slot.endTime}`}</td>
                {filteredData.court.map(court => (
                  <td className={court.slots.find(s => s.startTime === slot.startTime).isBooked ? bookedStyle : availableStyle} key={`${court.courtNumber}-${slot.startTime}`} id={`status-court${court.courtNumber}`}>
                    {court.slots.find(s => s.startTime === slot.startTime).isBooked ? 'Booked' : 'Available'}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default BookingTable;
  