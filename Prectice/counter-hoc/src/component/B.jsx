import Counter from './Counter';
const componentB = ({ cnt, inc, dec }) => {
    return (
        <div align="center">
            <h2>B component</h2>
            <h3>Count: {cnt}</h3>
            <button onClick={() => inc()}>+</button>
            <button onClick={() => dec()}>-</button>

        </div>
    );
};
let B = Counter(componentB)
export default B;
