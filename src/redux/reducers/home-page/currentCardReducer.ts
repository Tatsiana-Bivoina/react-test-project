import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ResponsePhotoData } from '../../../types/apiData';

export const defaultCard: ResponsePhotoData = {
  id: 0,
  width: 0,
  height: 0,
  url: '',
  photographer: '',
  photographer_url: '',
  photographer_id: 0,
  avg_color: '',
  src: {
    original: '',
    large2x: '',
    large: '',
    medium: '',
    small: '',
    portrait: '',
    landscape: '',
    tiny: '',
  },
  liked: true,
  alt: '',
  dateAdded: '',
  category: 'Nature',
  accessForAll: 'false',
  gender: 'Male',
};

export const currentCardInitial: ResponsePhotoData = defaultCard;

const currentCardReducer = createSlice({
  name: 'currentCard',
  initialState: currentCardInitial,
  reducers: {
    changeCurrentCardData(state, action: PayloadAction<ResponsePhotoData>) {
      localStorage.setItem('current-card', JSON.stringify(action.payload));
      state = Object.assign(state, action.payload);
    },
  },
});

export const { changeCurrentCardData } = currentCardReducer.actions;
export default currentCardReducer.reducer;
