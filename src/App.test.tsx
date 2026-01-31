import { render, screen } from '@testing-library/react';
import App from './App';
import { expect, test } from 'vitest';

test('renders landing page hero title', () => {
  render(<App />);
  const titleElements = screen.getAllByText(/Supercharge Your Workflow with Intelligent Agents/i);
  expect(titleElements[0]).toBeInTheDocument();
});

test('renders toolkit section title', () => {
  render(<App />);
  const toolkitTitle = screen.getByText(/A Complete Toolkit for Agentic Work/i);
  expect(toolkitTitle).toBeInTheDocument();
});

test('renders intelligent coding feature', () => {
  render(<App />);
  const featureElement = screen.getByText(/Intelligent Coding/i);
  expect(featureElement).toBeInTheDocument();
});

test('renders product tiers', () => {
  render(<App />);
  expect(screen.getAllByText(/Lightning/i).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/Custom/i).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/Pro/i).length).toBeGreaterThan(0);
});
