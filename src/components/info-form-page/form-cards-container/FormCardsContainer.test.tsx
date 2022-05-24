import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../../redux/store/configureStore';
import { FormCardsContainer } from './FormCardsContainer';

const ReduxWrapper = (children: React.ReactNode) => <Provider store={store}>{children}</Provider>;

describe('FormCardsContainer', () => {
  test('renders FormCardsContainer component', () => {
    render(ReduxWrapper(<FormCardsContainer />));
    const container = screen.getByTestId('form-cards-container');
    const cards = screen.queryAllByTestId('card-item');

    expect(container).toBeInTheDocument();
    expect(container).toHaveClass('form-cards-container');
    expect(cards).toHaveLength(0);
  });
});
