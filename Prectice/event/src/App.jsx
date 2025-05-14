import React, { useEffect, useState } from 'react';
import { category, product } from './data';

const App = () => {
  const [record, setRecord] = useState([]);

  const filterdata = (title) => {
    if (title === "All") {
      setRecord(product);
    } else {
      const data = product.filter((p) => p.category === title);
      setRecord(data);
    }
  };

  useEffect(() => {
    setRecord(product);
  }, []);

  return (
    <div align="center">
      <h1>Filter Data</h1>
      <div>
        <button onClick={() => filterdata("All")}>All</button>
        {
          category.map((c, index) => (
            <button key={index} onClick={() => filterdata(c.title)}>
              {c.title}
            </button>
          ))
        }
      </div>
      <h2>All Products</h2>
      <table border={1} cellPadding={10}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {
            record.map((r, i) => (
              <tr key={i}>
                <td>{r.id}</td>
                <td>{r.name}</td>
                <td>{r.category}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default App;
