import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ResponsePhotoData } from '../../../types/apiData';
import { FormCardsType } from '../../../types/reduxStateTypes';

export const formCardsInitial: FormCardsType = {
  formCards: [],
};

const formCardsReducer = createSlice({
  name: 'formCards',
  initialState: formCardsInitial,
  reducers: {
    changeFormCards(state, action: PayloadAction<ResponsePhotoData>) {
      state.formCards.push(action.payload);
    },
  },
});

export const { changeFormCards } = formCardsReducer.actions;
export default formCardsReducer.reducer;
