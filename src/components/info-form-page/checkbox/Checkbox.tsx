import { useDispatch } from 'react-redux';
import { changeCheckbox } from '../../../redux/reducers/info-form-page/createFormReducer';
import { RootDispatch } from '../../../redux/store/configureStore';
import { FormFieldProps } from '../../../types/formData';

type Props = Readonly<FormFieldProps>;

export const Checkbox = ({ onChange, value }: Props) => {
  const dispatch: RootDispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeCheckbox(event?.target.checked.toString()));
    onChange(event?.target.checked.toString());
  };

  return (
    <div className="checkbox-container">
      <input
        data-testid="form-field"
        id="checkbox"
        type="checkbox"
        value={value}
        onChange={(event) => handleChange(event)}
      />
      <label htmlFor="checkbox">Access for all users</label>
    </div>
  );
};
