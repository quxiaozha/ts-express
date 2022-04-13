import { RequestHandler } from "express";
import { Todo } from "../modules/todo";

const TODOS: Todo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
  const text = (req.body as { text: string }).text;
  const newTodo = new Todo(Math.random().toString(), text);
  TODOS.push(newTodo);
  res.status(201).json({ message: "Create the todo", createdTodo: newTodo });
};

export const getTodos: RequestHandler = (req, res, next) => {
  res.status(200).json({ todos: TODOS });
};

export const updateTodo: RequestHandler<{ id: string }> = (req, res, next) => {
  const todoId = req.params.id;
  const updatedText = (req.body as { text: string }).text;
  const todoIndext = TODOS.findIndex((todo) => todo.id === todoId);
  if (todoIndext < 0) {
    throw new Error("No such todo.");
  }
  TODOS[todoIndext] = new Todo(TODOS[todoIndext].id, updatedText);
  res.status(200).json({ updatedTodo: TODOS[todoIndext] });
};

export const deleteTodo: RequestHandler<{ id: string }> = (req, res, next) => {
  const todoId = req.params.id;
  const todoIndext = TODOS.findIndex((todo) => todo.id === todoId);
  if (todoIndext < 0) {
    throw new Error("No such todo.");
  }
  TODOS.slice(todoIndext, 1);
  res.status(200).json({ message: "Todo deleted" });
};
