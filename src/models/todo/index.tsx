import { createDomain } from "effector";
import { Todo, TodoInput } from "./types";

export const todoDomain = createDomain("todo");

export const $todos = todoDomain.createStore<Todo[]>([]);

export const $todoInput = todoDomain.createStore<TodoInput>("");

export const createTodo = todoDomain.createEvent<Todo>();

export const changeTodoInput = todoDomain.createEvent<TodoInput>();

export const logNewTodoFx = todoDomain.createEffect<Todo, void, Error>();

export const reset = todoDomain.createEvent();

export const resetInput = todoDomain.createEvent();
