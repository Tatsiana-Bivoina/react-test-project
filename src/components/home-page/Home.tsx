import { useEffect } from 'react';
import { CardsContainer } from './cards-container/CardsContainer';
import { SearchBar } from './search-bar/SearchBar';
import { BallTriangle } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers/combineReducers';
import { CardsValuesType, SearchFormValuesType } from '../../types/reduxStateTypes';
import { RootDispatch } from '../../redux/store/configureStore';
import { getPhotoData } from '../../redux/actions/getPhotoDataRedux';
import './home.scss';

export const Home = () => {
  const dispatch: RootDispatch = useDispatch();
  const searchForm = useSelector<RootState, SearchFormValuesType>((state) => state.searchForm);
  const { isLoading, error } = useSelector<RootState, CardsValuesType>((state) => state.cards);

  useEffect(() => {
    async function getPhoto() {
      await dispatch(getPhotoData(searchForm));
    }
    getPhoto();
  }, [dispatch]);

  return (
    <section data-testid="home-page" className="app">
      <div className="wrapper">
        <SearchBar />
        {isLoading && (
          <div className="loader" data-testid="loader">
            <BallTriangle color="#6a6ca2" height={100} width={100} />
          </div>
        )}
        {error && (
          <div data-testid="error-message" className="error-message">
            {error}
          </div>
        )}
        <CardsContainer />
      </div>
    </section>
  );
};
