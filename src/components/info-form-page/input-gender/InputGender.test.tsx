import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../../redux/store/configureStore';
import { InputGender } from './InputGender';

const register = jest.fn();

const ReduxWrapper = (children: React.ReactNode) => <Provider store={store}>{children}</Provider>;

describe('InputGender', () => {
  test('renders InputGender component', () => {
    render(ReduxWrapper(<InputGender register={register} />));
    const male = screen.getByLabelText('Male');
    const female = screen.getByLabelText('Female');

    expect(male).toBeInTheDocument();
    expect(female).toBeInTheDocument();
    expect(male).toHaveAttribute('type', 'radio');
    expect(female).toHaveAttribute('type', 'radio');
    expect(male).toBeChecked();
    expect(female).not.toBeChecked();
  });
});
