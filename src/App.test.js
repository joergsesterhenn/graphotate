import { render, screen } from '@testing-library/react';
import App from './App';

test('renders graphotate text', () => {
  render(<App />);
  const element = screen.getByText(/graphotate./i);
  expect(element).toBeInTheDocument();
});
