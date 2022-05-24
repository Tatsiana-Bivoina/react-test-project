import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../../redux/store/configureStore';
import { MaxInfoCard } from './MaxInfoCard';

const cardData = {
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
};

const ReduxWrapper = (children: React.ReactNode) => <Provider store={store}>{children}</Provider>;

describe('MaxInfoCard', () => {
  test('renders MaxInfoCard component', () => {
    render(ReduxWrapper(<MaxInfoCard cardData={cardData} key={1} />));
    const card = screen.getByTestId('card-max-item');
    const imgContainer = screen.getByTestId('img-container');
    const image = screen.getByAltText('Brown Rocks During Golden Hour');
    const photographerName = screen.getByText(/Lukas Rodriguez/i);
    const photographerPage = screen.getByText(/Follow/i);
    const photographerId = screen.getByText(/Photographer id/i);
    const width = screen.getByText(/Width/i);
    const height = screen.getByText(/Height/i);
    const liked = screen.getByText(/Liked/i);

    expect(card).toBeInTheDocument();
    expect(imgContainer).toBeInTheDocument();
    expect(imgContainer).toContainElement(image);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute(
      'src',
      'https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&h=350'
    );
    expect(photographerName).toBeInTheDocument();
    expect(photographerName).toBeInTheDocument();
    expect(photographerPage).toBeInTheDocument();
    expect(photographerPage).toHaveAttribute(
      'href',
      'https://www.pexels.com/@lukas-rodriguez-1845331'
    );
    expect(photographerId).toBeInTheDocument();
    expect(width).toBeInTheDocument();
    expect(height).toBeInTheDocument();
    expect(liked).toBeInTheDocument();
  });
});
