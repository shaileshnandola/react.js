import { useState } from "react"

function App() {

  const [input, setInput] = useState({
    name: ``,
    email: ``
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
   const obj={
    ...input,
    [name]:value
   }
   setInput(obj)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(input)
    setInput(input);
  }

  return (
    <div align="center">
      <form onSubmit={handleSubmit}>
        <h2>Form</h2>
        Name:- <input onChange={handleChange} name="name" value={input.name} placeholder="Enter your name" />
        <br /><br />
        Email:- <input onChange={handleChange} name="email" value={input.email} placeholder="Enter your email" />
        <br /><br />
        <input type="submit" value="submit" />
      </form>
    </div>
  )
}

export default App
