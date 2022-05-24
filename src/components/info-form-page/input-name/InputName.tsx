import { useDispatch } from 'react-redux';
import { changeFirstName } from '../../../redux/reducers/info-form-page/createFormReducer';
import { RootDispatch } from '../../../redux/store/configureStore';
import { FormFieldProps } from '../../../types/formData';

type Props = Readonly<FormFieldProps>;

export const InputName = ({ onChange, value, error }: Props) => {
  const dispatch: RootDispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeFirstName(event?.target.value));
    onChange(event?.target.value);
  };

  return (
    <label className="first-name-label">
      Photographer name:
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
