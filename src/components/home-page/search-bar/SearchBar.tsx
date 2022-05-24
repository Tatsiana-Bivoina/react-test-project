import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { getPhotoData } from '../../../redux/actions/getPhotoDataRedux';
import { RootState } from '../../../redux/reducers/combineReducers';
import * as actions from '../../../redux/reducers/home-page/searchFormReducer';
import { RootDispatch } from '../../../redux/store/configureStore';
import { SearchFormValuesType } from '../../../types/reduxStateTypes';
import { SearchFormValues } from '../../../types/formData';
import './search-bar.scss';

const cardsPerPage: string[] = ['20', '30', '40', '50', '60', '70', '80'];
const orientationOptions: string[] = ['landscape', 'portrait', 'square'];
const sizeOptions: string[] = ['large', 'medium', 'small'];
const colorOptions: string[] = [
  'red',
  'orange',
  'yellow',
  'green',
  'turquoise',
  'blue',
  'violet',
  'pink',
  'brown',
  'black',
  'gray',
  'white',
];

export const SearchBar = () => {
  const dispatch: RootDispatch = useDispatch();
  const searchForm = useSelector<RootState, SearchFormValuesType>((state) => state.searchForm);
  const { handleSubmit, control } = useForm<SearchFormValues, SearchFormValues>();

  const onSubmit = handleSubmit(async () => {
    await dispatch(getPhotoData(searchForm));
  });

  return (
    <div data-testid="search-container" className="form-container search-container">
      <form data-testid="search-form" className="search-form" onSubmit={onSubmit}>
        <Controller
          control={control}
          name="searchValue"
          defaultValue={searchForm.searchValue}
          render={({ field: { onChange, value } }) => (
            <input
              className="input-search"
              data-testid="input-search"
              type="text"
              value={value}
              onChange={(event) => {
                dispatch(actions.changeSearch(event.target.value));
                onChange(event.target.value);
              }}
              required
            />
          )}
        />
        <div className="aditional-params">
          <div className="pagination">
            <h4>Switches for pagination</h4>
            <Controller
              control={control}
              name="selectPerPage"
              defaultValue={searchForm.selectPerPage}
              render={({ field: { onChange, value } }) => (
                <>
                  <label htmlFor="cardPerPage">Select cards per page:</label>
                  <select
                    id="cardPerPage"
                    className="cards-per-page"
                    onChange={(event) => {
                      dispatch(actions.changeSelectPerPage(event.target.value));
                      onChange(event.target.value);
                    }}
                    value={value}
                  >
                    {cardsPerPage.map((option, index) => {
                      return (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      );
                    })}
                  </select>
                </>
              )}
            />
            <Controller
              control={control}
              name="page"
              defaultValue={searchForm.page}
              render={({ field: { onChange, value } }) => (
                <>
                  <label htmlFor="input-page">Choose current page</label>
                  <input
                    id="input-page"
                    className="input-page"
                    type="text"
                    value={value}
                    onChange={(event) => {
                      dispatch(actions.changePage(event.target.value));
                      onChange(event.target.value);
                    }}
                  />
                </>
              )}
            />
          </div>
          <div className="sort">
            <h4>Switches for sorting</h4>
            <Controller
              control={control}
              name="orientation"
              defaultValue={searchForm.orientation}
              render={({ field: { onChange, value } }) => (
                <>
                  <label htmlFor="orientation-select">Choose photo orientation</label>
                  <select
                    id="orientation-select"
                    className="sorting-select"
                    onChange={(event) => {
                      dispatch(actions.changeOrientation(event.target.value));
                      onChange(event.target.value);
                    }}
                    value={value}
                  >
                    <option key={0} />
                    {orientationOptions.map((option, index) => {
                      return (
                        <option key={index + 1} value={option}>
                          {option}
                        </option>
                      );
                    })}
                  </select>
                </>
              )}
            />
            <Controller
              control={control}
              name="size"
              defaultValue={searchForm.size}
              render={({ field: { onChange, value } }) => (
                <>
                  <label htmlFor="size-select">Choose photo size</label>
                  <select
                    id="size-select"
                    className="sorting-select"
                    onChange={(event) => {
                      dispatch(actions.changeSize(event.target.value));
                      onChange(event.target.value);
                    }}
                    value={value}
                  >
                    <option key={0} />
                    {sizeOptions.map((option, index) => {
                      return (
                        <option key={index + 1} value={option}>
                          {option}
                        </option>
                      );
                    })}
                  </select>
                </>
              )}
            />
            <Controller
              control={control}
              name="color"
              defaultValue={searchForm.color}
              render={({ field: { onChange, value } }) => (
                <>
                  <label htmlFor="color-select">Choose photo color</label>
                  <select
                    id="color-select"
                    className="sorting-select"
                    onChange={(event) => {
                      dispatch(actions.changeColor(event.target.value));
                      onChange(event.target.value);
                    }}
                    value={value}
                  >
                    <option key={0} />
                    {colorOptions.map((option, index) => {
                      return (
                        <option key={index + 1} value={option}>
                          {option}
                        </option>
                      );
                    })}
                  </select>
                </>
              )}
            />
          </div>
        </div>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};
