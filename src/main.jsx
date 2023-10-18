import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

//Redux
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './Hook/Reducers/store.jsx';


import App from './App.jsx'
import AboutUs from './Pages/AboutUs.jsx'
import ProfileComponent from './Pages/Profile.jsx'
import TrainerDetails from './Pages/TrainerDetails.jsx'
import Booking from './Pages/BookingPage/Booking.jsx'
import ContactUs from './Pages/Contact.jsx'
import Login from './Pages/Login.jsx'
import TermsOfService from './Pages/TermsOfService.jsx'
import Privacy from './Pages/Privacy.jsx'
import Registration from './Pages/Registration.jsx'
import DashBoard from './Pages/ProfilePage/Dashboard.jsx'

import './index.css'


const router = createBrowserRouter([
  {path:'/', element:<App/>},
  {path:'/contact-us', element:<ContactUs/>},
  {path:'/about-us', element:<AboutUs/>},
  {path:'/booking', element:<Booking user_id={1}/>},
  {path:'/profile', element:<ProfileComponent />},
  {path:'/contact-us', element: <ContactUs/>},
  {path:'/coach', element:<TrainerDetails/>},
  {path:'/login', element:<Login/>},
  {path:'/terms-of-service', element:<TermsOfService/>},
  {path:'/privacy', element:<Privacy/>},
  {path:'/signup', element:<Registration/>},
  {path:'/dashboard',element:<DashBoard user_id={1}/>}
])

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
