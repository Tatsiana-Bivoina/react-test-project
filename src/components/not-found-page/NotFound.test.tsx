import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { NotFound } from './NotFound';

describe('NotFound', () => {
  test('renders NotFound component', () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );
    const section: HTMLElement = screen.getByTestId('not-found');
    const homeLinkElement: HTMLElement = screen.getByText(/Go home/i);
    expect(section).toBeInTheDocument();
    expect(homeLinkElement).toBeInTheDocument();
  });
});
