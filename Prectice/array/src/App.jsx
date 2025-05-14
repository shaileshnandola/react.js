function App() {
  let arr = [
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Jane', age: 30 },
    { id: 3, name: 'Bob', age: 35 }
  ]

  return (
    <div>
      <table align="center" border={1}>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>age</th>
          </tr>
        </thead>
        <tbody>
          {
            arr.map(({ id, name, age }) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{age}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default App;
