import { createCard } from './formService';

const data = {
  categorySelect: 'People',
  checkbox: 'true',
  date: '2022-04-07',
  email: 'tanya.urainbow@mail.ru',
  firstName: 'Tatsiana',
  gender: 'Female',
  inputFile: 'C:\\fakepath\\Диплом проекта infourok.ru №НА91689987.jpg',
  lastName: 'Bivoina',
};

describe('formService', () => {
  test('createCard', () => {
    expect(createCard(data, 1)).toStrictEqual({
      id: 1,
      width: 0,
      height: 0,
      url: '',
      photographer: 'Tatsiana Bivoina',
      photographer_url: 'tanya.urainbow@mail.ru',
      photographer_id: 1,
      avg_color: '',
      src: {
        original: '',
        large2x: '',
        large: '',
        medium: 'C:\\fakepath\\Диплом проекта infourok.ru №НА91689987.jpg',
        small: '',
        portrait: '',
        landscape: '',
        tiny: '',
      },
      liked: true,
      alt: '',
      dateAdded: '2022-04-07',
      category: 'People',
      accessForAll: 'true',
      gender: 'Female',
    });
  });
});
