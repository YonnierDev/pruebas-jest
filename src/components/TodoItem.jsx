const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <div 
      className={`todo-item ${todo.completed ? 'completed' : ''}`}
      data-testid="todo-item"
    >
      <span className="todo-text">{todo.text}</span>
      <div className="todo-actions">
        <button 
          onClick={() => toggleComplete(todo.id)}
          data-testid="toggle-button"
          className="toggle-btn"
        >
          {todo.completed ? '❌ Deshacer' : '✅ Completar'}
        </button>
        <button 
          onClick={() => deleteTodo(todo.id)}
          data-testid="delete-button"
          className="delete-btn"
        >
          🗑️ Eliminar
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
