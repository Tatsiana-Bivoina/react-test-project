import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { CurrentCard } from './CurrentCard';
import { Provider } from 'react-redux';
import store from '../../../redux/store/configureStore';

const history = createMemoryHistory();

const ReduxWrapper = (children: React.ReactNode) => <Provider store={store}>{children}</Provider>;

describe('Current Card', () => {
  test('renders CurrentCard component', () => {
    render(
      ReduxWrapper(
        <Router location={history.location} navigator={history}>
          <CurrentCard />
        </Router>
      )
    );
    const cardItem = screen.getByTestId('card-max-item');

    expect(cardItem).toBeInTheDocument();
  });

  test('close CurrentCardPage when click on btn back', async () => {
    render(
      ReduxWrapper(
        <Router location={history.location} navigator={history}>
          <CurrentCard />
        </Router>
      )
    );
    const currentCard = screen.getByTestId('current-card');
    const btn = screen.getByTestId('btn-close');

    expect(currentCard).toBeInTheDocument();

    await fireEvent.click(btn);

    waitFor(() => {
      expect(screen.getByTestId('current-card')).not.toBeInTheDocument();
    });
  });
});
