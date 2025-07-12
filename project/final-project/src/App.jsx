import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Login from "./pages/Login";
import Register from "./pages/Register"; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
