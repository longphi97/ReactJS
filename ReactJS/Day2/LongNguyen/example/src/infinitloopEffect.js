import React from 'react'
import { useState, useEffect}  from 'react'

function InfinitloopEffect() {

    const [ count, setCount ] = useState(1);

    useEffect(() => { 
        setCount(count+1)
        console.log(setCount)
    })
  return (
    <div>
        <button onClick={() => setCount}>Render</button>
    </div>
  )
}

export default InfinitloopEffect;