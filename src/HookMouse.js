import React, {useState, useEffect} from 'react'

export default function HookMouse(){
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const [display, setDisplay] = useState(true)

  function showCoordinates (e) {
      setX(e.clientX)
      setY(e.clientY)
    }

  useEffect(() => {
    console.log("useEffect called")
    window.addEventListener('mousemove', showCoordinates)

    return() =>{
      window.removeEventListener('mousemove', showCoordinates)
    }
  }, [])

  return(<>
  <button onClick={()=>setDisplay(!display)}>toggle coordinateDisplay</button>
  {
    display && <div>
      <h4>Hooks - X: {x}</h4>
      <h4>Hooks - Y: {y}</h4>
    </div>
  }
  </>)
  
}

