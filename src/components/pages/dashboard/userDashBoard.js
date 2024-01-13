import React from 'react'
import Navbar from '../../Navbar/Navbar'
import DashBoard from '../../User/DashBoard/DashBoard'
import DoctorCarousel from './doctorCarousel'
import Testinomials from './testinomials'

function userDashBoard() {
  return (
    <div>
        <Navbar/>
        <DashBoard/>
        <div className='mb-5'>
        <DoctorCarousel/>
        <Testinomials/>
        </div>
    </div>
  )
}

export default userDashBoard
