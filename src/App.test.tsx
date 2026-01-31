import { render, screen } from '@testing-library/react';
import App from './App';
import { expect, test } from 'vitest';

test('renders landing page title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Prebuilt Agents with Proven AI Solutions/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders features section', () => {
  render(<App />);
  const featureElement = screen.getByRole('heading', { name: /Multi-Agent System/i });
  expect(featureElement).toBeInTheDocument();
});
