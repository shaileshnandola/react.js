import React, { useState } from 'react';

const Counter = (Wrappedcomponent) => {
  const [no, setNo] = useState(0);


  return () => {
    const handleIncrement = () => setNo(no + 1);

    return (
      <div>
        <h2>Counter</h2>
        <h3>Count: {no}</h3>
        <button onClick={handleIncrement(inc)}>+</button>
      </div>
    );
  };
}

export default Counter;
