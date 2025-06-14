# Guía de Pruebas Unitarias Sencillas

Esta guía te muestra cómo funcionan las pruebas en esta aplicación de tareas.

## 📝 Ejemplo de Prueba para el Formulario

### Archivo: `src/components/TodoForm.test.jsx`

```javascript
// 1. Importamos lo necesario
import { render, screen, fireEvent } from '@testing-library/react';
import TodoForm from './TodoForm';

// 2. Prueba: Ver que el formulario se muestra
test('muestra el input y el botón', () => {
  render(<TodoForm addTodo={() => {}} />);
  
  // Verificar que los elementos están en la pantalla
  expect(screen.getByTestId('todo-input')).toBeInTheDocument();
  expect(screen.getByTestId('add-button')).toBeInTheDocument();
});

// 3. Prueba: Añadir una tarea
test('añade una tarea cuando se envía el formulario', () => {
  // Preparamos un "espía" para la función addTodo
  const agregarTarea = jest.fn();
  
  // Mostramos el formulario
  render(<TodoForm addTodo={agregarTarea} />);
  
  // Buscamos los elementos
  const input = screen.getByTestId('todo-input');
  const boton = screen.getByTestId('add-button');
  
  // Simulamos que el usuario escribe y hace clic
  fireEvent.change(input, { target: { value: 'Aprender pruebas' } });
  fireEvent.click(boton);
  
  // Verificamos que se llamó a la función con el texto correcto
  expect(agregarTarea).toHaveBeenCalledWith('Aprender pruebas');
});

// 4. Prueba: No permite tareas vacías
test('no permite añadir tareas vacías', () => {
  const agregarTarea = jest.fn();
  render(<TodoForm addTodo={agregarTarea} />);
  
  const boton = screen.getByTestId('add-button');
  fireEvent.click(boton);
  
  expect(agregarTarea).not.toHaveBeenCalled();
});
```

## ▶️ Cómo Ejecutar las Pruebas

1. **Todas las pruebas**:
   ```bash
   npm test
   ```

2. **Solo las pruebas del formulario**:
   ```bash
   npm test src/components/TodoForm.test.jsx
   ```

3. **Modo observación** (las pruebas se actualizan automáticamente):
   ```bash
   npm test -- --watch
   ```

## 🔍 Cómo Probar los Otros Componentes

La estructura es similar para los otros componentes. Cada uno tiene su archivo de prueba correspondiente:

- `TodoItem.test.jsx` - Pruebas para los ítems individuales
- `TodoList.test.jsx` - Pruebas para la lista completa

## 🐛 Depurando una Prueba

Si una prueba falla:

1. **Lee el mensaje de error** - Te dirá qué salió mal
2. **Usa `screen.debug()`** - Añádelo en tu prueba para ver el estado del DOM
   
   ```javascript
   test('ejemplo', () => {
     render(<MiComponente />);
     screen.debug(); // Muestra el HTML en la consola
   });
   ```

## 📚 Recursos para Aprender Más

- [Documentación de Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/)
- [Pruebas en React](https://es.reactjs.org/docs/testing.html)
