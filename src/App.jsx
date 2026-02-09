import { useState } from "react"

export default function App(){


  const[name, setName] = useState("");
  const[email,setEmail] = useState("");

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(name);
    console.log(email);
  }
  return(
    <>
    <h1>signup</h1>
    <form>
      <label>Name</label>
      <div>
        <input
        type="text"
        placeholder="enter your name"
        value={name}
        onChange={(e)=>setName(e.target.value)}
        ></input>
      </div>
      <br></br>
      <label>Email</label>
      <div>
        <input
        type="email"
        placeholder="enter your email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        >
        </input>
      </div>
      <br></br>
      <button type="submit" onClick={handleSubmit}>Submit</button>
    </form>
    </>
  )
}