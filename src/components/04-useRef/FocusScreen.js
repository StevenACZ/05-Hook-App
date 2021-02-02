import React, { useRef } from 'react'
import '../02-useEffect/effects.css'

const FocusScreen = () => {
  const inputRef = useRef()
  const inputRef1 = useRef()
  // console.log(ref)

  const handleClick = () => {
    inputRef.current.select();
    console.log(inputRef1.current.placeholder)
    console.log(inputRef.current.placeholder)
  }

  return (
    <div>
      <h1>Focus Screen</h1>
      <hr />
      <input
        ref={ inputRef }
        className="form-control"
        placeholder="Su nombre"
      />

      <input
        ref={ inputRef1 }
        className="form-control"
        placeholder="Su nombre"
      />

      <button
        className="btn btn-outline-primary mt-3"
        onClick={ handleClick }
      >
        Focus
      </button>
    </div>
  )
}

export default FocusScreen
