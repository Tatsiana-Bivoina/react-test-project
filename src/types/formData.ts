import { FieldError, UseFormRegister } from 'react-hook-form';

export type FormValues = {
  categorySelect: string;
  checkbox: string;
  date: string;
  email: string;
  firstName: string;
  gender: string;
  inputFile: string;
  lastName: string;
};

export interface FormFieldProps {
  onChange: (value: string) => void;
  value: string;
  error?: FieldError | undefined;
}

export interface UncontroledFieldProps {
  register: UseFormRegister<FormValues>;
  errors?: {
    [x: string]: FieldError | undefined;
  };
  setImageSrc?: React.Dispatch<React.SetStateAction<string>>;
}

export type SearchFormValues = {
  searchValue: string;
  selectPerPage: string;
  page: string;
  orientation: string;
  size: string;
  color: string;
};
