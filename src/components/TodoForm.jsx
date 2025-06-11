import { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      addTodo(inputValue);
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Añadir una nueva tarea..."
        data-testid="todo-input"
        className="todo-input"
      />
      <button 
        type="submit" 
        data-testid="add-button"
        className="add-button"
      >
        Añadir Tarea
      </button>
    </form>
  );
};

export default TodoForm;
