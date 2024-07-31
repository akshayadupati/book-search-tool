import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';

test('renders learn react link', () => {
  render(<App />);
  const app = screen.getByTestId('app-container');
  expect(app).toBeInTheDocument();
});
