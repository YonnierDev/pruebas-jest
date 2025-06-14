import { render, screen, fireEvent } from '@testing-library/react';
import TodoForm from './TodoForm';

// Prueba 1: Verifica que el formulario se muestra
test('muestra el input y el botón', () => {
  render(<TodoForm addTodo={() => {}} />);
  
  // Verificar que el input y el botón están en la pantalla
  expect(screen.getByTestId('todo-input')).toBeInTheDocument();
  expect(screen.getByTestId('add-button')).toBeInTheDocument();
});

// Prueba 2: Añadir una tarea
test('añade una tarea cuando se envía el formulario', () => {
  // 1. Preparamos un "espía" para la función addTodo
  const agregarTarea = jest.fn();
  
  // 2. Mostramos el formulario
  render(<TodoForm addTodo={agregarTarea} />);
  
  // 3. Buscamos los elementos
  const input = screen.getByTestId('todo-input');
  const boton = screen.getByTestId('add-button');
  
  // 4. Simulamos que el usuario escribe y hace clic
  fireEvent.change(input, { target: { value: 'Aprender pruebas' } });
  fireEvent.click(boton);
  
  // 5. Verificamos que se llamó a la función con el texto correcto
  expect(agregarTarea).toHaveBeenCalledWith('Aprender pruebas');
});

// Prueba 3: No permite añadir tareas vacías
test('no permite añadir tareas vacías', () => {
  const agregarTarea = jest.fn();
  render(<TodoForm addTodo={agregarTarea} />);
  
  const boton = screen.getByTestId('add-button');
  fireEvent.click(boton);
  
  expect(agregarTarea).not.toHaveBeenCalled();
});
