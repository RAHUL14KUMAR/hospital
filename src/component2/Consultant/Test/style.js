import React from 'react'
import './target.css'
import { FaUser } from 'react-icons/fa6'
import axios from 'axios';
import { toast } from 'react-toastify';

function Style({item}) {

  return (
    <div className="w-full flex-col p-5">
    <div className="mx-auto flex h-1/4 w-full justify-between border-2 border-green-500 p-4 bg-white dis">
        <div className="flex flex-col sm:flex-col md:flex-row">
        <div className="m-2 h-32 w-32 bg-emerald-300 mx-auto my-auto flex items-center justify-center sha">
        <FaUser className="text-4xl text-green-600" />
        </div>
        <div className="flex-col p-2 mar">
            <div className="font-mono font-bold tracking-widest">FirstName-{item.firstname}</div>
            <div className="font-mono font-bold tracking-widest">LastName-{item.lastname}</div>
            <div className="font-mono font-bold tracking-widest">PatientsOf-{item.patientsof}</div>
            <div className="font-mono font-bold tracking-widest">Phoneno.-{item.phonenumber}</div>
            <div className="font-mono font-bold tracking-widest">email-{item.email}</div>
        </div>
        </div>
        <div>
        <div className="grid gap-4">
            <button className="w-28 bg-green-300 p-2 font-mono tracking-widest text-white hover:bg-green-600 sha">DONE</button>
            <button className="w-28 bg-red-600 p-2 font-mono tracking-widest text-white hover:bg-red-700 sha">NOT DONE</button>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Style
