import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getLocalStorageSearchValue } from '../../../controller/homeController';
import { SearchFormValuesType } from '../../../types/reduxStateTypes';

export const searchFormInitial: SearchFormValuesType = {
  searchValue: getLocalStorageSearchValue('search-value') ?? 'Nature',
  selectPerPage: '20',
  color: '',
  orientation: '',
  page: '1',
  size: '',
};

const searchFormReducer = createSlice({
  name: 'searchForm',
  initialState: searchFormInitial,
  reducers: {
    changeSearch(state, action: PayloadAction<string>) {
      localStorage.setItem('search-value', action.payload);
      state.searchValue = action.payload;
    },
    changeSelectPerPage(state, action: PayloadAction<string>) {
      state.selectPerPage = action.payload;
    },
    changePage(state, action: PayloadAction<string>) {
      state.page = action.payload;
    },
    changeOrientation(state, action: PayloadAction<string>) {
      state.orientation = action.payload;
    },
    changeSize(state, action: PayloadAction<string>) {
      state.size = action.payload;
    },
    changeColor(state, action: PayloadAction<string>) {
      state.color = action.payload;
    },
  },
});

export const {
  changeSearch,
  changeSelectPerPage,
  changePage,
  changeOrientation,
  changeSize,
  changeColor,
} = searchFormReducer.actions;
export default searchFormReducer.reducer;
