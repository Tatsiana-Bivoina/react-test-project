import { ResponsePhotoData } from '../types/apiData';
import { FormValues } from '../types/formData';

export const createCard = (data: FormValues, id: number): ResponsePhotoData => {
  const emptyData: ResponsePhotoData = {
    id: 0,
    width: 0,
    height: 0,
    url: '',
    photographer: '',
    photographer_url: '',
    photographer_id: 0,
    avg_color: '',
    src: {
      original: '',
      large2x: '',
      large: '',
      medium: '',
      small: '',
      portrait: '',
      landscape: '',
      tiny: '',
    },
    liked: true,
    alt: '',
    dateAdded: '',
    category: 'Nature',
    accessForAll: 'false',
    gender: 'Male',
  };
  emptyData.id = id;
  emptyData.photographer_id = id;
  emptyData.photographer = `${data.firstName} ${data.lastName}`;
  emptyData.photographer_url = data.email;
  emptyData.category = data.categorySelect;
  emptyData.dateAdded = data.date;
  emptyData.accessForAll = data.checkbox;
  emptyData.src.medium = data.inputFile;
  emptyData.gender = data.gender;
  return emptyData;
};
