import { useEffect, useState } from "react"

export default function App(){

  const[count, setCount] = useState(0);
  const[start,setStart] = useState(false);

  const handleClick = ()=>{
    setStart(true);
  }

  useEffect(()=>{

if(!start) return;

    const timer = setInterval(()=>{
      setCount(count => count+1);
    },1000)

    return ()=> clearInterval(timer);
  },[start])

  return(
    <>
    <h1>Count {count} </h1>
    <button onClick={handleClick}>Click me</button>
    </>
  )
}