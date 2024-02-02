import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Style from './style';

function Applicants() {
    const [arr,setArr]=useState([]);
    const token=JSON.parse(localStorage.getItem("user")).token

    useEffect(()=>{
        async function get(){
            const res=await getAllApplicants();
            setArr(res.data.careers);
        }
        get();

    },[])
    async function getAllApplicants(){
        let config={
            method:"get",
            maxBodyLength: Infinity,
            url: `${process.env.REACT_APP_SERVER_BASE}/admin/getAll`,
            headers: { 
              'Content-Type': 'application/json', 
              'Authorization': `Bearer ${token}`
            },

        }
        const res=await axios.request(config);
        return res;
    }
  return (
    <>
      <div>
        {arr?.map((item)=>{
          return(
            <div key={item._id}>
              <Style item={item}/>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Applicants
