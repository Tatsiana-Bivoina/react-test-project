import { useDispatch } from 'react-redux';
import { changeFile } from '../../../redux/reducers/info-form-page/createFormReducer';
import { RootDispatch } from '../../../redux/store/configureStore';
import { UncontroledFieldProps } from '../../../types/formData';

type Props = Readonly<UncontroledFieldProps>;

export const InputFile = ({ setImageSrc, register, errors }: Props) => {
  const dispatch: RootDispatch = useDispatch();

  const onChangeValue = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (event.target.files && setImageSrc) {
      const src = URL.createObjectURL(new Blob([event.target.files[0]]));
      setImageSrc(src);
      dispatch(changeFile(src));
    }
  };

  return (
    <label>
      <input
        data-testid="form-field"
        type="file"
        accept=".png, .jpg, .jpeg"
        placeholder="choose file"
        defaultValue={''}
        {...register('inputFile', {
          required: 'This field is required',
          onChange: (event: React.ChangeEvent<HTMLInputElement>) => onChangeValue(event),
        })}
      />
      {errors?.inputFile && <span className="error-text">{errors?.inputFile.message}</span>}
    </label>
  );
};
