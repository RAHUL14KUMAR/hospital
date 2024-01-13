import React from 'react'

import './style.css';

import Swiper from './swipers';

function Testinomials() {
  return (
    <>
        <div className="flex md:flex-row lg:flex-row bg-emerald-50 w-screen justify-evenly p-10 swipe">
            <div className="font-baloo-bhai font- bold text-2xl overflow-y-hidden">
                <h1 className='overflow-hidden'>We belive in to make<br/>
                    <span className='text-emerald-800 overflow-hidden text-4xl'>world's healthy</span>
                </h1>

                <p className='overflow-hidden'> Are you?</p>
                <br/>
                <p className='overflow-hidden'> let join hands and fight for<p className='text-4xl text-emerald-800 overflow-hidden'>Healthy life !!!</p></p>
            </div>
            <div>
                <Swiper/>
            </div>
        </div>
    </>
  )
}

export default Testinomials
