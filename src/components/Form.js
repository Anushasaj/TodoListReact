// import React from "react";
import { Link } from "react-router-dom";

import React, { useState } from "react";
import "./Header.css";

import { useNavigate } from "react-router-dom";

const initial = {  id: "", taskNote: ""};
const Form = () => {

  const navigate = useNavigate();
  const [form, setForm] = useState(initial);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:9092/api/taskNote", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
     
      body: JSON.stringify(form),
    })
      .then((response) => console.log(response))
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
       navigate('/task/feed');
  };

  const { id,taskNote} = form;

  const handleChange = (e) => {
    setForm({...form });
  }

  const [category, setCategory] = React.useState('');


  return (
    <>
      
      <div>
      <h2>TodoList</h2>
      <br></br></div>
      
      <form onSubmit={handleSubmit}> 
        
        <input
          type="text" onChange={(e) => setForm({ ...form, taskNote: e.target.value })}
          placeholder="Enter a Todo.."
          className="task-input"
          value={taskNote}
          required
        />
        
        < button className="button-add" type="submit">
          
       
          Add
        
        </button>
      </form>
    </>
  );
};

export default Form;
