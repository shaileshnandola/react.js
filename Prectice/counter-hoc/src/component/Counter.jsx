import React, { useState } from 'react';

const Counter = (Wrappedcomponent) => {
  return () => {
    const [no, setNo] = useState(0);

    const [user,setUser]=useState([
      {name:"John",age:25},
      {name:"Anna",age:30},
      {name:"Peter",age:35}
      
    ])
    const[alluser,setAllUser]=useState([])

    const showuser=()=>{
      setAllUser(user)
    }

    const Increment = () =>
      setNo(no + 1);

    const Decrement = () =>
      setNo(no - 1);

    return (
      <div>
        <Wrappedcomponent cnt={no}
          inc={Increment}
          dec={Decrement} 
          showuserbtn={showuser}
          alluser={alluser}
        />
      </div>
    );
  };
}

export default Counter;
