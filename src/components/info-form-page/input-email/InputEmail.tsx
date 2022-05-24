import { useDispatch } from 'react-redux';
import { changeEmail } from '../../../redux/reducers/info-form-page/createFormReducer';
import { RootDispatch } from '../../../redux/store/configureStore';
import { FormFieldProps } from '../../../types/formData';

type Props = Readonly<FormFieldProps>;

export const InputEmail = ({ onChange, value, error }: Props) => {
  const dispatch: RootDispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeEmail(event?.target.value));
    onChange(event?.target.value);
  };

  return (
    <label className="email-label">
      Photographer email:
      <input
        data-testid="form-field"
        type="email"
        value={value}
        onChange={(event) => handleChange(event)}
      />
      {error && <span className="error-text">{error.message || 'Incorrect data entered'}</span>}
    </label>
  );
};
