import { useState } from "react"

function App() {

  const [input, setInput] = useState([
    { fullName: '', email: '', salary: '' }
  ])

  const handleChange = (index, event) => {
    const { name, value } = event.target;
    const updatedRows = [...input];
    updatedRows[index][name] = value;
    setInput(updatedRows);
  };

  const addform = () => {
    let newfield = { fullName: '', email: '', salary: '' };
    setInput([...input, newfield])
  }

  const deleteRform = (i) => {
    let rmvbtn = input.filter((val, index) => {
      return index != i;
    })
    alert("form is remove")
    setInput(rmvbtn)
  }
  const handleSubmit = () => {
    console.log(input);
    setInput(input)
    alert("fom is submited")
    setInput([{ fullName: '', email: '', salary: '' }]);

  };
  return (
    <>
      <div align="center">
        <h2>Dynamic form</h2>
        <table>
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Email Address</th>
              <th>Salary</th>
              <th>
                <button onClick={() => addform()}>+</button>&nbsp; &nbsp;
              </th>
            </tr>
          </thead>
          <tbody>
            {
              input.map((data, index) => {
                return (
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
                      <button className="delete-btn" onClick={() => deleteRform(index)}>X</button>
                    </td>

                  </tr>
                )
              })
            }
          </tbody>
        </table>

        <button type="button" onClick={handleSubmit}>Submit</button>

      </div>
    </>
  )
}

export default App
