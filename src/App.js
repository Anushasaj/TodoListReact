
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
// import TodoList from "./components/TodoList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feed from "./components/Feed";
import "./App.css";

const App = () => {
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(initialState);
  const [editTodo, setEditTodo] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          {/* <Header />
          <h2>ghjk</h2> */}
        {/* </div> */}
      
        {/* <div>
          <Form 
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          editTodo={editTodo}
          />
  </div>*/}
        {/* <><div>
            <Feed
              todos={todos}
              setTodos={setTodos}
              setEditTodo={setEditTodo} /> */}
          </div><BrowserRouter>
              <Routes>
                <Route path="/" element={<Header />} />
                <Route path="/task">
                  <Route path="/task/header" element={<Form />} />
                  {/* <Route path="/task/todo" element={<TodoList />} /> */}
                  <Route path="/task/feed" element={<Feed />} />

                </Route>
              </Routes>
            </BrowserRouter>
      </div>
    // </div>
  );
};

export default App;
