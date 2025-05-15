import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState([{ fullName: "", email: "", salary: "" }]);

  const handleChange = (index, event) => {
    const { name, value } = event.target;
    const updatedRows = [...input];
    updatedRows[index][name] = value;
    setInput(updatedRows);
  };

  const addForm = () => {
    setInput([...input, { fullName: "", email: "", salary: "" }]);
  };

  const deleteForm = (i) => {
    if (window.confirm("Are you sure you want to remove this entry?")) {
      const updatedList = input.filter((_, index) => index !== i);
      setInput(updatedList);
    }
  };

  const handleSubmit = () => {
    for (let item of input) {
      if (!item.fullName || !item.email || !item.salary) {
        alert("Please fill all fields before submitting.");
        return;
      }
    }
    console.log(input);
    alert("Form is submitted");
    setInput([{ fullName: "", email: "", salary: "" }]);
  };

  return (
    <div className="container">
      <h2>Dynamic Form</h2>
      <table>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Salary</th>
            <th>
              <button className="add-btn" onClick={addForm}>+</button>
            </th>
          </tr>
        </thead>
        <tbody>
          {input.map((data, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  name="fullName"
                  value={data.fullName}
                  onChange={(e) => handleChange(index, e)}
                />
              </td>
              <td>
                <input
                  type="email"
                  name="email"
                  value={data.email}
                  onChange={(e) => handleChange(index, e)}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="salary"
                  value={data.salary}
                  onChange={(e) => handleChange(index, e)}
                />
              </td>
              <td>
                {index !== 0 && (
                  <button className="delete-btn" onClick={() => deleteForm(index)}>×</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="submit-btn" onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
