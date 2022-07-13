import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from './App';

it('renders "Welcome to Enterprise-Scale Architecture Generator"', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to Enterprise-Scale Architecture Generator/i);
  expect(linkElement).toBeInTheDocument();
});
