import { useDispatch } from 'react-redux';
import { changeDate } from '../../../redux/reducers/info-form-page/createFormReducer';
import { RootDispatch } from '../../../redux/store/configureStore';
import { FormFieldProps } from '../../../types/formData';

type Props = Readonly<FormFieldProps>;

export const InputDate = ({ onChange, value, error }: Props) => {
  const dispatch: RootDispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeDate(event?.target.value));
    onChange(event?.target.value);
  };

  return (
    <label className="date-label">
      Date of creation:
      <input
        data-testid="form-field"
        type="date"
        max={new Date().toLocaleDateString('en-ca')}
        value={value}
        onChange={(event) => handleChange(event)}
      />
      {error && <span className="error-text">{error.message || 'Incorrect data entered'}</span>}
    </label>
  );
};
