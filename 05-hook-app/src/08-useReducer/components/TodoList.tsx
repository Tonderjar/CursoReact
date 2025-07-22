import { TodoItem } from "./TodoItem"

type Todo = {
  id: number;
  description: string;
  done: boolean;
};

export const TodoList = ({todos, onDeleteTodo, onToggleTodo}: {todos: Todo[], onDeleteTodo: (id: number) => void, onToggleTodo: (id: number) => void}) => {



  return (
    <ul className="list-group">
        {
            todos.map(todo => (
                <TodoItem 
                  key={todo.id} 
                  todo = {todo} 
                  onDeleteTodo={onDeleteTodo}
                  onToggleTodo={onToggleTodo}
                />
            ))
        }
        
    </ul>
  )
}
