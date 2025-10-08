import { render, screen } from '@testing-library/react';
import Servers from '../controllers/Servers';

test('renders Servers component without crashing', () => {
  render(<Servers />);
  
  // Check if the main heading is rendered
  const heading = screen.getByRole('heading', { name: /Server Development/i, level: 1 });
  expect(heading).toBeInTheDocument();
});

test('renders server navigation tabs', () => {
  render(<Servers />);
  
  // Check if both tab buttons are rendered
  const apiTab = screen.getByRole('button', { name: /RESTful API/i });
  const teamBackendTab = screen.getByRole('button', { name: /Team Project Backend/i });
  
  expect(apiTab).toBeInTheDocument();
  expect(teamBackendTab).toBeInTheDocument();
});
