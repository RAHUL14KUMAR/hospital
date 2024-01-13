import React from 'react'
import Head from '../../assets/header.jpg'
import { BsPencilFill } from 'react-icons/bs'
import Activity from './Activity'

function Header() {
  return (
    <div className='w-screen overflow-hidden shadow-sm'>
    <div className="m-8 p-5 bg-emerald-100 flex justify-between overflow-hidden flex flex-col sm:flex-col md:flex-row">

        <div>
            <div className='font-bold text-3xl p-4 w-fit font-baloo-bhai'>
                <p className='overflow-hidden tracking-widest'>Ask Your Question To Doctor
                    <br/>Right Now !!!
                </p>

                <p className='font-baloo-bhai overflow-hidden font-medium text-base mt-8'>Get Advice from Personal Doctor
                    <br/>At your own place  and At your time via chat and videos 
                </p>

                <button className='bg-emerald-500 hover:bg-emerald-800 text-white p-4 rounded-lg font-medium text-xl mt-4 flex'>Ask Your Question
                <BsPencilFill className='
                p-1 arrow-icon font-bold text-2xl text-white' />
                </button>
            </div>
        </div>

        <div className="md:w-1/5">
            <img src={Head} alt="no image found" className='text-center'/>
        </div>

    </div>
    <Activity/>
</div>
  )
}

export default Header
