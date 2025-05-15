import Counter from './Counter';
const B = (no,inc) => {
    return (
        <div>
            <h2>Counter B</h2>
            <h3>Count: {no}</h3>
            <button onClick={inc}>+</button>
        </div>
    );
};
let componentB=Counter(B)
export default componentB;
