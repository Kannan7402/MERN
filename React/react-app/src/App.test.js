import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./routes/routing', () => () => <div>Routing Content</div>);

test('renders content from Routing component', () => {
 
  render(<App />);
  
  const routingContent = screen.getByText(/Routing Content/i);
  expect(routingContent).toBeInTheDocument();
});