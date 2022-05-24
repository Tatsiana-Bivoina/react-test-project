import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/store/configureStore';
import { Home } from './Home';

const ReduxWrapper = (children: React.ReactNode) => <Provider store={store}>{children}</Provider>;

describe('App', () => {
  test('renders App component', () => {
    render(ReduxWrapper(<Home />));
    const section = screen.getByTestId('home-page');
    const searchContainer = screen.getByTestId('search-container');
    const cardsContainer = screen.getByTestId('cards-container');

    expect(section).toBeInTheDocument();
    expect(searchContainer).toBeInTheDocument();
    expect(cardsContainer).toBeInTheDocument();
  });

  test('show loader when it`s fetching data', async () => {
    render(ReduxWrapper(<Home />));
    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });
});
