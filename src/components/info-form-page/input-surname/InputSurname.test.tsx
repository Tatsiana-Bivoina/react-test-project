import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import store from '../../../redux/store/configureStore';
import { InputSurname } from './InputSurname';

const mockOnChange = jest.fn();
const value = '';
const error = undefined;

const ReduxWrapper = (children: React.ReactNode) => <Provider store={store}>{children}</Provider>;

describe('InputSurname', () => {
  test('renders InputSurname component', () => {
    render(ReduxWrapper(<InputSurname onChange={mockOnChange} value={value} error={error} />));

    const input = screen.getByLabelText('Photographer surname:');

    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'text');
  });

  test('toggle focus on element', () => {
    render(ReduxWrapper(<InputSurname onChange={mockOnChange} value={value} error={error} />));
    const input = screen.getByLabelText('Photographer surname:');

    userEvent.click(input);
    expect(input).toHaveFocus();
    input.blur();
    expect(input).not.toHaveFocus();
  });

  test('change value of element', () => {
    render(ReduxWrapper(<InputSurname onChange={mockOnChange} value={value} error={error} />));
    const input = screen.getByLabelText('Photographer surname:');

    expect(input).toHaveDisplayValue('');
    fireEvent.change(input, {
      target: {
        value: 'Tom',
      },
    });
    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });

  test('exist props error message', () => {
    const error = {
      type: '',
      ref: undefined,
      types: undefined,
      message: 'Minimum 3 characters',
    };
    const value = 'St';
    render(ReduxWrapper(<InputSurname onChange={mockOnChange} value={value} error={error} />));
    const errorSpan = screen.queryByText('Minimum 3 characters');
    expect(errorSpan).toBeInTheDocument();
  });

  test('exist error message', () => {
    const error = {
      type: '',
      ref: undefined,
      types: undefined,
      message: '',
    };
    const value = 'St';
    render(ReduxWrapper(<InputSurname onChange={mockOnChange} value={value} error={error} />));
    const errorSpan = screen.queryByText('Incorrect data entered');
    expect(errorSpan).toBeInTheDocument();
  });

  test('no error message exist', () => {
    render(ReduxWrapper(<InputSurname onChange={mockOnChange} value={value} error={error} />));
    const errorSpan = screen.queryByText('Incorrect data entered');
    expect(errorSpan).not.toBeInTheDocument();
  });
});
