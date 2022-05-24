import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import store from '../../../redux/store/configureStore';
import { InputDate } from './InputDate';

const mockOnChange = jest.fn();
const value = '';
const error = undefined;

const ReduxWrapper = (children: React.ReactNode) => <Provider store={store}>{children}</Provider>;

describe('InputDate', () => {
  test('renders InputDate component', () => {
    render(ReduxWrapper(<InputDate onChange={mockOnChange} value={value} error={error} />));
    const input = screen.getByLabelText('Date of creation:');

    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'date');
  });

  test('toggle focus on element', () => {
    render(ReduxWrapper(<InputDate onChange={mockOnChange} value={value} error={error} />));
    const input = screen.getByLabelText('Date of creation:');

    userEvent.click(input);
    expect(input).toHaveFocus();
    input.blur();
    expect(input).not.toHaveFocus();
  });

  test('change value of element', () => {
    render(ReduxWrapper(<InputDate onChange={mockOnChange} value={value} error={error} />));
    const input = screen.getByLabelText('Date of creation:');

    expect(input).toHaveDisplayValue('');
    fireEvent.change(input, {
      target: {
        value: '2018-01-01',
      },
    });
    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });

  test('exist props error message', () => {
    const error = {
      type: '',
      ref: undefined,
      types: undefined,
      message: 'Required field',
    };
    const value = '';
    render(ReduxWrapper(<InputDate onChange={mockOnChange} value={value} error={error} />));
    const errorSpan = screen.queryByText('Required field');
    expect(errorSpan).toBeInTheDocument();
  });

  test('exist error message', () => {
    const error = {
      type: '',
      ref: undefined,
      types: undefined,
      message: '',
    };
    const value = '01-01-2018';
    render(ReduxWrapper(<InputDate onChange={mockOnChange} value={value} error={error} />));
    const errorSpan = screen.queryByText('Incorrect data entered');
    expect(errorSpan).toBeInTheDocument();
  });

  test('no error message exist', () => {
    render(ReduxWrapper(<InputDate onChange={mockOnChange} value={value} error={error} />));
    const errorSpan = screen.queryByText('Incorrect data entered');
    expect(errorSpan).not.toBeInTheDocument();
  });
});
