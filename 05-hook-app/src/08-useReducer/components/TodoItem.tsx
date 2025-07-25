export const TodoItem = ({todo, onDeleteTodo, onToggleTodo}: {todo: { id: number; description: string; done: boolean }, onDeleteTodo: (id: number) => void, onToggleTodo: (id: number) => void}) => {
  return (
    <li className="list-group-item d-flex justify-content-between"> 
        <span 
          className={`align-self-center ${(todo.done) ? 'text-decoration-line-through' : ''}`}
          onClick={() => onToggleTodo(todo.id)}
          aria-label = 'span'
        >
          {todo.description}
        </span>
        <button 
          className="btn btn-danger"
          onClick={() => onDeleteTodo(todo.id)}
        >
          Borrar
        </button>
    </li>
  )
}
