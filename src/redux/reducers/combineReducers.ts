import { combineReducers } from '@reduxjs/toolkit';
import searchFormReducer from './home-page/searchFormReducer';
import cardsReducer from './home-page/cardsReducer';
import currentCardReducer from './home-page/currentCardReducer';
import createFormReducer from './info-form-page/createFormReducer';
import formCardsReducer from './info-form-page/formCardsReducer';

export const rootReducer = combineReducers({
  searchForm: searchFormReducer,
  cards: cardsReducer,
  currentCard: currentCardReducer,
  createForm: createFormReducer,
  formCards: formCardsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
