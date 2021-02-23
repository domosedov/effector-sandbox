import {
  $todoInput,
  $todos,
  changeTodoInput,
  createTodo,
  reset,
  resetInput,
} from "./";

$todos.on(createTodo, (prevTodos, todo) => [...prevTodos, todo]).reset(reset);

$todoInput.on(changeTodoInput, (_, title) => title).reset(resetInput);
