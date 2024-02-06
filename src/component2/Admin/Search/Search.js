import React,{useState} from 'react'
import {toast} from 'react-toastify'

function Announce() {
    const [announce,setAnnouncement]=useState('')

    const announcement=()=>{
        if(announce===''){
            toast.info("announcement cant be empty!!!")
            return;
        }
    }
  return (
    <>
    <div className="flex w-full justify-center bg-emerald-100">
        <div className="flex-col text-center border-2 border-emerald-900 bg-white">
            <h1 className="m-5 p-5 font-mono text-2xl font-bold tracking-widest">Announcement!!!</h1>
            <div className="my-4 mb-2">
                <textarea className="mx-auto bg-emerald-300 font-mono text-emerald-900 placeholder-emerald-900" placeholder="Announcement" name={announce} value={announce} onChange={(e)=>setAnnouncement(e.target.value)}></textarea>
            </div>
            <div>
                <button className="rounded-sm bg-emerald-300 p-2 font-mono text-emerald-900 hover:text-white mb-3" onClick={announcement}>Announce</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Announce
