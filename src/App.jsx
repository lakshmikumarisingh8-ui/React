export default function App(){

  const btn = [1,2,3,4,5,6,7,8,9,10];
  const item = ["apple","mango","guava","litchii","banana","grapes","orange","papaya","kiwi","watermelon"];
  return(
    <>
  <h1>Day6</h1>
  {btn.map((button,index)=>(
    <button key={index}>{button}</button>
  ))}
  <ul>
    {item.map((fruits,index)=>(
      <li key={index}>{fruits}</li>
    ))}
  </ul>
    </>
  )
}