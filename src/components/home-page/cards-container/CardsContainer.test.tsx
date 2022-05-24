import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../../redux/store/configureStore';
import { CardsContainer } from './CardsContainer';

const ReduxWrapper = (children: React.ReactNode) => <Provider store={store}>{children}</Provider>;

describe('CardsContainer', () => {
  test('renders CardsContainer component', () => {
    render(ReduxWrapper(<CardsContainer />));
    const container = screen.getByTestId('cards-container');
    expect(container).toBeInTheDocument();
    expect(container).toHaveClass('cards-container');
  });
});
