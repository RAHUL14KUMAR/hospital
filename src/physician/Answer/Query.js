import React,{useEffect,useState} from 'react'
import { io } from "socket.io-client";

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


      socket.on("removeQuestion", async (payload) => {
        const userId = payload.userId;
        const question=payload.question;
  
        setQue([
          ...que.filter((questionObj) => {
            if (questionObj.userId === userId &&questionObj.question===question ) {
              return false;
            }
            return true;
          }),
        ]);
      });

    })

    const answer=(e,question,userId)=>{
      e.preventDefault();
      socket.emit("questionAccepted",{question,userId,doctor_id});
    }

  return (
    <div className="grid sm:grid-cols md:grid-cols-2 lg:grid-cols-3 h-full">
    {que.map((item)=>{
      return (
        <div className="m-2 bg-emerald-200 overflow-hidden p-5 w-fit h-fit gap-8 mx-auto md:m-2" key={Math.random()}>
        
        <div className=" bg-emerald-100">
          <div className="ml-2 w-64 h-fit flex-col bg-white p-2">
            <div className="text-center font-bold tracking-widest text-emerald-800"><span className="font-mono text-black">{item.question}</span>
            <br/>
            <div className="text-xs mt-2 ml-1 mr-1">Asked By-{item.userId}</div>
            </div>

            <button className="w-32 cursor-pointer bg-cyan-500 p-2 text-center font-mono text-xl font-bold tracking-widest text-white hover:bg-cyan-600 ml-12"
              onClick={(e)=>answer(e,item.question,item.userId)}
            >Answer</button>
          </div>
        </div>

        </div>
      )})}
      {
        que.length===0 && <div className='font-mono text-2xl text-center'>USER DOEST HAVE ANY QUERY RIGHT NOW!!!</div>
      }
    </div>
  )
}

export default Query
