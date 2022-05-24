import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/reducers/combineReducers';
import { ResponsePhotoData } from '../../../types/apiData';
import { CardsValuesType } from '../../../types/reduxStateTypes';
import { MinInfoCard } from '../min-info-card/MinInfoCard';
import './cards-container.scss';

export const CardsContainer = () => {
  const { cardsData } = useSelector<RootState, CardsValuesType>((state) => state.cards);

  return (
    <div data-testid="cards-container" className="cards-container">
      {cardsData?.map((el: ResponsePhotoData) => {
        return <MinInfoCard cardData={el} key={el.id} />;
      })}
    </div>
  );
};
