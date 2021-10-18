import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';

test('renders the app with a button and quote', () => {
  render(<App />);

  const button = screen.getByRole('button');
  expect(button).toBeInTheDocument();

  const imageEl = screen.getByRole('img');
  expect(imageEl).toBeInTheDocument();

  const textEl = screen.getByText(/Speaker/);
  expect(textEl).toBeInTheDocument();
});
