import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Checkbox } from '../checkbox/Checkbox';
import { InputDate } from '../input-date/InputDate';
import { InputFile } from '../input-file/InputFile';
import { InputGender } from '../input-gender/InputGender';
import { InputName } from '../input-name/InputName';
import { InputEmail } from '../input-email/InputEmail';
import { CategorySelect } from '../select-category/CategorySelect';
import { InputSurname } from '../input-surname/InputSurname';
import { FormValues } from '../../../types/formData';
import { CreateFormType, FormCardsType } from '../../../types/reduxStateTypes';
import { RootDispatch } from '../../../redux/store/configureStore';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../../redux/reducers/info-form-page/createFormReducer';
import { ResponsePhotoData } from '../../../types/apiData';
import { createCard } from '../../../service/formService';
import { RootState } from '../../../redux/reducers/combineReducers';
import { changeFormCards } from '../../../redux/reducers/info-form-page/formCardsReducer';
import './form.scss';

const formValuesDefault: CreateFormType = {
  firstName: '',
  lastName: '',
  email: '',
  date: '',
  categorySelect: 'Nature',
  file: '',
  checkbox: 'false',
  gender: 'Male',
};

export const Form = () => {
  const [imageSrc, setImageSrc] = useState<string>('');
  const dispatch: RootDispatch = useDispatch();
  const createForm = useSelector<RootState, CreateFormType>((state) => state.createForm);
  const formCards = useSelector<RootState, FormCardsType>((state) => state.formCards);

  const {
    register,
    formState: { errors, isDirty },
    handleSubmit,
    reset,
    control,
  } = useForm<FormValues, FormValues>();

  const regExp = /([А-ЯЁA-Z]{1})([а-яёa-z]{2,15})/g;

  const resetForm = () => {
    dispatch(actions.changeFirstName(''));
    dispatch(actions.changeLastName(''));
    dispatch(actions.changeEmail(''));
    dispatch(actions.changeDate(''));
    dispatch(actions.changeCategorySelect('Nature'));
    dispatch(actions.changeFile(''));
    dispatch(actions.changeCheckbox('false'));
    dispatch(actions.changeGender('Male'));
    reset(formValuesDefault);
  };

  const onSubmit = handleSubmit((data) => {
    data.inputFile = imageSrc;
    const card: ResponsePhotoData = createCard(data, formCards.formCards.length);
    dispatch(changeFormCards(card));
    resetForm();
  });

  return (
    <form data-testid="info-form" className="info-form" onSubmit={onSubmit}>
      <div className="input-text-container">
        <Controller
          control={control}
          name="firstName"
          defaultValue={createForm.firstName}
          rules={{
            required: 'Required field',
            minLength: {
              value: 3,
              message: 'Minimum 3 characters',
            },
            pattern: regExp,
          }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <InputName onChange={onChange} value={value} error={error} />
          )}
        />
        <Controller
          control={control}
          name="lastName"
          defaultValue={createForm.lastName}
          rules={{
            required: 'Required field',
            minLength: {
              value: 3,
              message: 'Minimum 3 characters',
            },
            pattern: regExp,
          }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <InputSurname onChange={onChange} value={value} error={error} />
          )}
        />
      </div>
      <div className="input-text-container">
        <Controller
          control={control}
          name="email"
          defaultValue={createForm.email}
          rules={{
            required: 'Required field',
            pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g,
          }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <InputEmail onChange={onChange} value={value} error={error} />
          )}
        />
        <Controller
          control={control}
          name="date"
          defaultValue={createForm.date}
          rules={{
            required: 'Required field',
          }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <InputDate onChange={onChange} value={value} error={error} />
          )}
        />
      </div>
      <InputGender register={register} />
      <Controller
        control={control}
        name="categorySelect"
        defaultValue={createForm.categorySelect}
        render={({ field: { onChange, value } }) => (
          <CategorySelect onChange={onChange} value={value} />
        )}
      />
      <InputFile register={register} errors={errors} setImageSrc={setImageSrc} />
      <Controller
        control={control}
        name="checkbox"
        defaultValue={createForm.checkbox}
        render={({ field: { onChange, value } }) => <Checkbox onChange={onChange} value={value} />}
      />
      <div className="submit-container">
        <button
          data-testid="form-field"
          type="submit"
          disabled={!isDirty || Object.keys(errors).length !== 0}
        >
          Create card
        </button>
      </div>
    </form>
  );
};
