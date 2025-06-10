import { render, screen } from '@testing-library/react';
import { App } from './App';

describe('App', () => {
  test('renders app title', () => {
    render(<App />);
    const titleElement = screen.getByText(/Lista de Tareas/i);
    expect(titleElement).toBeInTheDocument();
  });
});
