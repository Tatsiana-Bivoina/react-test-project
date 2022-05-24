import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import store from '../../../redux/store/configureStore';
import { Checkbox } from './Checkbox';

const mockOnChange = jest.fn();
const value = 'false';

const ReduxWrapper = (children: React.ReactNode) => <Provider store={store}>{children}</Provider>;

describe('Checkbox', () => {
  test('renders Checkbox component', () => {
    render(ReduxWrapper(<Checkbox onChange={mockOnChange} value={value} />));
    const input = screen.getByLabelText('Access for all users');

    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'checkbox');
    expect(input).not.toBeChecked();
  });

  test('toggle element by selecting checkbox', () => {
    render(ReduxWrapper(<Checkbox onChange={mockOnChange} value={value} />));
    const input = screen.getByLabelText('Access for all users');

    userEvent.click(input);
    expect(input).toBeChecked();

    userEvent.click(input);
    expect(input).not.toBeChecked();
  });
});
