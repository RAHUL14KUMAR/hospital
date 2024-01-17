import React,{useState} from 'react'
import { MdOutlineDensityMedium } from "react-icons/md";
import { CiLogin } from "react-icons/ci";
import {motion} from 'framer-motion'
import {IoMdClose} from 'react-icons/io'
import { useNavigate } from 'react-router-dom';

import './Navbar.css'


function Navbar() {
    const navigate=useNavigate();
    const [toggle,setToogle]=useState(false);

    const login=(e)=>{
        e.preventDefault();
        navigate('/login');
    }
  return (
        <div className="flex items-center justify-between w-screen border-b-4 shadow-lg">
            <div className="m-2 font-medium sm:text-lg md:text-2xl md:tracking-widest text-green-600">
                <h1>HEALTH POINT <span className="text-rose-700 font-bold">+</span></h1>
            </div>

            <div className="p-0.1 hidden lg:inline-block">
                <button className="m-2 rounded-lg p-2 text-lg font-medium hover:bg-emerald-100 hover:text-emerald-950 m-1" onClick={()=>navigate('/play')}>About
                </button>
                <button className="m-2 rounded-lg p-2 text-lg font-medium hover:bg-emerald-100 hover:text-emerald-950">Careers</button>
                <button className="m-2 rounded-lg p-2 text-lg font-medium hover:bg-emerald-100 hover:text-emerald-950">Contact</button>
            </div>

            <div className="flex p-2">
                <button className="m-2 bg-emerald-100 px-2 py-2 text-lg font-mono md:px-6 flex rounded-lg" onClick={login}>Login <CiLogin className='mt-1
                p-1 arrow-icon font-bold text-2xl text-emerald-950'/> </button>

                <button className="p-0.1 m-2 bg-emerald-100 px-2 py-2 text-lg font-medium sm:inline-block lg:hidden md:px-6 rounded-lg" onClick={()=>setToogle((prev)=>!prev)}> <MdOutlineDensityMedium className='text-emerald-700'/></button>
                
                    {
                        toggle && 
                        <div className='modal bg-emerald-50'>
                            <motion.div whileInView={{x:[0,0]}} transition={{duration:0.85,ease:"easeInOut"}}>
                            <div>
                                <button className='rounded-lg p-2 text-lg font-medium hover:bg-emerald-100 text-emerald-950 m-4'>
                                <IoMdClose onClick={()=>setToogle((prev)=>!prev)} className='icon'/>
                                </button>
                            </div>
                            <div>
                            <button className="rounded-lg p-2 text-lg font-medium hover:bg-emerald-100 text-emerald-950 m-4" onClick={()=>navigate('/play')}>About</button>
                            </div>

                            </motion.div>
                        </div>
                    }

                
            </div>
        </div>

  )
}

export default Navbar
