import React,{useEffect,useState} from 'react'
import axios from 'axios'
import Style from './style';
import { BsSearch } from 'react-icons/bs';

function Test() {
    const [arr,setArr]=useState([]);
    const [input,setInput]=useState("");
    

    useEffect(()=>{
        async function get(){
            const a=await getAllTest();
            setArr(a.data);
        }
        get();
    },[])

    async function getAllTest(){
        const res=await axios.get(`${process.env.REACT_APP_SERVER_BASE}/consultant/test`);
        return res;
    }
  return (
    <>
        <div className="flex justify-end">
            <div className='flex ml-4 p-2'>
            <input type="text" plcaeholder="enter the test id to search" name={input} value={input} onChange={(e)=>setInput(e.target.value)} className="mx-2 w-fit bg-emerald-400 p-2 font-mono text-white focus:outline-none plcaeholder-text-black"  />
            <BsSearch className='text-black hover:border-4 m-2'/>
            </div>
        </div>
      <div>
        {arr.filter((item)=>{
            return input === ''
            ? item
            : item._id.includes(input);
        }).map((item)=>{
          return(
            <div key={item._id}>
              <Style item={item}/>
            </div>
          )
        })}
        {arr.length===0 && <h1 className="font-bold font-mono tracking-widest text-2xl"> No active users for the testing purpose</h1>}
      </div>
    </>
  )
}

export default Test
