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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Añadir tarea..."
        data-testid="todo-input"
      />
      <button 
        type="submit" 
        data-testid="add-button"
      >
        Añadir
      </button>
    </form>
  );
};

export default TodoForm;
