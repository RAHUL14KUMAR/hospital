import React from 'react'

function Card({userid,question}) {
  return (
    <div className=" bg-emerald-100">
      <div className="ml-2 w-64 h-fit flex-col bg-white p-2">
        <div className="text-center font-bold tracking-widest text-emerald-800"><span className="font-mono text-black">{question}</span>
        <br/>
        <div className="text-xs mt-2 ml-1 mr-1">Asked By-{userid}</div></div>

        <button className="w-32 cursor-pointer bg-cyan-500 p-2 text-center font-mono text-xl font-bold tracking-widest text-white hover:bg-cyan-600 ml-12">Answer</button>
      </div>
    </div>
  )
}

export default Card
