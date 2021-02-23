import { useStore } from "effector-react";
import React, { FormEvent } from "react";
import { v4 as uuid } from "uuid";
import {
  $todoInput,
  $todos,
  changeTodoInput,
  createTodo,
  resetInput,
} from "../../models/todo";

export const Todos = () => {
  const todoInput = useStore($todoInput);
  const todos = useStore($todos);
  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    createTodo({
      id: uuid(),
      title: todoInput,
      completed: false,
    });
    resetInput();
  };
  return (
    <div>
      <h1>Todo App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={todoInput}
          onChange={(evt) => changeTodoInput(evt.target.value)}
        />
        <button type="submit">Create Todo</button>
      </form>
      <h2>My todos</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} style={{ color: todo.completed ? "green" : "red" }}>
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
};
