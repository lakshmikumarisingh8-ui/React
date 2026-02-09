import { useState } from "react"

export default function App(){

  const[show, setShow] = useState(false);

  const handleclick = ()=>{
    setShow(!show);
  }

  return(
    <>
    <h1>Hello</h1>

    <button onClick={handleclick}>Submit</button>

    {show && (
      <>
      <h1>Hello guys</h1>
       <p>thank you for submitting this form</p>
      </>
    )}
    
    </>
  )
}