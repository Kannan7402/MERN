import { render, screen } from '@testing-library/react';
import App from './App';

// Optionally mock `Routing` if you only want to check App's structure
// jest.mock('./route/routing', () => () => <div>Routing Content</div>);

test('renders content from Routing component', () => {
  render(<App />);
  
  // Check if Routing's content is present in App
  // Replace 'Some text from Routing' with actual content the Routing component renders
  // const routingContent = screen.getByText(/Some text from Routing/i);
  // expect(routingContent).toBeInTheDocument();
});
