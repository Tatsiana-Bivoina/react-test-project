import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ResponseSearchPhotoData } from '../../../types/apiData';
import { CardsValuesType } from '../../../types/reduxStateTypes';
import { getPhotoData } from '../../actions/getPhotoDataRedux';

export const cardsInitial: CardsValuesType = {
  cardsData: [],
  isLoading: false,
  error: '',
};

const cardsReducer = createSlice({
  name: 'cards',
  initialState: cardsInitial,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPhotoData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      getPhotoData.fulfilled,
      (state: CardsValuesType, action: PayloadAction<ResponseSearchPhotoData>) => {
        state.cardsData = action.payload.photos;
        state.isLoading = false;
        state.error = '';
      }
    );
    builder.addCase(getPhotoData.rejected, (state, action) => {
      state.isLoading = false;
      if (action.payload instanceof Error) {
        state.error = action.payload.message;
        state.cardsData = [];
      }
    });
  },
});

export default cardsReducer.reducer;
