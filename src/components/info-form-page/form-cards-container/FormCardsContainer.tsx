import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/reducers/combineReducers';
import { ResponsePhotoData } from '../../../types/apiData';
import { FormCardsType } from '../../../types/reduxStateTypes';
import { MaxInfoCard } from '../../home-page/max-info-card/MaxInfoCard';

export const FormCardsContainer = () => {
  const { formCards } = useSelector<RootState, FormCardsType>((state) => state.formCards);

  return (
    <div data-testid="form-cards-container" className="form-cards-container cards-container">
      {formCards.map((el: ResponsePhotoData) => {
        return <MaxInfoCard cardData={el} key={el.id} />;
      })}
    </div>
  );
};
