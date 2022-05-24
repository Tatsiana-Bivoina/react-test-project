import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import store from '../../../redux/store/configureStore';
import { InputFile } from './InputFile';

const setImageSrc = jest.fn();
const errors = {};
const register = jest.fn();

const ReduxWrapper = (children: React.ReactNode) => <Provider store={store}>{children}</Provider>;

describe('InputFile', () => {
  test('renders InputFile component', () => {
    render(
      ReduxWrapper(<InputFile register={register} errors={errors} setImageSrc={setImageSrc} />)
    );
    const input = screen.getByPlaceholderText('choose file');

    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'file');
  });

  test('upload file', () => {
    const file = new File(['hello'], 'hello.png', {
      type: 'image/png',
    });
    render(
      ReduxWrapper(<InputFile register={register} errors={errors} setImageSrc={setImageSrc} />)
    );
    const input: HTMLInputElement = screen.getByPlaceholderText('choose file');
    userEvent.upload(input, file);
    if (input.files) {
      expect(input.files[0]).toStrictEqual(file);
      expect(input.files.item(0)).toStrictEqual(file);
      expect(input.files).toHaveLength(1);
    }
  });
});
