import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeCurrentCardData } from '../../../redux/reducers/home-page/currentCardReducer';
import { RootDispatch } from '../../../redux/store/configureStore';
import { ResponsePhotoData } from '../../../types/apiData';
import './card.scss';

export interface CardProps {
  cardData: ResponsePhotoData;
}

export type Props = Readonly<CardProps>;

export const MinInfoCard = ({ cardData }: Props) => {
  const navigate = useNavigate();
  const dispatch: RootDispatch = useDispatch();

  return (
    <div data-testid="card-item" className="card">
      <div data-testid="img-container" className="img-container">
        <img src={cardData.src.medium} alt={cardData.alt} />
      </div>
      <h3 className="photographer-name">{cardData.photographer}</h3>
      <a className="photographer-page" href={cardData.photographer_url}>
        Photographer page
      </a>
      <button
        className="btn-redirect"
        type="button"
        onClick={() => {
          dispatch(changeCurrentCardData(cardData));
          localStorage.setItem('current-card', JSON.stringify(cardData));
          navigate(`card/${cardData.id}`, { replace: true });
        }}
      >
        Learn more
      </button>
    </div>
  );
};
