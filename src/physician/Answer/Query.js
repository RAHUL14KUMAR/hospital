import React,{useEffect,useState} from 'react'
import { io } from "socket.io-client";
import Card from './Card'

const socket = io.connect(`${process.env.REACT_APP_SOCKET_BASE_URL}`);


function Query() {
    const [que,setQue]=useState([]);
    const user=JSON.parse(localStorage.getItem("user"));
    const doctor_id=user.id

    useEffect(()=>{

      socket.emit("doctorOnline",{doctor_id})

      socket.on("questionAvailable",async(payload)=>{
        const userId=payload.user;
        const question=payload.question;
        setQue([...que,{userId,question}]);
      })
    })
    console.log(que);
  return (
    <div className="grid sm:grid-cols md:grid-cols-2 lg:grid-cols-3 h-full">
    {que.map((item)=>{
      return (
        <div className="m-2 bg-emerald-200 overflow-hidden p-5 w-fit h-fit gap-8 mx-auto md:m-2" key={item.userId}>
        <Card userid={item.userId} question={item.question}
        />
        </div>
      )})}
      {
        que.length===0 && <div className='font-mono text-2xl text-center'>USER DOEST HAVE ANY QUERY RIGHT NOW!!!</div>
      }
    </div>
  )
}

export default Query
