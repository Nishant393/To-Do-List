import React, { useEffect, useState } from 'react'
import Navbar from '../Bar/Navbar'
import ImageSlider from './ImageSlider';
import axios from 'axios'
import Card from "./Card"
function Home() {

  return (
    <div >
      <Navbar />
      <ImageSlider  /> 
      <Card/>
    </div>
  )
}

export default Home