import React,{useState} from 'react'
import Card from './Card'

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
    <div className="grid sm:grid-cols md:grid-cols-2 lg:grid-cols-3 h-full">
      {arr.map((item)=>{
        return (
        <div className="m-2 overflow-hidden p-5 w-fit h-fit gap-8 mx-auto md:m-2" key={item.id}>
        <Card name={item.name} education={item.education} age={item.age} speciality={item.speciality} solved={item.solved}
         />
        </div>
      )})}
    </div>
  )
}

export default Doctors
