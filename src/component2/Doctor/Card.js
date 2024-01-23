import React from 'react'
// import {useNavigate} from 'react-router-dom'

function Card({name,education,age,speciality,solved,open,setOpen,id}) {
  const handleProfileClick = (id) => {
    // Update the URL to navigate to the user profile route
    window.location.href = `/play/${id}`;
  };
  return (
    <div className=" bg-emerald-100">
      <div className="ml-2 w-fit h-fit flex-col bg-white p-2">
        <div className="text-center font-bold tracking-widest text-emerald-800">Name: <span className="font-mono text-black">{name}</span></div>

        <div className="text-center font-bold tracking-widest text-emerald-800">Education: <span className="font-mono text-black">{education}</span></div>

        <div className="text-center font-bold tracking-widest text-emerald-800">Age: <span className="font-mono text-black">{age}</span></div>

        <div className="text-center font-bold tracking-widest text-emerald-800">Speciality: <span className="font-mono text-black">{speciality}</span></div>

        <div className="text-center font-bold tracking-widest text-emerald-800">Solved: <span className="font-mono text-black">{solved}</span></div>

        <button className="w-full cursor-pointer bg-emerald-500 p-2 text-center font-mono text-xl font-bold tracking-widest text-white hover:bg-emerald-600">More Details</button>
      </div>
    </div>
  )
}

export default Card
