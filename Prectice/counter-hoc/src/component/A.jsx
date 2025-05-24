import Counter from './Counter';
const componentA = ({ cnt, inc, dec, showuserbtn, alluser }) => {

  return (
    <div align="center">
      <h2>A component</h2>
      <h3>Count: {cnt}</h3>
      <button onClick={() => inc()}>+</button>
      <button onClick={() => dec()}>-</button>
      <button onClick={() => showuserbtn()}>showuser</button>

      <hr />
      {
        alluser.length == 0 ? (
          <p>record not found</p>
        ):(
            alluser.map((item, index) => {
              return (
                <div key={index}>
                  <p>Name:-{item.name}</p>
                  <p>Age:-{item.age}</p>
                </div>
              )
            })
          )
      }
    </div>
  );
};
let A = Counter(componentA)
export default A;
