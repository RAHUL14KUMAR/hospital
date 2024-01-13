import React from 'react'
import './style.css'
import {motion} from "framer-motion"

import { BsDiscord, BsGithub, BsLinkedin } from "react-icons/bs";

function Footer() {
  return (
    <div className=" max-w-screen flex flex-col bg-emerald-100 m-5">
    <div className="flex md:justify-center md:items-center w-screen p-2">
        <div className=" md:w-1/2 w-screen m-5">
            <h1 className="text-xl font-bold  md:text-2xl text-emerald-900 underline md:text-center font-baloo-bhai tracking-widest overflow-hidden">HEALTH POINT</h1>
            <p className="font-semibold mt-5 text-black-700 font-baloo-bhai tracking-wider md:text-center overflow-hidden">Health Point is a comprehensive system that empowers pateints and doctor to create healthy user relationship across various platform and devices</p>
        </div>
    </div>

  <hr className='mt-10 border-slate-700'/>

  <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row justify-evenly mt-14 p-2">
    <ul className='m-2 overflow-hidden'>
      <li className="text-lg font-bold p-1 text-emerald-900 font-baloo-bhai tracking-widest overflow-hidden">Resources</li>
      <motion.li whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}className="text-sm font-semibold text-black-600 p-1 hover:text-emerald-700 font-baloo-bhai overflow-hidden">Template</motion.li>
      <motion.li whileHover={{ scale: 1.05}}
      transition={{ duration: 0.3 }}className="text-sm font-semibold text-black-600 p-1 hover:text-emerald-700 font-baloo-bhai overflow-hidden">Landing Pages</motion.li>
      <motion.li whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }} className="text-sm font-semibold text-black-600 p-1 hover:text-emerald-700 font-baloo-bhai overflow-hidden">Documentation</motion.li>
      <motion.li whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}className="text-sm font-semibold text-black-600 p-1 hover:text-emerald-700 font-baloo-bhai overflow-hidden">library</motion.li>
    </ul>
    <ul className="m-2 overflow-hidden">
      <li className="text-lg font-bold p-1 font-baloo-bhai text-emerald-900 overflow-hidden tracking-widest">Legal</li>
      <motion.li whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}className="text-sm font-semibold text-black-600 p-1 hover:text-emerald-700 font-baloo-bhai overflow-hidden">Privacy Policy</motion.li>
      <motion.li whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }} className="text-sm font-semibold text-black-600 p-1 hover:text-emerald-700 font-baloo-bhai overflow-hidden">Terms & Conditions</motion.li>
      <motion.li whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}className="text-sm font-semibold text-black-600 p-1 hover:text-emerald-700 font-baloo-bhai overflow-hidden">Disclaimer</motion.li>
      <motion.li whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}className="text-sm font-semibold text-black-600 p-1 hover:text-emerald-700 font-baloo-bhai overflow-hidden">Affailate Programming</motion.li>
    </ul>
    <ul className="m-2 overflow-hidden">
      <li className="text-lg text-emerald-900 tracking-widest font-bold p-1 font-baloo-bhai overflow-hidden">Support</li>
      <motion.li whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}className="text-sm font-semibold text-black-600 p-1 hover:text-emerald-700 font-baloo-bhai overflow-hidden">Help Center</motion.li>
      <motion.li whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}className="text-sm font-semibold text-black-600 p-1 hover:text-emerald-700 font-baloo-bhai overflow-hidden">Raise Ticket</motion.li>
      <motion.li whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}className="text-sm font-semibold text-black-600 p-1 hover:text-emerald-700 font-baloo-bhai overflow-hidden">Report</motion.li>
      <motion.li whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}className="text-sm font-semibold text-black-600 p-1 hover:text-emerald-700 font-baloo-bhai overflow-hidden">Refund</motion.li>
    </ul>
    </div>
    
    <hr className='mt-10 border-slate-700'/>

        <div className="flex justify-center items-center w-screen">
            <div className="m-4">
                <div className='flex place-content-center'>
                    <motion.div whileHover={{translateY:-5}} transition={{ duration: 0.3 }} className='m-2 text-4xl rounded-3xl p-2 '>
                    <BsGithub className=' text-emerald-900'/>
                    </motion.div>
                    <motion.div whileHover={{translateY:-5}} transition={{ duration: 0.3 }}  className='m-2 text-4xl  rounded-3xl p-2'>
                    <BsLinkedin className=' text-emerald-900'/>
                    </motion.div>
                    <motion.div whileHover={{translateY:-5}} transition={{ duration: 0.3 }}  className='m-2 text-4xl  rounded-3xl p-2'>
                    <BsDiscord className=' text-emerald-900'/>
                    </motion.div>
                </div>
            
                <p className="font-semibold mt-5 text-black-700 text-center font-baloo-bhai overflow-hidden mr-5">© 2023 Health point + Rights Reserved.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
