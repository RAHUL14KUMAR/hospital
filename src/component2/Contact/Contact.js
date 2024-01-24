import React from 'react'
import { BsLinkedin, BsMailbox2, BsPhoneFill } from 'react-icons/bs'
import {motion} from 'framer-motion'
import { TbBrandGoogleMaps } from 'react-icons/tb'

function Contact() {
  return (
    <div className="my-auto bg-emerald-100 p-5 h-screen">
        <div className="my-12 flex flex-col p-5 md:flex-row justify-evenly">
            <motion.a href="agrawal.r1412@gmail.com" target='_blank' whileHover={{scale:1.2}} className="cursor-pointer m-5 mx-auto flex-col items-center justify-center bg-white p-5 text-center shadow-2xl">
                <div className="text-embg-emerald-900 mx-auto my-auto flex h-24 w-24 items-center justify-center bg-emerald-200 font-bold">
                    <BsMailbox2 className="text-4xl font-bold text-emerald-900"/>
                </div>

                <div className="mx-auto my-auto mt-5 flex w-fit flex-col items-center justify-center font-bold tracking-widest text-emerald-900">EMAIL ME</div>
            </motion.a>

            <motion.div whileHover={{scale:1.2}} className="cursor-pointer m-5 mx-auto flex-col items-center justify-center bg-white p-5 text-center shadow-2xl">
                <div className="text-embg-emerald-900 mx-auto my-auto flex h-24 w-24 items-center justify-center bg-emerald-200 font-bold">
                    <BsPhoneFill className="text-4xl font-bold text-emerald-900"/>
                </div>

                <div className="mx-auto my-auto mt-5 flex w-fit flex-col items-center justify-center font-bold tracking-widest text-emerald-900">CALL ME</div>
            </motion.div>
        </div>

        <div className="md:   my-12 flex flex-col p-5 md:flex-row">
            <motion.div whileHover={{scale:1.2}} className="cursor-pointer m-5 mx-auto flex-col items-center justify-center bg-white p-5 text-center shadow-2xl">
                <div className="text-embg-emerald-900 mx-auto my-auto flex h-24 w-24 items-center justify-center bg-emerald-200 font-bold">
                    <BsLinkedin className="text-4xl font-bold text-emerald-900"/>
                </div>

                <div className="mx-auto my-auto mt-5 flex w-fit flex-col items-center justify-center font-bold tracking-widest text-emerald-900">LINKED IN</div>
            </motion.div>

            <motion.div whileHover={{scale:1.2}} className="cursor-pointer m-5 mx-auto flex-col items-center justify-center bg-white p-5 text-center shadow-2xl">
                <div className="text-embg-emerald-900 mx-auto my-auto flex h-24 w-24 items-center justify-center bg-emerald-200 font-bold">
                    <TbBrandGoogleMaps className="font-bold text-4xl text-emerald-900"/>
                </div>

                <div className="mx-auto my-auto mt-5 flex w-fit items-center justify-center font-bold tracking-widest text-emerald-900">GOOGLE MAP</div>
            </motion.div>
        </div>
    </div>
  )
}

export default Contact
