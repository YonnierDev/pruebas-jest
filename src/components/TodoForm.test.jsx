import { render, screen, fireEvent } from '@testing-library/react';
import TodoForm from './TodoForm';

describe('TodoForm', () => {
  test('renders form with input and button', () => {
    render(<TodoForm addTodo={() => {}} />);
    
    expect(screen.getByPlaceholderText('Añadir tarea...')).toBeInTheDocument();
    expect(screen.getByText('Añadir')).toBeInTheDocument();
  });

  test('calls addTodo when form is submitted with text', () => {
    const addTodoMock = jest.fn();
    render(<TodoForm addTodo={addTodoMock} />);
    
    const input = screen.getByPlaceholderText('Añadir tarea...');
    const button = screen.getByText('Añadir');
    
    fireEvent.change(input, { target: { value: 'Nueva tarea' } });
    fireEvent.click(button);
    
    expect(addTodoMock).toHaveBeenCalledWith('Nueva tarea');
  });

  test('does not call addTodo when form is submitted with empty input', () => {
    const addTodoMock = jest.fn();
    render(<TodoForm addTodo={addTodoMock} />);
    
    const button = screen.getByText('Añadir');
    fireEvent.click(button);
    
    expect(addTodoMock).not.toHaveBeenCalled();
  });
});
