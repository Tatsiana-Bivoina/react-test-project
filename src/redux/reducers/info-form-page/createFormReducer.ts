import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CreateFormType } from '../../../types/reduxStateTypes';

export const createFormInitial: CreateFormType = {
  firstName: '',
  lastName: '',
  email: '',
  date: '',
  categorySelect: 'Nature',
  file: '',
  checkbox: 'false',
  gender: 'Male',
};

const createFormReducer = createSlice({
  name: 'createForm',
  initialState: createFormInitial,
  reducers: {
    changeFirstName(state, action: PayloadAction<string>) {
      state.firstName = action.payload;
    },
    changeLastName(state, action: PayloadAction<string>) {
      state.lastName = action.payload;
    },
    changeEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
    changeDate(state, action: PayloadAction<string>) {
      state.date = action.payload;
    },
    changeCategorySelect(state, action: PayloadAction<string>) {
      state.categorySelect = action.payload;
    },
    changeFile(state, action: PayloadAction<string>) {
      state.file = action.payload;
    },
    changeCheckbox(state, action: PayloadAction<string>) {
      state.checkbox = action.payload;
    },
    changeGender(state, action: PayloadAction<string>) {
      state.gender = action.payload;
    },
  },
});

export const {
  changeFirstName,
  changeLastName,
  changeEmail,
  changeDate,
  changeCategorySelect,
  changeFile,
  changeCheckbox,
  changeGender,
} = createFormReducer.actions;
export default createFormReducer.reducer;
