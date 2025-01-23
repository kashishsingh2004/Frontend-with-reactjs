import React, { useState } from "react";
import "./Todo.css";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodolist] = useState([]);


  const data = () => {
    setTodolist([...todoList, todo]);   //with initial value add next given value
    console.log(todo);
    setTodo("")
  };

  const removeTodo=(index)=>{
     const updateTodo=[...todoList]
     const removed=updateTodo.splice(index,1)
     setTodolist(updateTodo)
  }
  
  return <>
      <div className="grid">
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Input"
        />
        <button onClick={data}>Add</button>
      </div>

      <ul>
        {todoList.map((item,index) => (
          <li key={index}>
            {index +" "+ item}
            <button onClick={()=>removeTodo(index)}>Delete</button>
          </li> 
        ))}
      </ul>
    </>
};

export default Todo;