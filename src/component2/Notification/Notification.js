import React,{useEffect,useState} from 'react'
import { io } from "socket.io-client";
import Card from './card'

const socket = io.connect(`${process.env.REACT_APP_SOCKET_BASE_URL}`);

function Notification() {
    const [workerS,setWorkerS]=useState([]);
    const [admin,setAdmin]=useState([]);

    let user=JSON.parse(localStorage.getItem("user"))
    let role=user.role;
    let id=user.id;

    useEffect(()=>{
        if(role==="ADMIN"){
            socket.emit("adminConnected",{id});

            socket.on("querySEnd",async(payload)=>{

                console.log("query",payload)
    
                const announce=payload.query;
                console.log("announce",announce);
        
                setAdmin([...admin,announce]);   
            })
          }
    
          if(role==="CONSULTANT"){
            socket.emit("consultantConnected",{id});

            socket.on("new announcement",async(payload)=>{
                console.log("announce",payload)
                const announce=payload.announce;
                console.log("announce",announce);
        
                setWorkerS([...workerS,announce]);   
            })
          }
    
    })

    console.log(workerS);
    console.log("query",admin);


  return (
    <div className="grid grid-cols">
      {workerS.map((item)=>{
        return (
        <div className="m-1 p-1">
        <Card message={item}
         />
        </div>
      )})}
    </div>
  )
}

export default Notification
