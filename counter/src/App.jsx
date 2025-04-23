import Count from './Count';
import { useState } from "react";
function App() {
 
let [count,setCount] = useState(0);
const plus=()=>{
  setCount(count+1)
  
}
const minus=()=>{
  setCount(count-1)
  
}
const reset=()=>{
  setCount(0)
  
}
  return (
    <div>
      <Count counts={count} plus={plus} minus={minus} reset={reset} />
    </div>
  )
}

export default App
