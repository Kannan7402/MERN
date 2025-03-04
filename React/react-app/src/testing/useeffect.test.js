import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Effect from './components/useEffect';  // Adjust the import path if needed
import api from '../core/api/api';  // Import the api module

// Mock the api module
jest.mock('../core/api/api');

describe('Effect Component', () => {
  it('should display data after a successful API call', async () => {
    // Mock the response of the API call
    const mockData = [
      { id: 1, title: 'Post 1' },
      { id: 2, title: 'Post 2' },
      { id: 3, title: 'Post 3' },
    ];

    api.get.mockResolvedValue({ data: mockData });

    // Render the Effect component
    render(<Effect />);

    // Wait for the data to be fetched and displayed
    await waitFor(() => {
      // Check that the titles of the posts are rendered on the screen
      expect(screen.getByText('Post 1')).toBeInTheDocument();
      expect(screen.getByText('Post 2')).toBeInTheDocument();
      expect(screen.getByText('Post 3')).toBeInTheDocument();
    });
  });

  it('should handle errors gracefully if the API call fails', async () => {
    // Mock the API call to simulate an error
    api.get.mockRejectedValue(new Error('Network error'));

    // Render the Effect component
    render(<Effect />);

    // Wait for the component to finish rendering (though no data should be shown)
    await waitFor(() => {
      // In case of an error, we expect that no list items are rendered
      const listItems = screen.queryAllByRole('listitem');
      expect(listItems).toHaveLength(0);
    });
  });
});
