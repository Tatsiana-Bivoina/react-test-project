import { render, screen } from '@testing-library/react';
import { Header } from './Header';
import { MemoryRouter } from 'react-router';
import userEvent from '@testing-library/user-event';

describe('Header', () => {
  test('renders header component', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const header = screen.getByTestId('header');
    const navbar = screen.getByTestId('navbar');
    const homeLinkElement = screen.getByText(/Home page/i);
    const aboutLinkElement = screen.getByText(/Home page/i);

    expect(header).toContainElement(navbar);
    expect(homeLinkElement).toBeInTheDocument();
    expect(aboutLinkElement).toBeInTheDocument();
  });

  test('current link should be active', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Header />
      </MemoryRouter>
    );
    const homeLinkElement = screen.getByText(/Home page/i);
    expect(homeLinkElement).toHaveClass('active');
  });

  test('navigate to about page when you click the link', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Header />
      </MemoryRouter>
    );
    const homeLinkElement = screen.getByText(/Home page/i);
    expect(homeLinkElement).toBeInTheDocument();

    const leftClick = { button: 0 };
    userEvent.click(screen.getByText(/about/i), leftClick);
    expect(screen.getByText(/About Us/i)).toBeInTheDocument();
  });
});
