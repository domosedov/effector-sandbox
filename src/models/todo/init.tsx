import { sample } from "effector";
import {
  $todoInput,
  $todos,
  changeTodoInput,
  createTodo,
  logNewTodoFx,
  reset,
  resetInput,
} from "./";

$todos.on(createTodo, (prevTodos, todo) => [...prevTodos, todo]).reset(reset);

$todoInput.on(changeTodoInput, (_, title) => title).reset(resetInput);

logNewTodoFx.watch((todo) => console.log(todo));

sample({
  clock: createTodo,
  source: $todos,
  fn: (todos, todo) => {
    console.log("todo", todo);

    console.log("todos", todos);

    return todos[0];
  },
  target: logNewTodoFx,
});
