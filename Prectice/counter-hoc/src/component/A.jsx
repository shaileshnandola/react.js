import Counter from './Counter';
const A = (no,inc) => {
  return (
    <div>
      <h2>Counter A</h2>
      <h3>Count: {no}</h3>
      <button onClick={inc}>+</button>
    </div>
  );
};
let componentA = Counter(A)
export default componentA;
