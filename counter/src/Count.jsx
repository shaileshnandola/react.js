import React from 'react'

const Count = ({ counts,plus,minus,reset}) => {
  return (
    <div>
      <h1>counter app</h1>
      <p>count: { counts}</p>
      <button onClick={()=>plus()}>+</button>
      <button disabled={counts==0} onClick={()=>minus()}>-</button>
      <button onClick={()=>reset()}>reset</button>
    </div>
  )
}

export default Count
