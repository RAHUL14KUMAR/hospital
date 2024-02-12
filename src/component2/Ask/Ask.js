import React,{useState,useEffect,useRef} from 'react'
import { io } from "socket.io-client";
import { toast } from 'react-toastify';


const socket = io.connect(`${process.env.REACT_APP_SOCKET_BASE_URL}`);

function Ask() {
    const [question,setQuestion]=useState("");
    const resultref=useRef();


    const user=JSON.parse(localStorage.getItem("user"));
    const role=user.role;
    const id=user.id;
    const room=user.id;
    const email=user.email


    useEffect(()=>{
        socket.emit("userConnected",{id});
    },[])

    const sendQuestion=(e)=>{
        e.preventDefault();

        if(question===""){
            toast.info("you can't ask empty question !!!");
            return;
        }
        toast.warning("your question has been send to doctors")
        socket.emit("questionAsk",{question,id})
        resultref.current.innerText="waiting for the doctor to response ...."
    }
  return (
    <div className="flex h-screen items-center justify-center overflow-hidden">
        <div className="flex-col border-4 border-black text-center p-4" ref={resultref}>
            <div className="my-4 mb-2">
                <div className="font-mono text-2xl mb-12">ASK YOUR DOUBTS FREELY!!!</div>
                <textarea className="mx-auto min-h-32 bg-emerald-300 font-mono text-emerald-900 placeholder-emerald-900" placeholder="ASK YOUR QUERY!!!" name={question} value={question}
                    onChange={(e)=>setQuestion(e.target.value)}
                ></textarea>
                </div>
                <div>
                <button className="mb-3 rounded-lg bg-cyan-300 p-2 font-mono text-black hover:bg-cyan-400" onClick={sendQuestion}>ASK QUERY</button>
                </div>
        </div>
    </div>  
  )
}

export default Ask
