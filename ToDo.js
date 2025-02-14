import React from 'react';
import './ToDo.css';

function ToDo({ todo, index, removeTodo }) {
  return (
    <div className="todo">
      {todo.text}
      <button onClick={() => removeTodo(index)}>x</button>
    </div>
  );
}

export default ToDo;
