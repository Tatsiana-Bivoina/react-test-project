import { ResponsePhotoData } from './apiData';

export type SearchFormValuesType = {
  searchValue: string;
  selectPerPage: string;
  color: string;
  orientation: string;
  page: string;
  size: string;
};

export type CardsValuesType = {
  cardsData: ResponsePhotoData[];
  isLoading: boolean;
  error: string | undefined;
};

export type FormCardsType = {
  formCards: ResponsePhotoData[];
};

export type CreateFormType = {
  firstName: string;
  lastName: string;
  email: string;
  date: string;
  categorySelect: string;
  file: string;
  checkbox: string;
  gender: string;
};
