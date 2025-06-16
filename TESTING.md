# 🧪 Guía de Pruebas Unitarias

Esta guía detalla la estrategia de pruebas implementada en la aplicación de lista de tareas, siguiendo las mejores prácticas de desarrollo con React Testing Library.

## 📚 Visión General de las Pruebas

La aplicación implementa pruebas unitarias para cada componente principal, asegurando que cada pieza funcione de manera aislada y en conjunto.

### Tecnologías Utilizadas

- **Jest**: Marco de pruebas principal
- **React Testing Library**: Para pruebas centradas en el usuario
- **Jest DOM**: Para aserciones específicas del DOM

## 🧩 Estructura de Pruebas

### 1. Pruebas del Componente Principal (`App.test.jsx`)

Verifica el renderizado correcto del componente principal y su estructura básica.

```javascript
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renderiza el título de la aplicación', () => {
    render(<App />);
    const titleElement = screen.getByText(/Lista de Tareas/i);
    expect(titleElement).toBeInTheDocument();
  });
});
```

### 2. Pruebas del Formulario (`TodoForm.test.jsx`)

Evalúa el comportamiento del formulario de añadir tareas.

```javascript
import { render, screen, fireEvent } from '@testing-library/react';
import TodoForm from './TodoForm';

// Verifica la estructura del formulario
test('muestra el input y el botón', () => {
  render(<TodoForm addTodo={() => {}} />);
  expect(screen.getByTestId('todo-input')).toBeInTheDocument();
  expect(screen.getByTestId('add-button')).toBeInTheDocument();
});

// Prueba el envío del formulario
test('añade una tarea cuando se envía el formulario', () => {
  const agregarTarea = jest.fn();
  render(<TodoForm addTodo={agregarTarea} />);
  
  const input = screen.getByTestId('todo-input');
  const boton = screen.getByTestId('add-button');
  
  fireEvent.change(input, { target: { value: 'Aprender pruebas' } });
  fireEvent.click(boton);
  
  expect(agregarTarea).toHaveBeenCalledWith('Aprender pruebas');
});

// Valida entradas vacías
test('no permite añadir tareas vacías', () => {
  const agregarTarea = jest.fn();
  render(<TodoForm addTodo={agregarTarea} />);
  
  const boton = screen.getByTestId('add-button');
  fireEvent.click(boton);
  
  expect(agregarTarea).not.toHaveBeenCalled();
});
```

### 3. Pruebas de Ítems (`TodoItem.test.jsx`)

Evalúa el comportamiento de los ítems individuales de la lista.

### 4. Pruebas de la Lista (`TodoList.test.jsx`)

Verifica la funcionalidad completa de la lista de tareas.

## 🎯 Estrategia de Pruebas

### Cobertura de Código

Para generar un informe de cobertura:

```bash
npm test -- --coverage --watchAll=false
```

### Buenas Prácticas Implementadas

1. **Pruebas Descriptivas**: Nombres claros que describen el comportamiento esperado
2. **Aislamiento**: Cada prueba es independiente
3. **Arrange-Act-Assert**: Estructura clara en tres fases
4. **Mocks y Espías**: Uso de `jest.fn()` para simular funciones
5. **Accesibilidad**: Pruebas que verifican la accesibilidad de los componentes

## 🔍 Ejecución de Pruebas

### Comandos Principales

```bash
# Ejecutar todas las pruebas
npm test

# Ejecutar pruebas en modo observación
npm test -- --watch

# Ver cobertura de código
npm test -- --coverage --watchAll=false
```

## 📊 Reportes de Cobertura

Después de ejecutar las pruebas con cobertura, se genera un informe en:
```
coverage/lcov-report/index.html
```

Este informe muestra:
- Porcentaje de cobertura por archivo
- Líneas cubiertas/no cubiertas
- Funciones y ramas cubiertas

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
