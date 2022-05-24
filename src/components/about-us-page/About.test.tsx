import { render, screen } from '@testing-library/react';
import { About } from './About';

describe('About', () => {
  test('renders about component', () => {
    render(<About />);
    expect(screen.getByTestId('about')).toHaveClass('about');
    expect(screen.getByText(/About us/i)).toBeInTheDocument();
  });
});
