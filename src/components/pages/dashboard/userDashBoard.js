import React from 'react'
import Navbar from '../../Navbar/Navbar'
import DashBoard from '../../User/DashBoard/DashBoard'
import DoctorCarousel from './doctorCarousel'

function userDashBoard() {
  return (
    <div>
        <Navbar/>
        <DashBoard/>
        <div className='mb-5'>
        <DoctorCarousel/>
        </div>
    </div>
  )
}

export default userDashBoard
