import { useDispatch } from 'react-redux';
import { changeLastName } from '../../../redux/reducers/info-form-page/createFormReducer';
import { RootDispatch } from '../../../redux/store/configureStore';
import { FormFieldProps } from '../../../types/formData';

type Props = Readonly<FormFieldProps>;

export const InputSurname = ({ onChange, value, error }: Props) => {
  const dispatch: RootDispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeLastName(event?.target.value));
    onChange(event?.target.value);
  };

  return (
    <label className="last-name-input">
      Photographer surname:
      <input
        data-testid="form-field"
        type="text"
        value={value}
        onChange={(event) => handleChange(event)}
      />
      {error && <span className="error-text">{error.message || 'Incorrect data entered'}</span>}
    </label>
  );
};
