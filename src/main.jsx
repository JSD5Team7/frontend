import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import AboutUs from './Pages/AboutUs.jsx'
import ProfileComponent from './Pages/ProfilePage/Profile.jsx'
import TrainerDetails from './Pages/TrainerDetails.jsx'
import Booking from './Pages/BookingPage/Booking.jsx'
import ContactUs from './Pages/Contact.jsx'
import Login from './Pages/Login.jsx'
import TermsOfService from './Pages/TermsOfService.jsx'
import Privacy from './Pages/Privacy.jsx'
import Registration from './Pages/Registration.jsx'

import './index.css'


const router = createBrowserRouter([
  {path:'/', element:<App/>},
  {path:'/contact-us', element:<ContactUs/>},
  {path:'/about-us', element:<AboutUs/>},
  {path:'/booking', element:<Booking/>},
  {path:'/profile', element:<ProfileComponent user_id={1}/>},
  {path:'/contact-us', element: <ContactUs/>},
  {path:'/coach', element:<TrainerDetails/>},
  {path:'/login', element:<Login/>},
  {path:'/terms-of-service', element:<TermsOfService/>},
  {path:'/privacy', element:<Privacy/>},
  {path:'/signup', element:<Registration/>}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
