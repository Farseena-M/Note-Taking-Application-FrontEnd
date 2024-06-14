import React, { useRef } from 'react'

function Sample() {
    const reff = useRef(null)
    const click = () =>{
        reff.current.focus()
    }
  return (
    <>
      <button onClick={click}>click</button>
      <input type="text" ref={reff}/>
    </>
  )
}

export default Sample


