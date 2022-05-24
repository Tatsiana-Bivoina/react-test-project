import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import store from '../../../redux/store/configureStore';
import { InputEmail } from './InputEmail';

const mockOnChange = jest.fn();
const value = '';
const error = undefined;

const ReduxWrapper = (children: React.ReactNode) => <Provider store={store}>{children}</Provider>;

describe('InputEmail', () => {
  test('renders InputEmail component', () => {
    render(ReduxWrapper(<InputEmail onChange={mockOnChange} value={value} error={error} />));
    const input = screen.getByLabelText('Photographer email:');

    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'email');
  });

  test('toggle focus on element', () => {
    render(ReduxWrapper(<InputEmail onChange={mockOnChange} value={value} error={error} />));
    const input = screen.getByLabelText('Photographer email:');

    userEvent.click(input);
    expect(input).toHaveFocus();
    input.blur();
    expect(input).not.toHaveFocus();
  });

  test('change value of element', () => {
    render(ReduxWrapper(<InputEmail onChange={mockOnChange} value={value} error={error} />));
    const input = screen.getByLabelText('Photographer email:');

    expect(input).toHaveDisplayValue('');
    fireEvent.change(input, {
      target: {
        value: 'tanya.urainbow@mail.ru',
      },
    });
    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });

  test('exist error message when input is empty', () => {
    const error = {
      type: '',
      ref: undefined,
      types: undefined,
      message: 'Required field',
    };
    const value = '';
    render(ReduxWrapper(<InputEmail onChange={mockOnChange} value={value} error={error} />));
    const errorSpan = screen.queryByText('Required field');
    expect(errorSpan).toBeInTheDocument();
  });

  test('exist error message when input value is invalid', () => {
    const error = {
      type: '',
      ref: undefined,
      types: undefined,
      message: '',
    };
    const value = 'test.example@mail';
    render(ReduxWrapper(<InputEmail onChange={mockOnChange} value={value} error={error} />));
    const errorSpan = screen.queryByText('Incorrect data entered');
    expect(errorSpan).toBeInTheDocument();
  });

  test('no error message exist', () => {
    render(ReduxWrapper(<InputEmail onChange={mockOnChange} value={value} error={error} />));
    const errorSpan = screen.queryByText('Incorrect data entered');
    expect(errorSpan).not.toBeInTheDocument();
  });
});
