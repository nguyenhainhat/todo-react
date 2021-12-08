import { ADD_TODO, DELETE_TODO } from "./types";

export const addTodo = (payload) => ({
    type: ADD_TODO,
    payload
})

export const deleteTodo = (payload) => ({
    type: DELETE_TODO,
    payload
})