import React from 'react'
import Navbar from '../../Navbar/Navbar'
import DashBoard from '../../User/DashBoard/DashBoard'
import DoctorCarousel from './doctorCarousel'
import Testinomials from './testinomials'
import Footer from '../../Footer/Footer'

function userDashBoard() {
  return (
    <div>
        <Navbar/>
        <DashBoard/>
        <div className='mb-5'>
        <DoctorCarousel/>
        <Testinomials/>
        <Footer/>
        </div>
    </div>
  )
}

export default userDashBoard
