import { useDispatch } from 'react-redux';
import { changeGender } from '../../../redux/reducers/info-form-page/createFormReducer';
import { RootDispatch } from '../../../redux/store/configureStore';
import { UncontroledFieldProps } from '../../../types/formData';

type Props = Readonly<UncontroledFieldProps>;

export const InputGender = ({ register }: Props) => {
  const dispatch: RootDispatch = useDispatch();

  return (
    <>
      <div className="radio-container">
        <input
          data-testid="form-field"
          id="genderMale"
          type="radio"
          defaultValue={'Male'}
          defaultChecked={true}
          {...register('gender', {
            onChange: (event) => dispatch(changeGender(event?.target.value)),
          })}
        />
        <label htmlFor="genderMale">Male</label>
      </div>
      <div className="radio-container">
        <input
          data-testid="form-field"
          id="genderFemale"
          type="radio"
          defaultValue={'Female'}
          defaultChecked={false}
          {...register('gender', {
            onChange: (event) => dispatch(changeGender(event?.target.value)),
          })}
        />
        <label htmlFor="genderFemale">Female</label>
      </div>
    </>
  );
};
