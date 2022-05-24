import { useDispatch } from 'react-redux';
import { changeCategorySelect } from '../../../redux/reducers/info-form-page/createFormReducer';
import { RootDispatch } from '../../../redux/store/configureStore';
import { FormFieldProps } from '../../../types/formData';

type Props = Readonly<FormFieldProps>;

export const CategorySelect = ({ onChange, value }: Props) => {
  const dispatch: RootDispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(changeCategorySelect(event?.target.value));
    onChange(event?.target.value);
  };

  return (
    <div className="select-container">
      <label>
        Select photo category:
        <select
          data-testid="form-field"
          role={'select'}
          onChange={(event) => handleChange(event)}
          value={value}
        >
          <option role={'select-item'} value="Nature">
            Nature
          </option>
          <option role={'select-item'} value="Animals">
            Animals
          </option>
          <option role={'select-item'} value="People">
            People
          </option>
          <option role={'select-item'} value="Cars">
            Cars
          </option>
          <option role={'select-item'} value="Others">
            Others
          </option>
        </select>
      </label>
    </div>
  );
};
