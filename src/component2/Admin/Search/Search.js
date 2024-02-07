import React,{useState} from 'react'
import Card from './Card'
import { BsSearch } from 'react-icons/bs';

const doctor=[
  {id:1,name:"Aryan",education:"MBBS",age:37+"years",speciality:"Heart",solved:100+"+"},
  {id:2,name:"Rahul",education:"MBBS",age:37+"years",speciality:"Heart",solved:100+"+"},
  {id:3,name:"Vikash",education:"MBBS",age:37+"years",speciality:"Heart",solved:100+"+"},
  {id:4,name:"Rohit",education:"MBBS",age:37+"years",speciality:"Heart",solved:100+"+"},
  {id:5,name:"Dhruv",education:"MBBS",age:37+"years",speciality:"Heart",solved:100+"+"},
  {id:6,name:"Krishna",education:"MBBS",age:37+"years",speciality:"Heart",solved:100+"+"},
  {id:7,name:"Rohit",education:"MBBS",age:37+"years",speciality:"Heart",solved:100+"+"},
]

function Search() {
  const [arr,setArr]=useState(doctor);
  const [input,setInput]=useState("");

  return (
    <>
    <div className="flex justify-end">
        <div className='flex ml-4 p-2'>
        <input type="text" plcaeholder="Searching for" name={input} value={input} onChange={(e)=>setInput(e.target.value)} className="mx-2 w-fit bg-emerald-400 p-2 font-mono text-white focus:outline-none"  />
        <BsSearch className='text-black hover:border-4 m-2'/>
        </div>
    </div>
    <div className="grid sm:grid-cols md:grid-cols-2 lg:grid-cols-3">
      { arr.filter((item)=>{
            return input === ''
            ? item
            : item.name.includes(input);
        })
        .map((item)=>{
        return (
        <div className="m-2 overflow-hidden p-5 w-fit h-fit mx-auto md:m-2" key={item.id}>
        <Card name={item.name} education={item.education} age={item.age} speciality={item.speciality} solved={item.solved}
         />
        </div>
      )})}
    </div>
    </>
  )
}

export default Search
