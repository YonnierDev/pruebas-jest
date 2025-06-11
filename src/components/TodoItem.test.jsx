import { render, screen, fireEvent } from '@testing-library/react';
import TodoItem from './TodoItem';

describe('TodoItem', () => {
  const todo = {
    id: 1,
    text: 'Tarea de prueba',
    completed: false
  };

  const toggleComplete = jest.fn();
  const deleteTodo = jest.fn();

  beforeEach(() => {
    toggleComplete.mockClear();
    deleteTodo.mockClear();
  });

  test('renders todo item with text and buttons', () => {
    render(
      <TodoItem
        todo={todo}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
      />
    );

    expect(screen.getByText('Tarea de prueba')).toBeInTheDocument();
    expect(screen.getByText('Completar')).toBeInTheDocument();
    expect(screen.getByText('Eliminar')).toBeInTheDocument();
  });

  test('calls toggleComplete when complete button is clicked', () => {
    render(
      <TodoItem
        todo={todo}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
      />
    );

    const completeButton = screen.getByText('Completar');
    fireEvent.click(completeButton);
    expect(toggleComplete).toHaveBeenCalledWith(1);
  });

  test('calls deleteTodo when delete button is clicked', () => {
    render(
      <TodoItem
        todo={todo}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
      />
    );

    const deleteButton = screen.getByText('Eliminar');
    fireEvent.click(deleteButton);
    expect(deleteTodo).toHaveBeenCalledWith(1);
  });

  test('shows correct text for completed todo', () => {
    const completedTodo = { ...todo, completed: true };
    
    render(
      <TodoItem
        todo={completedTodo}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
      />
    );

    expect(screen.getByText('Deshacer')).toBeInTheDocument();
    expect(screen.getByText('Tarea de prueba')).toHaveStyle('text-decoration: line-through');
  });
});
