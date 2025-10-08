import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Apps from '../controllers/Apps';

test('renders Apps component without crashing', () => {
  render(
    <BrowserRouter>
      <Apps />
    </BrowserRouter>
  );
  
  // Check if the main heading is rendered
  const heading = screen.getByRole('heading', { name: /Mobile Applications/i, level: 1 });
  expect(heading).toBeInTheDocument();
});

test('renders navigation tabs', () => {
  render(
    <BrowserRouter>
      <Apps />
    </BrowserRouter>
  );
  
  // Check if both tab buttons are rendered
  const datingAppTab = screen.getByRole('button', { name: /Android Dating App/i });
  const teamProjectTab = screen.getByRole('button', { name: /Find n' Dine \(Team Project\)/i });
  
  expect(datingAppTab).toBeInTheDocument();
  expect(teamProjectTab).toBeInTheDocument();
});
