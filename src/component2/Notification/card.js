import React from 'react'

function Card({message}) {
  return (
    <div class="bg-white w-fit h-fit">
      <div className="w-fit h-fit flex-col bg-emerald-200 p-2">
        <div className="font-bold tracking-widest text-emerald-800">{message}</div>
      </div>
    </div>
  )
}

export default Card
