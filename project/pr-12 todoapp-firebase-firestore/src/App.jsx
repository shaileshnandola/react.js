import React, { useState, useEffect } from "react";
import { collection, addDoc, getDocs, deleteDoc, doc, getFirestore, } from "firebase/firestore";
import { app } from "../firebaseconfig";
import "./App.css";

const db = getFirestore(app);

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const todo = collection(db, "todos");

  const getTodos = async () => {
    const data = await getDocs(todo);
    setTodos(data.docs.map((doc) => ({
       id: doc.id ,
      ...doc.data() 
    })));
  };

  useEffect(() => {
    getTodos();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(todo, { task });
    setTask("");
    getTodos();
  };

  const removeTodo = async (id) => {
    const todoDoc = doc(db, "todos", id);
    await deleteDoc(todoDoc);
    getTodos();
  };

  const clearAll = async () => {
  const data = await getDocs(todo);
  data.forEach(async (item) => {
  await deleteDoc(doc(db, "todos", item.id));
  });
  getTodos();
};


  return (
    <div className="app">
      <h1>Todo List</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a Todo..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      <div className="todo-list">
        {
          todos.map((item) => (
            <div key={item.id} className="todo-item">
              <p>{item.task}</p>
              <button onClick={() => removeTodo(item.id)}>Remove</button>
            </div>
          ))}
      </div>

      {todos.length > 0 && (
        <button className="clear-btn" onClick={clearAll}>
          Clear List
        </button>
      )}
    </div>
  );
}

export default App;
