import React, { useContext } from 'react';
import { CounterContext } from '../context/Contextprovider';

const Counter = () => {
    const { no, increment, decrement } = useContext(CounterContext);

    return (
        <div align="center">
            <h1>Counter App</h1>
            <h3>count: {no}</h3>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    );
};

export default Counter;
