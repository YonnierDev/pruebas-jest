import { render, screen } from '@testing-library/react';
import { App } from './src/App';

test('muestra el título de la aplicación', () => {
  render(<App />);
  const title = screen.getByText(/Lista de Tareas/i);
  expect(title).toBeInTheDocument();
});
