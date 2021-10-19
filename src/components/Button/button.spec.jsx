import { render, screen } from '@testing-library/react';
import { Button } from './button';
import React from 'react';

test('render button with a text', () => {
  render(<Button>Test</Button>);

  const button = screen.getByText('Test');
  expect(button).toBeInTheDocument();
});
