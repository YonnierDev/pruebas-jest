import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';

describe('TodoList', () => {
  test('renders todo list with title and form', () => {
    render(<TodoList />);
    
    expect(screen.getByText('Lista de Tareas')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Añadir tarea...')).toBeInTheDocument();
    expect(screen.getByText('Añadir')).toBeInTheDocument();
  });

  test('adds a new todo when form is submitted', () => {
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText('Añadir tarea...');
    const button = screen.getByText('Añadir');
    
    fireEvent.change(input, { target: { value: 'Nueva tarea' } });
    fireEvent.click(button);
    
    expect(screen.getByText('Nueva tarea')).toBeInTheDocument();
  });

  test('toggles todo completion when toggle button is clicked', () => {
    render(<TodoList />);
    
    // Add a todo
    const input = screen.getByPlaceholderText('Añadir tarea...');
    const addButton = screen.getByText('Añadir');
    fireEvent.change(input, { target: { value: 'Tarea por completar' } });
    fireEvent.click(addButton);
    
    // Toggle completion
    const toggleButton = screen.getByText('Completar');
    fireEvent.click(toggleButton);
    
    // Check if the todo is completed
    expect(screen.getByText('Tarea por completar')).toHaveStyle('text-decoration: line-through');
    expect(screen.getByText('Deshacer')).toBeInTheDocument();
  });

  test('deletes a todo when delete button is clicked', () => {
    render(<TodoList />);
    
    // Add a todo
    const input = screen.getByPlaceholderText('Añadir tarea...');
    const addButton = screen.getByText('Añadir');
    fireEvent.change(input, { target: { value: 'Tarea a eliminar' } });
    fireEvent.click(addButton);
    
    // Delete the todo
    const deleteButton = screen.getByText('Eliminar');
    fireEvent.click(deleteButton);
    
    // Check if the todo is deleted
    expect(screen.queryByText('Tarea a eliminar')).not.toBeInTheDocument();
  });
});
