import React from 'react'
import { FaPrescriptionBottleAlt } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { FaAmbulance } from "react-icons/fa";
import { GiTestTubes } from "react-icons/gi";
import { MdOutlineAddHomeWork } from "react-icons/md";
import { BsFillTelephonePlusFill } from "react-icons/bs";
import {motion} from 'framer-motion'
import './style.css'

function Activity() {
  return (
    <div className="max-w-screen flex flex-col sm:flex-col lg:flex-row xl:flex-row items-center justify-center bg-emerald-50 text-center m-8 p-5">
        <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row activity">
            <motion.div whileHover={{scale:1.1}} className="m-5 flex flex-col items-center text-balance rounded-lg bg-white p-5 shadow-lg cursor-pointer">
                <div className="flex h-20 w-20 items-center justify-center bg-emerald-200">
                    <FaUserDoctor className="text-3xl text-emerald-950" />
                </div>
                <h1 className="font-semibold">
                    Doctor <br />
                    Appointment
                </h1>
            </motion.div>

            <motion.div whileHover={{scale:1.1}}  className="m-5 flex flex-col items-center text-balance rounded-lg bg-white p-5 shadow-lg cursor-pointer">
                <div className="flex h-20 w-20 items-center justify-center bg-rose-200">
                    <FaAmbulance className="text-3xl text-rose-950" />
                </div>
                <h1 className="font-semibold">Call
                    <br/>Ambulance
                </h1>
            </motion.div>

            <motion.div  whileHover={{scale:1.1}}  className="m-5 flex flex-col items-center text-balance rounded-lg bg-white p-5 shadow-lg cursor-pointer">
                <div className="flex h-20 w-20 items-center justify-center bg-orange-200">
                    <GiTestTubes className="text-3xl text-orange-950" />
                </div>
                <h1 className="font-semibold">
                    Test <br />
                    Appointment
                </h1>
            </motion.div>
        </div>

        <div className="flex flex-col sm:flex-col  md:flex-row lg:flex-row xl:flex-row activity">
            <motion.div  whileHover={{scale:1.1}}  className="m-5 flex flex-col items-center text-balance rounded-lg bg-white p-5 shadow-lg cursor-pointer">
                <div className="flex h-20 w-20 items-center justify-center bg-pink-200">
                    <FaPrescriptionBottleAlt className="text-3xl text-pink-950" />
                </div>
                <h1 className="font-semibold">
                    Get <br />
                    Prescribition
                </h1>
            </motion.div>

            <motion.div  whileHover={{scale:1.1}}  className="m-5 flex flex-col items-center text-balance rounded-lg bg-white p-5 shadow-lg">
                <div className="flex h-20 w-20 items-center justify-center bg-purple-200 cursor-pointer">
                    <MdOutlineAddHomeWork className="text-3xl text-purple-950" />
                </div>
                <h1 className="font-semibold">Home
                    <br/>Doctor
                </h1>
            </motion.div>

            <motion.div  whileHover={{scale:1.1}} className="m-5 flex flex-col items-center text-balance rounded-lg bg-white p-5 shadow-lg cursor-pointer">
                <div className="flex h-20 w-20 items-center justify-center bg-yellow-100">
                    <BsFillTelephonePlusFill className="text-3xl text-yellow-950" />
                </div>
                <h1 className="font-semibold">
                    Telemedicine <br />
                    Communication
                </h1>
            </motion.div>
        </div>
    </div>
  )
}

export default Activity
