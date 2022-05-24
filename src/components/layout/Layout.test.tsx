import { render, screen } from '@testing-library/react';
import { Layout } from './Layout';
import { MemoryRouter } from 'react-router';

describe('Layout', () => {
  test('renders Layout component', () => {
    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    );
    const header: HTMLElement = screen.getByTestId('header');
    const main: HTMLElement = screen.getByTestId('main');

    expect(header).toBeInTheDocument();
    expect(main).toBeInTheDocument();
  });
});
