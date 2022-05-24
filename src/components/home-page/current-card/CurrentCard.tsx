import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { RootState } from '../../../redux/reducers/combineReducers';
import { changeCurrentCardData } from '../../../redux/reducers/home-page/currentCardReducer';
import { RootDispatch } from '../../../redux/store/configureStore';
import { ResponsePhotoData } from '../../../types/apiData';
import { MaxInfoCard } from '../max-info-card/MaxInfoCard';
import './current-card.scss';

export const CurrentCard = () => {
  const dispatch: RootDispatch = useDispatch();
  const navigate = useNavigate();
  const currentCard = useSelector<RootState, ResponsePhotoData>((state) => state.currentCard);

  useEffect(() => {
    const currentCard = localStorage.getItem('current-card');
    if (currentCard !== null) {
      dispatch(changeCurrentCardData(JSON.parse(currentCard)));
    }
  }, [dispatch]);

  return (
    <section className="current-card-section" data-testid="current-card">
      <div className="wrapper">
        <div className="current-card">
          <div className="card-header">
            <button
              className="btn-close"
              data-testid="btn-close"
              onClick={() => navigate('/', { replace: true })}
            >
              Back
            </button>
          </div>
          <div className="card-body">
            <MaxInfoCard cardData={currentCard} />
          </div>
        </div>
      </div>
    </section>
  );
};
