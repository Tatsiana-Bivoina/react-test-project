import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import store from '../../../redux/store/configureStore';
import { MinInfoCard, Props } from './MinInfoCard';

const cardData: Props = {
  cardData: {
    id: 3573351,
    width: 3066,
    height: 3968,
    url: 'https://www.pexels.com/photo/trees-during-day-3573351/',
    photographer: 'Lukas Rodriguez',
    photographer_url: 'https://www.pexels.com/@lukas-rodriguez-1845331',
    photographer_id: 1845331,
    avg_color: '#374824',
    src: {
      original: 'https://images.pexels.com/photos/3573351/pexels-photo-3573351.png',
      large2x:
        'https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      large:
        'https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&h=650&w=940',
      medium:
        'https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&h=350',
      small:
        'https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&h=130',
      portrait:
        'https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
      landscape:
        'https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
      tiny: 'https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
    },
    liked: false,
    alt: 'Brown Rocks During Golden Hour',
  },
};

const history = createMemoryHistory();
const ReduxWrapper = (children: React.ReactNode) => <Provider store={store}>{children}</Provider>;

describe('MinInfoCard', () => {
  test('renders MinInfoCard component', () => {
    render(
      ReduxWrapper(
        <Router location={history.location} navigator={history}>
          <MinInfoCard cardData={cardData.cardData} />
        </Router>
      )
    );
    const imgContainer = screen.getByTestId('img-container');
    const image = screen.getByAltText('Brown Rocks During Golden Hour');
    const photographerName = screen.getByText(/Lukas Rodriguez/i);
    const linkElement = screen.getByText(/Photographer page/i);
    const btn = screen.getByRole('button');

    expect(imgContainer).toBeInTheDocument();
    expect(imgContainer).toContainElement(image);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute(
      'src',
      'https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&h=350'
    );
    expect(photographerName).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', 'https://www.pexels.com/@lukas-rodriguez-1845331');
    expect(btn).toBeInTheDocument();
  });
});
