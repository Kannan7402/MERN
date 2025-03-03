import { render, screen, fireEvent } from '@testing-library/react';
import Component from './state';

describe('Component', () => {
  test('renders a button and handles click', () => {
    render(<Component />);
    
    const button = screen.getByText('Click Me');
    
    expect(button).toBeInTheDocument();
    
    // Simulate a click event
    fireEvent.click(button);
    
    const message = screen.getByText('Button clicked!');
    expect(message).toBeInTheDocument();
  });
});
