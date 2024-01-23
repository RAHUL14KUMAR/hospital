import React,{useState} from 'react'
import Card from './Card'
// import './Doctor'

const doctor=[
  {id:1,name:"Aryan",education:"MBBS",age:37+"years",speciality:"Heart",solved:100+"+"},
  {id:2,name:"Rahul",education:"MBBS",age:37+"years",speciality:"Heart",solved:100+"+"},
  {id:3,name:"Vikash",education:"MBBS",age:37+"years",speciality:"Heart",solved:100+"+"},
  {id:4,name:"Rohit",education:"MBBS",age:37+"years",speciality:"Heart",solved:100+"+"},
  {id:5,name:"Dhruv",education:"MBBS",age:37+"years",speciality:"Heart",solved:100+"+"},
  {id:6,name:"Krishna",education:"MBBS",age:37+"years",speciality:"Heart",solved:100+"+"},
  {id:7,name:"Rohit",education:"MBBS",age:37+"years",speciality:"Heart",solved:100+"+"},
]

function Doctors() {
  const [arr,setArr]=useState(doctor);
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 h-screen overflow-y-auto">
      {arr.map((item)=>{
        return (
        <div className="m-2 overflow-hidden" key={item.id}>
        <Card name={item.name} education={item.education} age={item.age} speciality={item.speciality} solved={item.solved} id={1}
         />
        </div>
      )})}
    </div>
  )
}

export default Doctors
