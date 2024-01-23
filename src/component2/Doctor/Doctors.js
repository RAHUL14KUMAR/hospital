import React,{useState} from 'react'
import Card from './Card'
// import './Doctor'

const doctor=[
  {name:"Aryan",education:"MBBS",age:37+"years",speciality:"Heart",solved:100+"+"},
  {name:"Rahul",education:"MBBS",age:37+"years",speciality:"Heart",solved:100+"+"},
  {name:"Vikash",education:"MBBS",age:37+"years",speciality:"Heart",solved:100+"+"},
  {name:"Rohit",education:"MBBS",age:37+"years",speciality:"Heart",solved:100+"+"},
  {name:"Dhruv",education:"MBBS",age:37+"years",speciality:"Heart",solved:100+"+"},
  {name:"Krishna",education:"MBBS",age:37+"years",speciality:"Heart",solved:100+"+"},
  {name:"Rohit",education:"MBBS",age:37+"years",speciality:"Heart",solved:100+"+"},
]

function Doctors() {
  const [arr,setArr]=useState(doctor);
  return (
    <div class="grid md:grid-cols-2 lg:grid-cols-3 h-screen overflow-y-auto">
      {arr.map((item)=>{
        return (
        <div class="m-2 overflow-hidden">
        <Card name={item.name} education={item.education} age={item.age} speciality={item.speciality} solved={item.solved} id={1} />
        </div>
      )})}
    </div>
  )
}

export default Doctors
