import React from 'react'
import './App.css'
import Layout from './Layout/Layout.jsx'
import Slider from './Layout/Slider'
import useAPI from './Hook/useAPI'



function App() {
  const { trainers } = useAPI();
  return (
    // <Slider/>
    <Layout>
      <h1>This is Landing Page</h1>
      <Slider trainer= {trainers}/>
    </Layout>
  )
}

export default App
