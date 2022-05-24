import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import store from '../../../redux/store/configureStore';
import { CategorySelect } from './CategorySelect';

const mockOnChange = jest.fn();
const value = '';

const ReduxWrapper = (children: React.ReactNode) => <Provider store={store}>{children}</Provider>;

describe('CategorySelect', () => {
  test('renders InfoForm component', () => {
    render(ReduxWrapper(<CategorySelect onChange={mockOnChange} value={value} />));
    const label = screen.getByLabelText('Select photo category:');
    const options = screen.getAllByRole('select-item');

    expect(label).toBeInTheDocument();
    expect(options).toHaveLength(5);
  });

  test('Should correctly set default option', () => {
    render(ReduxWrapper(<CategorySelect onChange={mockOnChange} value={value} />));
    const select = screen.getByRole('select');

    expect(select).toHaveDisplayValue('Nature');
  });

  test('should allow user to change category', () => {
    render(ReduxWrapper(<CategorySelect onChange={mockOnChange} value={value} />));
    userEvent.selectOptions(screen.getByRole('select'), screen.getByText('Animals'));

    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });
});
