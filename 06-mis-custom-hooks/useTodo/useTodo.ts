import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";

type Todo = {
  id: number;
  description: string;
  done: boolean;
};

export const useTodo = () => {
  const initialState: Todo[] = [];

  const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  };

  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo: {
    id: number;
    description: string;
    done: boolean;
  }) => {
    const action = {
      type: "[TODO] Add Todo",
      payload: todo,
    };

    dispatch(action);
  };

  const handleDeleteTodo = (id: number) => {
    dispatch({
      type: "[TODO] Remove Todo",
      payload: id,
    });
  };

  const handleToggleTodo = (id: number) => {
    dispatch({
      type: "[TODO] Toggle Todo",
      payload: id,
    });
  };

  const todosCount = todos.length;

  const pendingTodosCount = todos.filter((todo: Todo) => !todo.done).length;

  return {
    todos,
    todosCount,
    pendingTodosCount,
    handleDeleteTodo,
    handleNewTodo,
    handleToggleTodo,
  };
};
