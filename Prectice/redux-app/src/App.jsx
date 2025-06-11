import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./redux/action/Counteraction";
import Add from "./pages/crud/Add";
import View from "./pages/crud/View";
import Edit from "./pages/crud/Edit";

function Home() {
  const no = useSelector((state) => state.cnt);
  const dispatch = useDispatch();

  return (
    <div align="center">
      <h1>Counter App</h1>
      <h2>Count: {no}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <br /><br />
      <Link to="/add">
        <button>add</button></Link>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/view" element={<View />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </Router>
  );
}

export default App;
