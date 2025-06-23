import { BrowserRouter, Route, Routes } from "react-router-dom"
import Add from "./pages/Add"
import View from "./pages/View"
import Edit from "./pages/Edit"



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/add" element={<Add />} ></Route>
        <Route path="/" element={<View />}></Route>
        <Route path="/edit/:id" element={<Edit/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
