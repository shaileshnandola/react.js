import { useRef } from "react";

function App() {
  const name = useRef("");
  const age = useRef("");
  const contact = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", name.current.value);
    console.log("Age:", age.current.value);
    console.log("Contact:", contact.current.value);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <table align="center" border={1} cellPadding={10}>
          <tbody>
            <tr>
              <td>Name:</td>
              <td><input type="text" ref={name} required /></td>
            </tr>
            <tr>
              <td>Age:</td>
              <td><input type="number" ref={age} required /></td>
            </tr>
            <tr>
              <td>Contact:</td>
              <td><input type="tel" ref={contact} required /></td>
            </tr>
            <tr>
              <td colSpan={2}>
                <button type="submit">Submit</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default App;
